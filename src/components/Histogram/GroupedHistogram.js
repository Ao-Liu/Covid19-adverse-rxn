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
    };
    return (
        <div>
            <Typography color="#1875d2" variant="h3">Case Fatality Number by Age and Sex</Typography>
            <br/>
            <Column { ...config }/>
        </div>
    )
};

export default GroupedHistogram