import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie } from "@tanstack/react-start/server";
import { z } from "zod";

const ThemeTypeZod = z.enum(["light", "dark"]);

const themeCookieInputValidator = z.object({
  theme: ThemeTypeZod,
});

export const setThemeInCookie = createServerFn()
  .validator(themeCookieInputValidator)
  .handler(async (context) => {
    const { theme } = context.data;

    setCookie("parth-zip-theme", theme);
  });

export const getThemeFromCookie = createServerFn().handler(
  async (context): Promise<z.infer<typeof ThemeTypeZod> | null> => {
    const themeFromCookie = await getCookie("parth-zip-theme");

    // If the themeFromCookie is not of ThemeTypeZod, return null
    if (!themeFromCookie || !ThemeTypeZod.safeParse(themeFromCookie).success) {
      return null;
    }
    return themeFromCookie as z.infer<typeof ThemeTypeZod>;
  },
);
