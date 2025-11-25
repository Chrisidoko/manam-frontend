export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* Main Content */}
      <main className="flex-1 pt-4 md:pt-0 ">{children}</main>
    </div>
  );
}
