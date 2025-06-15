import type { PropsWithChildren } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  title: string;
  description: string;
};

export default function GridCard({
  description,
  title,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Card className="bg-neutral-700 border-neutral-600">
      <CardHeader>
        <CardTitle className="text-neutral-100">{title}</CardTitle>
        <CardDescription className="text-neutral-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row justify-between items-center gap-4">
        {children}
      </CardContent>
    </Card>
  );
}
