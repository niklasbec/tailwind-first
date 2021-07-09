import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroIcons/react/outline";

export default function Header() {

  const headerItems = [
    { title: "HOME", Icon: HomeIcon },
    { title: "TRENDING", Icon: LightningBoltIcon },
    { title: "VERIFIED", Icon: BadgeCheckIcon },
    { title: "COLLECTIONS", Icon: CollectionIcon },
    { title: "SEARCH", Icon: SearchIcon },
    { title: "ACCOUNT", Icon: UserIcon },
  ];

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {headerItems.map((curr, index) => {
          return <HeaderItem title={curr.title} Icon={curr.Icon} key={index} />;
        })}
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="logo"
      />
    </header>
  );
}
