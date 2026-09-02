import Link from "next/link";
import PriorityBadge from "@/components/PriorityBadge";
import type { Priority } from "@/lib/priority";

const cases: {
  id: string;
  subject: string;
  customer: string;
  priority: Priority;
  status: string;
  statusColor: string;
  owner: string;
  activity: string;
}[] = [
  {
    id: "ARQ-C2042",
    subject: "Delayed delivery with repeated missed updates",
    customer: "Sarah Johnson",
    priority: "Urgent",
    status: "Needs Attention",
    statusColor: "#D9534F",
    owner: "Unassigned",
    activity: "10 minutes ago",
  },
  {
    id: "ARQ-C2038",
    subject: "Account update requiring specialist review",
    customer: "Michael Brown",
    priority: "High",
    status: "In Progress",
    statusColor: "#2F80ED",
    owner: "Daniel",
    activity: "35 minutes ago",
  },
  {
    id: "ARQ-C2031",
    subject: "Repeated billing issue requiring investigation",
    customer: "Ada Okafor",
    priority: "Medium",
    status: "Pending",
    statusColor: "#E0A800",
    owner: "Grace",
    activity: "1 hour ago",
  },
  {
    id: "ARQ-C2027",
    subject: "Subscription cancellation follow-through",
    customer: "James Wilson",
    priority: "Low",
    status: "Resolved",
    statusColor: "#27AE60",
    owner: "Daniel",
    activity: "Yesterday",
  },
];

function StatusBadge({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  return (
    <span
      style={{
        color,
        fontWeight: "bold",
        fontSize: "13px",
      }}
    >
      ● {label}
    </span>
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

      <p
        style={{
          color: "#5B6472",
          marginBottom: 0,
        }}
      >
        {label}
      </p>
    </div>
  );
}

export default function CasesPage() {
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
      <p
        style={{
          color: "#F2994A",
          fontWeight: "bold",
          fontSize: "13px",
        }}
      >
        CUSTOMER RESOLUTION
      </p>

      <h1>Cases</h1>

      <p style={{ color: "#5B6472" }}>
        Manage customer issues that require investigation, ownership,
        coordination, or follow-through.
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
          gap: "14px",
          margin: "28px 0",
        }}
      >
        <Stat number="12" label="Active cases" />
        <Stat number="4" label="Needs attention" color="#D9534F" />
        <Stat number="5" label="In progress" color="#2F80ED" />
        <Stat number="2" label="Pending" color="#E0A800" />
        <Stat number="1" label="Resolved today" color="#27AE60" />
      </section>

      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "18px",
          }}
        >
          <div>
            <h2 style={{ marginBottom: "5px" }}>
              Active cases
            </h2>

            <p style={{ color: "#5B6472", marginTop: 0 }}>
              Issues requiring structured follow-through.
            </p>
          </div>

          <Link
            href="/Cases/Create"
            style={{
              background: "#F2994A",
              color: "#FFFFFF",
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: "8px",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            + Create Case
          </Link>
        </div>

        <div style={{ display: "grid", gap: "14px" }}>
          {cases.map((caseItem) => (
            <article
              key={caseItem.id}
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
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ maxWidth: "650px" }}>
                  <small style={{ color: "#7A8494" }}>
                    {caseItem.id}
                  </small>

                  <h3
                    style={{
                      marginTop: "6px",
                      marginBottom: "8px",
                    }}
                  >
                    {caseItem.subject}
                  </h3>

                  <p
                    style={{
                      color: "#5B6472",
                      marginBottom: 0,
                    }}
                  >
                    Customer: {caseItem.customer}
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gap: "8px",
                    minWidth: "150px",
                  }}
                >
                  <PriorityBadge priority={caseItem.priority} />

                  <StatusBadge
                    label={caseItem.status}
                    color={caseItem.statusColor}
                  />
                </div>
              </div>

              <div
                style={{
                  borderTop: "1px solid #E4E1D8",
                  marginTop: "18px",
                  paddingTop: "14px",
                  display: "flex",
                  gap: "24px",
                  flexWrap: "wrap",
                  color: "#5B6472",
                  fontSize: "14px",
                }}
              >
                <span>Owner: {caseItem.owner}</span>

                <span>
                  Last activity: {caseItem.activity}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}