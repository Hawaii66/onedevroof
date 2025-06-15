import type { DevCard } from "@/cards";
import CopyButton from "@/components/CopyButton";
import GridCard from "@/components/GridCard";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useCallback } from "react";

export default function PrettyJSON({ description, title }: DevCard) {
  const [compressed, setCompressed] = useState("");
  const [pretty, setPretty] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onTypeCompressed = useCallback(
    (text: string) => {
      if (text === "") {
        setCompressed("");
        setPretty("");
        setError(null);
        return;
      }

      setCompressed(text);
      try {
        setPretty(JSON.stringify(JSON.parse(text), null, 2));
        setError(null);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("Failed to parse JSON");
        }
      }
    },
    [setCompressed, setPretty]
  );

  const onTypePretty = useCallback(
    (text: string) => {
      if (text === "") {
        setCompressed("");
        setPretty("");
        setError(null);
        return;
      }

      setPretty(text);
      try {
        setCompressed(JSON.stringify(JSON.parse(text)));
        setError(null);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("Failed to parse JSON");
        }
      }
    },
    [setCompressed, setPretty]
  );

  return (
    <GridCard description={description} title={title}>
      <div className="flex flex-col gap-2">
        <Label>Compressed</Label>
        <div className="flex flex-row justify-between items-center gap-2">
          <Textarea
            onChange={(e) => onTypeCompressed(e.target.value)}
            className="border-neutral-600 w-80 h-40 font-mono"
            value={compressed}
          />
          <CopyButton text={compressed} />
        </div>
        <Label>Pretty</Label>
        <div className="flex flex-row justify-between items-center gap-2">
          <Textarea
            onChange={(e) => onTypePretty(e.target.value)}
            className="border-neutral-600 w-80 h-40 font-mono"
            value={pretty}
          />

          <CopyButton text={pretty} />
        </div>
        <p className="max-w-80 text-red-500">{error}</p>
      </div>
    </GridCard>
  );
}
