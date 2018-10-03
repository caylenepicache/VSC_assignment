//imports dependencies and files
import React, { Component } from "react";
import axios from 'axios';
import BarChart from "./components/BarChart/BarChart.js";

export default class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
    dataNames:[],
    topTen: []
    };
  }

  componentDidMount() {
    //promised based
    axios.get(`https://data.cityofnewyork.us/api/views/25th-nujf/rows.json`)
      .then(res => {

        console.log(res);
        //console.log(res.data.data)
        

        //get values and place in arrays 
        let topTenArr = [];
        let yearArr = [];
        let ethnicityArr = [];

        for(var i=0; i < res.data.data.length; i++) {
          //console.log(i);
          //top 10 names on the every list possible
          if(res.data.data[i]["13"] <= 10) {
            //console.log(res.data.data[i][12]);
            topTenArr.push(res.data.data[i][12])
           //console.log(res.data.data[i]["8"]);
            //console.log(res.data.data[i]["9"]);
            //console.log(res.data.data[i]["10"]);
            //console.log(res.data.data[i]["11"]);
            //console.log(res.data.data[i][12]);
            //console.log(res.data.data[i]["13"]);
          }
          
          if(!yearArr.includes(res.data.data[i][8])) {
            //console.log(res.data.data[i][8]);
            yearArr.push(res.data.data[i][8]);
          }

          if(!ethnicityArr.includes(res.data.data[i][10])) {
            //console.log(res.data.data[i][10]);
            ethnicityArr.push(res.data.data[i][10]);
          }
        }

        //check arrays
        console.log("topTenArr" + topTenArr);
        console.log("YearArr" + yearArr);
        console.log("ethnicityArr" + ethnicityArr);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    //console.log("in render" + this.state.names.map);
    //const child = this.state.names.map((element,index) => {
    return (
      <div>
        <BarChart />
      </div>
    //}
    );
  }}