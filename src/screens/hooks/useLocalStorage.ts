export const useLocalStorage = () => {
    const setItem = (k: string, v: any) =>{
        localStorage.setItem(k,v)
    }
    const getItem = (k: string) =>{
        return localStorage.getItem(k)
    }
    const clearItem = (k: string) =>{
        localStorage.removeItem(k)
    }
    return {
        setItem,
        getItem,
        clearItem
    } as const
}