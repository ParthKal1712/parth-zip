// app/routes/__root.tsx
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import globalsCss from "@/styles/globals.css?url";
import Navbar from "@/components/top-bar";
import { getThemeFromCookie } from "@/lib/theme-cookies";
import { ThemeProvider } from "@/components/theme-provider";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Parth Kalra",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: globalsCss,
      },
      {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>",
      },
    ],
  }),
  loader: async () => {
    return {
      theme: await getThemeFromCookie(),
    };
  },
  component: RootComponent,
});
function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  // Get the theme from the cookie from the loader
  const { theme } = Route.useLoaderData();
  const docClass = theme === "dark" ? "dark" : "";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-jetbrains">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
