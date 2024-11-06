"use client"
import {isServer, QueryClient, QueryClientProvider} from "@tanstack/react-query";

let browserQueryClient = undefined;

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000,
            }
        }
    })
}

export function getQueryClient() {
    if (isServer) return makeQueryClient();
    else {
        if (!browserQueryClient) browserQueryClient = makeQueryClient();
        return browserQueryClient;
    }
}

// React Query usage: https://tanstack.com/query/v4/docs/framework/react/guides/ssr
export default function AppQueryClientProvider({children}) {
    const queryClient = getQueryClient();
    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}