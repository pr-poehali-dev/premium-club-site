import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/619405aa-a78f-42cb-a5c0-ba86a35c55a1/files/b8a97a42-24a2-4662-a883-591690c97c67.jpg";

const INCOME_STATS = [
  { month: "Февраль", amount: "$40", note: "первый месяц, ошибки" },
  { month: "Март", amount: "$927", note: "разобрался с системой" },
  { month: "Апрель", amount: "$745", note: "за 8 дней", highlight: true },
];

const MISTAKES = [
  {
    num: "01",
    icon: "Ban",
    title: "Бан аккаунта",
    desc: "Первый TikTok — бан через 5 дней. Второй — через неделю. Потерял 2 аккаунта и $100 на контент. Без прогрева это вопрос дней.",
  },
  {
    num: "02",
    icon: "Cpu",
    title: "Нестабильное лицо",
    desc: "Неделя убита на настройку генерации. Нейросеть которая запоминает лицо — штука капризная. Первые три попытки — мусор.",
  },
  {
    num: "03",
    icon: "MessageCircleOff",
    title: "Молчал с подписчиками",
    desc: "Человек подписывается, пишет «привет» — я не знаю что ответить. Он уходит. $20–50 потенциального дохода испарились.",
  },
];

const STEPS = [
  {
    num: "01",
    icon: "Sparkles",
    title: "Создаёшь лицо",
    desc: "Берёшь пару фото разных людей. Нейросеть смешивает черты и создаёт новое уникальное лицо. 10–15 минут.",
    time: "10–15 мин",
  },
  {
    num: "02",
    icon: "ScanFace",
    title: "Нейросеть запоминает",
    desc: "Создаёшь набор фото в разных ракурсах. После этого нейросеть стабильно воспроизводит одно и то же лицо.",
    time: "1–2 часа",
  },
  {
    num: "03",
    icon: "Film",
    title: "Генерируешь контент",
    desc: "Фотосессии в любых стилях, видео. Всё на облачных серверах за $1–2 в час. За одну сессию — контент на месяц.",
    time: "2–3 часа",
  },
  {
    num: "04",
    icon: "TrendingUp",
    title: "Строишь аудиторию",
    desc: "TikTok и Instagram по системе прогрева. Аудитория растёт, часть переходит на платные площадки. Ты общаешься по скриптам.",
    time: "от $0",
  },
];

const INSIDE = [
  { icon: "Play", title: "Старт + создание персонажа", desc: "Пошаговые видео-инструкции. От регистрации до готового лица за первый день. Не нужно быть технарём." },
  { icon: "Shield", title: "Прогрев TikTok и Instagram", desc: "План на 14 дней — что постить, когда, сколько. Без этого бан на первой неделе. С этим — стабильный рост." },
  { icon: "Zap", title: "Шаблоны для генерации", desc: "Готовые настройки, которые я собирал 4 месяца методом проб и ошибок. Обновляются постоянно." },
  { icon: "DollarSign", title: "Монетизация", desc: "Пошаговая воронка: привлечь, удержать, масштабировать. Площадки с платным контентом, шаг за шагом." },
  { icon: "MessageSquare", title: "Сценарии общения", desc: "Готовые скрипты — что писать, когда, как превращать подписчиков в платящих. Именно это утроило мой доход." },
  { icon: "Bot", title: "Автоматизация", desc: "Система которая сама находит тренды и генерирует контент. Базовые инструменты уже работают." },
];

const COSTS = [
  { label: "VPN", value: "$5–10", period: "мес" },
  { label: "Облачный сервер", value: "$3–5", period: "мес" },
  { label: "Первый запуск", value: "$50–70", period: "один раз" },
  { label: "Членство в клубе", value: "9 900 ₽", period: "навсегда", highlight: true },
];

