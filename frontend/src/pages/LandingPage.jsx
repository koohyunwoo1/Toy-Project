import { useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    label: "FINANCE, REIMAGINED",
    title: "금융의 다음을,",
    highlight: "함께 만들어갑니다.",
    description: "새로운 금융 경험을 고민하고,",
    subDescription: "기술로 실현하는 공간입니다.",
    badge: "SMART FINANCE",
    cardTitle: "더 나은 금융 경험",
    cardDescription: "작은 아이디어에서 시작되는 변화",
    metric: "01",
  },
  {
    label: "TECHNOLOGY MEETS FINANCE",
    title: "복잡한 금융을,",
    highlight: "더 간편하게.",
    description: "데이터와 기술을 연결해",
    subDescription: "사용자 중심의 서비스를 고민합니다.",
    badge: "SMART TECHNOLOGY",
    cardTitle: "기술로 연결하다",
    cardDescription: "데이터에서 새로운 가능성까지",
    metric: "02",
  },
  {
    label: "BUILT TOGETHER",
    title: "아이디어를 넘어,",
    highlight: "실제 서비스로.",
    description: "함께 배우고, 직접 개발하며",
    subDescription: "가능성을 하나씩 현실로 만들어 갑니다.",
    badge: "OUR PROJECT",
    cardTitle: "함께 만드는 미래",
    cardDescription: "오늘의 코드가 내일의 서비스로",
    metric: "03",
  },
];

function LandingPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  const moveSlide = (direction) => {
    setActiveIndex(
      (current) => (current + direction + slides.length) % slides.length,
    );
  };

  return (
    <main className="landing-page">
      <header className="landing-header">
        <Link to="/" className="fintech-logo">
          <span className="fintech-logo-mark">F</span>
          <span>Fintech Lab</span>
        </Link>

        <nav className="landing-nav">
          <a href="#about">서비스 소개</a>
          <a href="#technology">기술</a>
          <Link to="/login" className="landing-login">
            로그인
          </Link>
          <Link to="/signup" className="landing-signup">
            시작하기 <span>↗</span>
          </Link>
        </nav>
      </header>

      <section className="landing-hero" id="about">
        <div className="hero-copy" key={activeIndex}>
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            {slide.label}
          </div>

          <h1>
            {slide.title}
            <br />
            <span>{slide.highlight}</span>
          </h1>

          <p className="hero-description">
            {slide.description}
            <br />
            {slide.subDescription}
          </p>

          <div className="hero-buttons">
            <Link to="/signup" className="hero-primary-button">
              프로젝트 시작하기 <span>→</span>
            </Link>

            <Link to="/login" className="hero-text-button">
              이미 계정이 있어요
            </Link>
          </div>

          <div className="hero-trust-note">
            <span>✦</span>
            아이디어부터 구현까지, 함께하는 프로젝트
          </div>
        </div>

        <div className="hero-art" key={`art-${activeIndex}`}>
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />

          <div className="finance-dashboard">
            <div className="dashboard-top">
              <div>
                <span className="dashboard-caption">FINTECH LAB</span>
                <h2>{slide.cardTitle}</h2>
              </div>
              <span className="dashboard-menu">•••</span>
            </div>

            <div className="dashboard-balance">
              <span>FINANCIAL INSIGHT</span>
              <strong>Smart.</strong>
              <strong className="balance-highlight">Simple.</strong>
              <p>{slide.cardDescription}</p>
            </div>

            <div className="dashboard-chart">
              <div className="chart-heading">
                <span>DATA & INNOVATION</span>
                <span className="chart-period">OVERVIEW</span>
              </div>

              <svg
                className="chart-svg"
                viewBox="0 0 360 115"
                role="img"
                aria-label="상승하는 흐름을 표현한 장식용 그래프"
              >
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6875E8" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#6875E8" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <path
                  d="M0 95 C25 82, 38 88, 60 68 S95 79, 120 57 S160 70, 190 42 S225 56, 250 28 S300 40, 360 8 L360 115 L0 115 Z"
                  fill="url(#chartFill)"
                />

                <path
                  d="M0 95 C25 82, 38 88, 60 68 S95 79, 120 57 S160 70, 190 42 S225 56, 250 28 S300 40, 360 8"
                  fill="none"
                  stroke="#6875E8"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                <circle cx="360" cy="8" r="5" fill="#6875E8" />
              </svg>

              <div className="chart-footer">
                <span>IDEA</span>
                <span>DEVELOPMENT</span>
                <span>RESULT</span>
              </div>
            </div>

            <div className="dashboard-bottom">
              <div className="dashboard-mini-icon">✦</div>
              <div>
                <strong>{slide.badge}</strong>
                <p>Ideas into reality</p>
              </div>
              <span className="dashboard-number">{slide.metric}</span>
            </div>
          </div>

          <div className="floating-chip chip-top">
            <span className="chip-dot" />
            Data-driven ideas
          </div>

          <div className="floating-chip chip-bottom">
            <span>✦</span> Built together
          </div>
        </div>
      </section>

      <section className="landing-bottom" id="technology">
        <div className="slide-controls">
          <button
            type="button"
            className="slide-arrow"
            onClick={() => moveSlide(-1)}
            aria-label="이전 슬라이드"
          >
            ←
          </button>

          <div className="slide-indicators">
            {slides.map((item, index) => (
              <button
                type="button"
                key={item.metric}
                className={`slide-dot ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`${index + 1}번 슬라이드`}
                aria-current={activeIndex === index ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className="slide-arrow"
            onClick={() => moveSlide(1)}
            aria-label="다음 슬라이드"
          >
            →
          </button>

          <span className="slide-count">
            0{activeIndex + 1} <span>/ 0{slides.length}</span>
          </span>
        </div>

        <div className="landing-bottom-note">
          <span>FINTECH LAB</span>
          <span>IDEAS · TECHNOLOGY · PEOPLE</span>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
