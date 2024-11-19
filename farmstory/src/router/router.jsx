import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import LoginPage from "../pages/user/LoginPage";
import TermsPage from "../pages/user/TermsPage";
import RegisterPage from "../pages/user/RegisterPage";
import HelloPage from "../pages/introduction/HelloPage";
import DirectionPage from "../pages/introduction/DirectionPage";

// 라우터 정의
const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/introduction/hello", element: <HelloPage /> },
  { path: "/introduction/direction", element: <DirectionPage /> },
  { path: "/market/list", element: null },
  { path: "/croptalk/story", element: null },
  { path: "/croptalk/grow", element: null },
  { path: "/croptalk/school", element: null },
  { path: "/user/login", element: <LoginPage /> },
  { path: "/user/terms", element: <TermsPage /> },
  { path: "/user/register", element: <RegisterPage /> },
  { path: "/admin", element: null },
  { path: "/admin/product/register", element: null },
]);

// 라우터 내보내기
export default router;
