import HomePage from "@/components/HomePage";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 w-full h-full animated-bg -z-10">
      <Nav/>
      <HomePage/>
    </div>
  );
}
