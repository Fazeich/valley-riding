export interface IArenaTheme {
  background: string;
  wall: string;
  wallOpacity: number;
  grid: string;
  gridSecondary: string;
}

export interface IUITheme {
  text: string;
  textMuted: string;
  accent: string;
  danger: string;
  boost: string;
  panel: string;
  panelBorder: string;
  overlay: string;
}

export interface ITownTheme {
  title: string;
  hint: string;
  key: string;
  keyText: string;
  fade: string;
}

export interface ITheme {
  arena: IArenaTheme;
  ui: IUITheme;
  town: ITownTheme;
}

export const GAME_THEME: ITheme = {
  arena: {
    background: "#0a0e17",
    wall: "#1b2a4a",
    wallOpacity: 0.45,
    grid: "#1c2a44",
    gridSecondary: "#14203a",
  },
  ui: {
    text: "#e2e8f0",
    textMuted: "#94a3b8",
    accent: "#22c55e",
    danger: "#ef4444",
    boost: "#38bdf8",
    panel: "rgba(10, 14, 23, 0.85)",
    panelBorder: "rgba(56, 189, 248, 0.35)",
    overlay: "rgba(4, 6, 12, 0.7)",
  },
  town: {
    title: "#334155",
    hint: "#475569",
    key: "#facc15",
    keyText: "#1e293b",
    fade: "#ffffff",
  },
};
