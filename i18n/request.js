import {getRequestConfig} from "next-intl/server";
import {cookies} from "next/headers";
import {DEFAULT_LOCALE, SUPPORTED_LOCALES} from "@/config/constants";

export default getRequestConfig(async () => {
    const userCookies = cookies();
    let locale = userCookies.get("NEXT_LOCALE")?.value ?? DEFAULT_LOCALE;
    if (!SUPPORTED_LOCALES.includes(locale)) locale = DEFAULT_LOCALE

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    }
})
