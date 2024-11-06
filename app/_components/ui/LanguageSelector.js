"use client"

import Cookies from "js-cookie"
import {useRouter} from "next/navigation";
import {SUPPORTED_LOCALES} from "@/config/constants";

export default function LanguageSelector() {
    const router = useRouter();

    function changeLang(lang) {
        Cookies.set("NEXT_LOCALE", lang);
        router.refresh();
    }

    return <div className="flex gap-4">
        {SUPPORTED_LOCALES.map(locale => {
            return <button onClick={changeLang.bind(this, locale)}>{locale.toUpperCase()}</button>
        })}
    </div>
}