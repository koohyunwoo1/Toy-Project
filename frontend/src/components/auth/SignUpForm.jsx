import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";

function SignUpForm() {
  const signup = useAuthStore((state) => state.signup);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signup({ username, email, password });

      alert("회원가입 성공!");
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "회원가입에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>회원가입</h1>

      <div>
        <label htmlFor="username">아이디</label>
        <input
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          maxLength={50}
          required
        />
      </div>

      <div>
        <label htmlFor="signup-email">이메일</label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="signup-password">비밀번호</label>
        <input
          id="signup-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength={8}
          required
        />
      </div>

      {error && <p>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "가입 중..." : "회원가입"}
      </button>

      <p>
        이미 계정이 있나요? <Link to="/login">로그인</Link>
      </p>
    </form>
  );
}

export default SignUpForm;
