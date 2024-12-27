import { Link, useNavigate } from "react-router-dom";
import useCates from "../../hooks/useCates";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { postArticle } from "../../api/articleAPI";
// 1. 초기 상태 설정
// useState를 통해 게시글의 제목, 내용, 작성자 정보를 관리
// useCates와 useAuth를 통해 카테고리 및 사용자 인증 정보를 초기화
// 2. 입력 값 변경
// changeHandler가 호출되어 사용자 입력을 상태에 반영
// 3. 폼 제출
// submitHandler가 호출되어 입력된 게시글 데이터를 서버로 전송
// 서버 응답에 따라 성공 여부를 확인하고 페이지 이동
// 4. 로그인 확인
// useEffect로 로그인 여부를 확인하고, 미로그인 시 로그인 페이지로 이동

export default function Write() {
  // 카테고리 값을 가져옴
  const [cate1, cate2] = useCates();
  // 사용자 인증 정보를 관리하는 커스텀 훅
  // {현재 로그인한 사용자의 이름, 사용자 인증에 필요한 JWT 토큰, 페이지 이동을 위한 React Router함수}
  const { username, accessToken, navigate } = useAuth();

  // prettier-ignore
  // article에 있는 값을 상태 변경 ( 초기상태 )
  const [article, setArticle] = useState({
                                  cate: cate2,
                                  title: "",
                                  content: "",
                                  writer: username,
                                });

  // 사용자가 입력한 값을 article 상태에 반영
  const changeHandler = (e) => {
    e.preventDefault();
    // e.target.name : 변경된 입력 필드의 이름(title 또는 content)
    // e,target.value : 사용자가 입력한 값
    // setArticle : 기존 상태를 복사한 뒤, 특정 필드(name)의 값을 업데이트
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // article : 현재 상태에 저장된 게시글 데이터
    // accessToken : 인증 토큰
    const result = await postArticle(article, accessToken);
    console.log("result : " + result);

    if (result) {
      alert("글 작성 했습니다.");
      navigate("/board/list?cate1=" + cate1 + "&cate2=" + cate2);
    }
  };

  // 컴포넌트가 렌더링될 때와 특정 상태나 속성이 변경될 때 원하는 동작을 수행할 수 있도록 함
  // 컴포넌트가 화면에 나타날 때 useEffect 내부의 함수가 실행됨
  useEffect(() => {
    if (!username) {
      alert("로그인을 하셔야 합니다.");
      navigate("/user/login");
      // <StrictMode> 때문에 2번 실행됨
      return;
    }
  }, []);

  return (
    <section className="write">
      <h1>글쓰기</h1>
      {/* 폼 제출 */}
      <form onSubmit={submitHandler}>
        <table border="0">
          <tbody>
            <tr>
              <th>제목</th>
              <td>
                <input
                  type="text"
                  name="title"
                  placeholder="제목을 입력하세요."
                  value={article.title}
                  onChange={changeHandler}
                />
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                <textarea
                  name="content"
                  value={article.content}
                  onChange={changeHandler}
                ></textarea>
              </td>
            </tr>
            <tr>
              <th>파일</th>
              <td>
                <p>최대 2개 파일 첨부 가능, 각 파일당 최대 10MB까지 가능</p>
                <input type="file" name="file1" />
                <input type="file" name="file2" />
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <Link
            to={`/board/list?cate1=${cate1}&cate2=${cate2}`}
            className="btn btnCancel"
          >
            취소
          </Link>
          <input type="submit" value="작성완료" className="btn btnComplete" />
        </div>
      </form>
    </section>
  );
}
