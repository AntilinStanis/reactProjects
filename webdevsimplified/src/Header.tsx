import { format, isToday } from "date-fns";
import Button from "./components/Button";
import { useHabit } from "./hooks/useHabit";

type HeaderProps = {
  visibleDates: Date[];
  onPrev: () => void;
  onNext: () => void;
};

function Header({ visibleDates, onPrev, onNext }: HeaderProps) {
  const { habits } = useHabit();
  const doneToday = habits.filter((h) => h.completions.some((c) => isToday(c)));
  const dateRange = `${format(visibleDates[0], "MMM d")} - ${format(visibleDates[6], "MMM d")}`;

  return (
    <div className="header">
      <div className="header-1">
        <div className="header-heading">
          <h1>Habit Tracker</h1>
        </div>
        <div>
          {doneToday.length}/{habits.length} done today
        </div>
      </div>
      <div className="header-2">
        <div style={{ color: "grey" }}>{dateRange}</div>
        <div className="header-btns">
          <Button onClick={onPrev}>Prev</Button>
          <Button
            onClick={onNext}
            disabled={visibleDates.some((d) => isToday(d))}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
