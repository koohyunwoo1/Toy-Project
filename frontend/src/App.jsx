import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("서버 연결 중...");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API 요청 실패");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage("백엔드 연결 실패");
      });
  }, []);

  return (
    <main style={{ padding: "40px" }}>
      <h1>Toy Project</h1>
      <p>{message}</p>
    </main>
  );
}

export default App;
