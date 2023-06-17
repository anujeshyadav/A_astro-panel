import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "../../assets/scss/chat.scss";

// import ChatAppMassage from "./ChatAppMassage";
import axiosConfig from "../../../axiosConfig";
import { SlCallOut } from "react-icons/sl";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import swal from "sweetalert";
import LiveChatAppMassage from "./LiveChatAppMassage";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.countRef = React.createRef();
    this.apicall = React.createRef();
    this.callmsg = React.createRef();

    this.state = {
      Index: "",
      data: {},
      sendbutton: "",
      Activeastro: {},
      CurrentRoomid: "",
      roomChatData: [],
      userId: "",
      astroId: "",
      msg: "hello",
      roomId: "",

      //   modal: false,
    };

    // this.toggle = this.toggle.bind(this);
  }

  handleliveChat = () => {
    setInterval(() => {
      const astroId = localStorage.getItem("astroId");
      axiosConfig
        .get(`/user/liveChat_msgbyastro/${astroId}`)
        .then((res) => {
          this.setState({ roomChatData: res?.data.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  };

  componentDidMount = () => {
    // this.getChatRoom();
    this.handleliveChat();
    console.log(this.props);
    const astroId = localStorage.getItem("astroId");

    axiosConfig
      .get(`/admin/getoneAstro/${astroId}`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ Activeastro: res?.data?.data });
      })
      .catch((err) => {
        console.log(err);
      });

    let user_id = JSON.parse(localStorage.getItem("user_id"));

    // axiosConfig
    //   .get(`/user/getroomid/${user_id}`)
    //   .then((response) => {
    //     console.log(response.data.data);
    //     if (response.data.status === true) {
    //       this.setState({
    //         data: response.data.data,
    //         fullname: response.data.data.fullname,
    //         userimg: response.data.data.userimg,
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // console.log(error.response);
    //   });
  };

  // getChatRoom = (data, status) => {
  //   let userid = JSON.parse(localStorage.getItem("user_id"));
  //   let obj = {
  //     astroid: data?._id,
  //     msg: this.state.msg,
  //   };
  //   if (this.state.CurrentRoomid != "") {
  //     axiosConfig
  //       .get(`/user/allchatwithuser/${this.state.CurrentRoomid}`)
  //       .then((respons) => {
  //         console.log("allchatwith user _96", respons?.data?.data);

  //         if (respons.data.status === true) {
  //           this.setState({ roomChatData: respons?.data.data });
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else {
  //     axiosConfig
  //       .post(`/user/addchat/${userid}`, obj)
  //       .then((response) => {
  //         console.log("chat", response.data);
  //         this.setState({ CurrentRoomid: response?.data?.data?.roomid });
  //         console.log("chat", response?.data?.data?.roomid);
  //         if (response.data.status === true) {
  //           this.setState({ msg: "" });
  //           axiosConfig
  //             .get(`/user/allchatwithuser/${response?.data?.data?.roomid}`)
  //             .then((respons) => {
  //               console.log(respons?.data?.data);
  //               if (respons.data.status === true) {
  //                 this.setState({ roomChatData: respons?.data.data });
  //               }
  //             })
  //             .catch((error) => {
  //               console.log(error);
  //             });
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };

  handlechat = () => {
    console.log(this.state.roomId);
    axiosConfig
      .get(`/user/allchatwithuser/${this.state.roomId}`)
      .then((response) => {
        console.log(response?.data?.data);
        if (response.data.status === true) {
          this.setState({ roomChatData: response?.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // getChatRoomId = async (user, index) => {
  //   this.setState({ sendbutton: user.astroid?._id });
  //   this.setState({ Index: index });
  //   localStorage.setItem("videoCallAstro_id", user?.astroid?._id);
  //   console.log("userdata", user);
  //   this.setState({ astroId: user?.astroid?._id, roomId: user?.roomid });
  //   this.handlechat();
  // };
  submitHandler = async (e, astroid, userId) => {
    e.preventDefault();

    const astroId = localStorage.getItem("astroId");
    let userid = JSON.parse(localStorage.getItem("user_id"));

    if (this.state.msg != "") {
      let obj = {
        astroid: astroId,
        msg: this.state.msg,
      };

      // await axiosConfig
      //   .post(`/user/addchat/${userid}`, obj)
      //   .then((response) => {
      //     console.log("hdfkjh", response.data?.data?.roomid);
      //     if (response.data.status === true) {
      //       this.setState({ msg: "" });
      //       axiosConfig

      //         .get(`/user/allchatwithuser/${response.data?.data?.roomid}`)
      //         .then((respons) => {
      //           console.log(respons?.data?.data);

      //           if (respons.data.status === true) {
      //             this.setState({ roomChatData: respons?.data.data });
      //           }
      //         })
      //         .catch((error) => {
      //           console.log(error);
      //         });
      //     }
      //   })

      //   .catch((error) => {
      //     console.log(error);
      //   });
    } else swal("Input filed is blank", "Fill it before send");
  };

  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };

  render() {
    return (
      <div className="">
        <div class="app rt-chats">
          <div class="messages">
            <div className="chat-header">
              <p>
                <span>
                  <img
                    src={this.state.Activeastro?.img}
                    className="app-img"
                    alt=""
                  />
                </span>
                {this.state.Activeastro?.fullname}
              </p>
            </div>
            <div class="messages-history">
              <LiveChatAppMassage
                roomChatData={
                  this.state.roomChatData.length > 0
                    ? this.state.roomChatData
                    : []
                }
              />
            </div>

            {/* <form class="messages-inputs">
              <input
                type="text"
                placeholder="Send a message"
                onChange={(e) => {
                  this.handleChange(e);
                }}
                value={this.state.msg}
                defaultValue={""}
              />

              <button
                onClick={(e) => {
                  this.submitHandler(e, this.state.astroId, this.state.userId);
                }}
              >
                <i class="material-icons">send</i>
              </button>
            </form> */}
          </div>
        </div>
      </div>
    );
  }
}
export default ChatApp;
