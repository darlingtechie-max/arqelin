"use client";

import { useState } from "react";
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
  id: "ARQ-1043",
  subject: "Delivery arrived with a missing item",
  customer: "Ada Okafor",
  email: "ada@example.com",
  priority: "High",
  status: "Pending",
  statusColor: "#E0A800",
  category: "Delivery",
  agent: "Grace",
  team: "Customer Support",
  tags: ["delivery", "missing-item"],
};

const initialActivities = [
  {
    person: "Ada Okafor",
    text: "My delivery arrived, but one of the items I paid for is missing.",
    time: "10:12 AM",
  },
  {
    person: "Support Team",
    text: "We've received your request and are checking the delivery details.",
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
  const [activities, setActivities] = useState(initialActivities);
  const [isAddingReply, setIsAddingReply] = useState(false);
  const [newReply, setNewReply] = useState("");

  function handleSendReply() {
    const trimmedReply = newReply.trim();

    if (!trimmedReply) {
      return;
    }

    const now = new Date();

    const formattedTime = now.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

    setActivities([
      ...activities,
      {
        person: "Support Team",
        text: trimmedReply,
        time: formattedTime,
      },
    ]);

    setNewReply("");
    setIsAddingReply(false);
  }

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
              key={`${activity.person}-${activity.time}-${activity.text}`}
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

          {!isAddingReply ? (
            <div style={{ marginTop: "22px" }}>
              <button
                onClick={() => setIsAddingReply(true)}
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
                Add Reply
              </button>
            </div>
          ) : (
            <div
              style={{
                marginTop: "22px",
                padding: "18px",
                background: "#F7F5F0",
                borderRadius: "10px",
                border: "1px solid #E4E1D8",
              }}
            >
              <label
                htmlFor="ticket-reply"
                style={{
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Write a reply
              </label>

              <textarea
                id="ticket-reply"
                value={newReply}
                onChange={(event) => setNewReply(event.target.value)}
                placeholder="Write your reply to the customer..."
                rows={5}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #C9C5BA",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "14px",
                  boxSizing: "border-box",
                  resize: "vertical",
                }}
              />

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "12px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={handleSendReply}
                  style={{
                    background: "#F2994A",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Send Reply
                </button>

                <button
                  onClick={() => {
                    setNewReply("");
                    setIsAddingReply(false);
                  }}
                  style={{
                    background: "#FFFFFF",
                    color: "#5B6472",
                    border: "1px solid #C9C5BA",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
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
              ✦ ARQELIN AI
            </p>

            <strong>Investigation check</strong>

            <p
              style={{
                color: "#5B6472",
                marginBottom: 0,
              }}
            >
              This ticket may require follow-through if resolving the missing
              item requires coordination beyond a simple customer response.
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