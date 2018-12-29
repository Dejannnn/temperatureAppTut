import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
class WeatherList extends Component {



    constructor(props){
        super(props)
        console.log(props);
    }
    renderWeather(cityData){

        const temp= cityData.list.map((temp)=> {
            return temp.main.temp;
        });
        const pressure= cityData.list.map((press)=> {
            return press.main.pressure;
        });
        const humidity= cityData.list.map((humidity)=> {
            return humidity.main.humidity;
        });

        return (
            <tr key={cityData.city.name} height={15}>
                <td>{cityData.city.name}</td>
                <Chart color="red" InfData={temp}/>
                <Chart color="green" InfData={pressure}/>
                <Chart color="bule" InfData={humidity}/>
            </tr>
        )
    }

    render(){

        return (

            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}

                </tbody>
            </table>
        );

    }

}

function mapStateToProps(state){

     console.log(state)
    return {
        weather: state.weather
           }
}
export default connect(mapStateToProps)(WeatherList);