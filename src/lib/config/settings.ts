"use client";
import { BaseDirectory, exists, readTextFile, writeTextFile } from "@tauri-apps/api/fs";
import { homeDir } from "@tauri-apps/api/path";
import { FileContentT, Item, Settings } from "../types";

const LONE_SAVE_PATH = "lone.json";
const DEFAULT_CONFIG = JSON.stringify({
  items: [],
  settings: {},
});

async function getConfig(): Promise<Settings> {
  await checkSave();
  const saveContents = await readTextFile(LONE_SAVE_PATH, { dir: BaseDirectory.Home });

  let save: FileContentT = { items: [], settings: {} };

  try {
    save = JSON.parse(saveContents) as FileContentT;
  } catch (error) {
    console.error("Error parsing JSON :", error);
    return {};
  }

  return save.settings;
}

async function checkSave(): Promise<void> {
  const saveExists = await exists(LONE_SAVE_PATH, { dir: BaseDirectory.Home });
  const saveContents = await readTextFile(LONE_SAVE_PATH, { dir: BaseDirectory.Home });

  if ((saveExists && saveContents == "") || !saveExists) {
    await writeTextFile(LONE_SAVE_PATH, DEFAULT_CONFIG, { dir: BaseDirectory.Home });
  } else {
    return;
  }
  return;
}

export { getConfig, DEFAULT_CONFIG };
export default checkSave;
