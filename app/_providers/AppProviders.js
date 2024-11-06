"use client"

import AppQueryClientProvider from "@/app/_providers/AppQueryClientProvider";
import AppStoreProvider from "@/app/_providers/AppStoreProvider";

export default function AppProviders({children}) {
    return <AppQueryClientProvider>
        <AppStoreProvider>
            {children}
        </AppStoreProvider>
    </AppQueryClientProvider>
}