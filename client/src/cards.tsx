import Base64Card from "./components/actions/base64/card";
import CurrencyFormatCard from "./components/actions/currencyFormat/card";
import PrettyJSON from "./components/actions/prettyJSON/card";
import ReverseCard from "./components/actions/reverse/card";
import SecretCard from "./components/actions/secret/card";
import ShuffleArrayCard from "./components/actions/shuffleArray/card";
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
    title: "Secret",
    description: "Generated a random secret",
    component: SecretCard,
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
  {
    title: "Shuffle Array",
    description: "Shuffle an array of items",
    component: ShuffleArrayCard,
  },
  {
    title: "Reverse",
    description: "Reverse a string of text",
    component: ReverseCard,
  },
  {
    title: "Currency Formatter",
    description: "Format any number into a locale dependant string",
    component: CurrencyFormatCard,
  },
];
