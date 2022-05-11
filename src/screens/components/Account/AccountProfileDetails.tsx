import { FunctionComponent, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  FormControl,
} from "@mui/material";
import { BackendUser } from "types";
import { useUserApi } from "screens/hooks/use-user-api/useUserApi";
import SettingsPassword from "../Setting/SettingsPassword";

export interface IAccountProfileDetailsProps {
  currentUser: BackendUser;
  setCurrentUser: Function;
  user: BackendUser;
  setUser: Function;
}

const provinces = [
  {
    value: "ontario",
    label: "Ontario",
  },
  {
    value: "Quebec",
    label: "Quebec",
  },
  {
    value: "Alberta",
    label: "Alberta",
  },
];

const AccountProfileDetails: FunctionComponent<IAccountProfileDetailsProps> = ({
  currentUser,
  setCurrentUser,
  user,
  setUser,
}) => {
  const { updateUser } = useUserApi();
  const [values, setValues] = useState<BackendUser>();

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSave = async () => {
    setCurrentUser({ ...currentUser, ...user });
    await updateUser(user?.id, user);
  };

  return (
    <FormControl>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
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
                value={user?.firstName || ""}
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
                value={user?.lastName || ""}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                disabled={true}
                value={user?.username || ""}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                // value={user.phone || ''}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                // value={user.country || ''}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select Province"
                name="province"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                // value={user.province || ''}
                variant="outlined"
              >
                {provinces.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
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
          <Button color="primary" variant="contained" onClick={() => onSave()}>
            Save details
          </Button>
        </Box>
      </Card>
      <SettingsPassword
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        user={user}
        setUser={setUser}
      />
    </FormControl>
  );
};

export default AccountProfileDetails;
