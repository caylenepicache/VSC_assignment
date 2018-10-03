import React , {Component} from 'react';
import {Bar} from 'react-chartjs-2';

export default class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostPopularNames : [],
            nameLabels: [],
            data : []
            
        }
    }

    componentWillReceiveProps(props) {

        var name_labels = props.state.most_popular.map( element => element[0]);
        var data        = props.state.most_popular.map( element => element[1])

        if(JSON.stringify(this.props.most_popular) !== JSON.stringify(props.state.most_popular)){
            this.setState({
                mostPopularNames : props.state.mostPopularNames,
                nameLabels : nameLabels,
                data : data
            })
        }

    }

   /* handleClick = () => {
        console.log(this.props.state)
    }

    */

    render(){
        return (
        <div >
            
            <Bar
                data = {{ labels: this.state.nameLabels,
                datasets: [{
                    data: this.state.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderWidth: 1
                }]}}
                options = {{
                    title: {
                        display : true,
                        text : 'Popular Baby Names of New York'
                    },
                    legend : {
                        display : false
                    }
                }}
            />

        </div> )
    }
} 
