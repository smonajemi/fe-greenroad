import {useToasts} from 'react-toast-notifications'
import {NotifyBody } from './NotifyBody'

type NotificationType = 'success' | 'error' | 'warning' | 'info'
export const useNotification = () => {
    const {addToast} = useToasts()

    const notify = (type: NotificationType , message: string) => {
        addToast(<NotifyBody message={message}/>, {
            appearance: type,
            autoDismiss: true
        })
    }
    return {
        notify
    } as const
}