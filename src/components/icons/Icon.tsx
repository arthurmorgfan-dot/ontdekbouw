import { iconArtwork, type IconName } from "./artwork";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  /** Omit for decoration. Icon-only controls must name the control itself. */
  label?: string;
};

export default function Icon({ name, size = 16, className, label }: IconProps) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}
    className={["bouw-icon", className].filter(Boolean).join(" ")}
    fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="butt" strokeLinejoin="miter"
    focusable="false" aria-hidden={label ? undefined : true} role={label ? "img" : undefined} aria-label={label}
    dangerouslySetInnerHTML={{ __html: iconArtwork[name] }} />;
}
