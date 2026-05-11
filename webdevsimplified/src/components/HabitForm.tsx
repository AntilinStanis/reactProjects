import { useState, type SubmitEvent, useContext } from "react";
import Button from "./Button";
import { HabitContext } from "../context/HabitProvider";

// type HabitFormProps = {
//   addHabits: (habit: string) => void;
// };

function HabitForm() {
  const [habit, setHabit] = useState("");
  const context = useContext(HabitContext);

  if (!context) {
    throw new Error("HabitContext Provider is missing");
  }
  const { addHabits } = context;

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
