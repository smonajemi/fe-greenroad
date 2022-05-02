import { useState, useEffect } from 'react';
import { useUserApi } from './use-user-api/useUserApi';
import { BackendUser, LoginUser } from "types"
import { useNavigate } from 'react-router-dom';
// import { useNotification } from 'components/hooks/useNotification';
import validator from 'validator'
import { useLocalStorage } from './useLocalStorage';

export const useAuthentication = () => {
    // const {notify} = useNotification()
    const {createUser,loginUser} = useUserApi()
    const navigate = useNavigate()
    const { setItem, clearItem} = useLocalStorage()

    const [isLoginPage, setUrl] = useState<boolean>(false)
    const [isSignIn, setSignIn] = useState<BackendUser>()
    const [isSignUp, setSignUp] = useState<BackendUser>()
    const [isValidated, setValidation] = useState<boolean>(false)
    const [isValidEmail, setEmailValidation] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = async (src: any) => {
      const userLogin: LoginUser = await loginUser(src?.email?.toLowerCase(), src?.password)
      if (!userLogin?.user?.user?.data?.id) {
        // notify('error', userLogin?.user?.user?.data?.message)
        alert(false)
      } else {
          clearItem('user')
          setItem('user', JSON.stringify(userLogin?.user?.user?.data))
          navigate('/MemberProfile')
      }
    }

     const handleSignInChange = (e, type: string) => {
        switch (type) {
          case 'email':
            setSignIn({
              ...isSignIn,
              [e?.target?.name]: e?.target?.value
            })
            setEmailValidation(validator.isEmail(e?.target?.value))
            setEmail(e?.target?.value)
            break;
        
          case 'password':
              setSignIn({
                ...isSignIn,
                [e?.target?.name]: e?.target?.value
              })
              setPassword(e?.target?.value)
            break;
        }
      }
      
      const handleSignUpChange = (e, type: string) => {
        switch (type) {
          case 'firstName':
            setSignUp({
              ...isSignUp,
              [e?.target?.name]: e?.target?.value
            })
            break;
          case 'lastName':
            setSignUp({
                ...isSignUp,
                [e?.target?.name]: e?.target?.value
              })
            break;
          case 'email':
            setSignUp({
                ...isSignUp,
                userName: e?.target?.value,
                [e?.target?.name]: e?.target?.value
              })
            break;
          case 'password':
            setSignUp({
                ...isSignUp,
                [e?.target?.name]: e?.target?.value
              })
            break;
        }
      }
      const handleSubmit = (e) => {
        e.preventDefault()
        isLoginPage ? login(isSignIn) : createUser(isSignUp)
        
        setPassword('')
        setEmail('')
      }

    useEffect(() => {
        setUrl(window.location.href?.includes('signIn'))
        setValidation(isValidEmail && password?.length > 10)
      },[email, password, isValidEmail, isValidated, isLoginPage])
      

    return {
        isLoginPage,
        handleSignInChange,
        handleSignUpChange,
        isSignIn,
        isSignUp,
        handleSubmit,
        isValidEmail,
        email,
        isValidated,
        password
    } as const
}