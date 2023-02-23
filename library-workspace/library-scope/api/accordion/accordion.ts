import { CSSProperties } from "react";

export type Item = {
  title: string;
  id: string;
};

type ItemPros = {
  item: Item;
  accentColor: string;
};

export type ItemPropsReact = ItemPros & {
    OnClick: () => void;
    styling: Partial<CSSProperties>;
};

export type AccordionProps = {
  elementList: Item[];
};

export const footBallTeams: Item[] = [
  {
    title: 'Manchester United',
    id: '01'
  },
  {
    title: 'Barcelona',
    id: '02'
  }, {
    title: 'Paris Saint G.',
    id: '03'
  }
]