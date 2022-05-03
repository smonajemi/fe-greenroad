import { useLocalStorage } from "components/hooks/useLocalStorage";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LoginUser, BackendUser } from "types";
import { useUserApi } from "./use-user-api/useUserApi";
import validator from "validator";
import { useNotification } from "components/hooks/useNotification";
import routes from "config/routes";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "config/firebase";

export const useLogin = () => {
  // handle Tab Panel
  const tabIdToURL: { [id: number]: string } = {
    0: "login",
    1: "register",
  };

  // getting and setting URL params
  const [searchParams, setSearchParams] = useSearchParams();

  // get action from URL
  const action: string = searchParams.get("action") || "login";

  // used to set initial state
  let indexFromUrl = 0;
  if (action === "register") {
    indexFromUrl = 1;
  }
  const { setItem, clearItem } = useLocalStorage();
  const { createUser, loginUser } = useUserApi();
  const navigate = useNavigate();
  const { notify } = useNotification();
  const [value, setValue] = useState(indexFromUrl);
  const [currentUser, setCurrentUser] = useState<BackendUser>();
  const [isValidated, setValidation] = useState<boolean>(false);
  const [isValidEmail, setEmailValidation] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const action = tabIdToURL[newValue];
    setSearchParams({ action });
  };

  const login = async (src: any) => {
    const userLogin: LoginUser = await loginUser(
      src?.email?.toLowerCase(),
      src?.password
    );
    if (!userLogin?.user?.user?.data?.id) {
      notify("error", userLogin?.user?.user?.data?.message);
    } else {
      setItem("user", JSON.stringify(userLogin?.user?.user?.data));
      signInWithEmailAndPassword(
        auth,
        userLogin?.user?.user?.data?.userName,
        userLogin?.user?.user?.data?.password
      )
        .then(() => {
          console.info(`${userLogin?.user?.user?.data?.userName} is logged in`);
          navigate("/");
        })
        .catch((error) => {
          setErrorMessage(error.code + ": " + error.message);
        });
    }
  };

  const register = async (src: any) => {
      const user: BackendUser = await createUser(src);
      if (!user?.data?.id) {
        notify("error", JSON.stringify(user?.data?.message));
      } else {
        setItem("user", JSON.stringify(user?.data));
        createUserWithEmailAndPassword(
          auth,
          user?.data?.userName,
          user?.data?.password
        )
        .then(() => {
          console.info(`${user?.data?.userName} is registered`);
          navigate("/");
        })
        .catch((error) => {
          console.log(error)
          setErrorMessage(error.code + ": " + error.message);
        });
      }
  };

  const handleSignInChange = (e, type: string) => {
    switch (type) {
      case "email":
        setCurrentUser({
          ...currentUser,
          [e?.target?.name]: e?.target?.value,
        });
        setEmailValidation(validator.isEmail(e?.target?.value));
        setEmail(e?.target?.value);
        break;

      case "password":
        setCurrentUser({
          ...currentUser,
          [e?.target?.name]: e?.target?.value,
        });
        setPassword(e?.target?.value);
        break;
    }
  };

  const handleSignUpChange = (e, type: string) => {
    switch (type) {
      case "firstName":
        setCurrentUser({
          ...currentUser,
          [e?.target?.name]: e?.target?.value,
        });
        break;
      case "lastName":
        setCurrentUser({
          ...currentUser,
          [e?.target?.name]: e?.target?.value,
        });
        break;
      case "email":
        setCurrentUser({
          ...currentUser,
          userName: e?.target?.value,
          [e?.target?.name]: e?.target?.value,
        });
        break;
      case "password":
        setCurrentUser({
          ...currentUser,
          [e?.target?.name]: e?.target?.value,
        });
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    value === 0 ? login(currentUser) : register(currentUser);
    setCurrentUser(undefined);
  };

  return {
    searchParams,
    setSearchParams,
    action,
    indexFromUrl,
    value,
    setValue,
    handleChange,
    login,
    handleSignInChange,
    handleSignUpChange,
    handleSubmit,
    currentUser,
  } as const;
};
