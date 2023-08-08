// api.js 파일
import axios from "axios";

const api = axios.create({
  baseURL: "https://animore.co.kr/", // API 엔드포인트 주소
});

export default api;
