"use client";
import Btn from "@/lib/components/Btn";
import Item from "@/lib/components/Item";
import { getItems } from "@/lib/config/item";
import { Item as ItemObj } from "@/lib/types";
import { DM_Sans } from "next/font/google";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import cn from "@/lib/utils/twMerge";
import { randomInt } from "crypto";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  const [items, setItems] = useState<ItemObj[]>([]);

  useEffect(() => {
    const getItemss = async () => {
      const itemss = await getItems();
      setItems(itemss);
    };

    getItemss();
  });

  return (
    <>
      <Box className={cn("flex min-h-screen flex-col items-center justify-between p-10", dmSans.className)}>
        <Box pb="10">
          <Btn />
        </Box>
        <SimpleGrid columns={4} gap="30px">
          {items?.length > 0 && items.map((item) => <Item key={item.path + item.title} title={item.title} path={item.path} />)}
        </SimpleGrid>
      </Box>
    </>
  );
}
