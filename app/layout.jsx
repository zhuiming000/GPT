export const metadata = {
  title: "AI 八字测算",
  description: "最专业的 AI 生辰八字命理平台",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}