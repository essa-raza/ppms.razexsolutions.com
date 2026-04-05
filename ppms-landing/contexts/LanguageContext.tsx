"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "@/lib/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  isUrdu: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
  isUrdu: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("ppms-lang") as Lang | null;
    if (saved === "ur" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  // Apply direction + language to <html> element whenever lang changes
  useEffect(() => {
    const html = document.documentElement;
    if (lang === "ur") {
      html.dir = "rtl";
      html.lang = "ur";
      html.classList.add("urdu");
    } else {
      html.dir = "ltr";
      html.lang = "en";
      html.classList.remove("urdu");
    }
    localStorage.setItem("ppms-lang", lang);
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang],
        isUrdu: lang === "ur",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
