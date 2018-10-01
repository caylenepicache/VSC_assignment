//imports dependencies and files
import React, { Component } from "react";
//import data from './citynydatanames.json';



import axios from 'axios';

export default class NameList extends React.Component {
 /* state = {
    persons: []
  } */

  componentDidMount() {
    axios.get(`https://data.cityofnewyork.us/api/views/25th-nujf/rows.json`)
      .then(res => {
        console.log(res);
        //console.log(res.data.data)
        console.log(res.data.data)
        console.log(res.data.data[13][11]);

        
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h1>"hello"</h1>
      </div>
    )
  }
}

/*

class App extends Component {

  render() {
    return (
      <div>
        <h1>"HELLO"</h1>
      </div>
    );
  }
};


export default App;

*/