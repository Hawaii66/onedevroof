import "../index.css";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import { DevCards } from "@/cars";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col bg-neutral-800 px-12 py-4 w-full min-h-screen font-mono">
      <header className="">
        <Link to="/">
          <h1 className="font-bold text-bold text-orange-500 text-3xl">
            OneDevRoof.com
          </h1>
        </Link>
      </header>
      <Separator className="bg-orange-500" />
      <div className="flex flex-wrap justify-start items-start gap-4 py-8 w-full grow">
        {DevCards.map((card) =>
          card.component({
            description: card.description,
            title: card.title,
          })
        )}
      </div>
    </div>
  );
}
