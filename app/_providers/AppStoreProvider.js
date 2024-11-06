import { useRef } from "react";
import { Provider } from "react-redux";
import makeStore from "@/store/store";

export default function AppStoreProvider({children}) {
    const storeRef = useRef();
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }
    return <Provider store={storeRef.current}>
        {children}
    </Provider>
}