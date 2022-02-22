import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
import { Typography, Button } from '@mui/material'

const { fatality_sex  } = require('./fatality-sex.json')

const GroupedHistogram = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(fatality_sex)
    }, [])

    const config = {
        data,
        width: 500,
        height: 500,
        color: ['#424242', '#19CDD7'],
        isGroup: true,
        xField: 'age',
        yField: 'cnt',
        seriesField: 'name',
        xAxis: {
            label: {
                autoHide: false,
                autoRotate: false,
            },
        }
    }

    const typoStyle = {
        color: "#424242",
        fontFamily: 'Poppins',
        fontWeight: 700
    }

    return (
        <div>
            <Typography style={typoStyle} variant="h3">Case Fatality Number by Age and Sex</Typography>
            <br/>
            <Column { ...config }/>
            <br/>
            <br/>
        </div>
    )
};

export default GroupedHistogram