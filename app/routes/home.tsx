import type { Route } from "./+types/home";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Who from "./components/Who";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "on boarding" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="p-6 ">
      <Navbar />
      <Hero />
      <Who />
    </div>
  );
}
