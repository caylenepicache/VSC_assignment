//imports dependencies and files
import React, { Component } from "react";
import axios from 'axios';

export default class NameList extends React.Component {
  
  constructor(props){
    super(props);
    state = {
    names:[]
    };
  }

  componentDidMount() {
    //promised based
    axios.get(`https://data.cityofnewyork.us/api/views/25th-nujf/rows.json`)
      .then(res => {
        this.setState({names: res.data});

        console.log(res);
        //console.log(res.data.data)
        console.log(res.data.data)
        console.log(res.data.data["13"][11]);

        for(var i=0; i < res.data.data.length; i++) {
          //console.log(i);
          //top 10 names on the every list possible
          if(res.data.data[i][13] <= 10) {
           // console.log(res.data.data[i]["8"]);
            //console.log(res.data.data[i]["9"]);
            //console.log(res.data.data[i]["10"]);
            //console.log(res.data.data[i]["11"]);
            //console.log(res.data.data[i]["12"]);
            //console.log(res.data.data[i]["13"]);
          }
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    console.log("in render" + this.state.names.map);
    return (
      <div>
        <ul>{this.state.names.map(function(object,i){return <li obj={object} key = {i} />})};
        </ul>
      </div>
    )
  }
}