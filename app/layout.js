import "./globals.css";
import {getLocale, getMessages, getTranslations} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import AppProviders from "@/app/_providers/AppProviders";

export async function generateMetadata({params}) {
    const commonT = await getTranslations("Metadata.Common")
    const t = await getTranslations("Metadata.HomePage");
    const locale = await getLocale();

    return {
        title: {
            template: `%s / ${commonT("defaultSuffix")}`,
            default: `${t("title")} / ${commonT("defaultSuffix")}`
        },
        description: t("description"),
        openGraph: {
            title: `${t("title")} / ${commonT("defaultSuffix")}`,
            description: t("description"),
            url: process.env.BASE_URL,
            siteName: "Eva V Nails",
            images: ["/logo.png"],
            locale: locale === "bg" ? "bg_BG" : "en_US",
            type: "website"
        }
    }
}

export default async function RootLayout({ children }) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
      <html lang={locale}>
        <body>
          <AppProviders>
              <NextIntlClientProvider messages={messages}>
                  {children}
              </NextIntlClientProvider>
          </AppProviders>
        </body>
      </html>
    );
}
