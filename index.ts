import fetch from "node-fetch";
import * as dotenv from "dotenv";
import { randomFourExercises } from "./plan";
dotenv.config();
export const API_URL = "https://platform.vestaboard.com";

const days = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
} as { [key: number]: IDays };
type IDays = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";

const main = () => {
  const day = new Date().getDay();
  const dayName = days[day];
  const intensity = day % 3 === 0 ? "hard" : day % 2 === 0 ? "medium" : "easy";
  const exercises = randomFourExercises(intensity);
  const color = day % 3 === 0 ? "{63}" : day % 2 === 0 ? "{65}" : "{66}";
  const text = `${color}Happy ${dayName}!${color}\nToday's WOD is:\n${exercises}`;
  console.log(text);
  sendMessage(text);
};

const sendMessage = async (text: string) => {
  if (process.env.VB_SUB_KEY && process.env.VB_SUB_SECRET) {
    await fetch(`${API_URL}/subscriptions/${process.env.VB_SUB_ID}/message`, {
      method: "POST",
      headers: {
        "X-Vestaboard-Api-Key": process.env.VB_SUB_KEY,
        "X-Vestaboard-Api-Secret": process.env.VB_SUB_SECRET,
      },
      body: JSON.stringify({
        text,
      }),
    });
  }
};

main();
