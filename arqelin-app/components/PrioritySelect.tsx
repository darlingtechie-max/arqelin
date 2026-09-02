import {
  PRIORITIES,
  type Priority,
} from "@/lib/priority";

type PrioritySelectProps = {
  value: Priority | "";
  onChange: (priority: Priority) => void;
};

export default function PrioritySelect({
  value,
  onChange,
}: PrioritySelectProps) {
  return (
    <select
      value={value}
      onChange={(event) =>
        onChange(event.target.value as Priority)
      }
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #D8DCE3",
        background: "#FFFFFF",
        fontSize: "14px",
      }}
    >
      <option value="" disabled>
        Select priority
      </option>

      {PRIORITIES.map((priority) => (
        <option
          key={priority.value}
          value={priority.value}
        >
          {priority.emoji} {priority.value}
        </option>
      ))}
    </select>
  );
}