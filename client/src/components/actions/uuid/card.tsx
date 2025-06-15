import type { DevCard } from "@/cards";
import CopyButton from "@/components/CopyButton";
import GridCard from "@/components/GridCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCw } from "lucide-react";
import { useCallback, useState } from "react";
import { v4 } from "uuid";

export default function UUIDCard({ description, title }: DevCard) {
  const [uuid, setUUID] = useState(v4());

  const newUUID = useCallback(() => {
    setUUID(v4());
  }, [setUUID]);

  return (
    <GridCard description={description} title={title}>
      <Input
        onFocus={(e) => {
          e.target.select();
        }}
        value={uuid}
        className="border-neutral-600 w-80 font-mono text-center"
      />
      <CopyButton text={uuid} />
      <Button onClick={newUUID}>
        <RefreshCw />
      </Button>
    </GridCard>
  );
}
