import { useContext } from "react";
import { HabitContext } from "../context/HabitProvider";

export function useHabit() {
    const habitContext = useContext(HabitContext);
    if (habitContext == null) throw new Error("");
    return habitContext;
}