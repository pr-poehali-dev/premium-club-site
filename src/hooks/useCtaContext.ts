import { createContext, useContext } from "react";

interface CtaContextValue {
  handleCtaClick: () => void;
  isInTelegram: boolean;
}

export const CtaContext = createContext<CtaContextValue>({
  handleCtaClick: () => {},
  isInTelegram: false,
});

export function useCtaContext() {
  return useContext(CtaContext);
}
