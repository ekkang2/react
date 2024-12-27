import axios from "axios";
import { ARTICLE_URI } from "./_URI";

// 게시글 데이터를 서버에 전달하는 역할
export const postArticle = async (data, token) => {
  try {
    // ARTICLE_URI로 POST 요청을 보냄 & data는 게시글 데이터로, React의 Write 컴포넌트에서 수집된 사용자 입력값
    const response = await axios.post(`${ARTICLE_URI}`, data, {
      // headers는 인증 정보를 포함함 (Bearer 토큰)
      headers: {
        Authorization: `Bearer ${token}`, // 인증 토큰
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// 특정 카테고리와 페이지 번호를 기반으로 게시글 목록을 서버에서 가져옴
export const getArticle = async (cate, pg) => {
  try {
    // ARTICLE_URI/{cate}/{pg} 형식으로 GET 요청을 보냄
    // 서버에서 카테고리와 페이지에 해당하는 게시글 목록을 반환
    const response = await axios.get(`${ARTICLE_URI}/${cate}/${pg}`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
