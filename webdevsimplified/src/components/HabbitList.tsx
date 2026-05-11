import HabitItem, { type Habit } from "./HabitItem";

type HabitListProps = {
  habits: Habit[];
  deleteHabit: (id: string) => void;
  toggleCompletion: (id: string, date: Date) => void;
};

function HabbitList({ habits, deleteHabit, toggleCompletion }: HabitListProps) {
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
          toggleCompletion = {toggleCompletion}
        />
      ))}
    </div>
  );
}

export default HabbitList;
