import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/619405aa-a78f-42cb-a5c0-ba86a35c55a1/files/b8a97a42-24a2-4662-a883-591690c97c67.jpg";
const PROCESS_IMG = "https://cdn.poehali.dev/projects/619405aa-a78f-42cb-a5c0-ba86a35c55a1/files/fe985d6b-262c-4477-89f0-f547e3c10cce.jpg";
const DASHBOARD_IMG = "https://cdn.poehali.dev/projects/619405aa-a78f-42cb-a5c0-ba86a35c55a1/files/b7817c43-1c8a-45c8-89b9-59206bc00660.jpg";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const Bridge = () => (
  <div className="section-bridge">
    <div className="section-bridge-dot" />
  </div>
);

const Screenshot = ({ label, sublabel, id }: { label: string; sublabel: string; id: string }) => (
  <Reveal>
    <div className="screenshot-frame my-8">
      <img src={`/screenshots/${id}.png`} alt={label} className="w-full"
        onError={(e) => {
          const t = e.target as HTMLImageElement;
          t.style.display = 'none';
          const p = t.parentElement;
          if (p && !p.querySelector('.ph')) {
            const d = document.createElement('div');
            d.className = 'ph';
            d.style.cssText = 'aspect-ratio:16/10;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,255,136,0.02);padding:2rem;';
            d.innerHTML = `<div style="width:48px;height:48px;border-radius:8px;border:1px dashed rgba(0,255,136,0.2);display:flex;align-items:center;justify-content:center;margin-bottom:12px"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,255,136,0.3)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg></div><div style="font-family:Oswald;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.2);text-align:center">${label}</div><div style="font-size:10px;color:rgba(255,255,255,0.12);margin-top:4px;text-align:center">/screenshots/${id}.png</div>`;
            p.appendChild(d);
          }
        }}
      />
      <div className="px-4 py-3" style={{ background: 'rgba(0,0,0,0.5)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="fluid-xs font-oswald tracking-wider uppercase text-white/45">{label}</div>
        <div className="fluid-xs text-white/20 mt-0.5">{sublabel}</div>
      </div>
    </div>
  </Reveal>
);

const P = ({ children, accent }: { children: React.ReactNode; accent?: boolean }) => (
  <p className={`mb-6 ${accent ? 'text-white/80 font-medium fluid-body-lg' : 'text-white/55 fluid-body'}`}>{children}</p>
);
const G = ({ children }: { children: React.ReactNode }) => <span style={{ color: '#00ff88' }}>{children}</span>;
const W = ({ children }: { children: React.ReactNode }) => <span className="text-white font-semibold">{children}</span>;

const TG_LINK = "https://t.me/m/eyoLAGiRODcy";

const FAQItem = ({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) => (
  <div className={`faq-item mb-2 ${open ? 'open' : ''}`}>
    <button onClick={onClick} className="w-full flex items-center justify-between px-5 py-4 text-left">
      <span className="fluid-sm text-white/75 font-medium pr-4">{q}</span>
      <Icon name={open ? "Minus" : "Plus"} size={16} className="flex-shrink-0" style={{ color: open ? '#00ff88' : 'rgba(255,255,255,0.2)' } as React.CSSProperties} />
    </button>
    {open && <div className="px-5 pb-4 fluid-sm text-white/45" style={{ borderTop: '1px solid rgba(0,255,136,0.06)' }}><div className="pt-3">{a}</div></div>}
  </div>
);

export default function Index() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-golos overflow-x-hidden noise-overlay">

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

        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <Reveal>
              <div className="metric-badge mb-8">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Готовая система — 35 человек уже зарабатывают
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-oswald font-bold leading-[1.02] mb-8">
                <span className="gradient-text fluid-hero">Запусти AI-инфлюенсера</span><br />
                <span className="text-white fluid-hero-sub">который зарабатывает</span><br />
                <span className="fluid-hero-sub" style={{ color: '#00ff88', textShadow: '0 0 30px rgba(0,255,136,0.3)' }}>без твоего лица и голоса.</span>
              </h1>
            </Reveal>
            <Reveal delay={250}>
              <p className="text-white/55 fluid-body-lg max-w-2xl mb-6">
                Нейросеть создаёт виртуального персонажа — лицо, которого не существует. Ты публикуешь его контент в TikTok и Instagram. Подписчики приходят, платят. Тебя никто не видит и не знает.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex items-center gap-5 mb-6 flex-wrap">
                {[
                  { icon: "Monitor", label: "Только ноутбук" },
                  { icon: "Clock", label: "2–3 часа в день" },
                  { icon: "UserX", label: "Без своего лица" },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <Icon name={s.icon} size={14} style={{ color: 'rgba(0,255,136,0.5)' } as React.CSSProperties} />
                    <span className="fluid-xs text-white/45">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={350}>
              <p className="text-white/25 fluid-xs max-w-lg mb-10">
                Мой результат: $745 за 8 дней в апреле. Всего $1,875 за 3 месяца с одной модели. Ниже — как это работает и как начать.
              </p>
            </Reveal>
            <Reveal delay={450}>
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <a href="#история" className="neon-btn fluid-btn rounded-lg inline-flex items-center gap-2 uppercase tracking-widest justify-center">Как это работает <Icon name="ChevronDown" size={16} /></a>
                <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="neon-btn-outline fluid-btn rounded-lg inline-flex items-center gap-2 uppercase tracking-widest justify-center">Начать зарабатывать <Icon name="ArrowRight" size={15} /></a>
              </div>
              <p className="fluid-xs text-white/20">
                Кнопка «Начать зарабатывать» откроет диалог со мной в Telegram — там расскажу детали и помогу со вступлением
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




      <div className="content-width relative z-10">

        {/* ===== 1. ЦИФРЫ ===== */}
        <section id="история" className="section-spacing section-glow-green">
          <Reveal>
            <div className="metric-badge mb-6">Мой результат — твоя возможность</div>
            <h2 className="font-oswald fluid-h2 font-bold mb-3">Сколько приносит одна AI-модель</h2>
            <p className="text-white/30 fluid-sm mb-8">Мой реальный доход за 3 месяца. Одна модель, работаю один. Всё что я использую — есть в клубе.</p>
          </Reveal>

          <Reveal><P>Апрель 2026, первые 8 дней.</P></Reveal>
          <Screenshot id="april-income" label="Доход за апрель — $745 за 8 дней" sublabel="Скриншот дашборда с реальными выплатами" />

          <Reveal><P>Два месяца назад было $927 за полтора месяца. Сейчас столько набегает за полторы недели. <W>Рост в 18 раз</W> с первого месяца.</P></Reveal>
          <Screenshot id="february-income" label="Доход за февраль-март — $927" sublabel="Полтора месяца работы, одна модель" />

          <Reveal>
            <div className="my-8 flex flex-col gap-3">
              {[
                { label: "Месяц 1", val: "$40", w: "4%", dim: true },
                { label: "Месяц 2", val: "$927", w: "62%", dim: false },
                { label: "Апрель, 8 дней", val: "$745", w: "100%", dim: false, glow: true },
              ].map(r => (
                <div key={r.label} className="flex items-center gap-3">
                  <div className="w-32 fluid-xs text-white/35 font-oswald tracking-wide text-right flex-shrink-0">{r.label}</div>
                  <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <div className="h-full rounded-full transition-all duration-1000" style={{ width: r.w, background: r.glow ? 'linear-gradient(90deg, #00ff88, #00e5ff)' : r.dim ? 'rgba(255,255,255,0.12)' : 'linear-gradient(90deg, #00ff88, #00e5ff)', opacity: r.dim ? 0.5 : 1, boxShadow: r.glow ? '0 0 15px rgba(0,255,136,0.5)' : 'none' }} />
                  </div>
                  <span className="font-oswald fluid-sm font-bold w-16 flex-shrink-0" style={r.glow ? { color: '#00ff88', textShadow: '0 0 10px rgba(0,255,136,0.5)' } : r.dim ? { color: 'rgba(255,255,255,0.3)' } : { color: 'white' }}>{r.val}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal><P>Дальше покажу как это устроено изнутри. Моя реальная кухня — без теории.</P></Reveal>
        </section>

        <Bridge />

        {/* ===== 2. ЧТО ЭТО ТАКОЕ ===== */}
        <section className="section-spacing section-glow-cyan">
          <Reveal>
            <h2 className="font-oswald fluid-h2 font-bold mb-3">Виртуальные инфлюенсеры — рынок на $24 миллиарда</h2>
            <p className="text-white/30 fluid-sm mb-8">И в нём почти нет русскоязычных</p>
          </Reveal>

          <Reveal><P>Нейросеть создаёт уникального персонажа — лицо, которое не принадлежит ни одному реальному человеку. Дальше она же делает фотосессии в любых стилях, видео, контент. Ты публикуешь его в TikTok и Instagram. Аудитория растёт.</P></Reveal>

          <Reveal>
            <div className="screenshot-frame my-8 rounded-lg overflow-hidden">
              <img src={PROCESS_IMG} alt="" className="w-full" />
              <div className="px-4 py-3" style={{ background: 'rgba(0,0,0,0.5)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="fluid-xs font-oswald tracking-wider uppercase text-white/40">Процесс создания AI-модели</div>
                <div className="fluid-xs text-white/20 mt-0.5">Нейросеть генерирует уникальное лицо и контент</div>
              </div>
            </div>
          </Reveal>

          <Reveal><P accent>Это не фантазия. Это работающая индустрия:</P></Reveal>
          <Reveal>
            <div className="rounded-xl card-padding-lg mb-6" style={{ background: 'rgba(0,255,136,0.03)', border: '1px solid rgba(0,255,136,0.1)' }}>
              <div className="space-y-4 fluid-sm">
                {[
                  { icon: "Globe", text: <>Рынок инфлюенсер-маркетинга — <W>$24 млрд</W> в 2025 году. Прогноз — $71 млрд к 2032</> },
                  { icon: "User", text: <>AI-модель Aitana Lopez (Испания) — <W>€10,000/мес</W>. Создана двумя дизайнерами</> },
                  { icon: "TrendingUp", text: <>Emily Pellegrini — <W>$23,000 за один месяц</W> на Fanvue</> },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.15)' }}>
                      <Icon name={item.icon} size={14} style={{ color: '#00ff88' } as React.CSSProperties} />
                    </div>
                    <span className="text-white/55 leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal><P accent>Монетизация идёт тремя путями:</P></Reveal>
          <Reveal>
            <div className="space-y-3 mb-6">
              {[["Megaphone", "Реклама — бренды платят за размещение у инфлюенсера с аудиторией"], ["ShoppingBag", "Свои продукты — направляешь трафик куда хочешь"], ["CreditCard", "Платные площадки — подписчики платят за эксклюзивный контент"]].map(([icon, text]) => (
                <div key={text} className="flex items-start gap-3"><Icon name={icon} size={16} className="flex-shrink-0 mt-1" style={{ color: '#00e5ff' } as React.CSSProperties} /><span className="text-white/55 fluid-sm">{text}</span></div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="pull-quote my-8">
              <P accent>Тот, у кого есть органический трафик — в деньгах не нуждается. Виртуальный инфлюенсер — это машина, которая генерирует трафик на любую аудиторию мира.</P>
            </div>
          </Reveal>

          <Reveal><P>И это легально. Ты создаёшь полностью вымышленного персонажа. Ничьё настоящее лицо не используется.</P></Reveal>
        </section>

        <Bridge />

        {/* ===== 3. МОЙ ПУТЬ ===== */}
        <section className="section-spacing">
          <Reveal>
            <h2 className="font-oswald fluid-h2 font-bold mb-3">Почему я начал этим заниматься</h2>
            <p className="text-white/30 fluid-sm mb-8">Я строю системы автоматизации. Это — одна из них.</p>
          </Reveal>

          <Reveal><P>В декабре копался в западном рынке. Наткнулся на виртуальных инфлюенсеров. Купил курс у зарубежного эксперта. Начал разбираться.</P></Reveal>
          <Reveal><P>Обалдел от двух вещей.</P></Reveal>
          <Reveal><P><W>Первая</W> — цифры. Люди зарабатывают от нескольких тысяч до десятков тысяч долларов в месяц. На персонажах которых не существует.</P></Reveal>
          <Reveal><P><W>Вторая</W> — почти все делают это вручную. Сидят часами: ищут идеи для контента, генерируют, обрабатывают, отвечают подписчикам. По полдня на одну модель.</P></Reveal>
          <Reveal><P>Хотя сама генерация — не проблема. Настоящая проблема — понять <W>ЧТО</W> генерировать. Какой контент зайдёт, что сейчас в тренде.</P></Reveal>
        </section>

        <Bridge />

        {/* ===== 4. ТРИ ОШИБКИ ===== */}
        <section className="section-spacing section-glow-purple">
          <Reveal>
            <h2 className="font-oswald fluid-h2 font-bold mb-3">Три ошибки, которые стоили мне 2 месяца</h2>
            <p className="text-white/30 fluid-sm mb-8">Первый месяц — $40. Вот почему.</p>
          </Reveal>

          <div className="space-y-3 my-6">
            {[
              { title: "Ошибка 1: прогрев аккаунта", text: "Первый TikTok — бан через 5 дней. Второй — бан через неделю. Соцсети банят новые аккаунты если сразу начинаешь активно постить. Потерял 2 аккаунта и $100 на контент." },
              { title: "Ошибка 2: настройка генерации", text: "Нейросеть которая запоминает лицо персонажа — штука капризная. Первые три попытки были мусором: лицо то не похоже, то «поплыло»." },
              { title: "Ошибка 3: общение с подписчиками", text: "Человек подписывается, пишет «привет» — а я не знаю что ответить. Он уходит. $20–50 потенциального дохода испарились." },
            ].map((e, i) => (
              <Reveal key={e.title} delay={i * 100}><div className="error-card rounded-lg card-padding pl-7"><div className="fluid-sm font-medium text-white/70 mb-2">{e.title}</div><p className="text-white/40 fluid-sm">{e.text}</p></div></Reveal>
            ))}
          </div>

          <Reveal>
            <div className="rounded-xl card-padding" style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.12)' }}>
              <p className="fluid-sm leading-relaxed" style={{ color: 'rgba(0,255,136,0.85)' }}>Когда закрыл все три — рост пошёл моментально. С $40 до $745 за 8 дней. Те самые ошибки, на которые я потратил 2 месяца — <strong>в клубе закрыты с первого дня.</strong></p>
            </div>
          </Reveal>
        </section>

        {/* ===== MID CTA ===== */}
        <Reveal>
          <div className="my-12 text-center py-8 rounded-xl relative overflow-hidden" style={{ background: 'rgba(0,255,136,0.03)', border: '1px solid rgba(0,255,136,0.1)' }}>
            <div className="shimmer absolute inset-0 pointer-events-none" />
            <div className="relative z-10">
              <div className="fluid-xs text-white/30 mb-4 flex items-center justify-center gap-2">
                <Icon name="Users" size={14} style={{ color: 'rgba(0,255,136,0.5)' } as React.CSSProperties} />
                <span>Сейчас в клубе <strong className="text-white/60">35 из 50</strong> мест</span>
              </div>
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="neon-btn fluid-btn rounded-lg inline-flex items-center gap-2 uppercase tracking-widest">
                Занять место в клубе <Icon name="ArrowRight" size={16} />
              </a>
              <div className="fluid-xs text-white/20 mt-3">
                Откроется мой Telegram — там всё обсудим и оформим вступление
              </div>
              <div className="fluid-xs text-white/15 mt-1">После 50 участников цена — 14 900 ₽</div>
            </div>
          </div>
        </Reveal>

        <Bridge />

        {/* ===== 5. КАК ЭТО РАБОТАЕТ ===== */}
        <section className="section-spacing section-glow-cyan">
          <Reveal>
            <h2 className="font-oswald fluid-h2 font-bold mb-3">От нуля до денег за 4 шага</h2>
            <p className="text-white/30 fluid-sm mb-8">Весь процесс — от создания персонажа до первого дохода</p>
          </Reveal>

          <div className="space-y-3 mb-6">
            {[
              { n: "01", title: "Создаёшь лицо", text: "Нейросеть смешивает черты нескольких людей и создаёт нового, уникального человека. Этого человека не существует.", time: "10–15 мин" },
              { n: "02", title: "Обучаешь нейросеть", text: "Создаёшь набор фото персонажа в разных ракурсах. После этого нейросеть воспроизводит лицо стабильно.", time: "1–2 часа" },
              { n: "03", title: "Генерируешь контент", text: "Фотосессии, видео — танцы, повороты, ходьба. Всё на облачных серверах за $1–2 в час. За одну сессию — контент на месяц.", time: "2–3 часа" },
              { n: "04", title: "Строишь аудиторию", text: "Контент в TikTok и Instagram по системе прогрева. Аудитория растёт → часть переходит на платные площадки → деньги.", time: "∞" },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="step-card rounded-lg card-padding pl-7">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-oswald fluid-sm font-bold" style={{ color: '#00ff88' }}>{s.n}</span>
                      <span className="text-white/80 fluid-sm font-medium">{s.title}</span>
                    </div>
                    <span className="fluid-xs font-oswald px-2 py-0.5 rounded flex-shrink-0" style={{ background: 'rgba(0,255,136,0.06)', color: 'rgba(0,255,136,0.5)', border: '1px solid rgba(0,255,136,0.1)' }}>{s.time}</span>
                  </div>
                  <p className="text-white/40 fluid-sm">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center py-5 rounded-lg font-oswald fluid-sm tracking-wider" style={{ background: 'linear-gradient(135deg, rgba(0,255,136,0.06), rgba(0,229,255,0.04))', border: '1px solid rgba(0,255,136,0.12)', color: '#00ff88' }}>
              Стоимость запуска одного персонажа от нуля до первого видео: $15–20
            </div>
          </Reveal>
        </section>

        <Bridge />

        {/* ===== 6. ГДЕ ПОДВОХ ===== */}
        <section className="section-spacing">
          <Reveal>
            <h2 className="font-oswald fluid-h2 font-bold mb-3">Создать персонажа — это 10% дела</h2>
            <p className="text-white/30 fluid-sm mb-8">Остальные 90% — привлечь аудиторию и превратить её в деньги</p>
          </Reveal>

          <Reveal>
            <div className="space-y-3 mb-6">
              {[
                "Сделал красивый контент — а куда его, с какой стратегией?",
                "Выложил в TikTok — аккаунт заблокировали. Без прогрева это вопрос дней.",
                "Набрал подписчиков — человек написал «привет», промолчал. Он ушёл.",
                "Делаешь контент — но не знаешь что сейчас залетает.",
              ].map(t => (
                <div key={t} className="flex items-start gap-2.5"><span className="text-white/15 mt-0.5 flex-shrink-0">—</span><p className="text-white/45 fluid-sm">{t}</p></div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="pull-quote my-8">
              <P accent>Умение создавать контент без системы продвижения и заработка — хобби. С системой — бизнес.</P>
            </div>
          </Reveal>
        </section>

        <Bridge />

        {/* ===== 7. ЧТО ВНУТРИ ===== */}
        <section className="section-spacing section-glow-green">
          <Reveal>
            <h2 className="font-oswald fluid-h2 font-bold mb-3">Всё что нужно для старта — уже готово</h2>
            <p className="text-white/30 fluid-sm mb-8">Не курс с видео. Закрытый клуб с системой, шаблонами и поддержкой. Зашёл — делаешь.</p>
          </Reveal>

          <Screenshot id="club-telegram" label="Структура клуба в Telegram" sublabel="Разделы: старт, прогрев, контент, монетизация, автоматизация" />

          <Reveal><div className="fluid-xs font-oswald tracking-[0.15em] uppercase text-white/25 mb-8">35 человек — от программистов до бухгалтеров, от Москвы до Берлина.</div></Reveal>

          <div className="space-y-3 mb-6">
            {[
              { title: "Создание персонажа с нуля", text: "Пошаговые видео. От регистрации до готового лица — за первый день." },
              { title: "Прогрев TikTok и Instagram", text: "План на 14 дней — что постить, когда, сколько. Без этого бан на первой неделе." },
              { title: "Контент для взрослых площадок", text: "80% дохода — контент 18+. Легально, на специализированных платформах. Готовые инструкции." },
              { title: "Шаблоны генерации", text: "Готовые настройки для фото и видео, которые я собирал 4 месяца. Обновляются постоянно." },
              { title: "Система монетизации", text: "Воронка: как привлечь подписчиков, как удерживать, как масштабировать доход." },
              { title: "Скрипты общения", text: "Готовые сценарии — что писать, когда, как превращать подписчиков в платящих. Это утроило мой доход." },
              { title: "Инструменты автоматизации", text: "Система которая сама находит тренды и предлагает идеи для контента. Обновления — первыми." },
              { title: "Закрытый чат + моя поддержка", text: "Вопросы возникают постоянно. Вместе разбираемся быстрее. Я лично отвечаю." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.15)' }}>
                    <Icon name="Check" size={11} style={{ color: '#00ff88' } as React.CSSProperties} />
                  </div>
                  <div><span className="text-white/80 fluid-sm font-medium">{item.title}. </span><span className="text-white/40 fluid-sm">{item.text}</span></div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>


        {/* ===== STATS VISUAL BREAK ===== */}
        <Reveal>
          <div className="visual-break rounded-xl" style={{ marginLeft: 0, marginRight: 0, border: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { n: "8", l: "Разделов" },
                { n: "35", l: "Участников" },
                { n: "∞", l: "Доступ" },
                { n: "24/7", l: "Поддержка" },
              ].map(s => (
                <div key={s.l} className="stat-block">
                  <div className="stat-number">{s.n}</div>
                  <div className="stat-label">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Bridge />

        {/* ===== 8. ДЛЯ КОГО ===== */}
        <section className="section-spacing">
          <Reveal>
            <h2 className="font-oswald fluid-h2 font-bold mb-8">Подойдёт ли это тебе</h2>
          </Reveal>

          <Reveal>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl card-padding-lg" style={{ background: 'rgba(0,255,136,0.03)', border: '1px solid rgba(0,255,136,0.1)' }}>
                <div className="fluid-xs font-oswald tracking-widest uppercase mb-4" style={{ color: 'rgba(0,255,136,0.6)' }}>Подходит</div>
                <div className="space-y-2.5">{["Есть 2–3 часа в день", "$50–70 на запуск модели", "Готов разбираться 2–3 недели", "Хочешь доход без привязки к лицу и месту", "Не боишься нового"].map(t => (<div key={t} className="flex items-start gap-2"><Icon name="Check" size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#00ff88' } as React.CSSProperties} /><span className="text-white/50 fluid-xs">{t}</span></div>))}</div>
              </div>
              <div className="rounded-xl card-padding-lg" style={{ background: 'rgba(255,50,50,0.02)', border: '1px solid rgba(255,50,50,0.06)' }}>
                <div className="fluid-xs font-oswald tracking-widest uppercase mb-4 text-red-400/50">Не подходит</div>
                <div className="space-y-2.5">{["Ищешь «кнопку бабло»", "Нет 2 часов в день", "Не готов вкладывать в запуск", "Ждёшь гарантий конкретной суммы", "Хочешь результат без усилий"].map(t => (<div key={t} className="flex items-start gap-2"><span className="text-red-400/40 flex-shrink-0 mt-0.5 text-xs">✕</span><span className="text-white/35 fluid-xs">{t}</span></div>))}</div>
              </div>
            </div>
          </Reveal>
        </section>

        <Bridge />

        {/* ===== 9. СТОИМОСТЬ ===== */}
        <section className="section-spacing section-glow-green">
          <Reveal>
            <h2 className="font-oswald fluid-h2 font-bold mb-3">Сколько ты вложишь и что получишь</h2>
            <p className="text-white/30 fluid-sm mb-8">Полная прозрачность: запуск, ежемесячные расходы, стоимость клуба</p>
          </Reveal>

          <Reveal>
            <div className="rounded-xl overflow-hidden mb-4" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="fluid-xs font-oswald tracking-widest uppercase text-white/25 px-5 pt-4 pb-2">Запуск одной модели</div>
              {[["VPN", "$5–10"], ["Облачный сервер", "$15–20"], ["Регистрация на площадке", "$30–40"]].map(([l, v]) => (<div key={l} className="flex justify-between px-5 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}><span className="text-white/45 fluid-sm">{l}</span><span className="text-white/75 fluid-sm font-oswald">{v}</span></div>))}
              <div className="flex justify-between px-5 py-3 font-medium" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}><span className="text-white/65 fluid-sm">Итого на старт</span><span className="text-white fluid-sm font-oswald">$50–70</span></div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-xl overflow-hidden mb-6" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="fluid-xs font-oswald tracking-widest uppercase text-white/25 px-5 pt-4 pb-2">Ежемесячно</div>
              {[["Сервер (пара часов)", "$3–5"], ["VPN", "$5–10"]].map(([l, v]) => (<div key={l} className="flex justify-between px-5 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}><span className="text-white/45 fluid-sm">{l}</span><span className="text-white/75 fluid-sm font-oswald">{v}</span></div>))}
              <div className="flex justify-between px-5 py-3 font-medium" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}><span className="text-white/65 fluid-sm">Итого в месяц</span><span className="text-white fluid-sm font-oswald">~$10–15</span></div>
            </div>
          </Reveal>

          {/* Comparison */}
          <Reveal>
            <h3 className="font-oswald fluid-sm font-bold tracking-wide uppercase text-white/40 mt-12 mb-4">Почему не курс за 50 000₽</h3>
            <div className="rounded-xl overflow-hidden mb-6" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="grid grid-cols-4 fluid-xs font-oswald tracking-wider uppercase px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
                <div className="text-white/25"></div><div className="text-white/25 text-center">Сам</div><div className="text-white/25 text-center">Курсы</div><div className="text-center" style={{ color: '#00ff88' }}>Клуб</div>
              </div>
              {[["Цена", "бесплатно", "30–50k ₽", "9 900 ₽"], ["Поддержка", "нет", "на время курса", "навсегда"], ["Обновления", "нет", "нет", "бесплатно"], ["Автоматизация", "нет", "нет", "да"], ["Шаблоны", "нет", "базовые", "все мои"], ["Скрипты общения", "нет", "нет", "готовые"], ["Срок до результата", "месяцы", "месяц", "дни"]].map(([label, s, k, c], i) => (
                <div key={i} className="grid grid-cols-4 fluid-xs px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.025)' }}>
                  <div className="text-white/40">{label}</div><div className="text-white/25 text-center">{s}</div><div className="text-white/25 text-center">{k}</div><div className="text-center font-medium compare-highlight rounded" style={{ color: '#00ff88' }}>{c}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <Bridge />

        {/* ===== 10. ЧЕСТНАЯ ЧАСТЬ ===== */}
        <section className="section-spacing">
          <Reveal>
            <h2 className="font-oswald fluid-h2 font-bold mb-8">Без розовых очков</h2>
          </Reveal>
          <Reveal>
            <div className="space-y-3 mb-6">
              {["Нет гарантий конкретного дохода. Кто обещает — врёт.", "Нет «нажми кнопку и получи деньги». Первые 2–3 недели нужно погрузиться.", "Это бизнес с порогом входа $50 — не волшебство, но и не миллионы на франшизу."].map(t => (<div key={t} className="flex items-start gap-2.5"><span className="text-red-400/40 mt-0.5 flex-shrink-0 text-xs">✕</span><p className="text-white/40 fluid-sm">{t}</p></div>))}
            </div>
          </Reveal>
          <Reveal>
            <div className="space-y-3 mb-6">
              {["Готовая система + проверенные инструменты + 35 человек рядом.", "Можно совмещать с работой. Нет дедлайнов. В своём темпе."].map(t => (<div key={t} className="flex items-start gap-2.5"><Icon name="Check" size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#00ff88' } as React.CSSProperties} /><p className="text-white/55 fluid-sm">{t}</p></div>))}
            </div>
          </Reveal>
        </section>

        <Bridge />

        {/* ===== 11. FAQ ===== */}
        <section className="section-spacing">
          <Reveal>
            <h2 className="font-oswald fluid-h2 font-bold mb-8">Частые вопросы</h2>
          </Reveal>
          <Reveal>
            <div className="mb-8">
              {[
                { q: "Это легально?", a: "Да. Ты создаёшь полностью вымышленного персонажа — ничьё реальное лицо не используется. Площадки (Fanvue, Patreon и другие) имеют правила для AI-контента и позволяют его размещать." },
                { q: "Я не технарь. Смогу?", a: "В клубе 35 человек — среди них бухгалтеры, менеджеры, фрилансеры. Все инструкции на видео. Если умеешь скачать приложение — справишься." },
                { q: "Почему так дёшево?", a: "Мне не нужно окупать продюсерскую команду и отдел продаж. Я один. Мне важнее собрать сильное сообщество — это делает клуб ценнее для всех." },
                { q: "А если не получится?", a: "Возможно. Но: все ошибки на которые я потратил 2 месяца — в клубе закрыты с первого дня. Готовая система + 35 человек рядом. Шансы выше." },
                { q: "Сколько реально можно заработать?", a: "Мой результат: $1,875 за 3 месяца с одной модели. Другие на рынке: от $2,500/мес у начинающих до $10,000–23,000/мес у тех кто полгода+." },
                { q: "Нужен мощный компьютер?", a: "Нет. Генерация на облачных серверах за $1–2 в час. Нужен только ноутбук с интернетом." },
              ].map((item, i) => (<FAQItem key={i} q={item.q} a={item.a} open={faqOpen === i} onClick={() => setFaqOpen(faqOpen === i ? null : i)} />))}
            </div>
          </Reveal>
        </section>


        {/* ===== 12. ФИНАЛЬНЫЙ CTA ===== */}
        <section id="записаться" className="py-16 md:py-24 section-glow-green">
          <div className="neon-divider mb-12" />

          {/* Urgency block */}
          <Reveal>
            <div className="rounded-xl card-padding mb-8 text-center" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center justify-center gap-3 mb-3">
                <Icon name="Users" size={18} style={{ color: '#00ff88' } as React.CSSProperties} />
                <span className="font-oswald fluid-sm tracking-wide text-white/60">Занято <strong className="text-white">35</strong> из <strong className="text-white">50</strong> мест</span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden mb-3" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div className="h-full rounded-full" style={{ width: '70%', background: 'linear-gradient(90deg, #00ff88, #00e5ff)', boxShadow: '0 0 12px rgba(0,255,136,0.4)' }} />
              </div>
              <p className="fluid-xs text-white/25">После 50 участников цена вырастет до <strong className="text-white/50">14 900 ₽</strong></p>
            </div>
          </Reveal>

          <Reveal>
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="font-oswald text-white/25 fluid-sm line-through">14 900 ₽</span>
                <span className="font-oswald font-bold gradient-text" style={{ fontSize: 'clamp(3rem, 4vw + 1rem, 5rem)' }}>9 900 ₽</span>
              </div>
              <div className="text-white/50 fluid-body mb-1">Один раз. Навсегда.</div>
              <div className="text-white/25 fluid-sm max-w-lg mx-auto">Заплатил один раз — получил всё. Обновления, новые инструменты, поддержка — навсегда.</div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(0,255,136,0.15)', background: 'rgba(0,255,136,0.02)' }}>
              {/* Header */}
              <div className="px-6 pt-7 pb-5 text-center" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative" style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00e5ff 100%)', boxShadow: '0 0 30px rgba(0,255,136,0.3)' }}>
                  <Icon name="Send" size={28} style={{ color: '#000' } as React.CSSProperties} />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-background animate-pulse" />
                </div>
                <div className="font-oswald fluid-body font-bold mb-2">Вступить в клуб — 9 900 ₽</div>
                <p className="fluid-xs text-white/35 max-w-xs mx-auto">Нажми кнопку ниже — откроется мой личный диалог в Telegram. Там обсудим детали и оформим вступление</p>
              </div>

              {/* TG button */}
              <div className="p-6 space-y-4">
                <a
                  href={TG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn w-full py-4 rounded-xl uppercase tracking-widest fluid-btn flex items-center justify-center gap-3 pulse-neon"
                >
                  Начать зарабатывать <Icon name="ArrowRight" size={18} />
                </a>
                <p className="fluid-xs text-white/20 text-center">
                  ↑ Откроет Telegram — это мой личный чат, отвечаю сам
                </p>

                {/* Trust row */}
                <div className="flex items-center justify-center gap-5 flex-wrap pt-1">
                  {[
                    { icon: "Zap", text: "Отвечаю быстро" },
                    { icon: "Shield", text: "Доступ навсегда" },
                    { icon: "RefreshCw", text: "Обновления бесплатно" },
                  ].map(g => (
                    <div key={g.text} className="flex items-center gap-1.5">
                      <Icon name={g.icon} size={12} style={{ color: 'rgba(0,255,136,0.45)' } as React.CSSProperties} />
                      <span className="fluid-xs text-white/25">{g.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat preview */}
              <div className="px-6 pb-6">
                <div className="rounded-xl p-4 space-y-3" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <div className="fluid-xs text-white/20 font-oswald tracking-widest uppercase mb-3">Пример диалога</div>
                  {[
                    { from: false, text: "Привет! Хочу узнать про клуб", time: "10:14" },
                    { from: true, text: "Привет! Расскажи немного о себе — есть опыт с соцсетями? Сколько времени готов уделять?", time: "10:15" },
                    { from: false, text: "Нет опыта, могу 2-3 часа в день", time: "10:16" },
                    { from: true, text: "Отлично — как раз под это заточена система. Первые результаты обычно через 3–4 недели 🎯", time: "10:17" },
                  ].map((m, i) => (
                    <div key={i} className={`flex ${m.from ? 'justify-start' : 'justify-end'}`}>
                      <div className="max-w-[80%] rounded-2xl px-3.5 py-2.5" style={{
                        background: m.from ? 'rgba(0,255,136,0.08)' : 'rgba(255,255,255,0.06)',
                        borderRadius: m.from ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                        border: m.from ? '1px solid rgba(0,255,136,0.1)' : '1px solid rgba(255,255,255,0.05)'
                      }}>
                        <p className="fluid-xs leading-relaxed" style={{ color: m.from ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.5)' }}>{m.text}</p>
                        <span className="fluid-xs block mt-1 text-right" style={{ color: 'rgba(255,255,255,0.2)', fontSize: '10px' }}>{m.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <p className="fluid-xs text-white/15 text-center mt-8 max-w-md mx-auto">Результаты — мой личный опыт. Ваш результат зависит от вложенных усилий, времени и рыночных условий.</p>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="py-6 relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="font-oswald fluid-xs font-bold tracking-widest text-white/20">AI MODELS FACTORY</div>
          <div className="fluid-xs text-white/10">© 2026</div>
        </div>
      </footer>
    </div>
  );
}