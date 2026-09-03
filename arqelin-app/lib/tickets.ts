import type { Priority } from "@/lib/priority";

export type Activity = {
  person: string;
    text: string;
      time: string;
      };

      export type Ticket = {
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
                              activities: Activity[];
                              };

                              export const tickets: Ticket[] = [
                                {
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
                                                                                activities: [
                                                                                      {
                                                                                              person: "Ada Okafor",
                                                                                                      text: "My delivery arrived, but one item is missing.",
                                                                                                              time: "10:12 AM",
                                                                                                                    },
                                                                                                                          {
                                                                                                                                  person: "Support Team",
                                                                                                                                          text: "We're checking the delivery details.",
                                                                                                                                                  time: "10:24 AM",
                                                                                                                                                        },
                                                                                                                                                            ],
                                                                                                                                                              },

                                                                                                                                                                {
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
                                                                                                                                                                                                                activities: [
                                                                                                                                                                                                                      {
                                                                                                                                                                                                                              person: "Sarah Johnson",
                                                                                                                                                                                                                                      text: "I was charged but received no order confirmation.",
                                                                                                                                                                                                                                              time: "10:12 AM",
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                  person: "Support Team",
                                                                                                                                                                                                                                                                          text: "We're checking the payment status.",
                                                                                                                                                                                                                                                                                  time: "10:24 AM",
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                                              ];