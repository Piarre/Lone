import { Button } from "@chakra-ui/react";
import { open } from "@tauri-apps/api/dialog";
import React, { useState, useEffect } from "react";
import { addItem } from "../config/item";
import { shell } from "@tauri-apps/api";
import { invoke } from "@tauri-apps/api/tauri";

const Btn = () => {
  const [base64Data, setBase64Data] = useState<string>("");

  const add = async () => {
    const result = (await open({
      title: "Test",
      multiple: false,
    })) as string;

    

    console.log(await invoke("get_file_icon", { file_path: result }));

    await addItem({ path: result, title: "Test", icon: "" });
  };

  return (
    <Button
      border={"dashed"}
      borderWidth={"medium"}
      background={"transparent"}
      fontSize={"xxx-large"}
      p="10"
      _hover={{
        padding: "60px",
        backgroundColor: "#1B254B",
      }}
      onClick={() => add()}
    >
      + Add Item
    </Button>
  );
};

export default Btn;
