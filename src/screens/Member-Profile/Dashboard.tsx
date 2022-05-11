import { Box } from '@mui/system'
import { useAuth } from 'components/hooks/useAuth'
import { MainContainer } from 'components/MainContainer'
import Account from './Account'

export const Dashboard = () => {
const {backendUser, setBackendUser} = useAuth()
return (
  <MainContainer title={"Member Profile"}>
            <Account currentUser={backendUser} setCurrentUser={setBackendUser}/>
        </MainContainer>
  );
}
