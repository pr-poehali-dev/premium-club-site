import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/619405aa-a78f-42cb-a5c0-ba86a35c55a1/files/08a763fa-38c1-4fe7-a5cf-9fb687f4095d.jpg";

const NAV_ITEMS = ["О клубе", "Как это работает", "Доходы", "Обучение", "Контакты"];

const STATS = [
  { value: "3 200+", label: "участников" },
  { value: "₽847К", label: "средний доход за год" },
  { value: "94%", label: "остаются после 1 месяца" },
  { value: "48ч", label: "до первой прибыли" },
];

const HOW_IT_WORKS = [
  { step: "01", icon: "UserPlus", title: "Вступаешь в клуб", desc: "Заполняешь анкету — мы проверяем запрос и открываем доступ к закрытому Telegram-каналу." },
  { step: "02", icon: "BookOpen", title: "Проходишь обучение", desc: "Структурированные уроки, живые разборы и готовые стратегии. Учишься в своём темпе." },
  { step: "03", icon: "TrendingUp", title: "Применяешь на практике", desc: "Сигналы, инструменты и поддержка куратора — действуешь, а не просто смотришь." },
  { step: "04", icon: "DollarSign", title: "Получаешь результат", desc: "Первые деньги можно получить уже через 48 часов после вступления." },
];

const LEARNING = [
  { icon: "Zap", title: "Быстрый старт", desc: "5 уроков для новичков — от нуля до первой сделки" },
  { icon: "LineChart", title: "Технический анализ", desc: "Читай графики как профессионал — паттерны, уровни, тренды" },
  { icon: "Shield", title: "Риск-менеджмент", desc: "Защищай капитал — правила, которые сохраняют деньги" },
  { icon: "Bot", title: "Автоматизация", desc: "Торговые боты и скрипты — зарабатывай пока спишь" },
  { icon: "Users", title: "Психология трейдера", desc: "Дисциплина и холодная голова — главное конкурентное преимущество" },
  { icon: "Bell", title: "Сигналы 24/7", desc: "Горячие сигналы с точками входа и стопами в реальном времени" },
];

const RESULTS = [
  { name: "Алексей К.", tag: "@aleksey_k", amount: "+₽124 000", period: "за 3 месяца", avatar: "А" },
  { name: "Марина Т.", tag: "@marina_trade", amount: "+₽87 500", period: "за 2 месяца", avatar: "М" },
  { name: "Дмитрий В.", tag: "@dima_v", amount: "+₽210 000", period: "за 5 месяцев", avatar: "Д" },
  { name: "Ольга С.", tag: "@olga_s", amount: "+₽63 000", period: "за 1 месяц", avatar: "О" },
];

