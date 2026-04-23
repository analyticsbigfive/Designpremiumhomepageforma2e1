import { useEffect, type ReactNode } from 'react';
import { useInView } from './useAnimations';

type RevealProps = {
  children: ReactNode;
  variant?: 'up' | 'fade' | 'zoom';
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  as?: 'div' | 'section' | 'span' | 'article' | 'li';
  /** Si true, l'animation démarre dès le montage (utile pour le hero au-dessus du fold). */
  immediate?: boolean;
};

/**
 * Enrobe des éléments pour les faire apparaître avec un effet fluide dès qu'ils
 * entrent dans la fenêtre, ou immédiatement si `immediate` est vrai.
 */
export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
  immediate = false,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  useEffect(() => {
    if (immediate && ref.current) {
      ref.current.classList.add('is-visible');
    }
  }, [immediate, ref]);

  const baseClass =
    variant === 'up' ? 'reveal-up' : variant === 'zoom' ? 'reveal-zoom' : 'reveal';
  const visibilityClass = immediate || inView ? 'is-visible' : '';
  const delayAttr = delay > 0 ? String(delay) : undefined;

  return (
    <Tag
      ref={ref as never}
      className={`${baseClass} ${visibilityClass} ${className}`.trim()}
      data-delay={delayAttr}
    >
      {children}
    </Tag>
  );
}
