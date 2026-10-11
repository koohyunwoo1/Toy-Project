import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import LandingPage from "./LandingPage";

function HomePage() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // 로그인 전에는 랜딩 페이지 표시
  if (!user) {
    return <LandingPage />;
  }

  // 로그인 후에는 사용자 홈 화면 표시
  return (
    <main className="member-home">
      <header className="member-header">
        <Link to="/" className="fintech-logo">
          <span className="fintech-logo-mark">F</span>
          Fintech Lab
        </Link>

        <button className="member-logout" onClick={handleLogout}>
          로그아웃
        </button>
      </header>

      <section className="member-welcome">
        <span className="member-eyebrow">MY WORKSPACE</span>
        <h1>
          반갑습니다, <span>{user.username}</span>님.
        </h1>
        <p>새로운 금융 경험을 함께 만들어 보세요.</p>

        <div className="member-profile">
          <div className="member-avatar">
            {user.username.charAt(0).toUpperCase()}
          </div>

          <div>
            <strong>{user.username}</strong>
            <p>{user.email}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