export default function Index() {
  const [deposit, setDeposit] = useState(500);
  const [months, setMonths] = useState(3);
  const [name, setName] = useState("");
  const [tg, setTg] = useState("");
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const income = Math.round(deposit * months * 0.6 * 1.2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && tg) setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-golos overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-neon-green/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-oswald text-xl font-bold tracking-widest" style={{ color: '#00ff88', textShadow: '0 0 20px rgba(0,255,136,0.4)' }}>
            PROFIT<span className="text-white">CLUB</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="text-sm text-white/60 hover:text-white transition-colors font-oswald tracking-wider uppercase"
                style={{ '--tw-text-opacity': '1' } as React.CSSProperties}>
                {item}
              </a>
            ))}
          </div>
          <a href="#контакты"
            className="hidden md:block neon-btn px-5 py-2 text-sm rounded uppercase tracking-wider">
            Вступить
          </a>
          <button className="md:hidden text-white/70" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/5 px-4 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-white/70 font-oswald tracking-wider uppercase">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* TICKER */}
      <div className="fixed top-16 left-0 right-0 z-40 border-b border-white/5 overflow-hidden h-8 flex items-center"
        style={{ background: 'rgba(0,255,136,0.05)' }}>
        <div className="ticker-inner flex gap-12 whitespace-nowrap text-xs font-oswald tracking-widest uppercase"
          style={{ color: 'rgba(0,255,136,0.7)' }}>
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>BTC +4.2% ▲</span>
              <span>ETH +2.8% ▲</span>
              <span>УЧАСТНИКОВ ОНЛАЙН: 847</span>
              <span>СИГНАЛОВ СЕГОДНЯ: 12</span>
              <span>ПРИБЫЛЬ КЛУБА СЕГОДНЯ: +₽382К</span>
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden grid-bg scanlines">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="hero" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), #0a0a0a)' }} />
        </div>
        <div className="absolute top-1/3 left-0 w-64 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,255,136,0.6))' }} />
        <div className="absolute bottom-1/3 right-0 w-96 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(0,229,255,0.4))' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-oswald tracking-[0.2em] uppercase mb-8"
              style={{ border: '1px solid rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.05)', color: '#00ff88' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block pulse-neon" style={{ background: '#00ff88' }} />
              Закрытый клуб • Ограниченный доступ
            </div>

            <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-tight mb-6">
              ЗАРАБАТЫВАЙ
              <br />
              <span className="glitch" style={{ color: '#00ff88', textShadow: '0 0 20px rgba(0,255,136,0.4), 0 0 40px rgba(0,255,136,0.2)' }}>НА ЦИФРОВЫХ</span>
              <br />
              АКТИВАХ
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Закрытый Telegram-клуб трейдеров: сигналы, обучение и сообщество, которое зарабатывает каждый день.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#контакты" className="neon-btn px-8 py-4 text-base rounded inline-flex items-center gap-2 justify-center">
                <Icon name="Send" size={18} />
                Вступить в клуб
              </a>
              <a href="#как-это-работает" className="neon-btn-outline px-8 py-4 text-base rounded inline-flex items-center gap-2 justify-center">
                Как это работает
                <Icon name="ChevronRight" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-4 md:right-12 hidden md:block">
          <div className="tech-card rounded p-4 w-52">
            <div className="text-xs text-white/40 font-oswald tracking-widest uppercase mb-1">Прибыль участника</div>
            <div className="text-3xl font-oswald font-bold" style={{ color: '#00ff88', textShadow: '0 0 20px rgba(0,255,136,0.4)' }}>+₽847К</div>
            <div className="text-xs text-white/40 mt-1">за последние 12 месяцев</div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y py-10" style={{ borderColor: 'rgba(0,255,136,0.1)', background: 'rgba(0,0,0,0.5)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-1 font-oswald"
                  style={{ color: '#00ff88', textShadow: '0 0 20px rgba(0,255,136,0.4)' }}>{s.value}</div>
                <div className="text-white/40 text-sm uppercase tracking-widest font-oswald">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О КЛУБЕ */}
      <section id="о-клубе" className="py-24 grid-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-oswald tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(0,255,136,0.7)' }}>// О клубе</div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6 leading-tight">
                МЕСТО, ГДЕ ДЕНЬГИ<br />
                <span style={{ color: '#00ff88', textShadow: '0 0 20px rgba(0,255,136,0.4)' }}>РАБОТАЮТ</span> НА ТЕБЯ
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                PROFIT CLUB — это закрытое сообщество трейдеров и инвесторов, которые системно зарабатывают на криптовалютном рынке. Без воды, без обещаний — только рабочие инструменты и реальные результаты.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Мы не продаём мечты. Мы учим работать с рынком профессионально: анализировать, рисковать осознанно и фиксировать прибыль.
              </p>
              <div className="flex flex-col gap-3">
                {["Ежедневные торговые сигналы", "Живые разборы сделок", "Личный куратор на первый месяц", "Закрытый чат с топ-трейдерами"].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={18} className="flex-shrink-0" style={{ color: '#00ff88' } as React.CSSProperties} />
                    <span className="text-white/80 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="tech-card rounded-lg p-8">
                <div className="text-xs font-oswald tracking-widest uppercase text-white/30 mb-6">// Статус системы</div>
                {[
                  { label: "Активных трейдеров", value: "3 247", cyan: false },
                  { label: "Открытых позиций", value: "142", cyan: true },
                  { label: "Прибыльных сигналов", value: "94%", cyan: false },
                  { label: "Обучающих модулей", value: "38", cyan: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.cyan ? '#00e5ff' : '#00ff88' }} />
                      <span className="text-white/50 text-sm font-oswald tracking-wide">{item.label}</span>
                    </div>
                    <span className="font-oswald text-white font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* КАК ЭТО РАБОТАЕТ */}
      <section id="как-это-работает" className="py-24" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-xs font-oswald tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(0,255,136,0.7)' }}>// Процесс</div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold">КАК ЭТО РАБОТАЕТ</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="tech-card rounded-lg p-6 relative group">
                <div className="absolute top-4 right-4 font-oswald text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                  {item.step}
                </div>
                <div className="w-10 h-10 rounded flex items-center justify-center mb-4"
                  style={{ border: '1px solid rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.05)' }}>
                  <Icon name={item.icon} size={20} style={{ color: '#00ff88' } as React.CSSProperties} />
                </div>
                <h3 className="font-oswald text-lg font-semibold mb-2 tracking-wide">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КАЛЬКУЛЯТОР */}
      <section id="доходы" className="py-24 grid-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-xs font-oswald tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(0,255,136,0.7)' }}>// Калькулятор</div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold">ПОСЧИТАЙ СВОЙ ДОХОД</h2>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            <div className="tech-card rounded-lg p-8">
              <div className="mb-8">
                <label className="block text-xs font-oswald tracking-widest uppercase text-white/40 mb-3">Стартовый депозит (₽)</label>
                <div className="mb-2">
                  <span className="font-oswald text-2xl font-bold" style={{ color: '#00ff88' }}>₽{deposit.toLocaleString("ru")}</span>
                </div>
                <input type="range" min={100} max={5000} step={100} value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="w-full cursor-pointer" style={{ accentColor: '#00ff88' }} />
                <div className="flex justify-between text-xs text-white/30 font-oswald mt-1">
                  <span>₽100</span><span>₽5 000</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-oswald tracking-widest uppercase text-white/40 mb-3">Период (месяцев)</label>
                <div className="mb-2">
                  <span className="font-oswald text-2xl font-bold" style={{ color: '#00ff88' }}>{months} мес.</span>
                </div>
                <input type="range" min={1} max={12} step={1} value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full cursor-pointer" style={{ accentColor: '#00ff88' }} />
                <div className="flex justify-between text-xs text-white/30 font-oswald mt-1">
                  <span>1 мес.</span><span>12 мес.</span>
                </div>
              </div>
            </div>

            <div className="tech-card rounded-lg p-8 flex flex-col items-center justify-center text-center"
              style={{ borderColor: '#00ff88', boxShadow: '0 0 10px rgba(0,255,136,0.3), inset 0 0 10px rgba(0,255,136,0.05)' }}>
              <div className="text-xs font-oswald tracking-[0.2em] uppercase text-white/40 mb-4">Прогноз дохода</div>
              <div className="text-6xl font-bold mb-2 font-oswald"
                style={{ color: '#00ff88', textShadow: '0 0 20px rgba(0,255,136,0.4), 0 0 40px rgba(0,255,136,0.2)' }}>
                ₽{income.toLocaleString("ru")}
              </div>
              <div className="text-white/40 text-sm mb-6">
                за {months} {months === 1 ? "месяц" : months < 5 ? "месяца" : "месяцев"}
              </div>
              <div className="w-full rounded h-1.5 mb-2" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <div className="h-full rounded transition-all duration-500"
                  style={{ width: `${Math.min((income / 100000) * 100, 100)}%`, background: '#00ff88' }} />
              </div>
              <div className="text-xs text-white/30 mt-2">*прогноз на основе средней доходности участников</div>
              <a href="#контакты" className="neon-btn px-6 py-3 rounded text-sm mt-6 w-full text-center uppercase tracking-wider">
                Хочу такой доход
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ОБУЧЕНИЕ */}
      <section id="обучение" className="py-24" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-xs font-oswald tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(0,255,136,0.7)' }}>// База знаний</div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold">СИСТЕМА ОБУЧЕНИЯ</h2>
            <p className="text-white/40 mt-4 max-w-xl mx-auto">38 модулей от базового до продвинутого уровня. Учись в своём темпе — материалы доступны 24/7</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {LEARNING.map((item) => (
              <div key={item.title} className="tech-card rounded-lg p-6 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                    style={{ border: '1px solid rgba(0,229,255,0.3)', background: 'rgba(0,229,255,0.05)' }}>
                    <Icon name={item.icon} size={20} style={{ color: '#00e5ff' } as React.CSSProperties} />
                  </div>
                  <div>
                    <h3 className="font-oswald text-base font-semibold tracking-wide mb-1">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* РЕЗУЛЬТАТЫ */}
      <section className="py-24 grid-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-xs font-oswald tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(0,255,136,0.7)' }}>// Реальные люди</div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold">РЕЗУЛЬТАТЫ УЧАСТНИКОВ</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESULTS.map((r) => (
              <div key={r.name} className="tech-card rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-oswald font-bold"
                    style={{ border: '1px solid rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.1)', color: '#00ff88' }}>
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-oswald text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-white/30">{r.tag}</div>
                  </div>
                </div>
                <div className="text-3xl font-oswald font-bold mb-1"
                  style={{ color: '#00ff88', textShadow: '0 0 20px rgba(0,255,136,0.4)' }}>{r.amount}</div>
                <div className="text-xs text-white/40">{r.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФОРМА */}
      <section id="контакты" className="py-24" style={{ background: 'rgba(0,0,0,0.5)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-12">
              <div className="text-xs font-oswald tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(0,255,136,0.7)' }}>// Заявка</div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-4">ВСТУПИТЬ В КЛУБ</h2>
              <p className="text-white/40">Оставь заявку — мы свяжемся в Telegram в течение 2 часов</p>
            </div>

            {sent ? (
              <div className="tech-card rounded-lg p-10 text-center"
                style={{ borderColor: '#00ff88', boxShadow: '0 0 10px rgba(0,255,136,0.3)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ border: '1px solid rgba(0,255,136,0.4)', background: 'rgba(0,255,136,0.1)' }}>
                  <Icon name="CheckCircle" size={32} style={{ color: '#00ff88' } as React.CSSProperties} />
                </div>
                <h3 className="font-oswald text-2xl font-bold mb-2" style={{ color: '#00ff88' }}>ЗАЯВКА ПРИНЯТА</h3>
                <p className="text-white/50 text-sm">Мы напишем тебе в Telegram в течение 2 часов. Будь на связи!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="tech-card rounded-lg p-8 space-y-5">
                <div>
                  <label className="block text-xs font-oswald tracking-widest uppercase text-white/40 mb-2">Имя</label>
                  <input type="text" placeholder="Как тебя зовут?" value={name}
                    onChange={(e) => setName(e.target.value)} required
                    className="w-full rounded px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(0,255,136,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-oswald tracking-widest uppercase text-white/40 mb-2">Telegram</label>
                  <input type="text" placeholder="@username" value={tg}
                    onChange={(e) => setTg(e.target.value)} required
                    className="w-full rounded px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(0,255,136,0.5)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
                <button type="submit"
                  className="neon-btn w-full py-4 rounded uppercase tracking-widest text-sm flex items-center justify-center gap-2 pulse-neon">
                  <Icon name="Send" size={18} />
                  Отправить заявку
                </button>
                <p className="text-xs text-white/25 text-center">Принимаем ограниченное число участников каждый месяц</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-oswald text-xl font-bold tracking-widest">
              PROFIT<span style={{ color: '#00ff88' }}>CLUB</span>
            </div>
            <div className="flex gap-6 text-xs text-white/30 font-oswald tracking-widest uppercase">
              <a href="#" className="hover:text-white transition-colors">Конфиденциальность</a>
              <a href="#" className="hover:text-white transition-colors">Условия</a>
              <a href="#контакты" className="hover:text-white transition-colors">Контакты</a>
            </div>
            <div className="text-xs text-white/20">© 2024 PROFIT CLUB. Все права защищены.</div>
          </div>
        </div>
      </footer>

    </div>
  );
}