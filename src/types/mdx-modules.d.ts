import { JSX } from "solid-js";

declare global {
  interface CareerItem {
    period: number[];
    name: string;
  }

  interface WorkModule {
    default: () => JSX.Element;
    meta: {
      title: string;
      date: string;
      description: string;
      stacks: string[];
      image: string;
      website?: string;
      source?: string;
    };
  }
}
