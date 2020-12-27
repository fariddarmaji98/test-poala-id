import React, { Component } from "react";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";
import { connect } from "react-redux";
import { getAll } from "../../../Store/actions/actionApi";
import "./Maps.css";

const mapStyles = {
  width: "220px",
  height: "170px",
};

export class Maps extends Component {
  state = {
    showInfo: false,
    activeMarker: {},
    selectedPlace: {},
  };
  componentDidMount() {
    this.props.getAll();
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      showInfo: true,
      activeMarker: marker,
      selectedPlace: props,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showInfo: false,
        activeMarker: null,
      });
    }
  };

  render() {
    const { dataApi, loading } = this.props.data;
    if (loading === false) {
      const data = dataApi.results[0];
      const lat = data.location.coordinates.latitude;
      const lng = data.location.coordinates.longitude;
      console.log(lat + ", " + lng);
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
          {/* <Marker onClick={this.onMarkerClick} name={"hallo"} /> */}
          {/* <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showInfo}
                    onClose={this.onClose}
                >
                    <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow> */}
        </Map>
      );
    }
    return <>Loading</>;
  }
}

const mapStateToProps = (state) => ({ data: state.data });

// export default connect(mapStateToProps, { getAll })(Maps);

export default GoogleApiWrapper({
  apiKey: "AIzaSyBJmh7n6J07HUS2UMnYhuMYsjxQG7cutsE",
})(connect(mapStateToProps, { getAll })(Maps));
