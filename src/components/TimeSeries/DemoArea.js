import React, { useState, useEffect } from 'react'
import { Area } from '@ant-design/plots'
import { Typography } from '@mui/material'

const { vaccine } = require('./vaccine-time.json')

const DemoArea = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(vaccine)
  }, [])

  const config = {
    data,
    width: 600,
    height: 600,
    color: '#424242',
    xField: 'Date',
    yField: 'cases',
    xAxis: {
      tickCount: 5,
    },
    animation: true,
    slider: {
      start: 0.1,
      end: 0.9,
      trendCfg: {
        isArea: true,
      },
    },
  }

  const typoStyle = {
    color: "#424242",
    fontFamily: 'Poppins',
    fontWeight: 700
  }

  return (
    <div>
      <Typography style={typoStyle} variant="h3">Number of Adverse Reaction Records versus Vaccination Dates</Typography>
      <br/>
      <Area {...config} />
      <br/>
    </div>
  )
}

export default DemoArea