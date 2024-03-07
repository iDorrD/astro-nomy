import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Menu",
      items: [
        {
          title: "Store",
          href: "https://store.meinscord.com",
          description: "Get your hands on the latest products available on the market.",
        },
        {
          title: "Blog",
          href: "/blog",
          description: "Follow me to get the latest updates and news.",
          external: false,
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Socials",
      items: [
        {
          title: "Twitter (X)",
          href: "https://twitter.com/meinscord",
          description: "Get our latest publications in your social network.",
          disabled: false,
        },
        {
          title: "YouTube",
          href: "https://youtube.com/@meinscord",
          description: "Check out our latest videos released on the YouTube platform.",
          disabled: false,
        },
        {
          title: "Discord",
          href: "https://discord.com/meinscord",
          description: "Join our official Discord community, to share ideas and chat.",
          disabled: true,
        },
      ],
    },
  ],
  links: [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Store",
      href: "https://store.meinscord.com",
      external: true,
    },
  ],
};
