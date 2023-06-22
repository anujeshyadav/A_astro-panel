import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";

import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

class CallHistory extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },

      {
        headerName: "Caller Sid",
        field: "callerid",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.Sid}</span>
            </div>
          );
        },
      },

      {
        headerName: "Name",
        field: "firstname",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.userid?.fullname}</span>
            </div>
          );
        },
      },

      {
        headerName: "Email",
        field: "email	",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.userid?.email}</span>
            </div>
          );
        },
      },
      {
        headerName: "Mobile No.",
        field: "mobile	",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.To}</span>
            </div>
          );
        },
      },
      {
        headerName: "Date",
        field: "date",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data?.StartTime.split(" ")[0]}</span>
            </div>
          );
        },
      },
      {
        headerName: "Time",
        field: "time",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.StartTime.split(" ")[1]}</span>
            </div>
          );
        },
      },
      {
        headerName: "Duration",
        field: "Duration",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.Duration}</span>
            </div>
          );
        },
      },
      {
        headerName: "Amount Deducted",
        field: "Amount",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.userid?.deductedAmt}</span>
            </div>
          );
        },
      },

      {
        headerName: "Status",
        field: "dateofregister",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>Completed</span>
            </div>
          );
        },
      },
    ],
  };
  async componentDidMount() {
    let { id } = this.props.match.params;
    let astroId = localStorage.getItem("astroId");
    // console.log("astroId", astroId);
    await axiosConfig
      .get(`/user/astroCallHistory/${astroId}`)
      .then((response) => {
        let rowData = response.data.data;
        // console.log(rowData);
        this.setState({ rowData: rowData.reverse() });
      });

    await axiosConfig.get("/admin/allcustomer").then((response) => {
      let rowData = response.data.data;
    });
  }

  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/admin/delcustomer/${id}`).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };
  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };
  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      // console.log(rowData),
      <div>
        <Breadcrumbs
          breadCrumbTitle="Call Histroy"
          breadCrumbParent="Home"
          breadCrumbActive="Call Histroy "
        />

        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 sm="6" className="float-left">
                    Call Histroy
                  </h1>
                </Col>
                <Col>
                  <Route
                    render={({ history }) => (
                      <Button
                        className=" btn btn-success float-right"
                        onClick={() => history.push("/app/user/addUser")}
                      >
                        Add User
                      </Button>
                    )}
                  />
                </Col>
              </Row>
              <CardBody>
                {this.state.rowData === null ? null : (
                  <div className="ag-theme-material w-100 my-2 ag-grid-table">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="mb-1">
                        <UncontrolledDropdown className="p-1 ag-dropdown">
                          <DropdownToggle tag="div">
                            {this.gridApi
                              ? this.state.currenPageSize
                              : "" * this.state.getPageSize -
                                (this.state.getPageSize - 1)}{" "}
                            -{" "}
                            {this.state.rowData.length -
                              this.state.currenPageSize *
                                this.state.getPageSize >
                            0
                              ? this.state.currenPageSize *
                                this.state.getPageSize
                              : this.state.rowData.length}{" "}
                            of {this.state.rowData.length}
                            <ChevronDown className="ml-50" size={15} />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(20)}
                            >
                              20
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(50)}
                            >
                              50
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(100)}
                            >
                              100
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(134)}
                            >
                              134
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between mb-1">
                        <div className="table-input mr-1">
                          <Input
                            placeholder="search..."
                            onChange={(e) =>
                              this.updateSearchQuery(e.target.value)
                            }
                            value={this.state.value}
                          />
                        </div>
                        <div className="export-btn">
                          <Button.Ripple
                            color="primary"
                            onClick={() => this.gridApi.exportDataAsCsv()}
                          >
                            Export as CSV
                          </Button.Ripple>
                        </div>
                      </div>
                    </div>
                    <ContextLayout.Consumer>
                      {(context) => (
                        <AgGridReact
                          gridOptions={{}}
                          rowSelection="multiple"
                          defaultColDef={defaultColDef}
                          columnDefs={columnDefs}
                          rowData={rowData}
                          onGridReady={this.onGridReady}
                          colResizeDefault={"shift"}
                          animateRows={true}
                          floatingFilter={false}
                          pagination={true}
                          paginationPageSize={this.state.paginationPageSize}
                          pivotPanelShow="always"
                          enableRtl={context.state.direction === "rtl"}
                        />
                      )}
                    </ContextLayout.Consumer>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default CallHistory;

// import React from "react";
// import {
//   Card,
//   CardBody,
//   Input,
//   Row,
//   Col,
//   Button,
//   UncontrolledDropdown,
//   DropdownMenu,
//   DropdownItem,
//   DropdownToggle,
// } from "reactstrap";
// // import axiosConfig from "../../../axiosConfig";
// import axios from "axios";
// import { ContextLayout } from "../../../utility/context/Layout";
// import { AgGridReact } from "ag-grid-react";
// import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
// //import classnames from "classnames";
// import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
// import "../../../assets/scss/pages/users.scss";
// import { Route } from "react-router-dom";
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import axiosConfig from "../../../axiosConfig";
// class CallHistory extends React.Component {
//   state = {
//     rowData: [],
//     paginationPageSize: 20,
//     currenPageSize: "",
//     getPageSize: "",
//     defaultColDef: {
//       sortable: true,
//       editable: true,
//       resizable: true,
//       suppressMenu: true,
//     },
//     columnDefs: [
//       {
//         headerName: "S.No",
//         valueGetter: "node.rowIndex + 1",
//         field: "node.rowIndex + 1",
//         width: 100,
//         filter: true,
//         // checkboxSelection: true,
//         // headerCheckboxSelectionFilteredOnly: true,
//         // headerCheckboxSelection: true,
//       },

//       {
//         headerName: "Caller ID",
//         field: "callerid",
//         filter: true,
//         width: 200,
//         cellRendererFramework: (params) => {
//           return (
//             <div>
//               <span>
//                 {params.data.firstname} {params.data.lastname}
//               </span>
//             </div>
//           );
//         },
//       },

//       {
//         headerName: "Name",
//         field: "firstname",
//         filter: true,
//         width: 200,
//         cellRendererFramework: (params) => {
//           return (
//             <div>
//               <span>
//                 {params.data.firstname} {params.data.lastname}
//               </span>
//             </div>
//           );
//         },
//       },

//       // {
//       //   headerName: "Email",
//       //   field: "email	",
//       //   filter: true,
//       //   width: 200,
//       //   cellRendererFramework: (params) => {
//       //     return (
//       //       <div className="d-flex align-items-center cursor-pointer">
//       //         <span>{params.data.email}</span>
//       //       </div>
//       //     );
//       //   },
//       // },
//       // {
//       //   headerName: "Mobile No.",
//       //   field: "mobile	",
//       //   filter: true,
//       //   width: 200,
//       //   cellRendererFramework: (params) => {
//       //     return (
//       //       <div className="d-flex align-items-center cursor-pointer">
//       //         <span>{params.data.email}</span>
//       //       </div>
//       //     );
//       //   },
//       // },
//       {
//         headerName: "Date",
//         field: "date",
//         filter: true,
//         width: 200,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <span>{params.data.email}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Time",
//         field: "time",
//         filter: true,
//         width: 200,
//         cellRendererFramework: (params) => {
//           return (
//             <div>
//               <span>{params.data.mobile}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Duration",
//         field: "duration",
//         filter: true,
//         width: 200,
//         cellRendererFramework: (params) => {
//           return (
//             <div>
//               <span>{params.data.mobile}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Amount",
//         field: "amount",
//         filter: true,
//         width: 200,
//         cellRendererFramework: (params) => {
//           return (
//             <div>
//               <span>{params.data.mobile}</span>
//             </div>
//           );
//         },
//       },

//       {
//         headerName: "Status",
//         field: "dateofregister",
//         filter: true,
//         width: 200,
//         cellRendererFramework: (params) => {
//           return (
//             <div>
//               <span>{params.data.mobile}</span>
//             </div>
//           );
//         },
//       },

//       {
//         headerName: "Actions",
//         field: "sortorder",
//         width: 200,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="actions cursor-pointer">
//               <Route
//                 render={({ history }) => (
//                   <Eye
//                     className="mr-50"
//                     size="25px"
//                     color="green"
//                     onClick={() =>
//                       history.push(
//                         `/app/userride/viewUserRide/${params.data._id}`
//                       )
//                     }
//                   />
//                 )}
//               />
//               <Route
//                 render={({ history }) => (
//                   <Edit
//                     className="mr-50"
//                     size="25px"
//                     color="blue"
//                     onClick={() => history.push("/app/userride/editUserRide")}
//                   />
//                 )}
//               />
//               <Trash2
//                 className="mr-50"
//                 size="25px"
//                 color="red"
//                 onClick={() => {
//                   let selectedData = this.gridApi.getSelectedRows();
//                   this.runthisfunction(params.data._id);
//                   this.gridApi.updateRowData({ remove: selectedData });
//                 }}
//               />
//             </div>
//           );
//         },
//       },
//     ],
//   };
//   async componentDidMount() {
//     let { id } = this.props.match.params;

//     // await axiosConfig.get(`/user/view_onecust/${id}`).then((response) => {
//     //   let rowData = response.data.data;
//     //   console.log(rowData);
//     //   this.setState({ rowData });
//     // });

//     await axiosConfig.get("/user/callHistory").then((response) => {
//       let rowData = response.data.data;
//       console.log(rowData);
//       this.setState({ rowData });
//     });
//   }

//   async runthisfunction(id) {
//     console.log(id);
//     await axiosConfig.get(`/admin/delcustomer/${id}`).then(
//       (response) => {
//         console.log(response);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }
//   onGridReady = (params) => {
//     this.gridApi = params.api;
//     this.gridColumnApi = params.columnApi;
//     this.setState({
//       currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
//       getPageSize: this.gridApi.paginationGetPageSize(),
//       totalPages: this.gridApi.paginationGetTotalPages(),
//     });
//   };
//   updateSearchQuery = (val) => {
//     this.gridApi.setQuickFilter(val);
//   };
//   filterSize = (val) => {
//     if (this.gridApi) {
//       this.gridApi.paginationSetPageSize(Number(val));
//       this.setState({
//         currenPageSize: val,
//         getPageSize: val,
//       });
//     }
//   };
//   render() {
//     const { rowData, columnDefs, defaultColDef } = this.state;
//     return (
//       <div>
//         <Breadcrumbs
//           breadCrumbTitle="Call Histroy"
//           breadCrumbParent="Home"
//           breadCrumbActive="Call Histroy "
//         />

//         <Row className="app-user-list">
//           <Col sm="12"></Col>
//           <Col sm="12">
//             <Card>
//               <Row className="m-2">
//                 <Col>
//                   <h1 sm="6" className="float-left">
//                     Call Histroy
//                   </h1>
//                 </Col>
//                 <Col>
//                   <Route
//                     render={({ history }) => (
//                       <Button
//                         className=" btn btn-success float-right"
//                         onClick={() => history.push("/app/user/addUser")}
//                       >
//                         Add User
//                       </Button>
//                     )}
//                   />
//                 </Col>
//               </Row>
//               <CardBody>
//                 {this.state.rowData === null ? null : (
//                   <div className="ag-theme-material w-100 my-2 ag-grid-table">
//                     <div className="d-flex flex-wrap justify-content-between align-items-center">
//                       <div className="mb-1">
//                         <UncontrolledDropdown className="p-1 ag-dropdown">
//                           <DropdownToggle tag="div">
//                             {this.gridApi
//                               ? this.state.currenPageSize
//                               : "" * this.state.getPageSize -
//                                 (this.state.getPageSize - 1)}{" "}
//                             -{" "}
//                             {this.state.rowData.length -
//                               this.state.currenPageSize *
//                                 this.state.getPageSize >
//                             0
//                               ? this.state.currenPageSize *
//                                 this.state.getPageSize
//                               : this.state.rowData.length}{" "}
//                             of {this.state.rowData.length}
//                             <ChevronDown className="ml-50" size={15} />
//                           </DropdownToggle>
//                           <DropdownMenu right>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(20)}
//                             >
//                               20
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(50)}
//                             >
//                               50
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(100)}
//                             >
//                               100
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(134)}
//                             >
//                               134
//                             </DropdownItem>
//                           </DropdownMenu>
//                         </UncontrolledDropdown>
//                       </div>
//                       <div className="d-flex flex-wrap justify-content-between mb-1">
//                         <div className="table-input mr-1">
//                           <Input
//                             placeholder="search..."
//                             onChange={(e) =>
//                               this.updateSearchQuery(e.target.value)
//                             }
//                             value={this.state.value}
//                           />
//                         </div>
//                         <div className="export-btn">
//                           <Button.Ripple
//                             color="primary"
//                             onClick={() => this.gridApi.exportDataAsCsv()}
//                           >
//                             Export as CSV
//                           </Button.Ripple>
//                         </div>
//                       </div>
//                     </div>
//                     <ContextLayout.Consumer>
//                       {(context) => (
//                         <AgGridReact
//                           gridOptions={{}}
//                           rowSelection="multiple"
//                           defaultColDef={defaultColDef}
//                           columnDefs={columnDefs}
//                           rowData={rowData}
//                           onGridReady={this.onGridReady}
//                           colResizeDefault={"shift"}
//                           animateRows={true}
//                           floatingFilter={false}
//                           pagination={true}
//                           paginationPageSize={this.state.paginationPageSize}
//                           pivotPanelShow="always"
//                           enableRtl={context.state.direction === "rtl"}
//                         />
//                       )}
//                     </ContextLayout.Consumer>
//                   </div>
//                 )}
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }
// export default CallHistory;
