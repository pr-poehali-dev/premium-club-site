import { useCtaContext } from "@/hooks/useCtaContext";
import { TG_LINK } from "./shared";

interface CtaButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function CtaButton({ children, className = "" }: CtaButtonProps) {
  const { handleCtaClick, isInTelegram } = useCtaContext();

  if (isInTelegram) {
    return (
      <button type="button" onClick={handleCtaClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
