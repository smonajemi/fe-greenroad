
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    FormControl,
    Typography
  } from '@mui/material';
import { FunctionComponent } from 'react';
import { BackendUser } from 'types';
 
  export interface IAccountProfileProps {
    currentUser: BackendUser
  }
  
  const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Toronto',
    country: 'Canada',
    jobTitle: 'Software Developer',
    timezone: 'EST'
  };
  
  const AccountProfile: FunctionComponent<IAccountProfileProps> = ({currentUser}) => {
    return (
      <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {currentUser?.firstName?.concat(' ')?.concat(currentUser?.lastName)}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
          onClick={() => alert('uploaded')}
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
    )
  }
 
  export default AccountProfile;
