"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "../ui/button";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

interface Props {
  className?: string;
}

const navLinks = [
  {
    id: 1,
    name: "Главная",
    href: "/",
  },
  {
    id: 2,
    name: "Мои тесты",
    href: "/mytests",
  },
  {
    id: 3,
    name: "Мои вопросы",
    href: "/myquestions",
  },
  {
    id: 4,
    name: "Мои респонденты",
    href: "/myrespondents",
  },
  {
    id: 5,
    name: "Настройки",
    href: "/settings",
  },
];

const items: MenuProps["items"] = [
  {
    label: <a href="/">Рус</a>,
    key: "0",
  },
  {
    label: <a href="/">Кыр</a>,
    key: "1",
  },
];

export const Header: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();
  return (
    <header
      className={cn(
        "min-w-full bg-white border-b mx-auto py-2 z-50",
        className
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href={"/"}>
            <div className="flex items-center space-x-2">
              <svg
                width="30"
                height="32"
                viewBox="0 0 30 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 0.989502C17.4477 0.989502 17 1.43722 17 1.9895V4.9895C17 5.54179 17.4477 5.9895 18 5.9895H25L25 12.9895C25 13.5418 25.4477 13.9895 26 13.9895H29C29.5523 13.9895 30 13.5418 30 12.9895V4.9895V1.9895C30 1.98734 30 1.98519 30 1.98303C29.9965 1.43373 29.5501 0.989502 29 0.989502H26H18Z"
                  fill="#3778BB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 12.9895C0 13.5418 0.447715 13.9895 1 13.9895H4C4.55229 13.9895 5 13.5418 5 12.9895L5 5.9895L12 5.9895C12.5523 5.9895 13 5.54179 13 4.9895V1.9895C13 1.43722 12.5523 0.989502 12 0.989502H4H0.999999C0.447715 0.989502 0 1.43722 0 1.9895V4.9895V12.9895Z"
                  fill="#3778BB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30 18.9895C30 18.4372 29.5523 17.9895 29 17.9895H26C25.4477 17.9895 25 18.4372 25 18.9895V25.9895H18C17.4477 25.9895 17 26.4372 17 26.9895V29.9895C17 30.5418 17.4477 30.9895 18 30.9895H26H29C29.069 30.9895 29.1364 30.9825 29.2015 30.9692C29.6572 30.8759 30 30.4728 30 29.9895L30 26.9895C30 26.9891 30 26.9887 30 26.9883L30 18.9895Z"
                  fill="#3778BB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.2635 22.2322C17.654 21.8417 17.654 21.2085 17.2635 20.818L15.1421 18.6967C14.7516 18.3062 14.1184 18.3062 13.7279 18.6967L8.07102 24.3536L3.82843 20.111C3.4379 19.7205 2.80474 19.7205 2.41421 20.111L0.292893 22.2323C-0.097631 22.6229 -0.0976312 23.256 0.292893 23.6466L7.36396 30.7176C7.75449 31.1081 8.38765 31.1081 8.77817 30.7176L10.8995 28.5963C10.9024 28.5934 10.9053 28.5905 10.9081 28.5876L17.2635 22.2322Z"
                  fill="#0BC279"
                />
              </svg>
              <span className="font-extrabold text-gray-800">Synak</span>
            </div>
          </Link>
          {navLinks.map(({ name, id, href }) => (
            <NavigationMenu key={id}>
              <NavigationMenuList>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink
                    active={pathname === href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuList>
            </NavigationMenu>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            className="cursor-pointer"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Globe size={20} className="text-gray-500" />
                Рус
                <ChevronDown size={20} className="text-gray-500" />
              </Space>
            </a>
          </Dropdown>
          <Button variant="outline">Выйти</Button>
        </div>
      </div>
    </header>
  );
};
