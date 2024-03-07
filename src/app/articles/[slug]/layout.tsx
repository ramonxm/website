export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-5xl flex-col items-center justify-center dark:bg-background mt-8">
      {children}
    </article>
  );
}
