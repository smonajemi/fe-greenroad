import { Box, Tab, Tabs } from "@mui/material";
import { MainContainer } from "components/MainContainer";
import AuthContainer from "../components/auth/AuthContainer";
import Center from "../components/utils/Center";
import Register from "./Register";
import SignIn from "./SignIn";
import TabPanel from "../components/TabPanel";
import { useLogin } from "./hooks/useLogin";

const Login = () => {
  const {
    value,
    setValue,
    handleChange,
    handleSubmit,
    handleSignInChange,
    handleSignUpChange,
    isValidated
  } = useLogin();

  return (
    <MainContainer title={"Login"}>
      <Center height={100}>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          boxShadow={2}
          margin={3}
          bgcolor="white"
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
              <Tab sx={{ px: { lg: 20, xs: 6 } }} label="Login" />
              <Tab sx={{ px: { lg: 16, xs: 6 } }} label="Register" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <SignIn
              setValue={setValue}
              handleSignInChange={handleSignInChange}
              handleSubmit={handleSubmit}
              isValidated ={isValidated}
            />
            {/* <AuthContainer /> */}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Register
              setValue={setValue}
              handleSignUpChange={handleSignUpChange}
              handleSubmit={handleSubmit}
              isValidated ={isValidated}
            />
          </TabPanel>
        </Box>
      </Center>
    </MainContainer>
  );
};

export default Login;
