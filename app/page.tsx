import { BlogPosts } from "app/components/posts";
import Image from "next/image";

export default function Page() {
	return (
		<section className="flex-1">
			<div className="w-full flex flex-col items-center mb-16 relative overflow-hidden">
				<div className="absolute top-0 right-0 -z-10 opacity-5 transform rotate-12">
					<Image
						width={400}
						height={400}
						src="/svgs/pattern.svg"
						alt="Background pattern"
					/>
				</div>

				<Image
					priority
					height={80}
					width={300}
					className="mb-8"
					alt="Ramon Xavier Logo"
					src="/svgs/logo_name.svg"
				/>
				<p className="text-center text-black dark:text-white max-w-md mb-8">
					I'm a Software Developer with extensive experience in developing
					applications with React Native and websites with React.
				</p>
			</div>

			<div className="my-12">
				<h2 className="font-medium text-xl mb-6 text-theme-blue">
					Latest Articles
				</h2>
				<BlogPosts />
			</div>
		</section>
	);
}
