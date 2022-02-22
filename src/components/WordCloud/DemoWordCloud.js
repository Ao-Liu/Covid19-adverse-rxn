import React, { useState, useEffect } from 'react'
import { WordCloud } from '@ant-design/plots'
import './WordCloud.css'
import { Button } from '@material-ui/core/'
import { Typography } from '@mui/material'

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
      <header className="WordCloud-header">
        <Typography color="#3F51B5" variant="h3">{displayingMed ? "Medical History" : "Symptoms"} Word Cloud</Typography>
        <br/>
        <WordCloud {...config}/>
        <br/>
      </header>
      <Button className="switch-btn" color="primary" variant="contained" onClick={onSwitchClicked}>Switch</Button>
    </div>
  )
}

export default DemoWordCloud