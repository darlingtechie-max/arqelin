const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Support Manager",
    team: "Customer Support",
    tickets: 4,
    cases: 2,
    status: "Online",
  },
  {
    name: "Daniel Okoro",
    role: "Support Agent",
    team: "Customer Support",
    tickets: 6,
    cases: 3,
    status: "Online",
  },
  {
    name: "Grace Williams",
    role: "Billing Specialist",
    team: "Billing",
    tickets: 3,
    cases: 4,
    status: "Away",
  },
];

const groups = [
  {
    name: "Customer Support",
    members: 8,
    description: "Handles general customer questions and requests.",
  },
  {
    name: "Billing",
    members: 4,
    description: "Handles payments, refunds, and account billing issues.",
  },
  {
    name: "Escalations",
    members: 3,
    description: "Handles complex and high-priority customer issues.",
  },
];

export default function TeamPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F7F5F0",
        color: "#17233D",
        padding: "28px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <p style={{ color: "#F2994A", fontWeight: "bold", fontSize: "13px" }}>
        WORKSPACE
      </p>

      <h1>Team</h1>

      <p style={{ color: "#5B6472" }}>
        Manage your teams, members, roles, and workload.
      </p>

      {/* Overview */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "14px",
          margin: "28px 0",
        }}
      >
        <Stat number="15" label="Team members" />
        <Stat number="12" label="Available now" color="#27AE60" />
        <Stat number="3" label="Support groups" color="#F2994A" />
      </section>

      {/* Team Members */}
      <section style={{ marginTop: "30px" }}>
        <h2>Team members</h2>

        <p style={{ color: "#5B6472" }}>
          See who is responsible for customer work across your workspace.
        </p>

        <div style={{ display: "grid", gap: "14px", marginTop: "18px" }}>
          {teamMembers.map((member) => (
            <article
              key={member.name}
              style={{
                background: "#FFFFFF",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #E4E1D8",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <h3 style={{ margin: 0 }}>{member.name}</h3>

                  <p style={{ color: "#5B6472", marginBottom: "6px" }}>
                    {member.role} · {member.team}
                  </p>

                  <strong
                    style={{
                      color:
                        member.status === "Online"
                          ? "#27AE60"
                          : "#F2994A",
                    }}
                  >
                    ● {member.status}
                  </strong>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    color: "#5B6472",
                  }}
                >
                  <span>
                    <strong style={{ color: "#17233D" }}>
                      {member.tickets}
                    </strong>{" "}
                    Tickets
                  </span>

                  <span>
                    <strong style={{ color: "#17233D" }}>
                      {member.cases}
                    </strong>{" "}
                    Cases
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Groups */}
      <section style={{ marginTop: "35px" }}>
        <h2>Support groups</h2>

        <p style={{ color: "#5B6472" }}>
          Organize work by team or specialization.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "14px",
            marginTop: "18px",
          }}
        >
          {groups.map((group) => (
            <article
              key={group.name}
              style={{
                background: "#FFFFFF",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #E4E1D8",
              }}
            >
              <h3>{group.name}</h3>

              <p style={{ color: "#5B6472" }}>{group.description}</p>

              <strong style={{ color: "#F2994A" }}>
                {group.members} members
              </strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Stat({
  number,
  label,
  color,
}: {
  number: string;
  label: string;
  color?: string;
}) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        padding: "18px",
        borderRadius: "12px",
        border: "1px solid #E4E1D8",
      }}
    >
      <strong
        style={{
          fontSize: "26px",
          color: color || "#17233D",
        }}
      >
        {number}
      </strong>

      <p style={{ color: "#5B6472", marginBottom: 0 }}>{label}</p>
    </div>
  );
}