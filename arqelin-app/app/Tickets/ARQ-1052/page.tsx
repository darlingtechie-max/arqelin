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
  tags: string[];
} = {
  id: "ARQ-1052",
  subject: "Payment was deducted but order was not confirmed",
  customer: "Sarah Johnson",
  email: "sarah@example.com",
  priority: "Urgent",
  status: "Open",
  statusColor: "#2F80ED",
  category: "Billing & Payments",
  agent: "Unassigned",
  team: "Customer Support",
  tags: ["payment", "order", "urgent"],
};

const activities = [
  {
    person: "Sarah Johnson",
    text: "I was charged for my order but I haven't received an order confirmation.",
    time: "10:12 AM",
  },
  {
    person: "Support Team",
    text: "We've received your request and are checking the payment status.",
    time: "10:24 AM",
  },
];

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

      <div style={{ marginTop: "22px" }}>
        <p
          style={{
            color: "#F2994A",
            fontWeight: "bold",
            fontSize: "13px",
          }}
        >
          TICKET {ticket.id}
        </p>

        <h1 style={{ marginBottom: "8px" }}>
          {ticket.subject}
        </h1>

        <p style={{ color: "#5B6472", marginTop: 0 }}>
          Customer request and resolution workspace.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 300px",
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
              key={activity.time}
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
            <textarea
              placeholder="Write a reply..."
              style={{
                width: "100%",
                minHeight: "110px",
                boxSizing: "border-box",
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid #D8DCE3",
                fontFamily: "Arial, sans-serif",
                resize: "vertical",
              }}
            />

            <button
              style={{
                marginTop: "12px",
                background: "#F2994A",
                color: "#FFFFFF",
                border: "none",
                padding: "11px 18px",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Send Reply
            </button>
          </div>
        </section>

        <aside
          style={{
            display: "grid",
            gap: "16px",
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
            <h3 style={{ marginTop: 0 }}>Ticket details</h3>

            <div style={{ display: "grid", gap: "16px" }}>
              <div>
                <small style={{ color: "#7A8494" }}>Priority</small>

                <div style={{ marginTop: "6px" }}>
                  <PriorityBadge priority={ticket.priority} />
                </div>
              </div>

              <div>
                <small style={{ color: "#7A8494" }}>Status</small>

                <div
                  style={{
                    marginTop: "6px",
                    color: ticket.statusColor,
                    fontWeight: "bold",
                  }}
                >
                  ● {ticket.status}
                </div>
              </div>

              <div>
                <small style={{ color: "#7A8494" }}>Category</small>

                <p style={{ margin: "6px 0 0" }}>
                  {ticket.category}
                </p>
              </div>

              <div>
                <small style={{ color: "#7A8494" }}>Assigned agent</small>

                <p style={{ margin: "6px 0 0" }}>
                  {ticket.agent}
                </p>
              </div>

              <div>
                <small style={{ color: "#7A8494" }}>Team</small>

                <p style={{ margin: "6px 0 0" }}>
                  {ticket.team}
                </p>
              </div>
            </div>
          </section>

          <section
            style={{
              background: "#FFFFFF",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #E4E1D8",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Customer</h3>

            <strong>{ticket.customer}</strong>

            <p
              style={{
                color: "#5B6472",
                marginBottom: 0,
              }}
            >
              {ticket.email}
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
            <h3 style={{ marginTop: 0 }}>Tags</h3>

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
                    background: "#F7F5F0",
                    border: "1px solid #E4E1D8",
                    borderRadius: "20px",
                    padding: "6px 10px",
                    fontSize: "13px",
                    color: "#5B6472",
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