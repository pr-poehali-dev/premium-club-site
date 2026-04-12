import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/619405aa-a78f-42cb-a5c0-ba86a35c55a1/files/b8a97a42-24a2-4662-a883-591690c97c67.jpg";

const Screenshot = ({ label, sublabel, id }: { label: string; sublabel: string; id: string }) => (
  <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(0,255,136,0.2)', background: 'rgba(0,0,0,0.6)' }}>
    {/* Заглушка — замени src на реальный скриншот: /screenshots/{id}.png */}
    <img
      src={`/screenshots/${id}.png`}
      alt={label}
      className="w-full"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const parent = target.parentElement;
        if (parent && !parent.querySelector('.placeholder-box')) {
          const div = document.createElement('div');
          div.className = 'placeholder-box';
          div.style.cssText = 'aspect-ratio:16/10;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,255,136,0.03);padding:2rem;';
          div.innerHTML = `<div style="width:48px;height:48px;border-radius:8px;border:1px dashed rgba(0,255,136,0.25);display:flex;align-items:center;justify-content:center;margin-bottom:12px"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,255,136,0.4)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg></div><div style="font-family:Oswald;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.25);text-align:center">${label}</div><div style="font-size:10px;color:rgba(255,255,255,0.15);margin-top:4px;text-align:center">Файл: /screenshots/${id}.png</div>`;
          parent.appendChild(div);
        }
      }}
    />
    <div className="px-4 py-3" style={{ background: 'rgba(0,0,0,0.4)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="text-xs font-oswald tracking-wider uppercase text-white/50">{label}</div>
      <div className="text-xs text-white/25 mt-0.5">{sublabel}</div>
    </div>
  </div>
);

export default function Index() {
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
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="font-oswald text-sm font-bold tracking-widest">
            AI <span style={{ color: '#00ff88' }}>MODELS</span> FACTORY
          </div>
          <a href="#занять-место"
            className="neon-btn px-4 py-1.5 text-xs rounded uppercase tracking-widest">
            Занять место
          </a>
          <button className="md:hidden text-white/60 hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name="Menu" size={20} />
          </button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center pt-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover object-top opacity-30" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.97) 40%, rgba(0,0,0,0.5) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a0a 10%, transparent 50%)' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-[1.02] mb-6">
              <span style={{ color: '#00ff88', textShadow: '0 0 40px rgba(0,255,136,0.4)' }}>$745</span>
              <span className="text-white/30 text-3xl md:text-4xl font-light"> за </span>
              <span style={{ color: '#00ff88', textShadow: '0 0 40px rgba(0,255,136,0.4)' }}>8 дней.</span>
              <br />
              <span className="text-white text-4xl md:text-5xl">Виртуальный инфлюенсер.</span>
              <br />
              <span className="text-white text-4xl md:text-5xl">Настоящие деньги.</span>
            </h1>

            <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
              Как я создал несуществующего человека с помощью нейросети — и он приносит мне деньги каждый день.
            </p>

            <a href="#история" className="neon-btn-outline px-6 py-3 text-sm rounded inline-flex items-center gap-2 uppercase tracking-widest">
              Читать историю
              <Icon name="ChevronDown" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== ИСТОРИЯ — длинный формат ===== */}
      <div id="история" className="max-w-2xl mx-auto px-4">

        {/* Блок 1: Контекст */}
        <section className="py-16 md:py-24">
          <p className="text-white/60 text-base md:text-lg leading-[1.9] mb-8">
            $745 за первые 8 дней апреля. От виртуального инфлюенсера — персонажа, которого не существует в реальности. Его лицо создала нейросеть. Фотосессии делает нейросеть. Видео снимает нейросеть.
          </p>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed font-medium mb-10">
            А подписчики платят настоящие деньги.
          </p>

          <Screenshot id="april-income" label="Доход за апрель — $745 за 8 дней" sublabel="Скриншот дашборда с реальными выплатами" />
        </section>

        {/* Блок 2: Рост */}
        <section className="py-10 md:py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="font-oswald text-2xl md:text-3xl font-bold mb-6">Рост в 18 раз за 2 месяца</h2>

          <p className="text-white/55 text-base leading-[1.9] mb-6">
            Два месяца назад было $927 за полтора месяца. Сейчас столько набегает за полторы недели.
          </p>

          <Screenshot id="february-income" label="Доход за февраль — $927" sublabel="Полтора месяца работы, одна модель" />

          <div className="mt-8 mb-8 flex flex-col gap-2">
            {[
              { label: "Месяц 1", val: "$40", w: "4%", dim: true },
              { label: "Месяц 2", val: "$927", w: "62%", dim: false },
              { label: "Апрель, 8 дней", val: "$745", w: "100%", dim: false, glow: true },
            ].map(r => (
              <div key={r.label} className="flex items-center gap-3">
                <div className="w-28 text-xs text-white/35 font-oswald tracking-wide text-right flex-shrink-0">{r.label}</div>
                <div className="flex-1 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: r.w,
                      background: r.glow ? '#00ff88' : r.dim ? 'rgba(255,255,255,0.15)' : '#00ff88',
                      opacity: r.dim ? 0.5 : 1,
                      boxShadow: r.glow ? '0 0 15px rgba(0,255,136,0.6)' : 'none'
                    }} />
                </div>
                <span className="font-oswald text-sm font-bold w-14 flex-shrink-0"
                  style={r.glow ? { color: '#00ff88' } : r.dim ? { color: 'rgba(255,255,255,0.3)' } : { color: 'white' }}>
                  {r.val}
                </span>
              </div>
            ))}
          </div>

          <p className="text-white/50 text-base leading-[1.9]">
            Суммарно с февраля: <span className="text-white font-semibold">$1,875</span>. Одна модель, я один, аккаунт только раскачивается.
          </p>
          <p className="text-white/50 text-base leading-[1.9] mt-4">
            Сейчас покажу как это устроено. Без теории — моя реальная кухня. Сколько стоит, сколько времени занимает и где большинство людей теряют деньги.
          </p>
        </section>

        {/* Блок 3: Что такое виртуальные инфлюенсеры */}
        <section className="py-10 md:py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="font-oswald text-2xl md:text-3xl font-bold mb-6">Что такое виртуальные инфлюенсеры</h2>

          <p className="text-white/55 text-base leading-[1.9] mb-4">
            Есть направление которое растёт с бешеной скоростью.
          </p>
          <p className="text-white/55 text-base leading-[1.9] mb-6">
            Суть: нейросеть создаёт уникального персонажа. Лицо, которое не принадлежит ни одному реальному человеку. Дальше эта же нейросеть делает фотосессии в любых стилях, видео, контент. Ты публикуешь его в TikTok и Instagram. Аудитория растёт.
          </p>

          <div className="rounded-lg p-5 mb-8" style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.12)' }}>
            <div className="text-xs font-oswald tracking-[0.2em] uppercase text-white/35 mb-4">Как зарабатывают:</div>
            <div className="space-y-3">
              {[
                { icon: "Megaphone", text: "Реклама — бренды платят за размещение у инфлюенсера с аудиторией" },
                { icon: "ShoppingBag", text: "Свои продукты — направляешь трафик куда хочешь" },
                { icon: "CreditCard", text: "Платные площадки — подписчики платят за эксклюзивный контент и общение" },
              ].map(m => (
                <div key={m.text} className="flex items-start gap-3">
                  <Icon name={m.icon} size={16} className="flex-shrink-0 mt-1" style={{ color: '#00ff88' } as React.CSSProperties} />
                  <span className="text-white/55 text-sm leading-relaxed">{m.text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-white/70 text-base leading-[1.9] font-medium mb-4">
            Тот, у кого есть органический трафик, в деньгах не нуждается. Виртуальный инфлюенсер — это машина которая генерирует этот трафик. На любую аудиторию мира.
          </p>
          <p className="text-white/45 text-sm leading-relaxed">
            И это легально. Ты создаёшь полностью вымышленного персонажа. Ничьё настоящее лицо не используется. Площадки знают про AI-контент и имеют для него правила.
          </p>
        </section>

        {/* Блок 4: Моя история */}
        <section className="py-10 md:py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="font-oswald text-2xl md:text-3xl font-bold mb-6">Мой путь</h2>
          <p className="text-white/55 text-base leading-[1.9] mb-4">
            Я занимаюсь автоматизацией и AI-инструментами. Строю системы которые работают без постоянного участия человека. Это моя основная тема.
          </p>
          <p className="text-white/55 text-base leading-[1.9] mb-4">
            В декабре копался в западном рынке. Наткнулся на виртуальных инфлюенсеров. Купил курс у зарубежного эксперта. Начал разбираться.
          </p>
          <p className="text-white/55 text-base leading-[1.9] mb-2">
            Обалдел от двух вещей.
          </p>
          <p className="text-white/55 text-base leading-[1.9] mb-2">
            <span className="text-white/80 font-medium">Первая</span> — цифры. Люди зарабатывают от нескольких тысяч до десятков тысяч долларов в месяц. На персонажах которых не существует.
          </p>
          <p className="text-white/55 text-base leading-[1.9] mb-6">
            <span className="text-white/80 font-medium">Вторая</span> — почти все делают это вручную. Сидят часами: ищут идеи для контента, генерируют, обрабатывают, отвечают подписчикам. По полдня на одну модель.
          </p>
          <p className="text-white/45 text-sm leading-relaxed">
            Хотя сама генерация — не проблема. За пару часов на облачном сервере можно наделать контента на месяц. Настоящая проблема — понять ЧТО генерировать. Какой контент зайдёт, что сейчас в тренде.
          </p>
        </section>

        {/* Блок 5: Ошибки */}
        <section className="py-10 md:py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="font-oswald text-2xl md:text-3xl font-bold mb-3">Первый месяц — $40</h2>
          <p className="text-white/50 text-base leading-[1.9] mb-8">
            Не буду делать вид что сразу полетело. Почему так мало? Три конкретных ошибки.
          </p>

          <div className="space-y-5 mb-8">
            {[
              { n: "Ошибка 1", title: "Не знал как прогревать аккаунт", text: "Первый TikTok — бан через 5 дней. Второй — бан через неделю. Соцсети банят новые аккаунты если сразу начинаешь активно постить. Потерял 2 аккаунта и $100 на контент.", color: "rgba(255,70,70,0.7)" },
              { n: "Ошибка 2", title: "Убил неделю на настройку генерации", text: "Нейросеть которая запоминает лицо персонажа — штука капризная. Первые три попытки были мусором: лицо то не похоже, то «поплыло».", color: "rgba(255,70,70,0.7)" },
              { n: "Ошибка 3", title: "Не умел общаться с подписчиками", text: "Человек подписывается, пишет «привет» — а я не знаю что ответить. Он уходит. $20–50 потенциального дохода испарились.", color: "rgba(255,70,70,0.7)" },
            ].map(e => (
              <div key={e.n} className="rounded-lg p-5"
                style={{ background: 'rgba(255,50,50,0.04)', border: '1px solid rgba(255,50,50,0.1)' }}>
                <div className="text-xs font-oswald tracking-widest uppercase mb-2" style={{ color: e.color }}>{e.n}: {e.title}</div>
                <p className="text-white/50 text-sm leading-relaxed">{e.text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg p-5" style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.15)' }}>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,255,136,0.85)' }}>
              Когда закрыл все три ошибки — рост пошёл моментально. С $40 до $745 за 8 дней. Те самые ошибки, на которые я потратил 2 месяца — в клубе закрыты с первого дня.
            </p>
          </div>
        </section>

        {/* Блок 6: Как устроен процесс */}
        <section className="py-10 md:py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="font-oswald text-2xl md:text-3xl font-bold mb-8">Как это устроено</h2>

          <div className="space-y-6">
            {[
              { n: "1", title: "Создаёшь лицо", text: "Берёшь пару фотографий разных людей. Нейросеть смешивает черты и создаёт новое уникальное лицо. Этого человека не существует. 10–15 минут." },
              { n: "2", title: "Нейросеть запоминает это лицо", text: "Создаёшь набор фотографий персонажа в разных ракурсах. После этого нейросеть воспроизводит лицо стабильно — на каждом фото и видео один и тот же человек." },
              { n: "3", title: "Генерируешь контент", text: "Фотосессии в любых стилях — лайфстайл, фитнес, город, студия. Видео — танцы, повороты, ходьба. Всё на облачных серверах за $1–2 в час. За одну сессию — контент на целый месяц." },
              { n: "4", title: "Строишь аудиторию и зарабатываешь", text: "Контент публикуется в TikTok и Instagram. По системе прогрева — чтобы не словить бан. Аудитория растёт, часть переходит на платные площадки. Ты общаешься с подписчиками по готовым сценариям — и они платят." },
            ].map(s => (
              <div key={s.n} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded flex items-center justify-center font-oswald text-sm font-bold"
                  style={{ border: '1px solid rgba(0,255,136,0.3)', color: '#00ff88', background: 'rgba(0,255,136,0.06)' }}>
                  {s.n}
                </div>
                <div>
                  <h3 className="font-oswald text-base font-semibold mb-1">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center py-3 rounded font-oswald text-sm tracking-wider"
            style={{ background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.15)', color: '#00ff88' }}>
            Стоимость запуска одного персонажа от нуля до первого видео: $15–20
          </div>
        </section>

        {/* Блок 7: Честная часть */}
        <section className="py-10 md:py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="font-oswald text-2xl md:text-3xl font-bold mb-6">А теперь — честная часть</h2>

          <p className="text-white/60 text-base leading-[1.9] mb-4">
            Создать персонажа — это 10% дела. Остальные 90% — привлечь аудиторию и превратить её в деньги.
          </p>

          <div className="space-y-3 mb-6">
            {[
              "Сделал красивый контент — а куда его, с какой стратегией? Непонятно.",
              "Выложил в TikTok — аккаунт заблокировали. Потому что без прогрева это вопрос дней.",
              "Набрал подписчиков — человек написал «привет», ты промолчал. Он ушёл.",
              "Делаешь контент — но не знаешь что сейчас залетает.",
            ].map(t => (
              <div key={t} className="flex items-start gap-2.5">
                <span className="text-white/20 mt-1 flex-shrink-0">—</span>
                <p className="text-white/50 text-sm leading-relaxed">{t}</p>
              </div>
            ))}
          </div>

          <p className="text-white/70 text-base leading-[1.9] font-medium">
            Умение создавать контент без системы продвижения и заработка = хобби.
            <br />С системой = бизнес.
          </p>
        </section>

        {/* Блок 8: Клуб */}
        <section className="py-10 md:py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="font-oswald text-2xl md:text-3xl font-bold mb-4">
            Клуб <span style={{ color: '#00ff88' }}>AI Models Factory</span>
          </h2>
          <p className="text-white/50 text-base leading-[1.9] mb-4">
            Когда разобрался во всём на своих ошибках — упаковал это в закрытый клуб.
          </p>
          <p className="text-white/70 text-base leading-[1.9] font-medium mb-8">
            Не курс с видеоуроками которые посмотришь и забудешь. А закрытое сообщество в Telegram с готовой системой. Зашёл — и с первого раздела начал делать. Всё выстроено по шагам.
          </p>

          <Screenshot id="club-telegram" label="Структура клуба в Telegram" sublabel="Разделы: старт, прогрев, контент, монетизация, автоматизация" />

          <div className="mt-10 text-xs font-oswald tracking-[0.2em] uppercase text-white/30 mb-6">35 участников — от программистов до бухгалтеров, от Москвы до Берлина</div>

          <div className="space-y-4">
            {[
              { title: "Старт + создание персонажа", text: "Пошаговые видео-инструкции. От регистрации до готового лица — за первый день. Не нужно быть технарём — всё показано на экране, повторяешь за мной." },
              { title: "Прогрев TikTok и Instagram", text: "План на 14 дней — что постить, когда, сколько. Без этого бан на первой неделе. С этим — стабильный рост без блокировок." },
              { title: "Контент для взрослых", text: "В этой нише 80% дохода приходит от контента 18+. Это легально, на специализированных площадках с правилами для такого контента. В клубе — готовые инструменты и инструкции." },
              { title: "Все шаблоны для генерации", text: "Готовые настройки для создания фото и видео, которые я собирал 4 месяца методом проб и ошибок. В клубе бесплатно. Обновляются постоянно." },
              { title: "Монетизация", text: "Пошаговая воронка: как привлечь первых подписчиков, как удерживать, как масштабировать доход. Площадки типа Patreon, только для этой ниши." },
              { title: "Сценарии общения с подписчиками", text: "Готовые скрипты — что писать, когда, как превращать подписчиков в платящих. Именно это утроило мой доход." },
              { title: "Автоматизация", text: "Строю систему которая сама находит тренды, предлагает идеи для контента и генерирует ролики. Базовые инструменты уже работают. Каждое обновление участники получают первыми." },
              { title: "Закрытый чат", text: "Вопросы возникают постоянно. Вместе разбираемся быстрее. Плюс я лично отвечаю." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <Icon name="Check" size={14} className="flex-shrink-0 mt-1" style={{ color: '#00ff88' } as React.CSSProperties} />
                <div>
                  <span className="text-white/80 text-sm font-medium">{item.title}. </span>
                  <span className="text-white/45 text-sm leading-relaxed">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Блок 9: Расходы */}
        <section className="py-10 md:py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <h2 className="font-oswald text-2xl md:text-3xl font-bold mb-8">Сколько это стоит</h2>

          <div className="rounded-lg overflow-hidden mb-6" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-xs font-oswald tracking-widest uppercase text-white/30 px-5 pt-4 pb-2">Запуск</div>
            {[
              { l: "VPN", v: "$5–10" },
              { l: "Облачный сервер для первого персонажа", v: "$15–20" },
              { l: "Регистрация на площадке", v: "$30–40" },
            ].map(r => (
              <div key={r.l} className="flex justify-between px-5 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <span className="text-white/50 text-sm">{r.l}</span>
                <span className="text-white/80 text-sm font-oswald">{r.v}</span>
              </div>
            ))}
            <div className="flex justify-between px-5 py-3 font-medium" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
              <span className="text-white/70 text-sm">Итого запуск</span>
              <span className="text-white text-sm font-oswald">$50–70</span>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden mb-6" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-xs font-oswald tracking-widest uppercase text-white/30 px-5 pt-4 pb-2">Ежемесячно</div>
            {[
              { l: "Сервер: пара часов — контент на месяц", v: "$3–5" },
              { l: "VPN", v: "$5–10" },
            ].map(r => (
              <div key={r.l} className="flex justify-between px-5 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <span className="text-white/50 text-sm">{r.l}</span>
                <span className="text-white/80 text-sm font-oswald">{r.v}</span>
              </div>
            ))}
            <div className="flex justify-between px-5 py-3 font-medium" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
              <span className="text-white/70 text-sm">Итого в месяц</span>
              <span className="text-white text-sm font-oswald">~$10–15</span>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-xs font-oswald tracking-widest uppercase text-white/30 px-5 pt-4 pb-2">Мой доход (реальный, со скринами)</div>
            {[
              { l: "Месяц 1", v: "$40", note: "ошибки, баны, нулевая монетизация" },
              { l: "Месяц 2", v: "$927", note: "разобрался с прогревом и чаттингом" },
              { l: "Апрель, 8 дней", v: "$745", note: "рост продолжается", glow: true },
            ].map(r => (
              <div key={r.l} className="flex justify-between items-center px-5 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <div>
                  <span className="text-white/50 text-sm">{r.l}</span>
                  {r.note && <span className="text-white/25 text-xs ml-2">— {r.note}</span>}
                </div>
                <span className="text-sm font-oswald font-bold"
                  style={r.glow ? { color: '#00ff88', textShadow: '0 0 10px rgba(0,255,136,0.5)' } : { color: 'white' }}>
                  {r.v}
                </span>
              </div>
            ))}
          </div>

          <p className="text-white/50 text-sm leading-relaxed mt-6">
            С $40 до $745 за 8 дней — рост в 18 раз за 2 месяца. Одна модель.
          </p>
        </section>

        {/* Блок 10: Предупреждения */}
        <section className="py-10 md:py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="space-y-3 mb-6">
            {[
              "Нет гарантий конкретного дохода. Кто обещает гарантии — врёт.",
              "Нет «нажми кнопку и получи деньги». Первые 2–3 недели нужно погрузиться и разобраться. Это честно.",
              "Нет волшебства. Это бизнес. Но бизнес с порогом входа $50–70, а не миллионы на франшизу.",
            ].map(t => (
              <div key={t} className="flex items-start gap-2.5">
                <span className="text-red-400/50 mt-0.5 flex-shrink-0 text-xs">✕</span>
                <p className="text-white/45 text-sm leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {[
              "Есть: готовая система, проверенные инструменты",
              "35 человек рядом которые помогут когда застрянешь",
              "Можно совмещать с работой. Нет дедлайнов. В своём темпе.",
            ].map(t => (
              <div key={t} className="flex items-start gap-2.5">
                <Icon name="Check" size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#00ff88' } as React.CSSProperties} />
                <p className="text-white/60 text-sm leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Блок 11: Цена + CTA */}
        <section id="занять-место" className="py-16 md:py-24" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="text-center mb-10">
            <div className="font-oswald text-5xl md:text-6xl font-bold mb-2" style={{ color: '#00ff88', textShadow: '0 0 30px rgba(0,255,136,0.3)' }}>9 900 ₽</div>
            <div className="text-white/50 text-base mb-1">Один раз. Навсегда.</div>
            <div className="text-white/30 text-xs">Не подписка. Заплатил один раз — доступ ко всему навсегда. Все обновления, новые материалы, автоматизация — бесплатно.</div>
          </div>

          <div className="text-xs text-white/25 text-center mb-8">
            Для сравнения: похожие курсы без автоматизации — 30 000–50 000 руб.
          </div>

          {sent ? (
            <div className="rounded-lg p-10 text-center"
              style={{ border: '1px solid rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.04)' }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ border: '1px solid rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.08)' }}>
                <Icon name="CheckCircle" size={28} style={{ color: '#00ff88' } as React.CSSProperties} />
              </div>
              <h3 className="font-oswald text-xl font-bold mb-2" style={{ color: '#00ff88' }}>ЗАЯВКА ПРИНЯТА</h3>
              <p className="text-white/45 text-sm">Напишу в Telegram в ближайшее время. Отвечу на вопросы и помогу с оплатой.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-lg p-6 space-y-4"
              style={{ border: '1px solid rgba(0,255,136,0.15)', background: 'rgba(0,255,136,0.03)' }}>
              <div className="text-center mb-2">
                <div className="font-oswald text-base font-semibold tracking-wide mb-1">Напиши — расскажу подробнее</div>
                <div className="text-xs text-white/35">Отвечу на вопросы, помогу с оплатой</div>
              </div>
              <div>
                <input type="text" placeholder="Имя" value={name}
                  onChange={(e) => setName(e.target.value)} required
                  className="w-full rounded px-4 py-3 text-white text-sm focus:outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(0,255,136,0.4)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
              <div>
                <input type="text" placeholder="@username в Telegram" value={tg}
                  onChange={(e) => setTg(e.target.value)} required
                  className="w-full rounded px-4 py-3 text-sm focus:outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'white' }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(0,255,136,0.4)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>
              <button type="submit"
                className="neon-btn w-full py-4 rounded uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                <Icon name="ArrowRight" size={16} />
                Занять место в клубе
              </button>
            </form>
          )}

          <p className="text-xs text-white/20 text-center mt-6 leading-relaxed max-w-sm mx-auto">
            Результаты в статье — мой личный опыт. Ваш результат зависит от вложенных усилий, времени и рыночных условий.
          </p>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="py-6" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="font-oswald text-xs font-bold tracking-widest text-white/25">
            AI MODELS FACTORY
          </div>
          <div className="text-xs text-white/15">© 2026</div>
        </div>
      </footer>

    </div>
  );
}
