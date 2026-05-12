import { createContext, type ReactNode } from "react";
import type { Habit } from "../components/HabitItem";
import { isSameDay } from "date-fns";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Context = {
  habits: Habit[];
  addHabits: (name: string) => void;
  deleteHabit: (id: string) => void;
  toggleCompletion: (id: string, date: Date) => void;
};

type HabitProviderProps = {
  children: ReactNode;
};

// eslint-disable-next-line react-refresh/only-export-components
export const HabitContext = createContext<null | Context>(null);

export function HabitProvider({ children }: HabitProviderProps) {
  const [habits, setHabits] = useLocalStorage<Habit[]>("Habits", []);

  function addHabits(habit: string) {
    setHabits((curr) => [
      ...curr,
      { id: crypto.randomUUID(), header: habit, completions: [] },
    ]);
  }

  function deleteHabit(id: string) {
    console.log("delete Habit called");
    setHabits((curr) => curr.filter((habit) => habit.id != id));
  }

  function toggleCompletion(id: string, date: Date) {
    console.log("toggleCompletion function called");
    setHabits((curr) =>
      curr.map((h) => {
        if (h.id !== id) return h;

        const alreadyDone = h.completions.some((c) => isSameDay(c, date));

        const completions = alreadyDone
          ? h.completions.filter((c) => !isSameDay(c, date))
          : [...h.completions, date];

        console.log({ completions });
        return { ...h, completions };
      }),
    );
  }

  return (
    <HabitContext.Provider
      value={{ habits, addHabits, deleteHabit, toggleCompletion }}
    >
      {children}
    </HabitContext.Provider>
  );
}
