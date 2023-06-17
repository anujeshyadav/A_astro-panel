import React from "react";
// import { Link } from "react-router-dom";
// import { Container } from "reactstrap";
import "../../../assets/scss/pages/astrochat.scss";
import { CloudLightning } from "react-feather";
import { Col, Row } from "reactstrap";
// import Buyimg from "../../../assets/img/boy-img.png";
// import Countdown from "react-countdown";

class ChatAppMassage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("props value", this.props.roomChatData);
    return (
      <>
        {this.props.roomChatData.length
          ? this.props.roomChatData
              .map((chat, index) => {
                return (
                  <>
                    {chat.type === "user" ? (
                      <div class="message me">
                        <div class="message-body">{chat.msg}</div>
                      </div>
                    ) : (
                      <>
                        <div className="message">
                          <div class="message-body">
                            <Row>
                              <Col lg="4">
                                <img
                                  style={{ borderRadius: "50%" }}
                                  width="40px"
                                  height="40px"
                                  src={chat?.userid?.userimg[0]}
                                />
                              </Col>
                              <Col lg="8">
                                <Row>
                                  <h6 className="container">
                                    <b> {chat?.userid?.fullname}</b>
                                  </h6>
                                </Row>
                                <Row>
                                  <h6 className="container">{chat.msg}</h6>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                );
              })
              .reverse()
          : null}
      </>
    );
  }
}

export default ChatAppMassage;
