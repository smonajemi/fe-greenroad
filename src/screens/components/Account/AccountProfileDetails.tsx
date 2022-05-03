import { FunctionComponent, useEffect, useState } from "react";
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

export interface IAccountProfileDetailsProps {
  currentUser: BackendUser;
  setCurrentUser: Function
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
  setCurrentUser
}) => {
  const [values, setValues] = useState<BackendUser>(currentUser);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    console.log(values)
  }, [values])

  const onEdit = (key: string) => {
    const profileToEdit = currentUser?.data?.filter(k => k?.key !== key)
    setCurrentUser(profileToEdit)
  }

  const onSave = value => {
    if (value?.key) {
      const index = currentUser?.data?.findIndex(x => x?.key === value?.key)
      const newArray = currentUser?.data
      newArray[index] = value
      setCurrentUser({...currentUser, data: [...newArray]})
    } else {
      const uniqueKey = new Date().getTime().toString()
      if (currentUser?.data) {
        console.log(currentUser)
        setCurrentUser({...currentUser, data: [...currentUser?.data, {key: uniqueKey, ...value}]})
      } else {
        setCurrentUser({...currentUser, data: [{key: uniqueKey, ...value}]})
      }
    }
    setCurrentUser(undefined)
  }

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
                value={currentUser?.firstName || values?.firstName}
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
                value={values?.lastName}
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
                value={currentUser?.email}
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
                // value={values.phone}
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
                // value={values.country}
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
                // value={values.province}
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
          <Button color="primary" variant="contained" onClick={() => onSave(values)}>
            Save details
          </Button>
        </Box>
      </Card>
    </FormControl>
  );
};

export default AccountProfileDetails;
