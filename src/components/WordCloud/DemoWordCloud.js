import React, {
  useState,
  useEffect
} from 'react';
import {
  WordCloud
} from '@ant-design/plots';

const {
  medical
} = require('./medical-history.json');
const {
  symptoms
} = require('./symptoms.json');

const DemoWordCloud = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setJson();
  }, []);

  const setJson = () => {
    let medis = medical
    let symps = symptoms
    setData(symps)
  };

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
  return ( <
    WordCloud {
      ...config
    }
    />
  )
}

export default DemoWordCloud