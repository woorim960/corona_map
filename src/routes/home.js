/* routes/home.js */

// 라우팅을 위한 기본 모듈 포함
const express = require("express");

const router = express.Router();

// '/' 루트 경로 요청시 main 뷰 렌더링
router.get("/", (req, res) => {
  res.render("home");
});

// 모듈 내보내기
module.exports = router;
