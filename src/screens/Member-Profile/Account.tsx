import { Box, Container, Grid, Typography } from "@mui/material";
import { MainContainer } from "components/MainContainer";
import { FunctionComponent, useEffect, useState } from "react";
import SettingsPassword from "screens/components/Setting/SettingsPassword";
import { BackendUser } from "types";
import AccountProfile from "../components/Account/AccountProfile";
import AccountProfileDetails from "../components/Account/AccountProfileDetails";

export interface IAccountProps {
  currentUser: BackendUser;
  setCurrentUser: Function;
}

const Account: FunctionComponent<IAccountProps> = ({
  currentUser,
  setCurrentUser,
}) => {
  const [user, setUser] = useState<BackendUser>()
  useEffect(() => {
    setUser(currentUser)
  },[currentUser])
  
return (
  <MainContainer title={"Account"}>
    <Box
      component="main"
      display="flex" 
      alignItems="center"
      justifyContent="center"
      mt='30em'
      >
    <Box
    m="auto"
    position='absolute'
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 2, mt: 2}} variant="h4">
          Account
        </Typography>
        <Grid container spacing={5}>
          <Grid item lg={4} md={6} xs={12}>
            <AccountProfile currentUser={currentUser} />
          </Grid>
          <Grid item lg={8} md={10} xs={12}>
            <AccountProfileDetails
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              user={user}
              setUser={setUser}
            />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>

          </Grid>
        </Grid>
      </Container>
    </Box>
    </Box>
  </MainContainer>
)};

export default Account;
