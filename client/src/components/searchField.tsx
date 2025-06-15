import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect } from "react";

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchField({ setText, text }: Props) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");
    if (query) {
      setText(query);
    }
  }, [setText]);

  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <Input
        className="bg-neutral-700 border-neutral-600 w-80 font-mono"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="search"
        autoFocus
      />
      <Search color="#404040" />
    </div>
  );
}
