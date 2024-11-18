import { useState } from "react";

export default function User1Register() {
  const [user, setUser] = useState({
    uid: "",
    name: "",
    birth: "",
    hp: "",
    age: 0,
  });

  const changeHandler = (e) => {
    e.preventDefault();

    // 상태 업데이트
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    // Javascript 기본 fetch 함수로 데이터(상태) 전송
    fetch("http://localhost:8080/ch09/user1", {
      method: "POST",
      body: user,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="User1Register">
      <span>User1 등록</span>

      <form onSubmit={submitHandler}>
        <table border={1}>
          <tr>
            <td>아이디</td>
            <td>
              <input
                type="text"
                name="uid"
                value={user.uid}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>생년월일</td>
            <td>
              <input
                type="date"
                name="birth"
                value={user.birth}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>휴대폰</td>
            <td>
              <input
                type="text"
                name="hp"
                value={user.hp}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>나이</td>
            <td>
              <input
                type="number"
                name="age"
                value={user.age}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="right">
              <input type="submit" value={"등록하기"} />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
