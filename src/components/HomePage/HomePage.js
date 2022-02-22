import React from 'react'
import { Typography } from '@mui/material'

const HomePage = () => {

    const typoStyle = {
        color: "#424242",
        fontFamily: 'Poppins',
        fontWeight: 700
    }

    return (
        <div>
            <Typography style={typoStyle} variant="h2">Covid 19 Vaccination Adverse Reaction</Typography>
            <br/>
            <Typography style={typoStyle} variant="h3">CSSE386 Project</Typography>
            <br/>
            <Typography style={typoStyle} variant="h4">By Nigel Nie, Bowen Ding, Ao Liu</Typography>
            <br/>
            <br/>
        </div>
    )
}

export default HomePage