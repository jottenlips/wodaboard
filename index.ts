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
type IDays =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

const main = async () => {
  const day = new Date().getDay();
  const dayName = days[day];
  const intensity = day % 3 === 1 ? "hard" : day % 3 === 2 ? "medium" : "easy";
  const exercises = randomFourExercises(intensity);
  const color =
    intensity === "hard" ? "{63}" : intensity === "medium" ? "{65}" : "{66}";
  const text = `${color}Happy ${dayName}!${color}\nToday's WOD is:\n${exercises}`;
  console.log(text);
  await sendMessage(text);
  await sendMastodonMessage(text);
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

const sendMastodonMessage = async (text: string) => {
  const status = text
    .replace("{66}", "🟩 ")
    .replace("{66}", " 🟩")
    .replace("{65}", "🟨 ")
    .replace("{65}", " 🟨")
    .replace("{63}", "🟥 ")
    .replace("{63}", " 🟥");

  if (process.env.MASTODON_ACCESS_TOKEN) {
    await fetch(`https://mastodon.social/api/v1/statuses`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MASTODON_ACCESS_TOKEN}`,
        "Idempotency-Key": `${Date.now()}`,
      },
      body: `status=${encodeURIComponent(status + `\n#workoutoftheday`)}`,
    });
  }
};

main();
