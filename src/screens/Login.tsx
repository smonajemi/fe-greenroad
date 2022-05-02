import { Box, Tab, Tabs } from "@mui/material";
import { MainContainer } from "components/MainContainer";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import AuthContainer from "../components/auth/AuthContainer";
import Center from "../components/utils/Center";
import Register from "./Register";
import SignIn from './SignIn'
import TabPanel from '../components/TabPanel'
import { useLogin } from "./hooks/useLogin";

interface Props {}

const Login = ({}: Props) => {
  const {    
    value,
    setValue,
    handleChange
  } = useLogin()
  
  return (
    <MainContainer title={'Login'} >
    <Center height={100}>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        boxShadow={2}
        margin={3}
        bgcolor='white'
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
          <Tabs value={value} onChange={handleChange} variant="fullWidth">
            <Tab sx={{ px: { lg: 20, xs: 6 } }} label="Login" />
            <Tab sx={{ px: { lg: 16, xs: 6 } }} label="Register" />
          </Tabs>
        </Box>
        {/* login */}
        <TabPanel value={value} index={0}>
          <SignIn  setValue={setValue}/>
          {/* <AuthContainer /> */}
        </TabPanel>
        {/* register */}
        <TabPanel value={value} index={1}>
          <Register setValue={setValue} />
        </TabPanel>
      </Box>
    </Center>
    </MainContainer>
  );
};



export default Login;
