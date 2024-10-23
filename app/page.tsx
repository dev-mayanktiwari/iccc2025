import Slideshow from "@/components/Slideshow";
import Content from "@/components/MainPageContent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Slideshow />
      <Content />
    </div>
  );
}