export default function Index() {
  const [open, setOpen] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [tg, setTg] = useState("");
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && tg) setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-golos overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-oswald text-lg font-bold tracking-widest">
            AI <span style={{ color: '#00ff88' }}>MODELS</span> FACTORY
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Как это работает", "Что внутри", "Стоимость", "Занять место"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="text-xs text-white/50 hover:text-white transition-colors font-oswald tracking-widest uppercase">
                {item}
              </a>
            ))}
          </div>
          <a href="#занять-место"
            className="hidden md:block neon-btn px-4 py-2 text-xs rounded uppercase tracking-widest">
            9 900 ₽
          </a>
          <button className="md:hidden text-white/60" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/5 px-4 py-4 flex flex-col gap-4">
            {["Как это работает", "Что внутри", "Стоимость", "Занять место"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                onClick={() => setMenuOpen(false)}
                className="text-xs text-white/60 font-oswald tracking-widest uppercase">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* bg image */}
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover object-top opacity-40" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.3) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a0a 15%, transparent 60%)' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-2xl">
            {/* badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-oswald tracking-[0.2em] uppercase mb-8"
              style={{ border: '1px solid rgba(0,255,136,0.25)', background: 'rgba(0,255,136,0.06)', color: 'rgba(0,255,136,0.8)' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block pulse-neon" style={{ background: '#00ff88' }} />
              35 участников · закрытый клуб
            </div>

            {/* headline */}
            <h1 className="font-oswald text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              <span className="text-white">$745</span>{" "}
              <span className="text-white/40 text-3xl md:text-4xl font-light">за</span>
              <br />
              <span style={{ color: '#00ff88', textShadow: '0 0 30px rgba(0,255,136,0.35)' }}>8 ДНЕЙ.</span>
              <br />
              <span className="text-white">ВИРТУАЛЬНЫЙ</span>
              <br />
              <span className="text-white">ИНФЛЮЕНСЕР.</span>
            </h1>

            <p className="text-white/55 text-lg leading-relaxed mb-3 max-w-xl">
              Несуществующий человек. Лицо создала нейросеть. Фотосессии делает нейросеть. Видео снимает нейросеть.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl font-medium">
              А подписчики платят настоящие деньги.
            </p>

            {/* income progress */}
            <div className="flex flex-col gap-2 mb-10 max-w-md">
              {INCOME_STATS.map((s) => (
                <div key={s.month} className="flex items-center gap-4">
                  <div className="w-16 text-xs text-white/35 font-oswald">{s.month}</div>
                  <div className="flex-1 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <div className="h-full rounded-full transition-all"
                      style={{
                        width: s.highlight ? '100%' : s.amount === "$927" ? '74%' : '4%',
                        background: s.highlight ? '#00ff88' : 'rgba(255,255,255,0.25)',
                        boxShadow: s.highlight ? '0 0 12px rgba(0,255,136,0.6)' : 'none'
                      }} />
                  </div>
                  <div className="w-24 text-right">
                    <span className={`font-oswald text-sm font-bold ${s.highlight ? '' : 'text-white/60'}`}
                      style={s.highlight ? { color: '#00ff88' } : {}}>
                      {s.amount}
                    </span>
                    {s.highlight && <span className="text-xs text-white/35 block">{s.note}</span>}
                  </div>
                </div>
              ))}
              <div className="text-xs text-white/30 mt-1 ml-20">Рост в 18 раз с первого месяца. Одна модель.</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#занять-место"
                className="neon-btn px-8 py-4 text-sm rounded inline-flex items-center gap-2 justify-center uppercase tracking-widest">
                <Icon name="ArrowRight" size={16} />
                Занять место — 9 900 ₽
              </a>
              <a href="#как-это-работает"
                className="neon-btn-outline px-8 py-4 text-sm rounded inline-flex items-center gap-2 justify-center uppercase tracking-widest">
                Как это устроено
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ОШИБКИ */}
      <section className="py-20 border-y" style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.4)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-oswald tracking-[0.3em] uppercase mb-3" style={{ color: 'rgba(255,80,80,0.7)' }}>// 3 ошибки которые стоили мне $100 и 2 месяца</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-10">НА ЧЁМ БОЛЬШИНСТВО ТЕРЯЕТ ДЕНЬГИ</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {MISTAKES.map((m) => (
                <div key={m.num} className="rounded-lg p-6 relative"
                  style={{ background: 'rgba(255,60,60,0.04)', border: '1px solid rgba(255,60,60,0.12)' }}>
                  <div className="absolute top-4 right-4 font-oswald text-4xl font-bold text-white/5">{m.num}</div>
                  <div className="w-9 h-9 rounded flex items-center justify-center mb-4"
                    style={{ background: 'rgba(255,60,60,0.1)', border: '1px solid rgba(255,60,60,0.2)' }}>
                    <Icon name={m.icon} size={18} style={{ color: 'rgba(255,100,100,0.9)' } as React.CSSProperties} />
                  </div>
                  <h3 className="font-oswald text-base font-semibold mb-2 tracking-wide">{m.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-lg text-sm text-white/60 leading-relaxed"
              style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.12)' }}>
              <span style={{ color: '#00ff88' }} className="font-semibold">В клубе все три ошибки закрыты с первого дня.</span>{" "}
              Не нужно повторять мой путь — готовая система, проверенные инструменты, 35 человек рядом.
            </div>
          </div>
        </div>
      </section>

      {/* КАК ЭТО РАБОТАЕТ */}
      <section id="как-это-работает" className="py-24 grid-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-oswald tracking-[0.3em] uppercase mb-3" style={{ color: 'rgba(0,255,136,0.7)' }}>// Процесс</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-2">КАК ЭТО РАБОТАЕТ</h2>
            <p className="text-white/40 mb-12 text-sm">Стоимость запуска одного персонажа с нуля до первого видео: <span className="text-white/70">$15–20</span></p>
            <div className="grid md:grid-cols-2 gap-5">
              {STEPS.map((s) => (
                <div key={s.num} className="tech-card rounded-lg p-6 flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded flex items-center justify-center"
                      style={{ border: '1px solid rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.06)' }}>
                      <Icon name={s.icon} size={20} style={{ color: '#00ff88' } as React.CSSProperties} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-oswald text-base font-semibold tracking-wide">{s.title}</h3>
                      <span className="text-xs font-oswald px-2 py-0.5 rounded flex-shrink-0"
                        style={{ background: 'rgba(0,255,136,0.08)', color: 'rgba(0,255,136,0.7)', border: '1px solid rgba(0,255,136,0.15)' }}>
                        {s.time}
                      </span>
                    </div>
                    <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ЧТО ВНУТРИ */}
      <section id="что-внутри" className="py-24" style={{ background: 'rgba(0,0,0,0.35)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-oswald tracking-[0.3em] uppercase mb-3" style={{ color: 'rgba(0,255,136,0.7)' }}>// Клуб AI Models Factory</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-2">ЧТО ВНУТРИ</h2>
            <p className="text-white/40 mb-12 text-sm">Не курс с видеоуроками которые посмотришь и забудешь. Закрытое сообщество с готовой системой.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INSIDE.map((item) => (
                <div key={item.title} className="tech-card rounded-lg p-5 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                      style={{ border: '1px solid rgba(0,229,255,0.25)', background: 'rgba(0,229,255,0.06)' }}>
                      <Icon name={item.icon} size={16} style={{ color: '#00e5ff' } as React.CSSProperties} />
                    </div>
                    <h3 className="font-oswald text-sm font-semibold tracking-wide leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 18+ note */}
            <div className="mt-6 p-4 rounded-lg text-xs text-white/40 leading-relaxed"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="text-white/60 font-semibold">Про нишу 18+: </span>
              В этой нише 80% дохода приходит от контента для взрослых. Это легально — на специализированных площадках с правилами для такого контента. В клубе готовые инструменты и инструкции.
            </div>
          </div>
        </div>
      </section>

      {/* СТОИМОСТЬ */}
      <section id="стоимость" className="py-24 grid-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-oswald tracking-[0.3em] uppercase mb-3" style={{ color: 'rgba(0,255,136,0.7)' }}>// Честные цифры</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-12">СТОИМОСТЬ ВХОДА</h2>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* costs */}
              <div className="space-y-3">
                <div className="text-xs font-oswald tracking-widest uppercase text-white/30 mb-4">Расходы на бизнес</div>
                {COSTS.map((c) => (
                  <div key={c.label} className="flex items-center justify-between py-3 px-4 rounded"
                    style={c.highlight
                      ? { background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.2)' }
                      : { background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="text-sm text-white/60 font-oswald tracking-wide">{c.label}</span>
                    <div className="text-right">
                      <div className={`font-oswald font-bold text-base ${c.highlight ? '' : 'text-white'}`}
                        style={c.highlight ? { color: '#00ff88' } : {}}>
                        {c.value}
                      </div>
                      <div className="text-xs text-white/30">{c.period}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* main cta */}
              <div className="rounded-lg p-8 text-center"
                style={{ border: '1px solid rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.04)', boxShadow: '0 0 40px rgba(0,255,136,0.08)' }}>
                <div className="text-xs font-oswald tracking-[0.2em] uppercase text-white/40 mb-3">Членство в клубе</div>
                <div className="font-oswald text-5xl font-bold mb-1" style={{ color: '#00ff88' }}>9 900 ₽</div>
                <div className="text-white/40 text-sm mb-6">один раз · навсегда</div>
                <div className="space-y-2 mb-8 text-left">
                  {["Доступ навсегда", "Все обновления бесплатно", "Закрытый чат Telegram", "Личные ответы автора", "Автоматизация — первым"].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-white/65">
                      <Icon name="Check" size={14} style={{ color: '#00ff88' } as React.CSSProperties} />
                      {f}
                    </div>
                  ))}
                </div>
                <a href="#занять-место"
                  className="neon-btn w-full py-4 rounded text-sm uppercase tracking-widest inline-flex items-center justify-center gap-2 pulse-neon">
                  <Icon name="ArrowRight" size={16} />
                  Занять место
                </a>
                <div className="text-xs text-white/25 mt-4">Похожие курсы без автоматизации — 30 000–50 000 ₽</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ЧЕСТНО */}
      <section className="py-16" style={{ background: 'rgba(0,0,0,0.5)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-xs font-oswald tracking-[0.3em] uppercase mb-6" style={{ color: 'rgba(255,255,136,0.6)' }}>// Честная часть</div>
            <div className="space-y-4">
              {[
                { icon: "X", text: "Нет гарантий конкретного дохода. Кто обещает — врёт." },
                { icon: "X", text: "Нет «нажми кнопку и получи деньги». Первые 2–3 недели нужно погрузиться." },
                { icon: "X", text: "Нет волшебства. Это бизнес — но с порогом входа $50–70." },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-red-400/60 mt-0.5 flex-shrink-0 text-sm">✕</span>
                  <span className="text-white/45 text-sm leading-relaxed">{item.text}</span>
                </div>
              ))}
              {[
                "Готовая система и проверенные инструменты",
                "35 человек рядом которые помогут когда застрянешь",
                "Можно совмещать с работой — нет дедлайнов, в своём темпе",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Icon name="Check" size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#00ff88' } as React.CSSProperties} />
                  <span className="text-white/65 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ЗАНЯТЬ МЕСТО */}
      <section id="занять-место" className="py-24 grid-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-xs font-oswald tracking-[0.3em] uppercase mb-3 text-center" style={{ color: 'rgba(0,255,136,0.7)' }}>// Заявка</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold mb-2 text-center">ЗАНЯТЬ МЕСТО</h2>
            <p className="text-white/40 text-sm text-center mb-10">Напиши — расскажу подробнее, отвечу на вопросы, помогу с оплатой</p>

            {sent ? (
              <div className="rounded-lg p-10 text-center"
                style={{ border: '1px solid rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.04)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ border: '1px solid rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.08)' }}>
                  <Icon name="CheckCircle" size={28} style={{ color: '#00ff88' } as React.CSSProperties} />
                </div>
                <h3 className="font-oswald text-xl font-bold mb-2" style={{ color: '#00ff88' }}>ЗАЯВКА ПРИНЯТА</h3>
                <p className="text-white/45 text-sm">Напишу в Telegram в течение нескольких часов. Держи телефон рядом!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="tech-card rounded-lg p-7 space-y-4">
                <div>
                  <label className="block text-xs font-oswald tracking-widest uppercase text-white/35 mb-2">Имя</label>
                  <input type="text" placeholder="Как тебя зовут?" value={name}
                    onChange={(e) => setName(e.target.value)} required
                    className="w-full rounded px-4 py-3 text-white text-sm focus:outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(0,255,136,0.4)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-oswald tracking-widest uppercase text-white/35 mb-2">Telegram</label>
                  <input type="text" placeholder="@username" value={tg}
                    onChange={(e) => setTg(e.target.value)} required
                    className="w-full rounded px-4 py-3 text-sm focus:outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'white' }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(0,255,136,0.4)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
                <button type="submit"
                  className="neon-btn w-full py-4 rounded uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                  <Icon name="Send" size={16} />
                  Занять место в клубе
                </button>
                <p className="text-xs text-white/22 text-center leading-relaxed">
                  Результаты в статье — мой личный опыт. Ваш результат зависит от вложенных усилий, времени и рыночных условий.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-oswald text-base font-bold tracking-widest">
            AI <span style={{ color: '#00ff88' }}>MODELS</span> FACTORY
          </div>
          <div className="text-xs text-white/20">© 2026 AI Models Factory. Все права защищены.</div>
        </div>
      </footer>

    </div>
  );
}
