export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* هنا بنعرض محتوى الصفحة بس من غير ما نكرر الهيدر والفوتر */}
      {children}
    </>
  );
}