import { Box } from '@mui/system';
import { useLocalStorage } from 'components/hooks/useLocalStorage';
import React, { useEffect, useState } from 'react';
import { BackendUser } from 'types';
import Account from './Account';
import Settings from './Settings'
export interface IDashboardProps {
}

export const Dashboard = (props: IDashboardProps) => {
  const [currentUser, setCurrentUser] = useState<BackendUser>()
  const {getItem} = useLocalStorage()
  // useEffect(() => {
  //   setCurrentUser(JSON.parse(getItem('user')))
  // }, [getItem])

  return (
        <Box>
            <Account currentUser={currentUser} />
            <Settings />
        </Box>
  );
}
