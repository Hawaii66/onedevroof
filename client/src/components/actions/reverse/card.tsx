import type { DevCard } from "@/cards";
import GridCard from "@/components/GridCard";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCallback, useState } from "react";

export default function ReverseCard({ description, title }: DevCard) {
  const [right, setRight] = useState("");
  const [left, setLeft] = useState("");

  const onTypeDecoded = useCallback(
    (text: string) => {
      setRight(text);
      setLeft(text.split("").reverse().join(""));
    },
    [setRight, setLeft]
  );

  const onTypeEncoded = useCallback(
    (text: string) => {
      setLeft(text);
      setRight(text.split("").reverse().join(""));
    },
    [setRight, setLeft]
  );

  return (
    <GridCard description={description} title={title}>
      <div className="flex flex-col gap-2">
        <Label>Text</Label>
        <Textarea
          onChange={(e) => onTypeDecoded(e.target.value)}
          className="border-neutral-600 w-80 h-40 font-mono"
          value={right}
        />
        <Label>Reversed</Label>
        <Textarea
          onChange={(e) => onTypeEncoded(e.target.value)}
          className="border-neutral-600 w-80 h-40 font-mono"
          value={left}
        />
      </div>
    </GridCard>
  );
}
