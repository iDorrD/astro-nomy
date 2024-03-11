import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "MeinsCord",
  description:
    "Discover the latest news and updates and plenty more about MeinsCord, all in one place.",
  url: "https://blog.meinscord.com",
  ogImage: "https://i.imgur.com/07jBS4K.png",
  copyright: new Date().getFullYear(),
  links: {
    twitter: "https://twitter.com/meinscord",
    github: "https://github.com/mickasmt/astro-nomy",
    store: "https://store.meinscord.com"
  },
};
