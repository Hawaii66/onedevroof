import type { DevCard } from "@/cards";
import CopyButton from "@/components/CopyButton";
import GridCard from "@/components/GridCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RefreshCw } from "lucide-react";
import { useCallback, useState } from "react";

function GenerateRandom() {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~";
  let password = "";
  for (let i = 0; i < 30; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

function GenerateRandomSimple() {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < 30; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

function GenerateRandomPin() {
  const charset = "0123456789";
  let password = "";
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

export default function SecretCard({ description, title }: DevCard) {
  const [secret, setSecret] = useState(GenerateRandom());
  const [secretSimple, setSecretSimple] = useState(GenerateRandomSimple());
  const [pin, setPin] = useState(GenerateRandomPin());

  const newSecret = useCallback(() => {
    setSecret(GenerateRandom());
  }, [setSecret]);

  const newSecretSimple = useCallback(() => {
    setSecretSimple(GenerateRandomSimple());
  }, [setSecretSimple]);

  const newPin = useCallback(() => {
    setPin(GenerateRandomPin());
  }, [setPin]);

  return (
    <GridCard description={description} title={title}>
      <div className="flex flex-col gap-2">
        <Label>Random</Label>
        <div className="flex flex-row justify-between items-center gap-2">
          <Input
            onFocus={(e) => {
              e.target.select();
            }}
            defaultValue={secret}
            className="border-neutral-600 w-80 font-mono text-center"
          />
          <CopyButton text={secret} />
          <Button onClick={newSecret}>
            <RefreshCw />
          </Button>
        </div>
        <Label>ASCII</Label>
        <div className="flex flex-row justify-between items-center gap-2">
          <Input
            onFocus={(e) => {
              e.target.select();
            }}
            defaultValue={secretSimple}
            className="border-neutral-600 w-80 font-mono text-center"
          />
          <CopyButton text={secretSimple} />
          <Button onClick={newSecretSimple}>
            <RefreshCw />
          </Button>
        </div>
        <Label>PIN</Label>
        <div className="flex flex-row justify-between items-center gap-2">
          <Input
            onFocus={(e) => {
              e.target.select();
            }}
            defaultValue={pin}
            className="border-neutral-600 w-80 font-mono text-center"
          />
          <CopyButton text={pin} />
          <Button onClick={newPin}>
            <RefreshCw />
          </Button>
        </div>
      </div>
    </GridCard>
  );
}
