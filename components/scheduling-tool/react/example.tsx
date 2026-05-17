import { SchedulingTool } from "./SchedulingTool";

export function IntroCallExample() {
  return (
    <SchedulingTool
      title="Book a 30-minute intro call"
      description="Pick a time that works for you. We will send a calendar invite once you confirm."
      duration={30}
      availableSlots={[
        { date: "2026-05-20", times: ["09:00", "09:30", "10:00", "14:00"] },
        { date: "2026-05-21", times: ["10:00", "11:00", "15:00", "15:30"] },
        { date: "2026-05-22", times: ["09:00", "13:00", "13:30", "14:00"] },
      ]}
      onConfirm={async (selection) => {
        // Wire your booking backend here.
        console.log("Booking:", selection);
      }}
    />
  );
}

export function AutoSlotsWithNotesExample() {
  return (
    <SchedulingTool
      title="Schedule a product demo"
      duration={45}
      formFields={[
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Work email", type: "email", required: true },
        {
          name: "notes",
          label: "What would you like to cover?",
          type: "textarea",
          required: false,
          placeholder: "Optional",
        },
      ]}
      onConfirm={async (selection) => {
        console.log("Demo booking:", selection);
      }}
    />
  );
}
