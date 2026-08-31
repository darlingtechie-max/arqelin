export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F7F5F0",
        color: "#17233D",
        padding: "16px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          background: "#17233D",
          color: "#FFFFFF",
          padding: "22px",
          borderRadius: "18px",
        }}
      >
        <h1 style={{ margin: 0, letterSpacing: "1px" }}>ARQELIN</h1>
        <p style={{ marginBottom: 0, color: "#F2994A" }}>
          Customer resolution & follow-through
        </p>
      </header>

      <section style={{ marginTop: "28px" }}>
        <h2 style={{ marginBottom: "6px" }}>Good morning, there 👋🏽</h2>
        <p style={{ color: "#5B6472", marginTop: 0 }}>
          Here's what needs your attention today.
        </p>
      </section>

      <section
        style={{
          background: "#17233D",
          color: "#FFFFFF",
          padding: "20px",
          borderRadius: "16px",
          marginTop: "20px",
        }}
      >
        <p style={{ color: "#F2994A", marginTop: 0 }}>
          ✦ ARQELIN AI PRIORITY BRIEF
        </p>

        <h2>2 issues need attention now.</h2>

        <p style={{ marginBottom: 0 }}>
          One customer promise is overdue and two follow-ups are at risk of
          being missed today.
        </p>
      </section>

      <h2 style={{ marginTop: "32px" }}>Critical attention</h2>

      <div
        style={{
          background: "#FFFFFF",
          padding: "18px",
          borderRadius: "14px",
          borderLeft: "5px solid #F2994A",
          marginBottom: "12px",
        }}
      >
        <strong>⚠ Promise overdue</strong>
        <p style={{ color: "#5B6472", marginBottom: 0 }}>
          Delivery update promised yesterday at 4:00 PM.
        </p>
      </div>

      <div
        style={{
          background: "#FFFFFF",
          padding: "18px",
          borderRadius: "14px",
          borderLeft: "5px solid #2C4570",
        }}
      >
        <strong>Follow-up required</strong>
        <p style={{ color: "#5B6472", marginBottom: 0 }}>
          Customer has not received an update in 48 hours.
        </p>
      </div>

      <h2 style={{ marginTop: "32px" }}>Promise tracker</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #E4E1D8",
          }}
        >
          <strong>12</strong>
          <p>Open cases</p>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #E4E1D8",
          }}
        >
          <strong style={{ color: "#F2994A" }}>3</strong>
          <p>Needs attention</p>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #E4E1D8",
          }}
        >
          <strong>5</strong>
          <p>Due today</p>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #E4E1D8",
          }}
        >
          <strong style={{ color: "#F2994A" }}>1</strong>
          <p>Overdue</p>
        </div>
      </div>

      <h2 style={{ marginTop: "32px" }}>Today's follow-ups</h2>

      <div
        style={{
          background: "#FFFFFF",
          padding: "18px",
          borderRadius: "14px",
          border: "1px solid #E4E1D8",
          marginBottom: "12px",
        }}
      >
        <strong>Case #ARQ-1042</strong>
        <p>Follow up with Sarah about delayed delivery.</p>
        <span style={{ color: "#F2994A" }}>Due in 2 hours</span>
      </div>

      <div
        style={{
          background: "#FFFFFF",
          padding: "18px",
          borderRadius: "14px",
          border: "1px solid #E4E1D8",
        }}
      >
        <strong>Case #ARQ-1038</strong>
        <p>Send promised account update to Michael.</p>
        <span style={{ color: "#2C4570" }}>Follow-up today</span>
      </div>

      <h2 style={{ marginTop: "32px" }}>Arqelin AI recommends</h2>

      <div
        style={{
          background: "#FFFFFF",
          padding: "20px",
          borderRadius: "14px",
          border: "1px solid #E4E1D8",
          marginBottom: "30px",
        }}
      >
        <strong>Prioritize Case #ARQ-1042</strong>

        <p style={{ color: "#5B6472" }}>
          This customer has waited longer than expected and may be at risk of
          dissatisfaction.
        </p>

        <p style={{ color: "#2C4570", marginBottom: 0 }}>
          Recommended action: Send an update before the deadline.
        </p>
      </div>
    </main>
  );
}