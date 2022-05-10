import { useLocalStorage } from "components/hooks/useLocalStorage";
import { useEffect, useState } from "react";
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
import { useAuth } from "components/hooks/useAuth";

export const useLogin = () => {
  const tabIdToURL: { [id: number]: string } = {
    0: "login",
    1: "register",
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const action: string = searchParams.get("action") || "login";
  let indexFromUrl = 0;
  if (action === "register") {
    indexFromUrl = 1;
  }

  const { setItem } = useLocalStorage();
  const { createUser, loginUser } = useUserApi();
  const navigate = useNavigate();
  const { notify } = useNotification();
  const [value, setValue] = useState(indexFromUrl);
  const [currentUser, setCurrentUser] = useState<BackendUser>();
  const [isValidEmail, setEmailValidation] = useState<boolean>(false);
  const [isValidPassword, setPasswordValidation] = useState<boolean>(false);
  const [isValidated, setValidation] = useState<boolean>(false);
  const [isFirstName, setFirstNameValidation] = useState<boolean>(false);
  const [isLastName, setLastNameValidation] = useState<boolean>(false);
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
      notify("error", 'Invalid Username or Password');
      console.log(userLogin)
    } else {
      setItem("userId", userLogin?.user?.user?.data?.id)
      navigate("/");
    }
  };

  const register = async (src: any) => {
      const user: BackendUser = await createUser(src);
      if (!user?.data?.id) {
        notify("error", `${src?.data?.username} already exist`);
      } else {
        setItem("userId", user?.data?.id);
        navigate("/")
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
        break;

      case "password":
        setCurrentUser({
          ...currentUser,
          [e?.target?.name]: e?.target?.value,
        });
        setPasswordValidation(e?.target?.value?.length >= 10)
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
        setFirstNameValidation(validator?.isAlpha(e?.target?.value) && e?.target?.value?.length > 1)
        break;
      case "lastName":
        setCurrentUser({
          ...currentUser,
          [e?.target?.name]: e?.target?.value,
        });
        setLastNameValidation(validator?.isAlpha(e?.target?.value) && e?.target?.value?.length > 1)
        break;
      case "email":
        setCurrentUser({
          ...currentUser,
          username: e?.target?.value,
          [e?.target?.name]: e?.target?.value,
        });
        setEmailValidation(validator.isEmail(e?.target?.value));
        break;
      case "password":
        setCurrentUser({
          ...currentUser,
          [e?.target?.name]: e?.target?.value,
        });
        setPasswordValidation(e?.target?.value?.length >= 10)
        break;
    }
  };
  useEffect(() => {
    value === 0 ? setValidation(isValidEmail && isValidPassword) : setValidation(isFirstName && isLastName && isValidEmail && isValidPassword)
  }, [isFirstName, isLastName, isValidEmail, isValidPassword, isValidated, value])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('currentUser', currentUser)
    value === 0 ? login(currentUser) : register(currentUser)
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
    isValidated
  } as const;
};
