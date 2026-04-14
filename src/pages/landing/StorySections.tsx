import Icon from "@/components/ui/icon";
import { Reveal, Bridge, Screenshot, P, W, TG_LINK, PROCESS_IMG } from "./shared";

export default function StorySections() {
  return (
    <>
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

        <Reveal>
          <div className="screenshot-frame my-8">
            <img
              src="https://cdn.poehali.dev/projects/619405aa-a78f-42cb-a5c0-ba86a35c55a1/bucket/374f4bcf-3aeb-405b-aa2b-491cb07931d9.png"
              alt="Fanvue dashboard — $927.83 с февраля 2026"
              className="w-full"
            />
            <div className="px-4 py-3" style={{ background: 'rgba(0,0,0,0.5)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              <div className="fluid-xs font-oswald tracking-wider uppercase text-white/45">Fanvue — доход с февраля 2026</div>
              <div className="fluid-xs text-white/20 mt-0.5">$927.83 за полтора месяца · одна AI-модель</div>
            </div>
          </div>
        </Reveal>

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
              <div key={text} className="flex items-start gap-3">
                <Icon name={icon} size={16} className="flex-shrink-0 mt-1" style={{ color: '#00e5ff' } as React.CSSProperties} />
                <span className="text-white/55 fluid-sm">{text}</span>
              </div>
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
            <Reveal key={e.title} delay={i * 100}>
              <div className="error-card rounded-lg card-padding pl-7">
                <div className="fluid-sm font-medium text-white/70 mb-2">{e.title}</div>
                <p className="text-white/40 fluid-sm">{e.text}</p>
              </div>
            </Reveal>
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
              <div key={t} className="flex items-start gap-2.5">
                <span className="text-white/15 mt-0.5 flex-shrink-0">—</span>
                <p className="text-white/45 fluid-sm">{t}</p>
              </div>
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
                <div>
                  <span className="text-white/80 fluid-sm font-medium">{item.title}. </span>
                  <span className="text-white/40 fluid-sm">{item.text}</span>
                </div>
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
    </>
  );
}