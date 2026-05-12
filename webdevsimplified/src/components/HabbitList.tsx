import { useContext } from "react";
import HabitItem from "./HabitItem";
import { HabitContext } from "../context/HabitProvider";

type HabitListProps = {
  visibleDates: Date[];
};

function HabbitList({ visibleDates }: HabitListProps) {
  const context = useContext(HabitContext);
  if (!context) {
    throw new Error("HabitContext Provider is missing");
  }

  const { habits, deleteHabit, toggleCompletion } = context;
  console.log({habits});

  if (habits.length == 0)
    return (
      <p className="habitList-p">
        No habits yet. Add one above to get started !
      </p>
    );

  return (
    <div className="habitList-parent">
      {habits.map((habit, index) => (
        <HabitItem
          key={habit.id}
          habit={habits[index]}
          deleteHabit={deleteHabit}
          toggleCompletion={toggleCompletion}
          visibleDates={visibleDates}
        />
      ))}
    </div>
  );
}

export default HabbitList;
