"use client";

import { useState } from "react";
import Link from "next/link";
import PrioritySelect from "@/components/PrioritySelect";
import type { Priority } from "@/lib/priority";

export default function CreateCasePage() {
  const [priority, setPriority] =
    useState<Priority>("Medium");

  const [submitted, setSubmitted] =
    useState(false);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setSubmitted(true);
  }

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #D8DCE3",
    boxSizing: "border-box" as const,
    fontSize: "14px",
    fontFamily: "Arial, sans-serif",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "7px",
    fontWeight: "bold",
    fontSize: "14px",
  };

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
          CUSTOMER RESOLUTION
        </p>

        <h1>Create Case</h1>

        <p style={{ color: "#5B6472" }}>
          Create a structured case for an issue that requires
          investigation, coordination, escalation, or follow-through.
        </p>
      </div>

      {submitted && (
        <div
          style={{
            background: "#EAF7EF",
            color: "#1E7A46",
            padding: "14px 16px",
            borderRadius: "8px",
            marginTop: "24px",
            border: "1px solid #B7E4C7",
          }}
        >
          Case draft created successfully. Permanent case creation
          will be connected when we add Arqelin's database.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "850px",
          marginTop: "28px",
          background: "#FFFFFF",
          padding: "24px",
          borderRadius: "14px",
          border: "1px solid #E4E1D8",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(2, minmax(0, 1fr))",
            gap: "20px",
          }}
        >
          <div>
            <label style={labelStyle}>
              Case subject
            </label>

            <input
              required
              placeholder="Briefly describe the issue"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>
              Customer name
            </label>

            <input
              required
              placeholder="Enter customer name"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>
              Customer email
            </label>

            <input
              type="email"
              placeholder="customer@example.com"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>
              Priority
            </label>

            <PrioritySelect
              value={priority}
              onChange={setPriority}
            />
          </div>

          <div>
            <label style={labelStyle}>
              Category
            </label>

            <select style={inputStyle}>
              <option value="">
                Select a category
              </option>
              <option>Billing & Payments</option>
              <option>Delivery</option>
              <option>Account</option>
              <option>Technical Issue</option>
              <option>Subscription</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>
              Case owner
            </label>

            <select style={inputStyle}>
              <option>Unassigned</option>
              <option>Daniel</option>
              <option>Grace</option>
              <option>Specialist Team</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>
              Team
            </label>

            <select style={inputStyle}>
              <option>Customer Support</option>
              <option>Billing Team</option>
              <option>Technical Support</option>
              <option>Operations</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>
              Follow-up date
            </label>

            <input
              type="date"
              style={inputStyle}
            />
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <label style={labelStyle}>
            Case description
          </label>

          <textarea
            required
            placeholder="Describe the issue, investigation needed, and any important customer context..."
            style={{
              ...inputStyle,
              minHeight: "150px",
              resize: "vertical",
            }}
          />
        </div>

        <div
          style={{
            marginTop: "28px",
            paddingTop: "20px",
            borderTop: "1px solid #E4E1D8",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <button
            type="submit"
            style={{
              background: "#F2994A",
              color: "#FFFFFF",
              border: "none",
              padding: "12px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Create Case
          </button>

          <Link
            href="/Cases"
            style={{
              padding: "12px 20px",
              borderRadius: "8px",
              border: "1px solid #D8DCE3",
              color: "#17233D",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Cancel
          </Link>
        </div>
      </form>

      <div
        style={{
          maxWidth: "850px",
          marginTop: "20px",
          background: "#FFF8E8",
          border: "1px solid #F3D58B",
          borderRadius: "12px",
          padding: "18px",
          color: "#6B5728",
        }}
      >
        <strong>Arqelin workflow note:</strong>

        <p style={{ marginBottom: 0 }}>
          Cases are for issues requiring structured ownership,
          investigation, coordination, escalation, or follow-through.
          Promise Tracker connections will be added to eligible cases
          later.
        </p>
      </div>
    </main>
  );
}