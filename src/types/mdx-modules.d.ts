import { JSX } from "solid-js";

declare global {
  interface CareerModule {
    default: () => JSX.Element;
    meta: {
      title: string;
      period: number[];
      type: "work" | "education";
    };
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
