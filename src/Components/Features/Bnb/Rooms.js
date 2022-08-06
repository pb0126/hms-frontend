import React, { Component } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from 'mdb-react-ui-kit';
import RoomService from '../../../Services/RoomService';

export default class Rooms extends Component {

  constructor(props){

    super(props)

    this.state = {
      rooms:[]
    }     
  }

  componentDidMount(){
    RoomService.getRooms().then((res) =>{
      this.setState({rooms:res.data})
    })
  }

  render() {
    return (

        <MDBContainer>
          
          <h1 className='text-center'>Rooms Available</h1>
          <MDBTable hover responsive >
            <MDBTableHead dark>
              <tr>
                
                <th scope='col'>Rooms No.</th>
                <th scope='col'>Room Type</th>
                <th scope='col'>Room Price</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody >
              {
                this.state.rooms.map(
                  room =>
                  <tr key={room.room_id} >
                    
                    <td>{room.room_no}</td>
                    <td>{room.room_type}</td>
                    <td>{room.room_price}</td>
                  </tr>
                )
              }
              
            </MDBTableBody>
          </MDBTable>
        </MDBContainer>

    )
  }
}
