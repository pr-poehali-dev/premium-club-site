import { useEffect, useState, useCallback } from "react";
import HeroSection from "./landing/HeroSection";
import StorySections from "./landing/StorySections";
import CtaSections from "./landing/CtaSections";
import { useTelegram } from "@/hooks/useTelegram";
import { CtaContext } from "@/hooks/useCtaContext";

const NOTIFY_URL = "https://functions.poehali.dev/90b42ca0-d95e-4c54-8081-a90bd70c97ae";

export default function Index() {
  const { tg, user, isInTelegram } = useTelegram();
  const [showSuccess, setShowSuccess] = useState(false);

  const notifyBot = useCallback(async (telegramId: number, firstName: string) => {
    try {
      const res = await fetch(NOTIFY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ telegram_id: telegramId, first_name: firstName }),
      });
      return res.ok;
    } catch {
      return false;
    }
  }, []);

  const handleCtaClick = useCallback(async () => {
    if (!isInTelegram || !tg || !user) return;

    await notifyBot(user.id, user.first_name);
    tg.HapticFeedback.impactOccurred("medium");
    setShowSuccess(true);

    setTimeout(() => {
      tg.close();
    }, 1000);
  }, [isInTelegram, tg, user, notifyBot]);

  useEffect(() => {
    if (!isInTelegram || !tg) return;

    tg.MainButton.setText("Вступить в клуб за 9 900 руб");
    tg.MainButton.show();
    tg.MainButton.onClick(handleCtaClick);

    return () => {
      tg.MainButton.offClick(handleCtaClick);
    };
  }, [isInTelegram, tg, handleCtaClick]);

  return (
    <CtaContext.Provider value={{ handleCtaClick, isInTelegram }}>
      <div className="min-h-screen bg-background text-foreground font-golos overflow-x-hidden noise-overlay">
        {showSuccess && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
          >
            <div
              className="flex flex-col items-center gap-3 px-8 py-6 rounded-2xl"
              style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.3)" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: "rgba(0,255,136,0.15)", border: "1px solid rgba(0,255,136,0.4)" }}
              >
                <span style={{ fontSize: 28 }}>✓</span>
              </div>
              <p className="font-oswald text-white tracking-wide text-lg">Готово, проверь чат с ботом</p>
            </div>
          </div>
        )}
        <HeroSection />
        <div className="content-width relative z-10">
          <StorySections />
          <CtaSections />
        </div>
      </div>
    </CtaContext.Provider>
  );
}