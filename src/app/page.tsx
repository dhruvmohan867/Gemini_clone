import GeminiBody from "@/components/GeminiBody";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
export default function Home() {
  return (
    <div className="flex contain">
      <Sidebar />
      <GeminiBody />
    </div>
  );
}