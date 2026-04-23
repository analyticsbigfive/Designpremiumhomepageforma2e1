import { useCountUp } from './useAnimations';

type Props = {
  /** Valeur finale numérique. */
  end: number;
  /** Préfixe (ex: "+"). */
  prefix?: string;
  /** Suffixe (ex: " Mds", " ans"). */
  suffix?: string;
  /** Nombre de décimales à afficher. */
  decimals?: number;
  /** Durée de l'animation. */
  duration?: number;
  className?: string;
};

/** Affiche un nombre qui s'incrémente jusqu'à la valeur cible lors de son entrée à l'écran. */
export function AnimatedNumber({ end, prefix = '', suffix = '', decimals = 0, duration, className }: Props) {
  const { ref, value } = useCountUp(end, { duration, decimals });
  const formatted = value.toLocaleString('fr-FR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
