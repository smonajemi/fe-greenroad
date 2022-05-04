import { useLayoutEffect, useState } from "react";
import { useUserApi } from "screens/hooks/use-user-api/useUserApi";
import { BackendUser } from "types";
import { useLocalStorage } from "./useLocalStorage";
export const useAuth = () => {
const [backendUser, setBackendUser] = useState<BackendUser>()
const {getItem} = useLocalStorage()
const {fetchUserById} = useUserApi()
const userId = getItem('userId')
useLayoutEffect(() => {
  const user = async () => {
    const loggedUser = await fetchUserById(userId)
    setBackendUser(loggedUser?.data)
  }
  user()
}, [userId])
  return {
    backendUser,
    setBackendUser
  } as const;
};
