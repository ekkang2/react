import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  // 페이지 이동을 처리하는 React Router Hook
  const navigate = useNavigate();
  // 사용자 인증 및 정보 관리와 관련된 상태를 저장하고 관리하는 Slice
  const userSlice = useSelector((state) => state.userSlice);
  const username = userSlice.username;
  const accessToken = userSlice.accessToken;

  return { username, accessToken, navigate };
};

export default useAuth;
