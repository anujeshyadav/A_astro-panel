import React from "react";
import { Row, Col, Card, CardTitle, CardText, CardBody } from "reactstrap";
import SalesCard from "./SalesCard";
import DispatchedOrders from "./DispatchedOrders";
import Notification from "./Notification";
import axiosConfig from "../../../axiosConfig";
import "../../../assets/scss/pages/dashboard-analytics.scss";
import axios from "axios";
// import { Icon } from "leaflet";
import * as Icon from "react-feather";
import TodayAstrologerList from "../../apps/dashboardlist/TodayAstrologerList";
import TodayCustomerList from "../../apps/dashboardlist/TodayCustomerList";
import TodayRechargeList from "../../apps/dashboardlist/TodayRechargeList";
import TodayCallHistory from "../../apps/dashboardlist/TodayCallHistory";

class AnalyticsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total7sayplan: {},
      bsicplan: {},
      endtoend: {},
      day7planearnig: {},
      basicplanearning: {},
      endtoendearning: {},
      maneger: {},
      dsm: {},
      outherstaff: {},
      // dealerTable: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        {/* <Col lg="12" md="12">
          <SalesCard />
        </Col> */}
        {/* <h3>Menbership Plans</h3> */}

        {/* user Counetr start */}

        <Card>
          <CardTitle className="ast-3">Dashboard</CardTitle>
          <hr></hr>
          <CardBody>
            <Row className="match-height">
              <Col md="4">
                <div className="bg-t">
                  <span className="ast-1">
                    <Icon.Users size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Total Request Users
                    <span className="ast-4">50</span>
                  </h2>
                </div>
              </Col>
              <Col md="4">
                <div className="bg-s">
                  <span className="ast-1">
                    <Icon.PhoneCall size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Total Call History
                    <span className="ast-4">67</span>
                  </h2>
                </div>
              </Col>
              <Col md="4">
                <div className="bg-p">
                  <span style={{ fontSize: "50px" }} className="ast-1">
                    {/* <Icon.r size={40} className="mr-50" /> */}₹
                  </span>
                  <h2 className="ast-2">
                    {" "}
                    Total Earning
                    <span className="ast-4">70</span>
                  </h2>
                </div>
              </Col>
              <Col md="4">
                <div className="bg-t mtb-20">
                  <span className="ast-1">
                    <Icon.BarChart2 size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Total Daily Prediction
                    <span className="ast-4">50</span>
                  </h2>
                </div>
              </Col>
              <br></br>
              <Col md="4">
                <div className="bg-s mb-20">
                  <span className="ast-1">
                    <Icon.BarChart2 size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    Total Weekly Prediction
                    <span className="ast-4">67</span>
                  </h2>
                </div>
              </Col>
              <br></br>
              <Col md="4">
                <div className="bg-p mb-20">
                  <span className="ast-1">
                    <Icon.BarChart2 size={40} className="mr-50" />
                  </span>
                  <h2 className="ast-2">
                    {" "}
                    Total Monthly Prediction
                    <span className="ast-4">70</span>
                  </h2>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>

        {/* astrologer count */}

        {/* <Card>
            <CardTitle className="ast-3">Astrologer</CardTitle>
             <hr></hr>
             <CardBody>
                <Row className="match-height">
                  <Col md="3">
                      <div  className="bg-t">
                           <span className="ast-1">
                              <Icon.User size={40} className="mr-50" />
                           </span>
                           <h2 className="ast-2">
                                 Total
                                 <span className="ast-4">50</span>
                            </h2>
                      </div>
                  </Col>
                  <Col md="3">
                    <div  className="bg-s">
                           <span className="ast-1">
                              <Icon.User size={40} className="mr-50" />
                           </span>
                           <h2 className="ast-2">Online
                                <span className="ast-4">37</span>
                           </h2>
                      </div>
                  </Col>
                  <Col md="3">
                      <div  className="bg-u">
                           <span className="ast-1">
                              <Icon.User size={40} className="mr-50" />
                           </span>
                           <h2 className="ast-2">
                             Busy
                             <span className="ast-4">07</span>
                           </h2>
                      </div>
                  </Col>
                  <Col md="3">
                      <div  className="bg-p">
                           <span className="ast-1">
                              <Icon.User size={40} className="mr-50" />
                           </span>
                           <h2 className="ast-2">Offline
                               <span className="ast-4">07</span>
                           </h2>
                      </div>
                  </Col>

                </Row>
             </CardBody>
        </Card> */}

        {/* call management counter */}
        {/*  */}

        {/* <Card>
            <CardTitle className="ast-3">Call Management</CardTitle>
             <hr></hr>
             <CardBody>
                <Row className="match-height">
                  <Col md="4">
                    <div  className="bg-s">
                           <span className="ast-1">
                              <Icon.PhoneCall size={40} className="mr-50" />
                           </span>
                           <h2 className="ast-2">
                                 Complete Call
                                <span className="ast-4">37</span>
                           </h2>
                      </div>
                  </Col>
                  <Col md="4">
                      <div  className="bg-p">
                           <span className="ast-1">
                              <Icon.PhoneCall size={40} className="mr-50" />
                           </span>
                           <h2 className="ast-2">
                               Reject Call
                               <span className="ast-4">07</span>
                           </h2>
                      </div>
                  </Col>
                  <Col md="4">
                      <div  className="bg-u">
                           <span className="ast-1">
                              <Icon.PhoneCall size={40} className="mr-50" />
                           </span>
                           <h2 className="ast-2">
                               Minutes Call
                               <span className="ast-4">07</span>
                           </h2>
                      </div>
                  </Col>

                </Row>
             </CardBody>
        </Card> */}

        {/* Earning management counter */}

        {/* <Card>
            <CardTitle className="ast-3">Earning</CardTitle>
             <hr></hr>
             <CardBody>
                <Row className="match-height">
                  <Col md="4">
                    <div  className="bg-s">
                           <span className="ast-1">
                              <Icon.DollarSign size={40} className="mr-50" />
                           </span>
                           <h2 className="ast-2">
                                 Admin Earning
                                <span className="ast-4">37545</span>
                           </h2>
                      </div>
                  </Col>
                  <Col md="4">
                      <div  className="bg-p">
                           <span className="ast-1">
                              <Icon.DollarSign size={40} className="mr-50" />
                           </span>
                           <h2 className="ast-2">
                                Astrologer Earning
                               <span className="ast-4">07</span>
                           </h2>
                      </div>
                  </Col>
                  <Col md="4">
                      <div  className="bg-u">
                           <span className="ast-1">
                              <Icon.DollarSign size={40} className="mr-50" />
                           </span>
                           <h2 className="ast-2">
                               Minutes Call
                               <span className="ast-4">07</span>
                           </h2>
                      </div>
                  </Col>

                </Row>
             </CardBody>
        </Card> */}

        {/* package counter */}

        {/* <Card>
            <CardTitle className="ast-3">Package</CardTitle>
             <hr></hr>
             <CardBody>
                <Row className="match-height">
                  <Col md="4">
                    <div  className="bg-s">
                           <span className="ast-1">
                              <Icon.Gift size={40} className="mr-50" />
                           </span>
                           <h2 className="ast-2">
                                Total Offer
                                <span className="ast-4">37545</span>
                           </h2>
                      </div>
                  </Col>
                  <Col md="4">
                      <div  className="bg-p">
                           <span className="ast-1">
                              <Icon.CheckCircle size={40} className="mr-50" />
                           </span>
                           <h2 className="ast-2">
                                Total Recharge
                               <span className="ast-4">07</span>
                           </h2>
                      </div>
                  </Col>
                  <Col md="4">
                      <div  className="bg-u">
                           <span className="ast-1">
                              <Icon.Package size={40} className="mr-50" />
                           </span>
                           <h2 className="ast-2">
                               Total Package
                               <span className="ast-4">07</span>
                           </h2>
                      </div>
                  </Col>

                </Row>
             </CardBody>
        </Card> */}
        {/* <Row>
          <Col sm="12">
            <TodayAstrologerList />
          </Col>
          <Col sm="12">
            <TodayCustomerList />
          </Col>
          <Col sm="12">
            <TodayRechargeList />
          </Col>
          <Col sm="12">
            <TodayCallHistory />
          </Col>
        </Row> */}
      </React.Fragment>
    );
  }
}

export default AnalyticsDashboard;
