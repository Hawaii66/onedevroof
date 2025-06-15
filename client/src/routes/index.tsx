import "../index.css";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Separator } from "@/components/ui/separator";
import { DevCards } from "@/cards";
import SearchField from "@/components/searchField";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function FormatText(text: string) {
  return text.toLowerCase().trim();
}

function Index() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = FormatText(query);
    if (q === "") {
      return DevCards;
    }

    return DevCards.filter((card) => {
      return (
        FormatText(card.title).includes(q) ||
        FormatText(card.description).includes(q)
      );
    });
  }, [query]);

  return (
    <div className="flex flex-col bg-neutral-800 px-12 py-4 w-full min-h-screen font-mono">
      <header className="flex flex-row justify-between items-center py-2">
        <Link to="/">
          <h1 className="font-bold text-bold text-orange-500 text-3xl">
            OneDevRoof.com
          </h1>
        </Link>
        <SearchField setText={setQuery} text={query} />
      </header>
      <Separator className="bg-orange-500" />
      <div className="flex flex-wrap justify-start items-start gap-4 py-8 w-full grow">
        {filtered.map((card) => {
          const Component = card.component;

          return (
            <Component description={card.description} title={card.title} />
          );
        })}
      </div>
    </div>
  );
}
