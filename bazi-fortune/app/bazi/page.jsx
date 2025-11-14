'use client';
import { useState } from 'react';

export default function Bazi() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [result, setResult] = useState('');

  const onSubmit = async () => {
    if (!birthday) return alert("请输入出生日期");

    const res = await fetch('/api/bazi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, birthday })
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">八字测算</h1>

      <div className="space-y-4">
        <input
          placeholder="姓名（可不填）"
          className="w-full border p-3 rounded"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type="datetime-local"
          className="w-full border p-3 rounded"
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
        />

        <button
          onClick={onSubmit}
          className="w-full bg-black text-white p-3 rounded mt-4"
        >
          开始测算
        </button>
      </div>

      {result && (
        <div className="mt-6 p-4 border rounded bg-white shadow">
          <h2 className="font-bold mb-2">测算结果：</h2>
          <p className="whitespace-pre-line text-gray-700">{result}</p>
        </div>
      )}
    </main>
  );
}