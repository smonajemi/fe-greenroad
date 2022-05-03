import { Title } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <Box flexDirection='column'>
            <Box flexDirection='column' display='flex' justifyContent='center'>
                <Title>
                    404
                </Title>
                <Typography gutterBottom>This page was not found</Typography>
                <Button color='primary' variant='contained' component={Link} to='/'> Return to Home Page</Button>
            </Box>
        </Box>
    )
}

export default ErrorPage