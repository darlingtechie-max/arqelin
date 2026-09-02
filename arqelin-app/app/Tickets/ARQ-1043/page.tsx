import Link from "next/link";
import PriorityBadge from "@/components/PriorityBadge";
import type { Priority } from "@/lib/priority";

const ticket: {
  id: string;
  subject: string;
  customer: string;
  email: string;
  priority: Priority;
  status: string;
  statusColor: string;
  category: string;
  agent: string;
  team: string;
  linkedCase: string;
  tags: string[];
} = {
  id: "ARQ-1043",
  subject: "Delivery arrived with a missing item",
  customer: "Ada Okafor",
  email: "ada@example.com",
  priority: "Urgent",
  status: "Open",
  statusColor: "#2F80ED",
  category: "Delivery",
  agent: "Unassigned",
  team: "Customer Support",
  linkedCase: "ARQ-C2042",
  tags: ["delivery", "missing-item", "urgent"],
};

const activities = [
  {
    person: "Ada Okafor",
    text: "My delivery arrived, but one of the items I paid for is missing.",
    time: "10:12 AM",
  },
  {
    person: "Support Team",
    text: "We've received your request and are checking the delivery record.",
    time: "10:24 AM",
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

export default function TicketDetailsPage() {
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
        href="/Tickets"
        style={{
          color: "#F2994A",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        ← Back to Tickets
      </Link>

      <div style={{ marginTop: "24px" }}>
        <p
          style={{
            color: "#F2994A",
            fontWeight: "bold",
            fontSize: "13px",
          }}
        >
          TICKET {ticket.id}
        </p>

        <h1>{ticket.subject}</h1>

        <p style={{ color: "#5B6472" }}>
          Customer request and resolution workspace.
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
        <PriorityBadge priority={ticket.priority} />

        <span
          style={{
            color: ticket.statusColor,
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          ● {ticket.status}
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
          <h2 style={{ marginTop: 0 }}>Conversation</h2>

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
              Add reply
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
            <h2 style={{ marginTop: 0 }}>Ticket details</h2>

            <InfoRow label="Customer" value={ticket.customer} />
            <InfoRow label="Email" value={ticket.email} />
            <InfoRow label="Category" value={ticket.category} />
            <InfoRow label="Agent" value={ticket.agent} />
            <InfoRow label="Team" value={ticket.team} />
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
              LINKED CASE
            </p>

            <p style={{ color: "#5B6472" }}>
              This ticket requires structured follow-through and has been
              converted into a Case.
            </p>

            <Link
              href="/Cases/ARQ-C2042"
              style={{
                color: "#2F80ED",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              View Case {ticket.linkedCase} →
            </Link>
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
              {ticket.tags.map((tag) => (
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