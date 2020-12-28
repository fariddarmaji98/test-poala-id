import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { connect } from "react-redux";
import { LoadingData } from "../Loading";
import "./Maps.css";

const mapStyles = {
  width: "220px",
  height: "170px",
};

export class Maps extends Component {
  render() {
    const { dataApi, loading } = this.props.data;
    if (loading === false) {
      const data = dataApi.results[0];
      const lat = data.location.coordinates.latitude;
      const lng = data.location.coordinates.longitude;
      return (
        <Map
          style={mapStyles}
          google={this.props.google}
          zoom={4}
          initialCenter={{
            lat: lat,
            lng: lng,
          }}
        >
          <Marker />
        </Map>
      );
    } else {
      return <LoadingData />;
    }
  }
}

const mapStateToProps = (state) => ({ data: state.data });

export default GoogleApiWrapper({
  apiKey: "AIzaSyBJmh7n6J07HUS2UMnYhuMYsjxQG7cutsE",
})(connect(mapStateToProps, null)(Maps));
