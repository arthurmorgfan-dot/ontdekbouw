/** Illustration choices are independent of the preserved project research information. */
const scenes: Record<string, string> = {
  loop: "/images/future/loop-next.webp",
  hive: "/images/future/hive-next.webp",
  grow: "/images/future/grow-next.webp",
  rise: "/images/future/rise-next.webp",
  mend: "/images/future/mend-next.webp",
};
export function projectScene(slug: string, fallback: string): string {
  return scenes[slug] ?? fallback;
}
