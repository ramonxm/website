import { createLoader } from "simple-functional-loader";
import _estimateReadTime from "reading-time";

const estimateReadTime = createLoader(function (src) {
  const readTime = _estimateReadTime(src).text;
  const withTime = [
    src,
    `export const metadata_readingTime = "${readTime}";`,
  ].join("\n");

  return this.callback(null, withTime);
});

const mdxLoader =
  (pluginOptions = {}) =>
  (nextConfig = {}) => {
    const extension = pluginOptions.extension || /\.mdx$/;

    const loader = nextConfig?.experimental?.mdxRs
      ? {
          loader: require.resolve("@next/mdx/mdx-rs-loader.js"),
          options: {
            providerImportSource: "next-mdx-import-source-file",
            ...pluginOptions.options,
          },
        }
      : {
          loader: require.resolve("@mdx-js/loader"),
          options: {
            providerImportSource: "next-mdx-import-source-file",
            ...pluginOptions.options,
          },
        };

    return {
      ...nextConfig,
      webpack(config, options) {
        config.resolve.alias["next-mdx-import-source-file"] = [
          "private-next-root-dir/src/mdx-components",
          "private-next-root-dir/mdx-components",
          "@mdx-js/react",
        ];

        const mdx = [
          nextConfig?.experimental?.mdxRs
            ? undefined
            : options.defaultLoaders.babel,
          loader,
          estimateReadTime,
        ].filter(Boolean);

        const mdxRule = {
          test: extension,
          use: mdx,
        };

        if (config.module && config.module.rules) {
          config.module.rules.push(mdxRule);
        } else {
          config.module = { rules: [mdxRule] };
        }

        if (typeof nextConfig.webpack === "function") {
          return nextConfig.webpack(config, options);
        }

        return config;
      },
    };
  };

export default mdxLoader;
