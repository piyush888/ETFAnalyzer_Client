import React, { useState } from "react";
import { useRef, useEffect } from "react";
import Axios from "axios";
import { Card, Table } from "react-bootstrap";
import { Row, Col, Navbar, Container, NavbarBrand } from "react-bootstrap";
import Image from 'react-bootstrap/Image'


import LiveArbitrage from "../../static/Images/AppScreenShots/LiveArbitrage.png";
import AllETFLiveArbitrage from "../../static/Images/AppScreenShots/AllETFLiveArbitrage.png";
import ETFDescription from "../../static/Images/AppScreenShots/ETFDescription.png";
import HistoricalArbitrage from "../../static/Images/AppScreenShots/HistoricalArbitrage.png";


import Fidelity from "../../static/Images/CompaniesSymbol/Fidelity.png";
import BofaSymbol from "../../static/Images/CompaniesSymbol/BofaSymbol.jpg";
import CNBC from "../../static/Images/CompaniesSymbol/CNBC.png";
import NYTimes from "../../static/Images/CompaniesSymbol/NYTimes.png";

import AWS from "../../static/Images/PoweredBy/AWS.png";
import ReactSymbol from "../../static/Images/PoweredBy/React.png";
import Python from "../../static/Images/PoweredBy/Python.png";
import MongoDb from "../../static/Images/PoweredBy/MongoDb.png";

import "./LandingPage.css";

