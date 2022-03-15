import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Components/Button/Button';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Page you are looking does not exist!</div>
      <Button title="Go back" onClick={()=>{navigate(-1)}}/>
    </div>
  )
}

export default NotFound