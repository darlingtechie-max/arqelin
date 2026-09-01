"use client";

import { useState } from "react";

export default function CreateTicketPage() {
  const [created, setCreated] = useState(false);

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

      <h1>Create Ticket</h1>

      <p style={{ color: "#5B6472" }}>
        Create a customer request and route it to the right team.
      </p>

      <section
        style={{
          background: "#FFFFFF",
          border: "1px solid #E4E1D8",
          borderRadius: "12px",
          padding: "24px",
          marginTop: "28px",
          maxWidth: "850px",
        }}
      >
        <h2>Ticket information</h2>

        <div
          style={{
            display: "grid",
            gap: "18px",
            marginTop: "20px",
          }}
        >
          <Field
            label="Customer name"
            placeholder="e.g. Sarah Johnson"
          />

          <Field
            label="Customer email"
            placeholder="e.g. sarah@example.com"
            type="email"
          />

          <Field
            label="Subject"
            placeholder="Briefly describe the customer's issue"
          />

          <div>
            <label style={labelStyle}>Description</label>

            <textarea
              placeholder="Describe the customer's request or problem..."
              style={inputStyle}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(2, minmax(0, 1fr))",
              gap: "16px",
            }}
          >
            <SelectField
              label="Priority"
              options={[
                "Low",
                "Medium",
                "High",
                "Urgent",
              ]}
            />

            <SelectField
              label="Category"
              options={[
                "Billing & Payments",
                "Delivery",
                "Account Access",
                "Technical Issue",
                "Refund Request",
                "General Inquiry",
              ]}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(2, minmax(0, 1fr))",
              gap: "16px",
            }}
          >
            <SelectField
              label="Team"
              options={[
                "Customer Support",
                "Billing",
                "Technical Support",
                "Escalations",
              ]}
            />

            <SelectField
              label="Assignee"
              options={[
                "Unassigned",
                "Sarah Johnson",
                "Daniel Okoro",
                "Grace Williams",
              ]}
            />
          </div>

          <Field
            label="Tags"
            placeholder="e.g. payment, urgent, repeat-issue"
          />

          <div>
            <label style={labelStyle}>
              Internal note
            </label>

            <textarea
              placeholder="Optional note visible only to the support team..."
              style={inputStyle}
            />
          </div>

          <div
            style={{
              borderTop: "1px solid #E4E1D8",
              paddingTop: "20px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={() => setCreated(true)}
              style={{
                background: "#F2994A",
                color: "#FFFFFF",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              Create Ticket
            </button>

            <button
              type="button"
              style={{
                background: "#FFFFFF",
                color: "#17233D",
                border: "1px solid #D8DCE3",
                padding: "12px 20px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              Cancel
            </button>
          </div>

          {created && (
            <div
              style={{
                background: "#EAF7EF",
                border: "1px solid #27AE60",
                color: "#176B38",
                padding: "14px",
                borderRadius: "8px",
              }}
            >
              Ticket draft created successfully.
              <br />
              Permanent ticket creation will be connected
              when we add Arqelin's database.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
}

function SelectField({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>

      <select style={inputStyle} defaultValue="">
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

const labelStyle = {
  display: "block",
  fontWeight: "bold",
  fontSize: "14px",
  marginBottom: "7px",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #D8DCE3",
  background: "#FFFFFF",
  fontSize: "14px",
};