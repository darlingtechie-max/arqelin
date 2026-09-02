import Link from "next/link";
import PriorityBadge from "@/components/PriorityBadge";
import type { Priority } from "@/lib/priority";

const caseData: {
  id: string;
  subject: string;
  customer: string;
  email: string;
  priority: Priority;
  status: string;
  statusColor: string;
  owner: string;
  team: string;
  category: string;
  followUp: string;
  linkedTicket: string;
  tags: string[];
} = {
  id: "ARQ-C2042",
  subject: "Delivery arrived with a missing item requiring follow-through",
  customer: "Ada Okafor",
  email: "ada@example.com",
  priority: "Urgent",
  status: "Needs Attention",
  statusColor: "#D9534F",
  owner: "Unassigned",
  team: "Customer Support",
  category: "Delivery",
  followUp: "Tomorrow",
  linkedTicket: "ARQ-1043",
  tags: ["delivery", "missing-item", "follow-up"],
};

const activities = [
  {
    person: "Ada Okafor",
    text: "My delivery arrived, but one of the items I paid for is missing.",
    time: "10:12 AM",
  },
  {
    person: "Support Team",
    text: "We've confirmed the request and are checking the delivery record with the operations team.",
    time: "10:24 AM",
  },
  {
    person: "Arqelin AI",
    text: "This issue requires structured follow-through because resolving the missing item may require coordination with another team.",
    time: "10:28 AM",
  },
];

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        padding: "14px 0",
        borderBottom: "1px solid #E4E1D8",
      }}
    >
      <small
        style={{
          color: "#7A8494",
          display: "block",
          marginBottom: "4px",
        }}
      >
        {label}
      </small>

      <strong>{value}</strong>
    </div>
  );
}

export default function CaseDetailsPage() {
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
      <Link
        href="/Cases"
        style={{
          color: "#F2994A",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        ← Back to Cases
      </Link>

      <div style={{ marginTop: "24px" }}>
        <p
          style={{
            color: "#F2994A",
            fontWeight: "bold",
            fontSize: "13px",
          }}
        >
          CASE {caseData.id}
        </p>

        <h1>{caseData.subject}</h1>

        <p style={{ color: "#5B6472" }}>
          Structured workspace for investigation, ownership, and
          customer follow-through.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "18px",
          alignItems: "center",
        }}
      >
        <PriorityBadge priority={caseData.priority} />

        <span
          style={{
            color: caseData.statusColor,
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          ● {caseData.status}
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 320px",
          gap: "20px",
          marginTop: "28px",
        }}
      >
        <section
          style={{
            background: "#FFFFFF",
            padding: "22px",
            borderRadius: "12px",
            border: "1px solid #E4E1D8",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Case activity</h2>

          {activities.map((activity) => (
            <div
              key={`${activity.person}-${activity.time}`}
              style={{
                borderBottom: "1px solid #E4E1D8",
                padding: "18px 0",
              }}
            >
              <strong>{activity.person}</strong>

              <small
                style={{
                  color: "#7A8494",
                  marginLeft: "10px",
                }}
              >
                {activity.time}
              </small>

              <p
                style={{
                  color: "#5B6472",
                  marginBottom: 0,
                }}
              >
                {activity.text}
              </p>
            </div>
          ))}

          <div style={{ marginTop: "22px" }}>
            <button
              style={{
                background: "#17233D",
                color: "#FFFFFF",
                border: "none",
                padding: "12px 18px",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Add update
            </button>
          </div>
        </section>

        <aside
          style={{
            display: "grid",
            gap: "20px",
            alignContent: "start",
          }}
        >
          <section
            style={{
              background: "#FFFFFF",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #E4E1D8",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Case details</h2>

            <InfoRow label="Customer" value={caseData.customer} />

            <InfoRow label="Email" value={caseData.email} />

            <InfoRow label="Category" value={caseData.category} />

            <InfoRow label="Owner" value={caseData.owner} />

            <InfoRow label="Team" value={caseData.team} />

            <InfoRow label="Follow-up" value={caseData.followUp} />
          </section>

          <section
            style={{
              background: "#FFFFFF",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #E4E1D8",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Linked ticket</h2>

            <p style={{ color: "#5B6472" }}>
              This case was created from the original customer request.
            </p>

            <Link
              href="/Tickets/ARQ-1043"
              style={{
                color: "#F2994A",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              {caseData.linkedTicket} →
            </Link>
          </section>

          <section
            style={{
              background: "#F2F6FF",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #C9D8F2",
            }}
          >
            <p
              style={{
                color: "#2F80ED",
                fontWeight: "bold",
                marginTop: 0,
              }}
            >
              ✦ ARQELIN AI
            </p>

            <strong>Follow-through recommended</strong>

            <p
              style={{
                color: "#5B6472",
                marginBottom: 0,
              }}
            >
              This issue may require coordination across teams before the
              missing item can be properly resolved.
            </p>
          </section>

          <section
            style={{
              background: "#FFF8E8",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #F3D58B",
            }}
          >
            <p
              style={{
                color: "#B7791F",
                fontWeight: "bold",
                marginTop: 0,
              }}
            >
              PROMISE TRACKER
            </p>

            <strong>No active promise yet</strong>

            <p
              style={{
                color: "#6B5728",
                marginBottom: 0,
              }}
            >
              When a commitment is made to the customer, Arqelin will
              track the owner, deadline, and follow-through status here.
            </p>
          </section>

          <section
            style={{
              background: "#FFFFFF",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #E4E1D8",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Tags</h2>

            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {caseData.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#F1F3F5",
                    color: "#5B6472",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    fontSize: "13px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}