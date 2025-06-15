import type { DevCard } from "@/cards";
import CopyButton from "@/components/CopyButton";
import GridCard from "@/components/GridCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMemo, useState } from "react";

export default function CurrencyFormatCard({ description, title }: DevCard) {
  const [number, setNumber] = useState("");
  const [locale, setLocale] = useState(navigator.language);
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState<string | null>(null);

  const formatted = useMemo(() => {
    if (number === "") {
      setNumber("");
      setError(null);
      return "";
    }
    try {
      const formatter = new Intl.NumberFormat(locale, {
        currency: currency,
        style: "currency",
      });
      const floatText = parseFloat(number);
      if (isNaN(floatText)) {
        throw new Error(`${number} is not a number`);
      }
      setNumber(number);
      setError(null);
      return formatter.format(floatText);
    } catch (e) {
      setNumber(number);
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("Something went wrong");
      }

      return "";
    }
  }, [number, locale, currency]);

  return (
    <GridCard description={description} title={title}>
      <div className="flex flex-col gap-2">
        <Label>Locale</Label>
        <Input
          onChange={(e) => setLocale(e.target.value)}
          className="border-neutral-600 w-80 font-mono"
          value={locale}
        />
        <Label>Currency</Label>
        <Input
          onChange={(e) => setCurrency(e.target.value)}
          className="border-neutral-600 w-80 font-mono"
          value={currency}
        />
        <Label>Number</Label>
        <Input
          onChange={(e) => setNumber(e.target.value)}
          className="border-neutral-600 w-80 font-mono"
          value={number}
        />
        <Label>Formatted</Label>
        <div className="flex flex-row justify-between items-center gap-2">
          <Input
            className="border-neutral-600 w-80 font-mono"
            defaultValue={formatted}
          />
          <CopyButton text={formatted} />
        </div>
        <p className="max-w-80 text-red-500">{error}</p>
      </div>
    </GridCard>
  );
}
