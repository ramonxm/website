import { Layout } from "@/components/layouts/Layout";
import { Title } from "@/components/modules/Title";
import Image from "next/image";

export default function WhoAmI() {
  return (
    <Layout>
      <div className="mx-auto max-w-5xl md:flex-col items-center justify-center dark:bg-background mt-8">
        <Title>Who Am I</Title>
        <div className="flex flex-col md:flex-row gap-6 md:items-center mt-8">
          <Image
            priority
            width={298}
            height={398}
            alt="Profile"
            loading="eager"
            src="/images/profile.jpg"
            className="border-none shadow-lg align-middle rounded-sm"
          />
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
            Experienced Mobile and Web Developer specializing in React Native,
            React, and NodeJS, with a focus on API development. Dedicated to
            excellence since 2016, I hold a degree in IT Technician and Computer
            Engineering from CEFET/RJ.
            <br />
            <br />
            As a Web Development mentor at Estartando Devs, I contribute to the
            growth of emerging talents. Since 2022, I&apos;ve been sharing my
            knowledge as a teacher, positively impacting the next generation of
            developers.
            <br />
            <br />
            Co-author of &quot;Debugando sua Carreira,&quot; available on
            Amazon, I currently work as a Software Developer at Globo,
            specializing in internal products for drama and artistic areas. My
            versatile skills include:
            <br />
            <br />
            Mobile and Web Development (React, React Native, Typescript).
            Efficient API creation using NodeJS. Extensive AWS experience (S3,
            Cloudfront, DynamoDB, ECS, EC2). Passionate about technology,
            education, and community development, I actively contribute to
            advancing the careers of developers in Brazil and beyond. Committed
            to continuous learning, I believe it is the key to success in our
            ever-evolving technological landscape.
          </p>
        </div>
        <div className="mt-9">
          <h2 className="text-2xl font-bold text-white">Career</h2>
          <div className="flex flex-col gap-3 max-w-md text-[#A1A1AA] text-base">
            <h3 className="font-bold text-white mt-5">Software Engineer</h3>
            <p>
              <a
                className="underline"
                href="https://globo.com/"
                target="_blank"
                title="Globo"
              >
                Globo
              </a>
              <span> - Remote </span>
            </p>
            <p>
              <span>jan 2023</span>
              <span> – </span>
              <span>moment</span>
              <span> • </span>
              <span>1 year and 3 months</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 max-w-md text-[#A1A1AA] text-base">
            <h3 className="font-bold text-white mt-5">Developer Instructor</h3>
            <p>
              <a
                className="underline"
                href="https://estartandodevs.com.br"
                target="_blank"
                title="Estartando Devs"
              >
                Estartando Devs
              </a>
              <span> - Remote </span>
            </p>
            <p>
              <span>abr 2022</span>
              <span> – </span>
              <span>moment</span>
              <span> • </span>
              <span>2 years</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 max-w-md text-[#A1A1AA] text-base">
            <h3 className="font-bold text-white mt-5">Frontend Developer</h3>
            <p>
              <a
                className="underline"
                href="https://stormgroup.com.br/"
                target="_blank"
                title="StormGroup"
              >
                Storm Group
              </a>
              <span> - Remote</span>
            </p>
            <p>
              <span>mai 2021</span>
              <span> – </span>
              <span>jan 2023</span>
              <span> • </span>
              <span>1 year 10 months</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
