import { Link, useSearchParams } from "react-router-dom";
import useCates from "../../hooks/useCates";
import { useEffect, useState } from "react";
import { getArticle } from "../../api/articleAPI";
import Pagenation from "./Pagenation";

// 1. 상태 초기화
// initState로 상태를 초기화
// 2. URL 파라미터 읽기
// useSearchParams를 통해 URL에서 pg값을 가져옴
// 3. API 호출
// useEffect가 cate2나 pg값이 변경될 때마다 호출되어 게시글 목록을 서버에서 가져옴
// 4. 데이터 표시
// 받아온 데이터를 화면에 표시
// 5. 페이지네이션
// Pagenation 컴포넌트를 통해 페이지 이동을 처리

const initState = {
  dtoList: [],
  cate: "",
  pg: 1,
  size: 10,
  total: 0,
  startNo: 0,
  start: 0,
  end: 0,
  prev: false,
  next: false,
  type: null,
  keyword: null,
};

export default function List() {
  const [cate1, cate2] = useCates();
  const [data, setData] = useState(initState); // 상태 변수 'data'와 상태를 변경하는 'setData'

  const [searchParams] = useSearchParams(); // URL 파라미터에서 'pg' 값을 가져오기 위한 훅
  const pg = searchParams.get("pg") || 1;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticle(cate2, pg);
      console.log(data);

      setData(data); // 받아온 데이터를 상태로 설정
    };

    fetchData();
  }, [cate2, pg]); // cate2가 변경될때 마다 useEffect 실행

  return (
    <section className="list">
      <nav>
        <form action="#">
          <input
            type="text"
            name="search"
            placeholder="제목 키워드, 글쓴이 검색"
          />
          <input type="submit" value="검색" />
        </form>
      </nav>
      <h1>글목록</h1>
      <table border="0">
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>날짜</th>
          <th>조회</th>
        </tr>
        {data.dtoList.map((article, index) => (
          <tr key={index}>
            <td>{data.startNo - index}</td>
            <td>
              <Link to={`/board/view?cate1=${cate1}&cate2=${cate2}`}>
                {article.title}[{article.comment}]
              </Link>
            </td>
            <td>{article.writer}</td>
            <td>{article.regDate}</td>
            <td>{article.hit}</td>
          </tr>
        ))}
      </table>

      <Pagenation data={data} cate1={cate1} cate2={cate2} />

      <Link
        to={`/board/write?cate1=${cate1}&cate2=${cate2}`}
        className="btn btnWrite"
      >
        글쓰기
      </Link>
    </section>
  );
}
