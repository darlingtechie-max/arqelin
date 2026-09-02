import {
      getPriority,
        type Priority,
        } from "@/lib/priority";

        type PriorityBadgeProps = {
          priority: Priority;
            compact?: boolean;
            };

            export default function PriorityBadge({
              priority,
                compact = false,
                }: PriorityBadgeProps) {
                  const priorityInfo = getPriority(priority);

                    if (!priorityInfo) {
                        return null;
                          }

                            if (compact) {
                                return (
                                      <span
                                              style={{
                                                        color: priorityInfo.color,
                                                                  fontWeight: "bold",
                                                                            fontSize: "13px",
                                                                                    }}
                                                                                          >
                                                                                                  ● {priority}
                                                                                                        </span>
                                                                                                            );
                                                                                                              }

                                                                                                                return (
                                                                                                                    <span
                                                                                                                          style={{
                                                                                                                                  display: "inline-flex",
                                                                                                                                          alignItems: "center",
                                                                                                                                                  gap: "6px",
                                                                                                                                                          background: `${priorityInfo.color}18`,
                                                                                                                                                                  color: priorityInfo.color,
                                                                                                                                                                          padding: "6px 10px",
                                                                                                                                                                                  borderRadius: "999px",
                                                                                                                                                                                          fontWeight: "bold",
                                                                                                                                                                                                  fontSize: "13px",
                                                                                                                                                                                                        }}
                                                                                                                                                                                                            >
                                                                                                                                                                                                                  <span>{priorityInfo.emoji}</span>
                                                                                                                                                                                                                        {priority}
                                                                                                                                                                                                                            </span>
                                                                                                                                                                                                                              );
                                                                                                                                                                                                                              }
}