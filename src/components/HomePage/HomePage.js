import React from 'react'
import { Typography } from '@mui/material'

const HomePage = () => {

    const typoStyle = {
        color: "#424242",
        fontFamily: 'Poppins',
        fontWeight: 700,
    }

    const descriptionStyle = {
        color: "#424242",
        fontFamily: 'Poppins',
        padding: 80 
    }

    return (
        <div>
            <Typography style={typoStyle} variant="h2">Covid-19 Vaccination Adverse Reaction</Typography>
            <br/>
            <Typography style={descriptionStyle} variant="h4">A Data Analysis website Focusing on the Covid Vaccine Adverse Reaction Data and presenting how those factors (Vaccine and Patients) influence to Vaccine Adverse Reaction</Typography>
            <br/>
            <Typography style={typoStyle} variant="h5">By Nigel Nie, Bowen Ding, Ao Liu</Typography>
            <br/>
            <br/>
        </div>
    )
}

export default HomePage