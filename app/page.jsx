import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center p-8">
      <h1 className="text-4xl font-bold mt-10 mb-4">AI 生辰八字测算</h1>
      <p className="text-gray-600 max-w-xl">
        输入你的生辰八字（或公历生日），AI 将生成最专业的命理分析。
      </p>

      <Link
        href="/bazi"
        className="mt-10 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        开始测算
      </Link>
    </main>
  );
}