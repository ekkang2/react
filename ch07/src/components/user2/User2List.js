import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 사용자 목록 패치함수
const fetchUsers = async () => {
  const response = await axios.get("http://localhost:8080/ch09/user2");
  return response.data;
};

// 사용자 삭제 함수
const deleteUser = async (user) => {
  const response = await axios.delete(
    `http://localhost:8080/ch09/user2/${user.uid}`
  );
  return response.data;
};

export default function User2List() {
  const navigate = useNavigate();
  //const [users, setUsers] = useState([]);

  // react-query 사용자 훅
  const queryClient = useQueryClient();

  // react-query 조회 query 함수 정의
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // react-query 삭제 mutation 함수 정의
  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  console.log(users);

  const modifyMove = (user) => {
    // 쿼리 파라미터 전송
    navigate(`/user2/modify?uid=${user.uid}`);
  };

  const deleteProc = (user) => {
    deleteMutation.mutate(user);
  };

  return (
    <div className="User2List">
      <span>User2 목록</span>

      <table border={1}>
        <tr>
          <th>아이디</th>
          <th>이름</th>
          <th>생년월일</th>
          <th>나이</th>
          <th>휴대폰</th>
          <th>관리</th>
        </tr>

        {users?.map((user, index) => (
          <tr key={user.uid}>
            <td>{user.uid}</td>
            <td>{user.name}</td>
            <td>{user.birth}</td>
            <td>{user.age}</td>
            <td>{user.hp}</td>
            <td>
              <button onClick={() => modifyMove(user)}>수정</button>
              <button onClick={() => deleteProc(user)}>삭제</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
