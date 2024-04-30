import Image from "next/image";
import "./globals.css";

const currentDate = new Date().toDateString();

export default function Home() {
  return (
    <main>
      <div>
      <p className="greeting">Welcome to Next.js with TypeScript!</p>
      <p className="date">Today's date is {currentDate}</p>
      </div>
    </main>
  );
}
