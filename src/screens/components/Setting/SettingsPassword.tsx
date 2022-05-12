import { FunctionComponent, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { BackendUser } from "types";
import { useUserApi } from "screens/hooks/use-user-api/useUserApi";
import { VisibilityOff, Visibility } from "@mui/icons-material";

export interface ISettingsPasswordProps {
  currentUser: BackendUser;
  setCurrentUser: Function;
  user: BackendUser;
  setUser: Function;
}

const SettingsPassword: FunctionComponent<ISettingsPasswordProps> = ({
  currentUser,
  setCurrentUser,
  user,
  setUser,
}) => {
  const { updateUser } = useUserApi();
  const [isValidPassword, setPasswordValidation] = useState<boolean>(false);
  const [values, setValues] = useState({
    password: "",
    rePassword: "",
    showPassword: false,
    showRePassword: false,
  });

  const handleChange = (e, type: string) => {
    switch (type) {
      case "password":
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
        break;

      case "rePassword":
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
        break;
    }
  };

  const handleClickShowPassword = (src: any) => {
    switch (src) {
      case "password":
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
        break;
      case "rePassword":
        setValues({
          ...values,
          showRePassword: !values.showRePassword,
        });
        break;
    }
  };

  const onUpdate = async () => {
    alert('updated')
  };
  
  useEffect(() => {
    setPasswordValidation(
      values?.password && values?.password === values?.rePassword
    );
  }, [values]);

 

  return (
      <Card style={{ marginBottom: '2em'}}>
        <CardHeader subheader="Update password" title="Password" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                variant="outlined"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={(e) => handleChange(e, e?.target?.name)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowPassword("password")}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="rePassword"
                variant="outlined"
                type={values.showRePassword ? "text" : "password"}
                value={values.rePassword}
                onChange={(e) => handleChange(e, e?.target?.name)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleClickShowPassword("rePassword")}
                        edge="end"
                      >
                        {values.showRePassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
       
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => onUpdate()}
            disabled={!isValidPassword}
          >
            Update
          </Button>
        </Box>
      </Card>
  );
};
export default SettingsPassword;
