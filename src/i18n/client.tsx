"use client";
import { createContext, useContext } from "react";
import { createI18n, type Locale } from "./shared";
const LocaleContext = createContext<Locale>("nl");
export function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}
export const useI18n = () => createI18n(useContext(LocaleContext));
