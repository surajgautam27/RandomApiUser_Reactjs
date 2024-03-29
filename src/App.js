import React,{useState,useEffect} from 'react';
import Axios from 'axios'
import {Container , Row ,Col} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  const[details,setDetails]=useState({})
const fetchFromApi = async()=>{
  const {data}= await Axios.get('https://randomuser.me/api/')
  console.log(data)
  const details =data.results[0]
  setDetails(details)
}
useEffect(()=>{
  fetchFromApi()
},[])
  return (
    <div className="App">
        <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <ProfileCard details={details} />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
