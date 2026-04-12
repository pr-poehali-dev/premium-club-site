import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/619405aa-a78f-42cb-a5c0-ba86a35c55a1/files/b8a97a42-24a2-4662-a883-591690c97c67.jpg";

const Screenshot = ({ label, sublabel, id }: { label: string; sublabel: string; id: string }) => (
  <div className="rounded-lg overflow-hidden my-8" style={{ border: '1px solid rgba(0,255,136,0.2)', background: 'rgba(0,0,0,0.6)' }}>
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

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="font-oswald text-2xl md:text-3xl font-bold mb-6 pt-10 md:pt-16"
    style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
    {title}
  </h2>
);

const P = ({ children, accent }: { children: React.ReactNode; accent?: boolean }) => (
  <p className={`text-base leading-[1.9] mb-4 ${accent ? 'text-white/80 font-medium' : 'text-white/55'}`}>
    {children}
  </p>
);

const G = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: '#00ff88' }}>{children}</span>
);

const W = ({ children }: { children: React.ReactNode }) => (
  <span className="text-white font-semibold">{children}</span>
);

export default function Index() {
  const [name, setName] = useState("");
  const [tg, setTg] = useState("");
  const [sent, setSent] = useState(false);

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
            AI <G>MODELS</G> FACTORY
          </div>
          <a href="#занять-место" className="neon-btn px-4 py-1.5 text-xs rounded uppercase tracking-widest">
            Занять место
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover object-top opacity-30" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.97) 40%, rgba(0,0,0,0.5) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0a0a 10%, transparent 50%)' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-[1.02] mb-6">
              <span style={{ color: '#00ff88', textShadow: '0 0 40px rgba(0,255,136,0.4)' }}>$745 за 8 дней.</span>
              <br />
              <span className="text-white text-4xl md:text-5xl">Виртуальный инфлюенсер.</span>
              <br />
              <span className="text-white text-4xl md:text-5xl">Настоящие деньги.</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
              Как я создал несуществующего человека с помощью нейросети — и он приносит мне деньги каждый день.
            </p>
            <a href="#история" className="neon-btn-outline px-6 py-3 text-sm rounded inline-flex items-center gap-2 uppercase tracking-widest">
              Читать историю <Icon name="ChevronDown" size={16} />
            </a>
          </div>
        </div>
      </section>


      {/* ==================== ИСТОРИЯ ==================== */}
      <div id="история" className="max-w-2xl mx-auto px-4">


        {/* -------- ЦИФРЫ -------- */}
        <section className="pt-16 md:pt-24 pb-10">
          <h2 className="font-oswald text-2xl md:text-3xl font-bold mb-6">Цифры</h2>

          <P>Апрель 2026, 8 дней. Одна модель.</P>

          <Screenshot id="april-income" label="Доход за апрель — $745 за 8 дней" sublabel="Скриншот дашборда с реальными выплатами" />

          <P>Два месяца назад было $927 за полтора месяца. Сейчас столько набегает за полторы недели. <W>Рост в 18 раз</W> с первого месяца.</P>

          <Screenshot id="february-income" label="Доход за февраль-март — $927" sublabel="Полтора месяца работы, одна модель" />

          <div className="my-8 flex flex-col gap-2">
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

          <P>Суммарно с февраля: <W>$1,875</W>. Одна модель, я один, аккаунт только раскачивается.</P>
          <P>Сейчас покажу как это устроено. Без теории — моя реальная кухня. Сколько стоит, сколько времени занимает и где большинство людей теряют деньги.</P>
        </section>


        {/* -------- ЧТО ЭТО ТАКОЕ -------- */}
        <SectionTitle title="Что это такое" />

        <P>Есть направление которое растёт с бешеной скоростью. Виртуальные инфлюенсеры.</P>

        <P>Суть: нейросеть создаёт уникального персонажа. Лицо, которое не принадлежит ни одному реальному человеку. Дальше эта же нейросеть делает фотосессии в любых стилях, видео, контент. Ты публикуешь его в TikTok и Instagram. Аудитория растёт.</P>

        <P accent>Дальше — монетизация:</P>

        <div className="rounded-lg p-5 mb-6" style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.12)' }}>
          <div className="space-y-3">
            {[
              ["Megaphone", "Реклама — бренды платят за размещение у инфлюенсера с аудиторией"],
              ["ShoppingBag", "Свои продукты — направляешь трафик куда хочешь"],
              ["CreditCard", "Платные площадки — подписчики платят за эксклюзивный контент и общение"],
            ].map(([icon, text]) => (
              <div key={text} className="flex items-start gap-3">
                <Icon name={icon} size={16} className="flex-shrink-0 mt-1" style={{ color: '#00ff88' } as React.CSSProperties} />
                <span className="text-white/60 text-sm leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <P accent>Тот, у кого есть органический трафик, в деньгах не нуждается. Виртуальный инфлюенсер — это машина которая генерирует этот трафик. На любую аудиторию мира.</P>

        <P>И это легально. Ты создаёшь полностью вымышленного персонажа. Ничьё настоящее лицо не используется. Площадки знают про AI-контент и имеют для него правила.</P>


        {/* -------- КАК Я НА ЭТО ВЫШЕЛ -------- */}
        <SectionTitle title="Как я на это вышел" />

        <P>Я занимаюсь автоматизацией и AI-инструментами. Строю системы которые работают без постоянного участия человека. Это моя основная тема.</P>

        <P>В декабре копался в западном рынке. Наткнулся на виртуальных инфлюенсеров. Купил курс у зарубежного эксперта. Начал разбираться.</P>

        <P>Обалдел от двух вещей.</P>

        <P><W>Первая</W> — цифры. Люди зарабатывают от нескольких тысяч до десятков тысяч долларов в месяц. На персонажах которых не существует.</P>

        <P><W>Вторая</W> — почти все делают это вручную. Сидят часами: ищут идеи для контента, генерируют, обрабатывают, отвечают подписчикам. По полдня на одну модель.</P>

        <P>Хотя сама генерация — не проблема. За пару часов на облачном сервере можно наделать контента на месяц. Настоящая проблема — понять <W>ЧТО</W> генерировать. Какой контент зайдёт, что сейчас в тренде.</P>


        {/* -------- ТРИ ОШИБКИ -------- */}
        <SectionTitle title="Три ошибки" />

        <P>Не буду делать вид что сразу полетело. <W>Первый месяц — $40.</W></P>
        <P>Почему так мало? Три конкретных ошибки.</P>

        <div className="space-y-4 my-6">
          {[
            {
              title: "Ошибка 1: не знал как прогревать аккаунт",
              text: "Первый TikTok — бан через 5 дней. Второй — бан через неделю. Соцсети банят новые аккаунты если сразу начинаешь активно постить. Потерял 2 аккаунта и $100 на контент."
            },
            {
              title: "Ошибка 2: убил неделю на настройку генерации",
              text: "Нейросеть которая запоминает лицо персонажа — штука капризная. Первые три попытки были мусором: лицо то не похоже, то «поплыло»."
            },
            {
              title: "Ошибка 3: не умел общаться с подписчиками",
              text: "Человек подписывается, пишет «привет» — а я не знаю что ответить. Он уходит. $20–50 потенциального дохода испарились."
            },
          ].map(e => (
            <div key={e.title} className="rounded-lg p-5"
              style={{ background: 'rgba(255,50,50,0.04)', border: '1px solid rgba(255,50,50,0.1)' }}>
              <div className="text-sm font-medium text-white/70 mb-2">{e.title}</div>
              <p className="text-white/45 text-sm leading-relaxed">{e.text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg p-5 mb-4" style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.15)' }}>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,255,136,0.85)' }}>
            Когда закрыл все три ошибки — рост пошёл моментально. С $40 до $745 за 8 дней. Те самые ошибки, на которые я потратил 2 месяца — <strong>в клубе закрыты с первого дня.</strong>
          </p>
        </div>


        {/* -------- КАК ЭТО РАБОТАЕТ -------- */}
        <SectionTitle title="Как это работает" />

        <div className="space-y-6 mb-6">
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
                <div className="text-white/80 text-sm font-medium mb-1">{s.title}</div>
                <p className="text-white/45 text-sm leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-3 rounded font-oswald text-sm tracking-wider mb-4"
          style={{ background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.15)', color: '#00ff88' }}>
          Стоимость запуска одного персонажа от нуля до первого видео: $15–20
        </div>


        {/* -------- ГДЕ ПОДВОХ -------- */}
        <SectionTitle title="Где подвох" />

        <P accent>Создать персонажа — это 10% дела. Остальные 90% — привлечь аудиторию и превратить её в деньги.</P>

        <div className="space-y-2 mb-6">
          {[
            "Сделал красивый контент — а куда его, с какой стратегией? Непонятно.",
            "Выложил в TikTok — аккаунт заблокировали. Потому что без прогрева это вопрос дней.",
            "Набрал подписчиков — человек написал «привет», ты промолчал. Он ушёл.",
            "Делаешь контент — но не знаешь что сейчас залетает. Часами ищешь идеи, половина не заходит.",
          ].map(t => (
            <div key={t} className="flex items-start gap-2.5">
              <span className="text-white/20 mt-0.5 flex-shrink-0">—</span>
              <p className="text-white/50 text-sm leading-relaxed">{t}</p>
            </div>
          ))}
        </div>

        <P>Это как уметь готовить — но открыть ресторан без меню, без официантов и без вывески.</P>

        <P accent>Умение создавать контент без системы продвижения и заработка = хобби. С системой = бизнес.</P>


        {/* -------- ЧТО Я СОБРАЛ -------- */}
        <SectionTitle title="Что я собрал" />

        <P>Когда разобрался во всём на своих ошибках — упаковал это в закрытый клуб.</P>

        <P accent>Не курс с видеоуроками которые посмотришь и забудешь. А закрытое сообщество в Telegram с готовой системой. Зашёл — и с первого раздела начал делать. Всё выстроено по шагам.</P>

        <Screenshot id="club-telegram" label="Структура клуба в Telegram" sublabel="Разделы: старт, прогрев, контент, монетизация, автоматизация" />

        <div className="text-xs font-oswald tracking-[0.15em] uppercase text-white/30 mb-8">
          Клуб AI Models Factory. 35 человек — от программистов до бухгалтеров, от Москвы до Берлина.
        </div>

        <div className="text-white/80 text-sm font-medium mb-4">Что внутри:</div>

        <div className="space-y-4 mb-6">
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


        {/* -------- СКОЛЬКО СТОИТ -------- */}
        <SectionTitle title="Сколько стоит" />

        <div className="rounded-lg overflow-hidden mb-4" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="text-xs font-oswald tracking-widest uppercase text-white/30 px-5 pt-4 pb-2">Запуск</div>
          {[
            ["VPN", "$5–10"],
            ["Облачный сервер для первого персонажа", "$15–20"],
            ["Регистрация на площадке", "$30–40"],
          ].map(([l, v]) => (
            <div key={l} className="flex justify-between px-5 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              <span className="text-white/50 text-sm">{l}</span>
              <span className="text-white/80 text-sm font-oswald">{v}</span>
            </div>
          ))}
          <div className="flex justify-between px-5 py-3 font-medium" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
            <span className="text-white/70 text-sm">Итого</span>
            <span className="text-white text-sm font-oswald">$50–70</span>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden mb-6" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="text-xs font-oswald tracking-widest uppercase text-white/30 px-5 pt-4 pb-2">Ежемесячно</div>
          {[
            ["Сервер: пара часов — контент на месяц", "$3–5"],
            ["VPN", "$5–10"],
          ].map(([l, v]) => (
            <div key={l} className="flex justify-between px-5 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              <span className="text-white/50 text-sm">{l}</span>
              <span className="text-white/80 text-sm font-oswald">{v}</span>
            </div>
          ))}
          <div className="flex justify-between px-5 py-3 font-medium" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
            <span className="text-white/70 text-sm">Итого в месяц</span>
            <span className="text-white text-sm font-oswald">~$10–15</span>
          </div>
        </div>

        <P>Мой доход (реальный, со скринами):</P>

        <div className="rounded-lg overflow-hidden mb-6" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          {[
            { l: "Месяц 1", v: "$40", note: "ошибки, баны, нулевая монетизация" },
            { l: "Месяц 2", v: "$927", note: "разобрался с прогревом и чаттингом" },
            { l: "Апрель, 8 дней", v: "$745", note: "рост продолжается", glow: true },
          ].map(r => (
            <div key={r.l} className="flex justify-between items-center px-5 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              <div>
                <span className="text-white/50 text-sm">{r.l}</span>
                <span className="text-white/25 text-xs ml-2">— {r.note}</span>
              </div>
              <span className="text-sm font-oswald font-bold"
                style={r.glow ? { color: '#00ff88', textShadow: '0 0 10px rgba(0,255,136,0.5)' } : { color: 'white' }}>
                {r.v}
              </span>
            </div>
          ))}
        </div>

        <P accent>С $40 до $745 за 8 дней — рост в 18 раз за 2 месяца. Одна модель.</P>

        <P>Для сравнения: похожие курсы без автоматизации — 30,000–50,000 руб. AI MODELS FACTORY — <G>9,900 руб.</G></P>


        {/* -------- ЧЕСТНАЯ ЧАСТЬ -------- */}
        <SectionTitle title="Честная часть" />

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

        <div className="space-y-3 mb-6">
          {[
            "Есть: готовая система, проверенные инструменты и 35 человек рядом которые помогут когда застрянешь.",
            "Можно совмещать с работой. Нет дедлайнов. В своём темпе.",
          ].map(t => (
            <div key={t} className="flex items-start gap-2.5">
              <Icon name="Check" size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#00ff88' } as React.CSSProperties} />
              <p className="text-white/60 text-sm leading-relaxed">{t}</p>
            </div>
          ))}
        </div>


        {/* -------- ЗАНЯТЬ МЕСТО -------- */}
        <section id="занять-место" className="py-16 md:py-24" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="text-center mb-10">
            <div className="font-oswald text-5xl md:text-6xl font-bold mb-2" style={{ color: '#00ff88', textShadow: '0 0 30px rgba(0,255,136,0.3)' }}>9 900 ₽</div>
            <div className="text-white/50 text-base mb-1">Один раз. Навсегда.</div>
            <div className="text-white/30 text-sm leading-relaxed max-w-md mx-auto">
              Не подписка. Заплатил один раз — доступ ко всему навсегда. Все обновления, новые материалы, автоматизация — бесплатно.
            </div>
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
                <div className="font-oswald text-base font-semibold tracking-wide mb-1">Напиши мне — расскажу подробнее</div>
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
          <div className="font-oswald text-xs font-bold tracking-widest text-white/25">AI MODELS FACTORY</div>
          <div className="text-xs text-white/15">© 2026</div>
        </div>
      </footer>

    </div>
  );
}
