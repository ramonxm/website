export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Ramon Xavier</h1>
        <p>React Native - React | Frontend & Mobile Developer</p>
      </div>
      <div className="flex min-h-screen items-center justify-center gap-4">
        <button className="0 relative min-h-[50px] w-40 overflow-hidden border border-indigo-800 bg-white px-3 text-indigo-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full hover:before:bg-indigo-500">
          <span className="relative z-10">Contact me</span>
        </button>
      </div>
    </main>
  );
}
