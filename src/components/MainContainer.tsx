import { Box } from '@mui/material';
import React, { FunctionComponent, useLayoutEffect, } from 'react';
import NavBar from './Navbar';

interface IMainContainerProps {
    title?: string
    children?: React.ReactNode
}
export const MainContainer: FunctionComponent<IMainContainerProps> = ({ title, children }) => {
    useLayoutEffect(() => {
        document.title = `${title}`
    }, [title])

    return (
        <>
            <NavBar />
            {children}
        </>


    )
}
