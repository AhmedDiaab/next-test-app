export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>Blogs</div>
      <section>{children}</section>
    </div>
  )
}