import { access, readFile } from "fs/promises";
import path from "node:path";

const POSTS_FOLDER = path.join(process.cwd(), "posts");

export async function readPostFile(slug: string) {
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`));

  try {
    await access(filePath);
  } catch (err) {
    return null;
  }

  const fileContent = await readFile(filePath, { encoding: "utf8" });
  return fileContent;
}
