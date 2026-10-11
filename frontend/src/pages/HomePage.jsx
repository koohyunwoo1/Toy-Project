import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

function HomePage() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return (
      <main>
        <h1>로그인이 필요합니다.</h1>
        <Link to="/login">로그인하기</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>Toy Project</h1>
      <p>안녕하세요, {user.username}님!</p>
      <p>{user.email}</p>
      <button onClick={handleLogout}>로그아웃</button>
    </main>
  );
}

export default HomePage;
