import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// import {

// 	CognitoUserPool,

// 	CognitoUser,

// } from "amazon-cognito-identity-js";

// StylesSheets
import "./static/css/style.css";

import App from "./App/App.jsx";
import { store } from "./Redux/store";

// const userPool = new CognitoUserPool({UserPoolId: 'ap-south-1_x8YZmKVyG', ClientId: '2j72c46s52rm3us8rj720tsknd'});
// const cognitoUser = null
// try {
//   cognitoUser = new CognitoUser({
//     Username: localStorage.getItem("username"),
//     Pool: userPool
//   });
// }
// catch(e){
// }

// class App extends Component {

//   state={
//     ETF:'XLK',
//     startDate:'20200608'
//   };

//   componentDidMount() {
// 		this.setState({
// 			ETF:'XLK',
// 	   		startDate:'20200608'
// 		});
//   }

//   SubmitFn = (etfname, newdate) => {
//     console.log("Change ETF Name & Date");

//     let ETFcopy = this.state.ETF;
//     let startDatecopy = this.state.startDate;

//     ETFcopy=etfname
//     startDatecopy=newdate

//     console.log(etfname);
//     console.log(newdate);

//     this.setState({
//       ETF:ETFcopy,
//       startDate:startDatecopy
//     });
//   };

//   SubmitNewETF = (etfName) => {
//     this.setState({ETF: etfName});
//   }

//   render(){
//   	return (
//     <Router history={history} >
//       <div className="Container">
//         <div>
//           <div className="Form">
//             <Former SubmitFn={this.SubmitFn} ETF={this.state.ETF} startDate={this.state.startDate}/>
//           </div>
//         </div>
//       </div>
//       <Container fluid style={{'backgroundColor':'#292b2c'}}>

//         <PrivateRoute path="/ETF-Description" startDate={this.state.startDate} ETF={this.state.ETF} submitFn={this.SubmitNewETF} component={ETF_Description}/>
//         <PrivateRoute path="/Live-Arbitrage-Single" component={Live_Arbitrage_Single} ETF={this.state.ETF} />
//         <PrivateRoute path="/Live-Arbitrage" component={Live_Arbitrage} ETF={this.state.ETF} />
//         <PrivateRoute path="/newhistoricalarbitrage" startDate ={this.state.startDate} ETF={this.state.ETF} component={HistoricalArbitragee} ETF={this.state.ETF} />

//         <Route path="/SignUp" render={() => <SignUpFormPage />} />
//         <Route path="/Login" component={SignInFormPage} />
//         <Route path="/EmailVerification" component={EmailVerification} />
//       </Container>
//     </ Router>
//     );
//   }

// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
