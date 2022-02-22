import React, { useState, useEffect } from 'react'
import { WordCloud } from '@ant-design/plots'
import { Typography, Button } from '@mui/material'

const { medical } = require('./medical-history.json')
const { symptoms } = require('./symptoms.json')

const DemoWordCloud = () => {
  const [data, setData] = useState([])
  const [displayingMed, setDisplay] = useState(true)

  useEffect(() => {
    setData(medical)
  }, [])

  const onSwitchClicked = () => {
      if (displayingMed) {
        setData(symptoms)
      } else {
        setData(medical)
      }
      setDisplay(!displayingMed)
  }

  const config = {
    data,
    width: 900,
    height: 500,
    wordField: 'x',
    weightField: 'value',
    color: '#122c6a',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [24, 80],
    },
    interactions: [{
      type: 'element-active',
    }, ],
    state: {
      active: {
        style: {
          lineWidth: 3,
        },
      },
    },
  }

  return ( 
    <div>
      <Typography color="#1875d2" variant="h3">{displayingMed ? "Medical History" : "Symptoms"} Word Cloud</Typography>
      <br/>
      <WordCloud {...config}/>
      <br/>
      <Button color="primary" variant="contained" disableElevation onClick={onSwitchClicked}>Switch Dataset</Button>
    </div>
  )
}

export default DemoWordCloud