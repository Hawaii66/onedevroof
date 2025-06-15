import { Search } from "lucide-react";
import { Input } from "./ui/input";

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchField({ setText, text }: Props) {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <Input
        className="bg-neutral-700 border-neutral-600 w-80 font-mono"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="search"
        autoFocus
      />
      <Search />
    </div>
  );
}
