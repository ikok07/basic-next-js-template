import {useTranslations} from "next-intl";
import LanguageSelector from "@/app/_components/ui/LanguageSelector";

export default function Home() {
  const t = useTranslations("HomePage");
  return <div>
    <LanguageSelector />
    <h1>{t("title")}</h1>
  </div>;
}
