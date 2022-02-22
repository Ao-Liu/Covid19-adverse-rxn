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
    color: '#424242',
    wordStyle: {
      fontFamily: 'Poppins',
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

  const typoStyle = {
    color: "#424242",
    fontFamily: 'Poppins',
    fontWeight: 700
  }

  const btnStyle = {
    backgroundColor: "#424242",
    fontFamily: 'Poppins'
  } 

  return ( 
    <div>
      <Typography style={typoStyle} variant="h3">{displayingMed ? "Medical History" : "Symptoms"} Word Cloud</Typography>
      <br/>
      <WordCloud {...config}/>
      <br/>
      <Button style={btnStyle} variant="contained" disableElevation onClick={onSwitchClicked}>Switch Dataset</Button>
    </div>
  )
}

export default DemoWordCloud