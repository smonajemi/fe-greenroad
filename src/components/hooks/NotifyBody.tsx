import { Box } from '@mui/material'
import react, {FunctionComponent} from 'react'
interface INotifyBody {
    message: string
}
export const NotifyBody: FunctionComponent<INotifyBody> = ({message}) => {
    return <Box>{message}</Box>
}