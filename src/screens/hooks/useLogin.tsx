import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useLogin = () => {
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

  // handle Tab Panel
  const [value, setValue] = useState(indexFromUrl);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const action = tabIdToURL[newValue];
    setSearchParams({ action });
  };

  return {
    searchParams,
    setSearchParams,
    action,
    indexFromUrl,
    value,
    setValue,
    handleChange,
  } as const;
};
