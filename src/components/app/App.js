import './App.css';
import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Clock from '../clock/Clock';
import useInterval from '../../useInterval'
import { useSelector } from 'react-redux';

function App() {
  const stateRedux = useSelector((state) => state.timezoneReducer);
  const [interval, incrementInterval] = useState(0);
  const [timezone, setTimezone] = useState(stateRedux.clocks[0].timeZone);
  const [timezone2, setTimezone2] = useState(stateRedux.clocks[1].timeZone);

  const onChangeTimezone = (e) => {
        setTimezone(stateRedux.clocks[0].timeZone)
    }

  const onChangeTimezone2 = (e) => {
    setTimezone2(stateRedux.clocks[1].timeZone)
  } 

  useInterval(
    () => {
      incrementInterval(interval + 1);
    },
    1000,
  );

  return (
    <div className="App">
      <Clock id={'clock1'} interval={interval} timezone={timezone}  onChangeTimezone={onChangeTimezone}/>
      <Clock id={'clock2'} interval={interval} timezone={timezone2}  onChangeTimezone={onChangeTimezone2}/>
    </div>
    
  );
}

export default App;
