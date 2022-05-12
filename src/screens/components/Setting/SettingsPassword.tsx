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
  Typography
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { BackendUser } from "types";
import { useUserApi } from "screens/hooks/use-user-api/useUserApi";
import { VisibilityOff, Visibility } from "@mui/icons-material";

export interface ISettingsPasswordProps {
  currentUser: BackendUser;
  setCurrentUser: Function;
  user: BackendUser;
  setUser: Function;
}

const useStyles = makeStyles(() => ({
  helperText: {
    color: 'green'
  }
}))

const SettingsPassword: FunctionComponent<ISettingsPasswordProps> = ({
  currentUser,
  setCurrentUser,
  user,
  setUser,
}) => {
  const classes = useStyles();
  const { updateUser } = useUserApi();
  const [isValidPassword, setPasswordValidation] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [values, setValues] = useState({
    password: "",
    rePassword: "",
    showPassword: false,
    showRePassword: false,
  });

  const handleChange = (e, type: string) => {
    switch (type) {
      case "password":
        setPassword(e.target.value)
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
    setCurrentUser({
      ...currentUser,
      password: values?.rePassword
    })
    // BUG => delay in updating password from FE -> needs to be updated twice to work
    await updateUser(currentUser?.id, currentUser, 'password');
    setValues({
      ...values,
      password: "",
      rePassword: "",
    })
  };
  
  useEffect(() => {
    setPasswordValidation(
      values?.password?.length >= 10 && values?.password === values?.rePassword
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
                helperText="Minimum length 10"
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
                helperText={
                  values?.rePassword !== values?.password && values?.rePassword?.length >= 10 ? (
                    'Passwords do not match'
                  ) : (
                    ''
                  )
                }
                error={values?.password !== values?.rePassword && values?.rePassword?.length >= 10}
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
