import Button from "./Button";
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isFuture,
  isSameDay,
  startOfWeek,
  subDays,
} from "date-fns";

export type Habit = {
  id: string;
  header: string;
  completions: Date[];
};
export type HabitItemProps = {
  habit: Habit;
  deleteHabit: (id: string) => void;
  toggleCompletion: (id: string, date: Date) => void;
};

function HabitItem({ habit, deleteHabit, toggleCompletion }: HabitItemProps) {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });
  console.log(visibleDates);
  const streak = getStreak(habit.completions);

  return (
    <div className="habit-item">
      <div className="habitItem-header">
        <div style={{ display: "flex", gap: "10px" }}>
          <span style={{ fontSize: "20px" }}>{habit.header}</span>

          {streak !== 0 && <span style={{ color: "yellow" }}>🔥 {streak}</span>}
        </div>
        <Button
          onClick={() => deleteHabit(habit.id)}
          variant="ghost-destructive"
        >
          Delete
        </Button>
      </div>
      <div className="habitItem-body">
        {visibleDates.map((date) => (
          <Button
            variant="primary"
            className={
              habit.completions.some((d) => isSameDay(date, d))
                ? "calender-btn-complete"
                : "calender-btn-incomplete"
            }
            key={date.toISOString()}
            disabled={isFuture(date)}
            onClick={() => toggleCompletion(habit.id, date)}
          >
            <span>{format(date, "EEE")}</span>
            <span>{format(date, "d")}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

function getStreak(completions: Date[]) {
  let streak = 0;
  let date = new Date();

  while (completions.some((c) => isSameDay(c, date))) {
    streak = streak + 1;
    date = subDays(date, 1);
  }
  return streak;
}

export default HabitItem;
