interface Item {
  title: string;
  path: string;
  icon: string;
}

interface Settings {
  launchOnStartup?: boolean;
  theme?: string | ("dark" | "light");
}

interface FileContentT {
  items: Item[];
  settings: Settings;
}

export { Settings, Item, FileContentT };
