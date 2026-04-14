import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Reveal, Bridge, FAQItem, TG_LINK } from "./shared";

export default function CtaSections() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <>
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
              <div className="space-y-2.5">
                {["Есть 2–3 часа в день", "$50–70 на запуск модели", "Готов разбираться 2–3 недели", "Хочешь доход без привязки к лицу и месту", "Не боишься нового"].map(t => (
                  <div key={t} className="flex items-start gap-2">
                    <Icon name="Check" size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#00ff88' } as React.CSSProperties} />
                    <span className="text-white/50 fluid-xs">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl card-padding-lg" style={{ background: 'rgba(255,50,50,0.02)', border: '1px solid rgba(255,50,50,0.06)' }}>
              <div className="fluid-xs font-oswald tracking-widest uppercase mb-4 text-red-400/50">Не подходит</div>
              <div className="space-y-2.5">
                {["Ищешь «кнопку бабло»", "Нет 2 часов в день", "Не готов вкладывать в запуск", "Ждёшь гарантий конкретной суммы", "Хочешь результат без усилий"].map(t => (
                  <div key={t} className="flex items-start gap-2">
                    <span className="text-red-400/40 flex-shrink-0 mt-0.5 text-xs">✕</span>
                    <span className="text-white/35 fluid-xs">{t}</span>
                  </div>
                ))}
              </div>
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
            {[["VPN", "$5–10"], ["Облачный сервер", "$15–20"], ["Регистрация на площадке", "$30–40"]].map(([l, v]) => (
              <div key={l} className="flex justify-between px-5 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
                <span className="text-white/45 fluid-sm">{l}</span>
                <span className="text-white/75 fluid-sm font-oswald">{v}</span>
              </div>
            ))}
            <div className="flex justify-between px-5 py-3 font-medium" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
              <span className="text-white/65 fluid-sm">Итого на старт</span>
              <span className="text-white fluid-sm font-oswald">$50–70</span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-xl overflow-hidden mb-6" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="fluid-xs font-oswald tracking-widest uppercase text-white/25 px-5 pt-4 pb-2">Ежемесячно</div>
            {[["Сервер (пара часов)", "$3–5"], ["VPN", "$5–10"]].map(([l, v]) => (
              <div key={l} className="flex justify-between px-5 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
                <span className="text-white/45 fluid-sm">{l}</span>
                <span className="text-white/75 fluid-sm font-oswald">{v}</span>
              </div>
            ))}
            <div className="flex justify-between px-5 py-3 font-medium" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
              <span className="text-white/65 fluid-sm">Итого в месяц</span>
              <span className="text-white fluid-sm font-oswald">~$10–15</span>
            </div>
          </div>
        </Reveal>

        {/* Comparison */}
        <Reveal>
          <h3 className="font-oswald fluid-sm font-bold tracking-wide uppercase text-white/40 mt-12 mb-4">Почему не курс за 50 000₽</h3>
          <div className="rounded-xl overflow-hidden mb-6" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="grid grid-cols-4 fluid-xs font-oswald tracking-wider uppercase px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
              <div className="text-white/25"></div>
              <div className="text-white/25 text-center">Сам</div>
              <div className="text-white/25 text-center">Курсы</div>
              <div className="text-center" style={{ color: '#00ff88' }}>Клуб</div>
            </div>
            {[["Цена", "бесплатно", "30–50k ₽", "9 900 ₽"], ["Поддержка", "нет", "на время курса", "навсегда"], ["Обновления", "нет", "нет", "бесплатно"], ["Автоматизация", "нет", "нет", "да"], ["Шаблоны", "нет", "базовые", "все мои"], ["Скрипты общения", "нет", "нет", "готовые"], ["Срок до результата", "месяцы", "месяц", "дни"]].map(([label, s, k, c], i) => (
              <div key={i} className="grid grid-cols-4 fluid-xs px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.025)' }}>
                <div className="text-white/40">{label}</div>
                <div className="text-white/25 text-center">{s}</div>
                <div className="text-white/25 text-center">{k}</div>
                <div className="text-center font-medium compare-highlight rounded" style={{ color: '#00ff88' }}>{c}</div>
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
            {["Нет гарантий конкретного дохода. Кто обещает — врёт.", "Нет «нажми кнопку и получи деньги». Первые 2–3 недели нужно погрузиться.", "Это бизнес с порогом входа $50 — не волшебство, но и не миллионы на франшизу."].map(t => (
              <div key={t} className="flex items-start gap-2.5">
                <span className="text-red-400/40 mt-0.5 flex-shrink-0 text-xs">✕</span>
                <p className="text-white/40 fluid-sm">{t}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="space-y-3 mb-6">
            {["Готовая система + проверенные инструменты + 35 человек рядом.", "Можно совмещать с работой. Нет дедлайнов. В своём темпе."].map(t => (
              <div key={t} className="flex items-start gap-2.5">
                <Icon name="Check" size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#00ff88' } as React.CSSProperties} />
                <p className="text-white/55 fluid-sm">{t}</p>
              </div>
            ))}
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
            ].map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} open={faqOpen === i} onClick={() => setFaqOpen(faqOpen === i ? null : i)} />
            ))}
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
            <div className="p-6">
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn w-full py-4 rounded-xl uppercase tracking-widest fluid-btn flex items-center justify-center gap-3 pulse-neon"
              >
                Начать зарабатывать <Icon name="ArrowRight" size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        <p className="fluid-xs text-white/15 text-center mt-8 max-w-md mx-auto">Результаты — мой личный опыт. Ваш результат зависит от вложенных усилий, времени и рыночных условий.</p>
      </section>

      {/* FOOTER */}
      <footer className="py-6 relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="font-oswald fluid-xs font-bold tracking-widest text-white/20">AI MODELS FACTORY</div>
          <div className="fluid-xs text-white/10">© 2026</div>
        </div>
      </footer>
    </>
  );
}
