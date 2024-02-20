// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// 투표 링크를 저장할 배열
let votingLinks = [];

// JSON 형식의 요청 본문을 파싱하기 위한 미들웨어 설정
app.use(bodyParser.json());

// 모든 투표 링크 조회
app.get('/voting-links', (req, res) => {
    res.json(votingLinks);
});

// 투표 링크 생성
app.post('/voting-links', (req, res) => {
    const { link } = req.body;
    if (!link) {
        return res.status(400).json({ error: '투표 링크를 제공해야 합니다.' });
    }
    votingLinks.push(link);
    res.status(201).json({ message: '투표 링크가 생성되었습니다.' });
});

app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
