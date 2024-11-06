import {QueryClient} from "@tanstack/react-query";

export default function getServerQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000,
            }
        }
    })
}