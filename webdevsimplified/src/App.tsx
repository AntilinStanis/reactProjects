import "./app.css";
import HabbitList from "./components/HabbitList";
import HabitForm from "./components/HabitForm";
import Header from "./Header";
import { HabitProvider } from "./context/HabitProvider";

function App() {
 

  return (
    <div className="parent">
      <HabitProvider>
        <Header />
        <HabitForm addHabits={addHabits} />
        <HabbitList
          habits={habits}
          deleteHabit={deleteHabit}
          toggleCompletion={toggleCompletion}
        />
      </HabitProvider>
    </div>
  );
}

export default App;
