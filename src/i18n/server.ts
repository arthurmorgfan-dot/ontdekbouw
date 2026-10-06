import { headers } from "next/headers";
import { cache } from "react";
import { createI18n } from "./shared";
export const getI18n = cache(async () => {
  const requestHeaders = await headers();
  return createI18n(requestHeaders.get("x-bouw-locale") === "en" ? "en" : "nl");
});
