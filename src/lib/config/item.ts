"use client";
import { BaseDirectory, exists, readTextFile, writeTextFile } from "@tauri-apps/api/fs";
import { homeDir } from "@tauri-apps/api/path";
import { FileContentT, Item } from "../types";
import checkSave from "./settings";

const LONE_SAVE_PATH = "lone.json";

async function addItem(item: Item): Promise<void> {
  await checkSave();
  const saveContents = await readTextFile(LONE_SAVE_PATH, { dir: BaseDirectory.Home });

  let save: FileContentT = { items: [], settings: {} };

  try {
    save = JSON.parse(saveContents) as FileContentT;
  } catch (error) {
    console.error("Erreur de parsing du fichier JSON :", error);
    return;
  }

  console.log(save);
  console.log({ title: item.title, path: item.path, icon: "" });
  save.items.push({ title: item.title, path: item.path, icon: "" });

  await writeTextFile(LONE_SAVE_PATH, JSON.stringify(save), { dir: BaseDirectory.Home });
  console.log(JSON.stringify(save));

  return;
}

async function getItems(): Promise<any[]> {
  await checkSave();
  const saveContents = await readTextFile(LONE_SAVE_PATH, { dir: BaseDirectory.Home });

  let save: FileContentT = { items: [], settings: {} };

  try {
    save = JSON.parse(saveContents) as FileContentT;
  } catch (error) {
    console.error("Error parsing JSON :", error);
    return [];
  }

  return save.items;
}

function deleteItem(item: Item) {}

export { getItems, addItem };
