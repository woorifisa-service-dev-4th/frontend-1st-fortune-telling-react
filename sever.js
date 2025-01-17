import express from 'express';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const app = express();
const port = 3000;

// app.use(express.static('dist'));
app.use(cors({
  origin: 'http://localhost:80', // React 앱의 주소
}));
app.use(express.json());
//
// app.get('/', (_, response) => {
//   response.sendFile('index.html');
// });

app.post('/chat', async (req, res) => {
  const {
    zodiac, year, luck, month, day,
  } = req.body;

  if (!zodiac || !year || !luck || !month || !day) {
    return res.status(400).send({ error: 'Message and year are required' });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: `너는 띠별 운세 전문가야. 나에 대한 정보를 가르쳐주면 그에 따른 ${luck}  알려줘.` },
        { role: 'user', content: `나는 ${year}년${month}월 ${day}일이 내생일이고 ${zodiac}띠야. 이것을 바탕으로 2025년 ${luck}를 말해줘.` },
      ],
      stream: true,
    });

    // const responseText = response.choices[0].message.content;
    for await (const chunk of response) {
      const content = chunk.choices[0]?.delta?.content || "";
      if (content.trim()&& content !== "null") {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();



    console.log(`${year}년 ${zodiac}띠 ${luck}`);

    // return res.status(200).send({ response: responseText });
  } catch (error) {
    console.error('오류 발생:', error.message);
    return res.status(500).send({ error: error.message });
  }
});
app.listen(port, () => {
  console.log(`Express 서버가 http://localhost:${port}에서 실행 중입니다.`);
});
