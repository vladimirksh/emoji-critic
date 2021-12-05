import React from 'react';
import './ButtonBack.css';
import { useHistory } from 'react-router-dom';

function ButtonBack () {
const history = useHistory();

  return(
    <button className=" button_type_back" onClick={() => history.goBack()}>Назад</button> 
  )
}

export default ButtonBack;