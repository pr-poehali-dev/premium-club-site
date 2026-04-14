import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

export const TG_LINK = "https://t.me/m/eyoLAGiRODcy";

export const HERO_IMG = "https://cdn.poehali.dev/projects/619405aa-a78f-42cb-a5c0-ba86a35c55a1/files/b8a97a42-24a2-4662-a883-591690c97c67.jpg";
export const PROCESS_IMG = "https://cdn.poehali.dev/projects/619405aa-a78f-42cb-a5c0-ba86a35c55a1/files/fe985d6b-262c-4477-89f0-f547e3c10cce.jpg";
export const DASHBOARD_IMG = "https://cdn.poehali.dev/projects/619405aa-a78f-42cb-a5c0-ba86a35c55a1/files/b7817c43-1c8a-45c8-89b9-59206bc00660.jpg";

export function useReveal() {
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

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export const Bridge = () => (
  <div className="section-bridge">
    <div className="section-bridge-dot" />
  </div>
);

export const Screenshot = ({ label, sublabel, id }: { label: string; sublabel: string; id: string }) => (
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

export const P = ({ children, accent }: { children: React.ReactNode; accent?: boolean }) => (
  <p className={`mb-6 ${accent ? 'text-white/80 font-medium fluid-body-lg' : 'text-white/55 fluid-body'}`}>{children}</p>
);

export const G = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: '#00ff88' }}>{children}</span>
);

export const W = ({ children }: { children: React.ReactNode }) => (
  <span className="text-white font-semibold">{children}</span>
);

export const FAQItem = ({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) => (
  <div className={`faq-item mb-2 ${open ? 'open' : ''}`}>
    <button onClick={onClick} className="w-full flex items-center justify-between px-5 py-4 text-left">
      <span className="fluid-sm text-white/75 font-medium pr-4">{q}</span>
      <Icon name={open ? "Minus" : "Plus"} size={16} className="flex-shrink-0" style={{ color: open ? '#00ff88' : 'rgba(255,255,255,0.2)' } as React.CSSProperties} />
    </button>
    {open && (
      <div className="px-5 pb-4 fluid-sm text-white/45" style={{ borderTop: '1px solid rgba(0,255,136,0.06)' }}>
        <div className="pt-3">{a}</div>
      </div>
    )}
  </div>
);
