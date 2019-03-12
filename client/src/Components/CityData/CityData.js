import React from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../../actions/cityAction.js';
import { withRouter } from "react-router-dom";
import "./CityData.css";
const CityPage =(props)=>{

	const flights = (props.citys.payload || []).map((flight)=>(
		<div  key={flight.id}>
			<div className="ticket">
					<h1>{flight.departingcity}</h1>
					<h2>Arrival Destination: {flight.arrivingcity}</h2>
					<h2>Arrival Flight Duration: {flight.flightdurationarriving}</h2>
					<h2>Arrival Flight Date: {flight.arrivingdate}</h2>
					<h2>Departing Date: {flight.departingdate}</h2>
					<h2>Departing Flight Duration: {flight.flightdurationdeparting}</h2>
					<h2>Flight Cost: {flight.flightcost}</h2>
					<h2>Website: {flight.websiteurl}</h2>
					<h2>Date Added: {flight.added}</h2>
					<br/>
			</div>
		</div>
	));

	const red = props.citys.payload;
	return(
	<div>
		{red === undefined && <div><h1>loading....</h1></div>}
		{red !== undefined && 
			<div className="MainCity">
				<div className="image-container">
					{/* <img src={props.citys.payload.mainImageUrl} alt=""/> */}
				</div>
				{flights}
			</div>
			}
	</div>
		
		)
}
const mapStateToProps = state => ({
	citys: state.citys.cities
})

export default withRouter(connect(mapStateToProps, { fetchCities })(CityPage));