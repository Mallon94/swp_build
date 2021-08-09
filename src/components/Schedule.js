import React, {useEffect, useState} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CleanTableDataService from "../services/cleantable";
import './Schedule.css';


const Schedule = () => {
  
  const [selectedDate,setSelectedDate] = useState(new Date());
  const [rooms, setRooms] = useState ({roomList: []});

  useEffect(() => { 
      fetchRoomList()
  }, [setRooms])

  const fetchRoomList =  () => {
    CleanTableDataService.get(selectedDate)
    .then(response => {
    setRooms({roomList: response.data})
    console.log(response.data)
    })
    .catch(e => {
      console.log(e);
    });
};

  const refreshList = () => {
    fetchRoomList();
  };

  const findByDate = (date) => {
    setSelectedDate(date)
    refreshList();
  };
    
  return (
    <ReactBootStrap.Container>
      <div className="searchBar">
      <div className="datePicker">
      <DatePicker 
      dateFormat='yyyy-MM-dd'
      selected={selectedDate} 
      onChange={date => setSelectedDate(date)}
      maxDate ={new Date()}
      minDate ="2021-06-29T12:00:00.000Z"
      cellPadding="20px" />
      </div>
      <div className="searchButton"> 
      <ReactBootStrap.Button 
        variant="secondary" 
        size="sm" 
        onClick={refreshList}>Search</ReactBootStrap.Button>
        </div>  
        </div>
    <div className="table">
    <ReactBootStrap.Table striped bordered hover variant="dark" responsive="sm" >
<thead>
  <tr>
    <th>Room</th>
    <th>Clean Status</th>
    <th>Motion Amount</th>
    <th></th>
  </tr>
</thead>
<tbody>
      {
      rooms.roomList && rooms.roomList.map((item) => 
      <tr key={item.Room}>
      <td>{item.Room}</td>
      {(() => {
        switch (true) {
        case (item.motionAmount > 50): return (
        <td>Dirty</td>
        )
        case (item.motionAmount < 50): return (
          <td>Clean</td>
          )
        }
      })()}
      <td>{item.motionAmount}</td>
      <td><ReactBootStrap.Button variant="primary">Clean</ReactBootStrap.Button>{' '}</td>
      </tr> 
      )
      }
</tbody>
</ReactBootStrap.Table>
</div>
</ReactBootStrap.Container>
  );
};

export default Schedule
