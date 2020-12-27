import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { getAll } from "../../../Store/actions/actionApi";
import Maps from "../Maps";
import "./Portofolio.css";

class Portofolio extends Component {
  componentDidMount() {
    this.props.getAll();
  }
  render() {
    const { dataApi, loading } = this.props.data;
    if (loading === false) {
      const data = dataApi.results[0];
      const img = data.picture.large;
      const name =
        data.name.title + ". " + data.name.first + " " + data.name.last;
      const gender = data.gender.charAt(0).toUpperCase() + data.gender.slice(1);
      const phone = data.phone;
      const cell = data.cell;
      const email = data.email;
      const date = moment(data.dob.date).format("MMMM Do, YYYY");
      const age = data.dob.age;
      const address =
        data.location.street.name +
        " Street. No " +
        data.location.street.number +
        ", " +
        data.location.city +
        ", " +
        data.location.state +
        ", " +
        data.location.country +
        " " +
        data.location.postcode;
      return (
        <>
          <img src={img} className="foto" alt="foto" />
          <div className="box-content">
            <div className="content-header">
              <span className="header-name">{name}</span> <br />
              <span className="header-job">Developer</span>
            </div>
            <div className="content-profile">
              <span className="content-title">Date of Brith</span>
              <span className="content-dot">:</span>
              <span className="content-info">{date}</span>
              <span className="content-title">Gender</span>
              <span className="content-dot">:</span>
              <span className="content-info">{gender}</span>
              <span className="content-title">Phone</span>
              <span className="content-dot">:</span>
              <span className="content-info">
                {phone} <br /> {cell}
              </span>
              <span className="content-title">Email</span>
              <span className="content-dot">:</span>
              <span className="content-info">{email}</span>
              <span className="content-title">Address</span>
              <span className="content-dot">:</span>
              <span className="content-info">{address}</span>
              <span className="content-title title-maps">Location</span>
              <span className="content-dot dot-maps">:</span>
              <span className="content-info info-maps">
                <Maps />
              </span>
            </div>
          </div>
        </>
      );
    }
    return <>Loading guys</>;
  }
}

const mapStateToProps = (state) => ({ data: state.data });

export default connect(mapStateToProps, { getAll })(Portofolio);
