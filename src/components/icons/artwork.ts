/** Original BOUW linework. All geometry uses the same 24-unit construction grid. */
const forward = "M4 12h16m-5-5 5 5-5 5";
export const iconArtwork = {
  "arrow-right": `<path d="${forward}"/>`,
  "arrow-left": `<g transform="rotate(180 12 12)"><path d="${forward}"/></g>`,
  "arrow-up": `<g transform="rotate(-90 12 12)"><path d="${forward}"/></g>`,
  "arrow-down": `<g transform="rotate(90 12 12)"><path d="${forward}"/></g>`,
  external: '<path d="M14 4h6v6m0-6-9 9M10 4H4v16h16v-6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  plus: '<path d="M4 12h16M12 4v16"/>',
  understand: '<circle cx="12" cy="12" r="7"/><path d="M12 2v5m0 10v5M2 12h5m10 0h5"/><circle cx="12" cy="12" r="2"/>',
  experiment: '<path d="M8 3h8m-6 0v6L4 19v2h16v-2L14 9V3M7 16h10M10 12h4"/>',
  scale: '<path d="M4 20V4m0 16h16M8 20v-6h6v-6h6V4"/>',
  loop: '<path d="M8 4H4v8m0-8 4 4M16 20h4v-8m0 8-4-4M12 4h8v4M12 20H4v-4"/><path d="M10 9h4v6h-4z"/>',
  grow: '<path d="M3 20V9l9-6 9 6v11H3m6 0V9m6 11V9M3 9h18M12 17v-5m0 3-3-2m3 1 3-2"/>',
  hive: '<path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h6v6h-6zM12 3v18M3 12h18"/>',
  rise: '<path d="M4 20h6v-6h5V9h5M15 4h5v5M4 5v6m0-6h6"/>',
  mend: '<path d="M3 6h7v12H3m18-12h-7v12h7M7 9h10M7 15h10M7 9v6m10-6v6"/>',
  empty: '<path d="M4 12h16"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  mail: '<path d="M3 5h18v14H3zM3 5l9 8 9-8"/>',
} as const;
export type IconName = keyof typeof iconArtwork;
export const projectMarks: Readonly<Record<string, IconName | undefined>> = {
  loop: "loop", grow: "grow", hive: "hive", rise: "rise", mend: "mend",
};
