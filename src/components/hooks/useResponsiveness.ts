import { useMedia } from "use-media";

export const useResponsiveness = () => {

 const isDevice = useMedia({minWidth: 0, maxWidth: 1023})

    return {
        isDevice
    } as const
}