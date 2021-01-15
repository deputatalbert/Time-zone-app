import React, { useEffect, useState, useRef } from 'react';
import './Clock.css';
import { useDispatch } from 'react-redux';
import { changeTimeZone } from '../../redux/action/action'



function Clock({interval, timezone, onChangeTimezone, id}) {

    useEffect(() => {updateTime()},[interval])
//---------------------------------------------Цифровые часы (снизу)-----------------------------
  let timeGlobal = new Date();
  let time = new Date();
 
  const refHour = useRef(null)
  const refMinute = useRef(null)
  const refSecond = useRef(null)

  const dispatch = useDispatch();

  time = timeGlobal.toLocaleString("en-GB", {timeZone: timezone}).substring(12,20);
  const [clockTime, setClockTime] = useState(time);
 
/*----------------------------- Аналоговые часы --------------------------------*/
  
  const setClock = () => {

    if (!refHour || !refMinute || !refSecond) return null

    const insideTime = new Date();
    const currentDate = new Date(insideTime.toLocaleString("en-US", {timeZone: timezone}));
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(refSecond, secondsRatio)
    setRotation(refMinute, minutesRatio)
    setRotation(refHour, hoursRatio)
  }

  const updateTime = () => {
    const time = new Date().toLocaleString("en-GB", {timeZone: timezone}).substring(12,20);
    setClockTime(time);
    setClock();
  }

  const setRotation = (element, rotationRatio) => {
    element.current.style.setProperty('--rotation', rotationRatio * 360)

  }

  //----------------------- фукнция для получения данный из select -----------------------
  const getAttributeSelect = (e) => {
    const attr = {
      id: e.target.id,
      value: e.target.value
    }
    return attr;
  }

  return (
    <div className="wrapper-clock" >
      <div className="clock-box">
        <div className="clock" >
          <div className="hand hour" ref={refHour}></div>
          <div className="hand minute" ref={refMinute}></div>
          <div className="hand second" ref={refSecond}></div>
          <div className="number number1">|</div>
          <div className="number number2">|</div>
          <div className="number number3">3</div>
          <div className="number number4">|</div>
          <div className="number number5">|</div>
          <div className="number number6">6</div>
          <div className="number number7">|</div>
          <div className="number number8">|</div>
          <div className="number number9">9</div>
          <div className="number number10">|</div>
          <div className="number number11">|</div>
          <div className="number number12">12</div>
        </div>
      </div>
      <div className="digitalTime">
        <h1>{clockTime}</h1>
      </div>
      <div className="nameCity">
        <h3>{timezone === 'Asia/Krasnoyarsk' && 'Красноярск'}</h3>
        <h3>{timezone === 'Europe/Kaliningrad' && 'Калининград'}</h3>
        <h3>{timezone === 'Europe/Moscow' && 'Москва'}</h3>
        <h3>{timezone === 'Asia/Vladivostok' && 'Владивосток'}</h3>
      </div>
      <div className="selectCity">
        <select value={timezone} id={id} onChange={(e) => onChangeTimezone(dispatch(changeTimeZone(getAttributeSelect(e))))} >
          <option value='Europe/Moscow' >Москва</option>
          <option value='Asia/Krasnoyarsk' >Красноярск</option>
          <option value='Asia/Vladivostok'>Владивосток</option>
          <option value='Europe/Kaliningrad'>Калининград</option>
        </select>
      </div>
    </div>
  );
}

export default Clock;

