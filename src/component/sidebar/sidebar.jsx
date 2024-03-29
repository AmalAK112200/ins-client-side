import React from 'react'
import './sidebar.css';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='side'>SIDEBAR
      <br></br><br></br>
        <Button className='stdb' onClick={() => { navigate('/std') }}>Add Student</Button><br></br><br></br>
        <Button className='tchrb' onClick={() => { navigate('/tchr') }}>Add Teacher</Button><br></br><br></br>
        <Button className='stdb' onClick={() => { navigate('/StdTable') }}>Student Details</Button><br></br><br></br>
        <Button className='stdb' onClick={() => { navigate('/TchrTable') }}>Teacher Details</Button><br></br><br></br>
        <Button className='stdb' onClick={()=>{ navigate('/classroom')}}>Add Class Room</Button><br></br><br></br>
        <Button className='stdb' onClick={()=>{ navigate('/ClassroomTab')}}>Class Room Details</Button>
    </div>
  )
}

export default Sidebar