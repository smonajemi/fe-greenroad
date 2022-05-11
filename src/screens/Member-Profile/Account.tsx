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
  const [user, setUser] = useState<BackendUser>();
  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <Box
      component="main"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt="6em"
    >
      <Box
        m="auto"
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <AccountProfile currentUser={currentUser} />
            </Grid>
            <Grid item lg={8} md={10} xs={12}>
              <Box width='100%'>
              <AccountProfileDetails
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                user={user}
                setUser={setUser}
              />
              <SettingsPassword
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                user={user}
                setUser={setUser}
              />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Account;
