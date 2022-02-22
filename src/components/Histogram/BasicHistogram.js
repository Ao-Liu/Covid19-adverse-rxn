import React, {
    useState,
    useEffect
} from 'react';
import { Column } from '@ant-design/plots';
import { Typography, Button } from '@mui/material'

const { fatality_age } = require('./fatality-age.json')
const { days_after } = require('./days-after-vac.json')

const BasicHistogram = () => {
    const [data, setData] = useState([])
    const [displayingAge, setDisplay] = useState(true)
    const [xField, setXField] = useState('age')
    const [yField, setYField] = useState('ratio')

    useEffect(() => {
        setData(fatality_age)
    }, [])

    const onSwitchClicked = () => {
        if (displayingAge) {
          setData(days_after)
          setXField('days')
          setYField('cases')
        } else {
          setData(fatality_age)
          setXField('age')
          setYField('ratio')
        }
        setDisplay(!displayingAge)
    }

    const config = {
        data,
        width: 500,
        height: 500,
        color: '#424242',
        xField: xField,
        yField: yField,
        xAxis: {
            label: {
                autoHide: false,
                autoRotate: true,
            },
        }
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
            <Typography style={typoStyle} variant="h3">{displayingAge ? "Case Fatality Ratios by Age" : "Days after Vaccination in Case Fatality"}</Typography>
            <br/>
            <Column { ...config } />
            <br/>
            <Button style={btnStyle} variant="contained" disableElevation onClick={onSwitchClicked}>Switch Dataset</Button>
        </div>
    )
};

export default BasicHistogram