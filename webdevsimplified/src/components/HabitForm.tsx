import { useState, type SubmitEvent } from "react";
import Button from "./Button";

type HabitFormProps = {
  addHabits: (habit: string) => void;
};

function HabitForm({ addHabits }: HabitFormProps) {
  const [habit, setHabit] = useState("");

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log("habit", habit);
    if (habit.trim() === "") return;
    addHabits(habit);
    setHabit("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        placeholder="New habbit"
        name="habit-input"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
      />
      <Button disabled={habit.trim() === ""}>Add Habit</Button>
    </form>
  );
}

export default HabitForm;
