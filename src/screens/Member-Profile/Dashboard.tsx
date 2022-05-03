import { Box } from '@mui/system';
import * as React from 'react';
import Account from './Account';
import Settings from './Settings'
export interface IDashboardProps {
}

export const Dashboard = (props: IDashboardProps) => {
  return (
        <Box>
            <Account />
            <Settings />
        </Box>
  );
}
