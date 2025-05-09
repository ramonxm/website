import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Ramon Xavier
      </h1>
      <p className="mb-4">
        I am a Software Developer with extensive experience in developing applications with React Native and websites with React.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
