import axios from "axios";
import { useEffect, useState } from "react";

export default function User1List() {
  const [users, setUsers] = useState([]);

  // 컴포넌트 생명주기를 제어하는 훅
  useEffect(() => {
    axios
      .get("http://localhost:8080/ch09/user1")
      .then((response) => {
        console.log(response.data);

        // 서버에서 받아온 데이터로 상태 업데이트
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // 의존성(반응형) 배열을 빈배열로 선언하면 컴포넌트가 처음 마운트 될때 한번만 실행

  return (
    <div className="User1List">
      <span>User1 목록</span>

      <table border={1}>
        <tr>
          <th>아이디</th>
          <th>이름</th>
          <th>생년월일</th>
          <th>나이</th>
          <th>휴대폰</th>
          <th>관리</th>
        </tr>

        {users.map((user, index) => (
          <tr key={user.uid}>
            <td>{user.uid}</td>
            <td>{user.name}</td>
            <td>{user.birth}</td>
            <td>{user.age}</td>
            <td>{user.hp}</td>
            <td>
              <button onClick={null}>수정</button>
              <button onClick={null}>삭제</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
