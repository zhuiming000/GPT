export async function POST(req) {
  const { name, birthday } = await req.json();

  const prompt = `请根据以下生日推算八字并进行详细命理解读：
姓名：${name || '未知'}
生日：${birthday}`;

  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();

  return Response.json({ result: data.choices?.[0]?.message?.content || "分析失败" });
}