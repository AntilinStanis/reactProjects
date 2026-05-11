import "./app.css";
import HabbitList from "./components/HabbitList";
import HabitForm from "./components/HabitForm";
import Header from "./Header";
import { HabitProvider } from "./context/HabitProvider";
import { useState } from "react";
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";

function App() {
  const [weekOffset, setWeekOffset] = useState(0);
  const week = addWeeks(new Date(), weekOffset);
  console.log({ Info: "AppComponent rendered" });
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(week, { weekStartsOn: 1 }),
    end: endOfWeek(week, { weekStartsOn: 1 }),
  });

  function onPrev() {
    setWeekOffset(weekOffset - 1);
  }

  function onNext() {
    setWeekOffset(weekOffset + 1);
  }

  return (
    <div className="parent">
      <HabitProvider>
        <Header visibleDates={visibleDates} onPrev={onPrev} onNext={onNext} />
        <HabitForm />
        <HabbitList visibleDates={visibleDates} />
      </HabitProvider>
    </div>
  );
}

export default App;
