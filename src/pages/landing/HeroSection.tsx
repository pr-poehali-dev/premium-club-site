import Icon from "@/components/ui/icon";
import { Reveal, G, TG_LINK, HERO_IMG, DASHBOARD_IMG } from "./shared";

export default function HeroSection() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(20px)' }}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-oswald fluid-xs font-bold tracking-widest">AI <G>MODELS</G> FACTORY</div>
          <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="neon-btn fluid-btn-sm rounded-md uppercase tracking-widest flex items-center gap-1.5">
            Вступить в клуб
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center pt-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover object-top opacity-25" />
          <div className="hero-gradient absolute inset-0" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 35%, rgba(0,0,0,0.4) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a0a 8%, transparent 45%)' }} />
        </div>
        <div className="hero-line absolute top-1/3 left-0 w-[300px]" />
        <div className="hero-line absolute top-2/3 right-0 w-[200px]" style={{ background: 'linear-gradient(to left, transparent, rgba(168,85,247,0.2), transparent)' }} />
        <div className="absolute top-1/2 right-16 w-px h-32 hidden md:block" style={{ background: 'linear-gradient(to bottom, rgba(0,255,136,0.3), transparent)' }} />

        <div className="container mx-auto px-4 relative z-10 py-16 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <Reveal>
              <div className="metric-badge mb-5 md:mb-8">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Готовая система — 35 человек уже зарабатывают
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-oswald font-bold leading-[1.05] mb-5 md:mb-8">
                <span className="gradient-text fluid-hero">Запусти AI-инфлюенсера</span><br />
                <span className="text-white fluid-hero-sub">который зарабатывает</span><br />
                <span className="fluid-hero-sub" style={{ color: '#00ff88', textShadow: '0 0 30px rgba(0,255,136,0.3)' }}>без твоего лица и голоса.</span>
              </h1>
            </Reveal>
            <Reveal delay={250}>
              <p className="text-white/55 fluid-body max-w-2xl mb-5">
                Нейросеть создаёт персонажа — лицо, которого не существует. Ты публикуешь его контент. Подписчики платят. Тебя никто не видит.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                {[
                  { icon: "Monitor", label: "Только ноутбук" },
                  { icon: "Clock", label: "2–3 часа в день" },
                  { icon: "UserX", label: "Без своего лица" },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-2 rounded-full px-3 py-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <Icon name={s.icon} size={13} style={{ color: 'rgba(0,255,136,0.5)' } as React.CSSProperties} />
                    <span className="fluid-xs text-white/45">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={350}>
              <p className="text-white/25 fluid-xs max-w-lg mb-8">
                Мой результат: $745 за 8 дней в апреле · $1,875 за 3 месяца · одна модель
              </p>
            </Reveal>
            <Reveal delay={450}>
              <div className="flex flex-col gap-3 sm:flex-row mb-3">
                <a href="#история" className="neon-btn fluid-btn rounded-lg inline-flex items-center gap-2 uppercase tracking-widest justify-center w-full sm:w-auto">
                  Как это работает <Icon name="ChevronDown" size={16} />
                </a>
                <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="neon-btn-outline fluid-btn rounded-lg inline-flex items-center gap-2 uppercase tracking-widest justify-center w-full sm:w-auto">
                  Начать зарабатывать <Icon name="ArrowRight" size={15} />
                </a>
              </div>
              <p className="fluid-xs text-white/20">
                Кнопка «Начать зарабатывать» откроет мой диалог в Telegram
              </p>
            </Reveal>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="absolute bottom-16 right-8 hidden lg:block w-72 xl:w-80 float">
          <div className="screenshot-frame rounded-lg overflow-hidden opacity-60"><img src={DASHBOARD_IMG} alt="" className="w-full" /></div>
          <div className="text-center mt-2 fluid-xs text-white/15 font-oswald tracking-wider uppercase">Реальный доход — апрель 2026</div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
          <Icon name="ChevronDown" size={20} style={{ color: 'rgba(0,255,136,0.4)' } as React.CSSProperties} />
        </div>
      </section>
    </>
  );
}