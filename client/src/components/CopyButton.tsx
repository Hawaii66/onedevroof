import { Copy } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  text: string;
  onClick?: () => void;
};

export default function CopyButton({ text, onClick }: Props) {
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(text);
        if (onClick) {
          onClick();
        }
      }}
    >
      <Copy />
    </Button>
  );
}
