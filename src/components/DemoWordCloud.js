import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { WordCloud } from '@ant-design/plots';

const DemoWordCloud = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setJson();
  }, []);

  const setJson = () => {
      let json = [{"x": "the", "value": 3026761},
      {"x": "and", "value": 2079640},
      {"x": "of", "value": 1557434},
      {"x": "was", "value": 1394353},
      {"x": "patient", "value": 1246732},
      {"x": "on", "value": 1147657},
      {"x": "to", "value": 1121484},
      {"x": "for", "value": 801061},
      {"x": "in", "value": 792175},
      {"x": "vaccine", "value": 775915},
      {"x": "not", "value": 735296},
      {"x": "covid-19", "value": 702287},
      {"x": "dose", "value": 549235},
      {"x": "at", "value": 547269},
      {"x": "she", "value": 474695},
      {"x": "with", "value": 469437},
      {"x": "received", "value": 461560},
      {"x": "no", "value": 457060},
      {"x": "unknown", "value": 456473},
      {"x": "pain", "value": 447044},
      {"x": "reported", "value": 440589},
      {"x": "had", "value": 438021},
      {"x": "an", "value": 404177},
      {"x": "this", "value": 385916},
      {"x": "arm", "value": 385774},
      {"x": "is", "value": 378273},
      {"x": "after", "value": 360370},
      {"x": "vaccination", "value": 359064},
      {"x": "that", "value": 342827},
      {"x": "it", "value": 336457},
      {"x": "my", "value": 330982},
      {"x": "her", "value": 328224},
      {"x": "moderna", "value": 312500},
      {"x": "injection", "value": 311012},
      {"x": "site", "value": 290270},
      {"x": "mrna-1273", "value": 282091},
      {"x": "as", "value": 277558},
      {"x": "from", "value": 268168},
      {"x": "experienced", "value": 255825},
      {"x": "were", "value": 251330},
      {"x": "left", "value": 237086},
      {"x": "report", "value": 234967},
      {"x": "first", "value": 231224},
      {"x": "headache", "value": 228418},
      {"x": "date", "value": 222887},
      {"x": "information", "value": 210524},
      {"x": "he", "value": 210372},
      {"x": "medical", "value": 209533},
      {"x": "unspecified", "value": 205348},
      {"x": "history", "value": 193411},
      {"x": "fever", "value": 192737},
      {"x": "did", "value": 192444},
      {"x": "days", "value": 190739},
      {"x": "by", "value": 189650},
      {"x": "day", "value": 182570},
      {"x": "has", "value": 177503},
      {"x": "spontaneous", "value": 177396},
      {"x": "number", "value": 171068},
      {"x": "or", "value": 170297},
      {"x": "chills", "value": 169990},
      {"x": "included", "value": 169595},
      {"x": "events", "value": 169001},
      {"x": "concomitant", "value": 168307},
      {"x": "but", "value": 166581},
      {"x": "have", "value": 164744},
      {"x": "second", "value": 162686},
      {"x": "time", "value": 161309},
      {"x": "up", "value": 160907},
      {"x": "outcome", "value": 157567},
      {"x": "route", "value": 155144},
      {"x": "body", "value": 154682},
      {"x": "covid", "value": 149213},
      {"x": "rash", "value": 146385},
      {"x": "medications", "value": 142721},
      {"x": "about", "value": 139929},
      {"x": "like", "value": 139886},
      {"x": "hours", "value": 138402},
      {"x": "felt", "value": 138315},
      {"x": "consumer", "value": 137854},
      {"x": "fatigue", "value": 134569},
      {"x": "symptoms", "value": 131318},
      {"x": "taken", "value": 130988},
      {"x": "right", "value": 130704},
      {"x": "other", "value": 130441},
      {"x": "case", "value": 129737},
      {"x": "been", "value": 128145},
      {"x": "started", "value": 125981},
      {"x": "swelling", "value": 125652},
      {"x": "dosage", "value": 124007},
      {"x": "any", "value": 122917}]
    setData(json)
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
    interactions: [
      {
        type: 'element-active',
      },
    ],
    state: {
      active: {
        style: {
          lineWidth: 3,
        },
      },
    },
  };
  return <WordCloud {...config} />;
};

export default DemoWordCloud
