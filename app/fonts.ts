import localFont from "next/font/local";

export const sfPro = localFont({
  src: [
    {
      path: "./fonts/SF-Pro-Text-Regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/SF-Pro-Text-Light.otf",
      weight: "300",
    },
  ],
  variable: "--font-sf-pro",
});

export const stolzl = localFont({
  src: [
    {
      path: "./fonts/stolzl_regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-stolzl",
});
