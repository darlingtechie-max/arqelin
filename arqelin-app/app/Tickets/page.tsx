import Link from "next/link";
import PriorityBadge from "@/components/PriorityBadge";
import type { Priority } from "@/lib/priority";

const tickets: {
  id: string;
  subject: string;
  customer: string;
  priority: Priority;
  status: string;
  statusColor: string;
  agent: string;
  activity: string;
}[] = [
  {
    id: "ARQ-1052",
    subject: "Payment was deducted but order was not confirmed",
    customer: "Sarah Johnson",
    priority: "Urgent",
    status: "Open",
    statusColor: "#2F80ED",
    agent: "Unassigned",
    activity: "10 minutes ago",
  },
  {
    id: "ARQ-1048",
    subject: "Unable to update account information",
    customer: "Michael Brown",
    priority: "Medium",
    status: "In Progress",
    statusColor: "#F2994A",
    agent: "Daniel",
    activity: "35 minutes ago",
  },
  {
    id: "ARQ-1043",
    subject: "Delivery arrived with a missing item",
    customer: "Ada Okafor",
    priority: "High",
    status: "Pending",
    statusColor: "#E0A800",
    agent: "Grace",
    activity: "1 hour ago",
  },
  {
    id: "ARQ-1039",
    subject: "Question about subscription renewal",
    customer: "James Wilson",
    priority: "Low",
    status: "Resolved",
    statusColor: "#27AE60",
    agent: "Daniel",
    activity: "Yesterday",
  },
];

function Badge({
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

      <p style={{ color: "#5B6472", marginBottom: 0 }}>
        {label}
      </p>
    </div>
  );
}

export default function TicketsPage() {
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
        CUSTOMER SUPPORT
      </p>

      <h1>Tickets</h1>

      <p style={{ color: "#5B6472" }}>
        Track, prioritize, and manage every customer request in one place.
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
          gap: "14px",
          margin: "28px 0",
        }}
      >
        <Stat number="24" label="Total tickets" />
        <Stat number="8" label="Open" color="#2F80ED" />
        <Stat number="6" label="In progress" color="#F2994A" />
        <Stat number="7" label="Resolved" color="#27AE60" />
        <Stat number="3" label="High priority" color="#D9534F" />
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
              All tickets
            </h2>

            <p style={{ color: "#5B6472", marginTop: 0 }}>
              View and manage customer requests.
            </p>
          </div>

          <Link
            href="/Tickets/Create"
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
            + Create Ticket
          </Link>
        </div>

        <div style={{ display: "grid", gap: "14px" }}>
          {tickets.map((ticket) => (
            <Link
              key={ticket.id}
              href={
                ticket.id === "ARQ-1052"
                  ? "/Tickets/ARQ-1052"
                  : "#"
              }
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor:
                  ticket.id === "ARQ-1052"
                    ? "pointer"
                    : "default",
              }}
            >
              <article
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
                      {ticket.id}
                    </small>

                    <h3
                      style={{
                        marginTop: "6px",
                        marginBottom: "8px",
                      }}
                    >
                      {ticket.subject}
                    </h3>

                    <p
                      style={{
                        color: "#5B6472",
                        marginBottom: 0,
                      }}
                    >
                      Customer: {ticket.customer}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: "8px",
                      minWidth: "140px",
                    }}
                  >
                    <PriorityBadge
                      priority={ticket.priority}
                    />

                    <Badge
                      label={ticket.status}
                      color={ticket.statusColor}
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
                  <span>
                    Agent: {ticket.agent}
                  </span>

                  <span>
                    Last activity: {ticket.activity}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}