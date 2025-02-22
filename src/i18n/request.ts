import { notFound } from "next/navigation";
import { getRequestConfig, GetRequestConfigParams } from "next-intl/server";
import { LOCALES } from "@/config";

const supported = LOCALES.split("|");
export default getRequestConfig(
  async ({ requestLocale }: GetRequestConfigParams) => {
    const locale = await requestLocale;
    const lang = locale?.split("-")?.[0];
    if (lang && !supported.includes(lang)) notFound();

    return {
      messages: (await import(`@/i18n/languages/${lang}.json`)).default,
      locale: lang,
    };
  }
);
