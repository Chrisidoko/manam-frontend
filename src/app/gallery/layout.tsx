export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mx-auto mt-6 max-w-full">{children}</main>;
}
