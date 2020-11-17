// 기본 모듈 포함
const express = require("express"), // 웹 프레임워크
  bodyParser = require("body-parser");

// 기본 인스턴스 생성
const app = express(); // express를 사용하기 위한 인스턴스 생성

// 포트 설정
const PORT = process.env.PORT || 9700;

// 기본 앱 세팅
app.set("views", "./src/client/views"); // 뷰 엔진의 기본 경로 세팅
app.set("view engine", "ejs"); // 뷰 엔진은 ejs 사용
app.use(express.static(`${__dirname}/src/client/public`));
app.use(bodyParser.json()); // 클라이언트의 요청 데이터 중 json 객체를 파싱할 수 있게 하기 위함
app.use(bodyParser.urlencoded({ extended: true })); // body-parser의 기본 셋

// 라우팅
app.use("/", require("./src/routes/home"));

// 404 렌더링
app.get("*", (req, res) => {
  res.render("404");
});

// 서버 오픈
app.listen(PORT, () =>
  console.log(`서버가 ${PORT} 포트에서 정상 가동되었습니다.`)
);
