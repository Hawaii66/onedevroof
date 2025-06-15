import UUIDCard from "./components/actions/uuid/card";

type RenderDevCard = DevCard & {
  component: (vars: DevCard) => React.ReactNode;
};

export type DevCard = {
  title: string;
  description: string;
};

export const DevCards: RenderDevCard[] = [
  {
    title: "UUID",
    description: "Generated v4 UUID",
    component: UUIDCard,
  },
];
