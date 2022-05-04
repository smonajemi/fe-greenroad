import { Box } from '@mui/system'
import { useAuth } from 'components/hooks/useAuth'
import Account from './Account'
import Settings from './Settings'

export const Dashboard = () => {
const {backendUser, setBackendUser} = useAuth()
return (
        <Box>
            <Account currentUser={backendUser} setCurrentUser={setBackendUser}/>
            <Settings />
        </Box>
  );
}
