import { FunctionComponent, useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField, FormControl, Grid  } from '@mui/material';
import { BackendUser } from 'types';
import { useUserApi } from 'screens/hooks/use-user-api/useUserApi';

export interface ISettingsPasswordProps {
  currentUser: BackendUser
  setCurrentUser: Function
  user: BackendUser
  setUser: Function
}

const SettingsPassword: FunctionComponent<ISettingsPasswordProps> = ({  
  currentUser,
  setCurrentUser,
  user,
  setUser}) => {
  const {updateUser} = useUserApi()
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const onUpdate = async () => {
    setCurrentUser({...currentUser, ...user})
    await updateUser(user?.id, user)
  }

  return (
    <FormControl>
      <Card>
        <CardHeader
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={user?.firstName || ''}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={user?.lastName || ''}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => onUpdate()}
          >
            Update
          </Button>
        </Box>
      </Card>
    </FormControl>
  );
};
export default SettingsPassword;
