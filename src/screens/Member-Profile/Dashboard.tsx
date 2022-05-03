import { Box } from '@mui/system';
import { useAuth } from 'components/hooks/useAuth';
import Account from './Account';
import Settings from './Settings'
export interface IDashboardProps {
}

export const Dashboard = (props: IDashboardProps) => {
  const {currentUser, setCurrentUser} = useAuth()

  return (
        <Box>
            <Account currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <Settings />
        </Box>
  );
}