const LandingPage = (props) => {
  const { ETF } = props;

  return (
    <div className="LandingPage">
        <div className="jumbotron">
          <div className="container">
                <h3 className="">ETF Trace solves all major problems in ETF industry</h3>
                <ul class="custom-bullet">
                  <li><i class="fa fa-check-square text-primary"></i> ETF mispricing & divergence from underlying NAV</li>
                  <li><i class="fa fa-check-square text-primary"></i> Be informed on tracking error, spread & absolute error </li>
                  <li><i class="fa fa-check-square text-primary"></i> Understand ETF underlyings which are moving the ETF</li>
                  <li><i class="fa fa-check-square text-primary"></i> Over Bought, Over Sold or Balanced Signals for ETF</li>
                  <li><i class="fa fa-check-square text-primary"></i> Compare multiple ETFs in industry, similar Assets Under Management</li>
                </ul>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xs-12 FeatureBox">
              <h4>Live Arbitrage</h4>
              <ul>
                <li>Tracking error on ETF updates every minute.</li>
                <li>Over Sold/Bought or Balanced Signal</li>
                <li>Arbitrage, Spread & Volume traded info</li>
                <li>Quantitative Analysis of deviation of current arbitrage</li>
              </ul>
              <Image src={LiveArbitrage} fluid rounded />
            </div>

             <div className="col-md-6 col-lg-6 col-xs-12 FeatureBox">
              <h4>All ETF Live Arbitrage</h4>
              <ul>
                <li>Live tracking error on all major ETF above $ 1 Billion</li>
                <li>Compare arbitrage on ETF universe</li>
                <li>Set filters on ETF, $ Arbitrage or Over Bought/Sell signals</li>
                <li>Arbitrage, Spread & last ETF Trade Price</li>
              </ul>
              <Image src={AllETFLiveArbitrage} fluid rounded />
            </div>

            <div className="col-md-6 col-lg-6 col-xs-12 FeatureBox">
              <h4>ETF Description</h4>
              <ul>
                <li>Look into the fundamentals of an ETF</li>
                <li>See Historical Arbitrage for the ETF</li>
                <li>Compare ETFs similar ETFs</li>
                <li>Compare Buy/Sell Signals for ETFs</li>
              </ul>
              <Image src={ETFDescription} fluid rounded />
            </div>

            <div className="col-md-6 col-lg-6 col-xs-12">
              <h4>Historical Arbitrage</h4>
              <ul>
                <li>Quantitaive analysis of Historical Arbitrage for past ETFs</li>
                <li>Study ETF arbitrage for past dates</li>
                <li>Study stock chart and signals generated at maxima/minima</li>
                <li>Compare historical performance of ETFs in the same industry</li>
              </ul>
              <Image src={HistoricalArbitrage} fluid rounded />
            </div>

            
          </div>
        </div>

        <div className="jumbotron">
          <div className="container">
              <h5>
                <i>"ETF managers are supposed to keep their funds’ investment performance in line with the indexes they track. That mission is not as easy as it sounds. There are many ways an ETF can stray from its intended index. That tracking error can be a cost to investors."</i>
                <a href="https://www.fidelity.com/learning-center/investment-products/etf/drawbacks-of-etfs"
                  target="_blank"> - <Image src={Fidelity} fluid style={{height: '30px'}} /> </a>
              </h5>
              
              <br/>

              <h5>
                <i>"Such deviations can make it hard to build a portfolio. “Tracking error, whether positive or negative, should be a concern for investors, as it measures the effectiveness of a manager to replicate the performance of an index,” said Michael Jabara, an E.T.F. analyst at Morgan Stanley Smith Barney.."</i>
                <a href="https://www.nytimes.com/2013/04/07/business/mutfund/exchange-traded-funds-tracking-error-is-often-overlooked.html"
                  target="_blank"> - <Image src={NYTimes} fluid style={{height: '30px'}} /></a>
              </h5>


              <br/>

              <h5>
                <i>"U.S.-based exchange-traded funds have racked up a record $4 trillion in assets under management"</i>
                <a href="https://www.cnbc.com/2019/11/09/etf-assets-rise-to-a-record-4-trillion-and-its-still-early-days.html#:~:text=%E2%80%9CToday%2C%20the%20ETF%20industry%20globally,underperformed%20the%20S%26P%20%5B500%5D."
                  target="_blank"> - <Image src={CNBC} fluid style={{height: '40px'}} /></a>
              </h5>
              <br/>
              <h5>
                <i>"The booming exchange-traded fund industry could become 10 times bigger in the next decade and top $50 trillion"</i>
                <a href="https://www.bloomberg.com/news/articles/2019-12-13/a-50-trillion-etf-market-bofa-says-it-could-happen-next-decade"
                  target="_blank"> - <Image src={BofaSymbol} fluid style={{height: '60px'}} /></a>
              </h5>    
          </div>
        </div>
        
        <div className="container mb-3">
          <center><h4 className="">Powered By</h4></center>
          <div className="row">
            <div class="col-md-3">
              <Image src={AWS} fluid style={{height: '90px'}} />
            </div>

            <div class="col-md-2">
              <Image src={Python} fluid style={{height: '100px'}} />
            </div>

            <div class="col-md-2">
              <Image src={ReactSymbol} fluid style={{height: '100px'}} />
            </div>

            <div class="col-md-3">
              <Image src={MongoDb} fluid style={{height: '90px'}} />
            </div>

          </div>
        </div>
  
          <br/>

          <div className="container">
            <center><h4 className="">Team</h4></center>
             <ul class="custom-bullet">
                <li><a href="https://www.linkedin.com/in/kshitiz-sharma/" target="_blank">Kshitiz Sharma</a> - Developer & Business development</li>
                <li><a href="https://www.linkedin.com/in/piyush888/" target="_blank">Piyush Garg</a>  - Lead tech architect & Business development</li>
                <li><a href="https://www.linkedin.com/in/adityanaik94/" target="_blank">Aditya Naik</a> - UI design & developer</li>
              </ul>
          </div>
  
          <br/>        
         <div className="container mb-3">
          <center><h4 className="">Contact Us</h4></center>
             <ul class="custom-bullet">
                <li><h5>Email Id : kshitizsharmav@gmail.com, piyush888@gmail.com</h5></li>
                <li><h5>Phone : +1 551-697-1888</h5></li>
                
            </ul>
        </div>

        <br/>   
        <div className="">
          <p class="pull-left">&copy; EtfTrace @2020 All Rights Reserved</p>
        </div>


    </div>

  );
};

export default LandingPage;
