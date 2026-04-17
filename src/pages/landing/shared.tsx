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

export const ImgPlaceholder = ({ label, sublabel, hint, ratio = '16/9' }: { label: string; sublabel: string; hint: string; ratio?: string }) => (
  <div className="w-full flex flex-col items-center justify-center gap-3 p-8" style={{ aspectRatio: ratio, background: 'rgba(0,255,136,0.02)', border: '1px dashed rgba(0,255,136,0.15)', borderRadius: '0' }}>
    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ border: '1px dashed rgba(0,255,136,0.25)', background: 'rgba(0,255,136,0.04)' }}>
      <Icon name="ImagePlus" size={20} style={{ color: 'rgba(0,255,136,0.35)' } as React.CSSProperties} />
    </div>
    <div className="text-center">
      <div className="font-oswald text-xs tracking-widest uppercase mb-1" style={{ color: 'rgba(0,255,136,0.5)' }}>{label}</div>
      <div className="text-xs text-white/25">{hint}</div>
    </div>
  </div>
);

export const Screenshot = ({ label, sublabel, id }: { label: string; sublabel: string; id: string }) => (
  <Reveal>
    <div className="screenshot-frame my-8">
      <ImgPlaceholder label={label} sublabel={sublabel} hint={`Загрузи скрин: ${id}`} />
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