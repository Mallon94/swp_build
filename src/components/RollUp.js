import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2'
import RollUpDataService from "../services/rollup";
import RoomDataService from "../services/rooms";
import * as ReactBootStrap from 'react-bootstrap';
import { format, parseISO, roundToNearestMinutes } from 'date-fns';
import 'chartjs-adapter-date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


const RollUp = () => {

    const [selectedDate,setSelectedDate] = useState(new Date());
    const [lineData, setLineData] = useState ([]);
    const [selectedRoom,setSelectedRoom] = useState ("SWPRoom1");
    const [xAxis,setXAxis] = useState([]);
    const [yAxis,setYAxis] = useState([]);
    const [timeList,setTimeList] = useState([]); 
    const [roomList,setRoomList] = useState({list:[]}); 


    useEffect(() => { 
      fetchDataList()
      fetchRoomList()
      makePoints()
      makeTimes()
    }, [setSelectedDate])

const fetchDataList =  () => {
RollUpDataService.get(selectedDate,selectedRoom)
.then(response => { 
  setLineData( response.data )
  });
}

const fetchRoomList =  () => {
  RoomDataService.get()
  .then(response => { 
    setRoomList({list: response.data})
    });
}

const makePoints = () => {
  var xz = []
  var i;
  for (i = 0; i < lineData.length; i++){
    var xData = roundToNearestMinutes(parseISO(lineData[i]['time']),{ nearestTo: 15 })
    var xsData = format(xData, 'HH:mm')
    xz.push({x: xsData ,y:parseInt(lineData[i]['runningTotal'])})
  }
  setXAxis(xz)
}

const makeTimes = () => {
var quarterHours = ["00", "15", "30", "45"];
var times = [];
for(var i = 7; i < 20; i++){  //* change time scale here* //
  for(var j = 0; j < 4; j++){
    var time = i + ":" + quarterHours[j];
    if(i < 10){
      time ="0" + time;
    }
    var formattedDate = selectedDate.toISOString().split('T')[0]
    
    var fTime = (formattedDate + 'T' + time + ':000Z')
    times.push(time);
  }
}
setTimeList(times)
}


const refreshData = () => {
  fetchDataList();
  makePoints();
  makeTimes();
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
    minDate ={new Date("2021-06-29T12:00:00.000Z")}
    cellPadding="20px" />
    </div>
    <div className="searchButton"> 
    <ReactBootStrap.Button 
      variant="secondary" 
      size="sm" 
      onClick={refreshData}>Search</ReactBootStrap.Button>
      </div>
      </div>
      <div>
      <Line
      data={{
        labels: timeList,
        datasets: [
            {
            label: 'Motion by Date',
            data: xAxis,
            }
          ]
        }
        }
      options= {{
        parsing: {
          xAxesKey: 'x',
          yAxesKey: 'y',
      },
        elements: {
          line: {
            stepped: true,
            backgroundColor: 'red',
            borderColor: 'red',
            borderJoinStyle: 'round',
          }
        },
        scales: {
          ticks: {
            
          },
          x: {
            // type: '', 
            // time: 
            // {
            //    unit: 'hour',
            //   displayFormats: {
            // //     millisecond: 'HH:mm:ss.SSS',
            // //     second: 'HH:mm:ss',
            // //     minute: 'HH:mm',
            //     hour: 'HH:mm',
            // //     day: 'dd:HH:mm'
            // }
            // }
          }
      }
    }
    }
    />
  </div>
    </ReactBootStrap.Container> 
  )
}

export default RollUp
