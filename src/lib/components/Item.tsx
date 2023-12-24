import { Box, Text } from "@chakra-ui/react";
import React from "react";

type Item = { title: string; path: string };

const Item = (item: Item) => {
  return (
    <Text
      border={"dashed"}
      borderWidth={"medium"}
      background={"navy.700"}
      fontSize={"xxx-large"}
      fontWeight={"bold"}
      px="12"
      py="12"
      borderRadius={"16px"}
    >
      Title {item.title}
    </Text>
  );
};

export default Item;
