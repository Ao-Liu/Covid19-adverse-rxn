import React, { useState, useEffect } from 'react'
import { Area } from '@ant-design/plots'

const { vaccine } = require('./vaccine-time.json')

const DemoArea = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(vaccine)
  }, [])

  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
    animation: false,
    slider: {
      start: 0.1,
      end: 0.9,
      trendCfg: {
        isArea: true,
      },
    },
  }
  return <Area {...config} />
}

export default DemoArea