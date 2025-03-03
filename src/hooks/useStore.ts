import { getStore } from "../store/store"
export const useStore = () => {

    const saveStore = (page: string, value: string | string[]) => {
        const state = {
            ...getStore(),
            [page]: value
        }
        localStorage.setItem('store', JSON.stringify(state))
    }

    const clearStore = () => {
        localStorage.removeItem('store')
    }

    return {
        store: getStore(),
        saveStore,
        clearStore,
    }
}