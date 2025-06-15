import Base64Card from "./components/actions/base64/card";
import PrettyJSON from "./components/actions/prettyJSON/card";
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
  {
    title: "Base64",
    description: "Encode & decode Base64",
    component: Base64Card,
  },
  {
    title: "JSON",
    description: "Prettify or compress JSON",
    component: PrettyJSON,
  },
];
