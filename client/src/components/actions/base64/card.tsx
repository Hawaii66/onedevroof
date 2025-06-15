import type { DevCard } from "@/cards";
import CopyButton from "@/components/CopyButton";
import GridCard from "@/components/GridCard";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCallback, useState } from "react";

export default function Base64Card({ description, title }: DevCard) {
  const [decoded, setDecoded] = useState("");
  const [encoded, setEncoded] = useState("");

  const onTypeDecoded = useCallback(
    (text: string) => {
      setDecoded(text);
      setEncoded(btoa(text));
    },
    [setDecoded, setEncoded]
  );

  const onTypeEncoded = useCallback(
    (text: string) => {
      setEncoded(text);
      setDecoded(atob(text));
    },
    [setDecoded, setEncoded]
  );

  return (
    <GridCard description={description} title={title}>
      <div className="flex flex-col gap-2">
        <Label>Decoded</Label>
        <div className="flex flex-row justify-between items-center gap-2">
          <Textarea
            onChange={(e) => onTypeDecoded(e.target.value)}
            className="border-neutral-600 w-80 h-40 font-mono"
            value={decoded}
          />
          <CopyButton text={decoded} />
        </div>
        <Label>Encoded</Label>
        <div className="flex flex-row justify-between items-center gap-2">
          <Textarea
            onChange={(e) => onTypeEncoded(e.target.value)}
            className="border-neutral-600 w-80 h-40 font-mono"
            value={encoded}
          />
          <CopyButton text={encoded} />
        </div>
      </div>
    </GridCard>
  );
}
