import type { DevCard } from "@/cards";
import CopyButton from "@/components/CopyButton";
import GridCard from "@/components/GridCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ShuffleArray } from "@/lib/random";
import { RefreshCw } from "lucide-react";
import { useCallback, useState } from "react";

export default function ShuffleArrayCard({ description, title }: DevCard) {
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onTypeText = useCallback(
    (text: string) => {
      if (text === "") {
        setText("");
        setError(null);
        return;
      }

      try {
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed)) {
          const randomized = ShuffleArray(parsed);
          setText(JSON.stringify(randomized));
          setError(null);
        } else {
          setText(text);
          setError("JSON must be an array");
        }
      } catch (e) {
        setText(text);
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("Something went wrong");
        }
      }
    },
    [setText]
  );

  return (
    <GridCard description={description} title={title}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center gap-2">
          <Textarea
            onChange={(e) => onTypeText(e.target.value)}
            className="border-neutral-600 w-80 h-40 font-mono"
            value={text}
          />
          <CopyButton text={text} />
          <Button onClick={() => onTypeText(text)}>
            <RefreshCw />
          </Button>
        </div>
        <p className="max-w-80 text-red-500">{error}</p>
      </div>
    </GridCard>
  );
}
