import React, { useEffect, useState } from "react";
import { Button, Card, Col, Input, Row } from "reactstrap";
import AgoraUIKit from "agora-react-uikit";
import "./../../../assets/scss/video.scss";
import Customvideo from "./Customvideo";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";

const VideoAstro = () => {
  const [videoCall, setVideoCall] = useState(false);
  const [channelname, setchannel] = useState("");
  const [view, setview] = useState(false);
  const [listofchannel, setlistofchannel] = useState();

  const rtcProps = {
    // Pass your App ID here.
    appId: "7d1f07c76f9d46be86bc46a791884023",
    // Set the channel name.
    channel: "anujesh",
    // Pass your temp token here.
    token:
      "007eJxTYGDa4maqVP+s4+G3uCl1Ajd6budsjz63fv9KUYPn7F+ispcoMJinGKYZmCebm6VZppiYJaVamCUlm5glmlsaWliYGBgZf5zmn9IQyMhwbqo3IyMDBIL47AyJeaVZqcUZDAwAEmUiBQ==",
    // Set the user ID.
    uid: 0,
    // Set the user role
    role: "",
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  const handleSubmit = (e) => {
    const astroid = localStorage.getItem("astroId");

    axiosConfig
      .post(`/user/add_VideoChannel`, {
        astroid: astroid,
        channelName: channelname,
      })
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const astroid = localStorage.getItem("astroId");
    console.log(astroid);
    axiosConfig
      // .get(`/user/getoneChannl/644fae265f6b65e11a4bdbd7`)
      .get(`user/channelList/${astroid}`)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  return (
    <div>
      <Card>
        <Row>
          <Col>
            <div className="d-flex justify-content-end container mt-2">
              <div>
                <Button
                  onClick={() => {
                    history.goBack();
                    // history.push("/uploads");
                  }}
                  color="primary"
                >
                  {" "}
                  Back
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center mb-2 mt-1">
          <h2>Videocalls</h2>
        </div>
        <Row>
          <Col>
            <div className="container chenell mx-1 mb-1 mt-1">
              <div className="cchannel">
                <Button
                  onClick={() => setview(true)}
                  className=""
                  color="success"
                  style={{ cursor: "pointer" }}
                >
                  Create Channel
                </Button>
              </div>
            </div>
          </Col>
          {view === true ? (
            <>
              <Col lg="4" sm="4" md="4">
                <div className="container mt-1 mb-1">
                  <Input
                    value={channelname}
                    className="form-control  "
                    id="textbox"
                    name="city"
                    placeholder="create channel"
                    onChange={(e) => {
                      setchannel(e.target.value);
                    }}
                  />
                </div>
              </Col>
              <Col lg="4" sm="4" md="4">
                <div className="container mt-1 mb-1">
                  <Button
                    onClick={(e) => {
                      handleSubmit(e);
                      setview(false);
                    }}
                    color="success"
                  >
                    Add Channel
                  </Button>
                </div>
              </Col>
            </>
          ) : null}
        </Row>
        <Row>
          <div className="container mt-1 mb-1">
            {videoCall ? (
              <div style={{ display: "flex", width: "75vw", height: "80vh" }}>
                <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
              </div>
            ) : (
              <Button onClick={() => setVideoCall(true)} color="success">
                Add call
              </Button>
            )}
          </div>
        </Row>
        <Row>
          <div className="container mt-1 mb-1">
            <Customvideo channelname={channelname} />
          </div>
        </Row>
      </Card>
    </div>
  );
};

export default VideoAstro;
