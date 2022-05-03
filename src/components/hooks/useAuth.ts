import { useEffect, useState } from "react";
import { BackendUser } from "types";
import { useLocalStorage } from "./useLocalStorage";
export const useAuth = () => {
const [currentUser, setCurrentUser] = useState<BackendUser>()
const {getItem} = useLocalStorage()
const user = getItem('user')
useEffect(() => {
  setCurrentUser(JSON.parse(user))
}, [user])
  return {
    currentUser,
    setCurrentUser
  } as const;
};
