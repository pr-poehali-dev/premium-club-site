import { useEffect, useState } from "react";

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
}

interface UseTelegramReturn {
  tg: typeof window.Telegram.WebApp | null;
  user: TelegramUser | null;
  isInTelegram: boolean;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        close: () => void;
        initData: string;
        initDataUnsafe: { user?: TelegramUser };
        MainButton: {
          text: string;
          setText: (text: string) => void;
          show: () => void;
          hide: () => void;
          onClick: (fn: () => void) => void;
          offClick: (fn: () => void) => void;
        };
        HapticFeedback: {
          impactOccurred: (style: "light" | "medium" | "heavy" | "rigid" | "soft") => void;
        };
      };
    };
  }
}

export function useTelegram(): UseTelegramReturn {
  const [tg, setTg] = useState<typeof window.Telegram.WebApp | null>(null);
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [isInTelegram, setIsInTelegram] = useState(false);

  useEffect(() => {
    const webApp = window.Telegram?.WebApp;
    if (!webApp) return;

    const inTg = !!(webApp.initData);
    setIsInTelegram(inTg);

    if (inTg) {
      webApp.ready();
      webApp.expand();
      setTg(webApp);
      setUser(webApp.initDataUnsafe?.user ?? null);
    }
  }, []);

  return { tg, user, isInTelegram };
}
