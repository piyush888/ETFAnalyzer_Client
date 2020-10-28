import React, { useState } from "react";
import { useRef, useEffect } from "react";
import Axios from "axios";
import { Card, Table } from "react-bootstrap";
import { Row, Col, Navbar, Container, NavbarBrand } from "react-bootstrap";
import Image from "react-bootstrap/Image";

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

import HeroImage from "../../static/HomePage/hero-img.png";

import "./LandingPage.css";
import { CommonNavBar } from "../../Common_Components/NavBar";

const LandingPage = (props) => {
  const { ETF } = props;

  return (
    <>
      <CommonNavBar />
      <div className="LandingPage">
        
          <div className="container">
              <section id="hero">
                <div className="container">
                  <br/>
                  <div class="row jumbotron" style={{backgrounColor:"#F6BB42"}}>
                  <h5><b> ETF Trace is for academic research purpose only, webapp is not updated with data and is for idea demonstration to highlight issue in etf market !!! - Kshitiz Sharma.</b></h5>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up">
                        <h2><b>ETF Trace solves arbitrage in etf industry</b></h2>
                        <h4>Don't buy over priced or over sold etfs, measure arbitrage in ETF & Buy/Sell at right price.</h4>
                        <a className="btn btn-primary btn-sm" href="/signup">Sign up & start for free, NO card required</a>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="fade-left">
                      <Image src={HeroImage} style={{ height: "400px" }}  className="img-fluid"/>
                    </div>
                  </div>
                </div>
              </section>
        </div>
        

        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xs-12 FeatureBox">
              <h3 className="text-dark"><b><center>Software services</center></b></h3>
              <div class="row jumbotron">
                <div className="col-md-6 col-lg-6 col-xs-12">
                  <h5>Live Arbitrage</h5>
                  <ul>
                    <li>Tracking error on ETF updates every minute.</li>
                    <li>Over Sold/Bought or Balanced Signal</li>
                    <li>Arbitrage, Spread & Volume traded info</li>
                    <li>Quantitative Analysis of deviation of current arbitrage</li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-6 col-xs-12">
                  <Image src={LiveArbitrage} fluid rounded />
                </div>
              </div>
            

            <div class="row mb-3">
              <div className="col-md-6 col-lg-6 col-xs-12">
                <Image src={AllETFLiveArbitrage} fluid rounded />
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12">
                <h5>All ETF Live Arbitrage</h5>
                <ul>
                  <li>Live tracking error on all major ETF above $ 1 Billion</li>
                  <li>Compare arbitrage on ETF universe</li>
                  <li>
                    Set filters on ETF, $ Arbitrage or Over Bought/Sell signals
                  </li>
                  <li>Arbitrage, Spread & last ETF Trade Price</li>
                </ul>  
              </div>
            </div>

            <div class="row jumbotron">
              <div className="col-md-6 col-lg-6 col-xs-12">
                <h5>ETF Description</h5>
                <ul>
                  <li>Look into the fundamentals of an ETF</li>
                  <li>See Historical Arbitrage for the ETF</li>
                  <li>Compare ETFs similar ETFs</li>
                  <li>Compare Buy/Sell Signals for ETFs</li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12">
                <Image src={ETFDescription} fluid rounded />
              </div>
            </div>

            <div class="row mb-2">
              <div className="col-md-6 col-lg-6 col-xs-12">
                <Image src={HistoricalArbitrage} fluid rounded />
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12">
                <h5>Historical Arbitrage</h5>
                <ul>
                  <li>Quantitaive analysis of Historical Arbitrage for past ETFs</li>
                  <li>Study ETF arbitrage for past dates</li>
                  <li>Study stock chart and signals generated at maxima/minima</li>
                  <li>Compare historical performance of ETFs in the same industry</li>
                </ul>  
              </div>

            </div>
            
            </div>
          </div>
        </div>

        
          <div className="container jumbotron">
            
              <h3><center className="text-dark">How big is ETF arbitrage issue?</center></h3>
              <h5>
              <i>
                "ETF managers are supposed to keep their funds’ investment
                performance in line with the indexes they track. That mission is
                not as easy as it sounds. There are many ways an ETF can stray
                from its intended index. That tracking error can be a cost to
                investors."
              </i>
              <a
                href="https://www.fidelity.com/learning-center/investment-products/etf/drawbacks-of-etfs"
                target="_blank"
              >
                {" "}
                - <Image src={Fidelity} fluid style={{ height: "30px" }} />{" "}
              </a>
            </h5>
            <br/>
            <h5>
              <i>
                "Such deviations can make it hard to build a portfolio.
                “Tracking error, whether positive or negative, should be a
                concern for investors, as it measures the effectiveness of a
                manager to replicate the performance of an index,” said Michael
                Jabara, an E.T.F. analyst at Morgan Stanley Smith Barney.."
              </i>
              <a
                href="https://www.nytimes.com/2013/04/07/business/mutfund/exchange-traded-funds-tracking-error-is-often-overlooked.html"
                target="_blank"
              >
                {" "}
                - <Image src={NYTimes} fluid style={{ height: "30px" }} />
              </a>
            </h5>
            <br/>
            <h5>
              <i>
                "U.S.-based exchange-traded funds have racked up a record $4
                trillion in assets under management"
              </i>
              <a
                href="https://www.cnbc.com/2019/11/09/etf-assets-rise-to-a-record-4-trillion-and-its-still-early-days.html#:~:text=%E2%80%9CToday%2C%20the%20ETF%20industry%20globally,underperformed%20the%20S%26P%20%5B500%5D."
                target="_blank"
              >
                {" "}
                - <Image src={CNBC} fluid style={{ height: "40px" }} />
              </a>
            </h5>
            <br/>
            <h5>
              <i>
                "The booming exchange-traded fund industry could become 10 times
                bigger in the next decade and top $50 trillion"
              </i>
              <a
                href="https://www.bloomberg.com/news/articles/2019-12-13/a-50-trillion-etf-market-bofa-says-it-could-happen-next-decade"
                target="_blank"
              >
                {" "}
                - <Image src={BofaSymbol} fluid style={{ height: "60px" }} />
              </a>
            </h5>
          </div>
        

        <div className="container mb-3">
          <center>
            <h4 className="">Powered By</h4>
          </center>
          <div className="row">
            <div className="col-md-3">
              <Image src={AWS} fluid style={{ height: "90px" }} />
            </div>

            <div className="col-md-2">
              <Image src={Python} fluid style={{ height: "100px" }} />
            </div>

            <div className="col-md-2">
              <Image src={ReactSymbol} fluid style={{ height: "100px" }} />
            </div>

            <div className="col-md-3">
              <Image src={MongoDb} fluid style={{ height: "90px" }} />
            </div>
          </div>
        </div>


       
        <br />

        <div className="container">
          <center>
            <h4 className="">Team</h4>
          </center>
          <ul className="custom-bullet">
            <li>
              <a
                href="https://www.linkedin.com/in/kshitiz-sharma/"
                target="_blank"
              >
                Kshitiz Sharma
              </a>{" "}
              - Developer, ETF trader & business development
            </li>
            <li>
              <a href="https://www.linkedin.com/in/piyush888/" target="_blank">
                Piyush Garg
              </a>{" "}
              - Lead tech architect
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/adityanaik94/"
                target="_blank"
              >
                Aditya Naik
              </a>{" "}
              - UX/UI design & developer
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/haochen-liu-a62b2b96/"
                target="_blank"
              >
                Haochen Liu
              </a>{" "}
              - Business development & data scientist
            </li>

          </ul>
        </div>

        <br />
        <div className="container mb-3">
          <center>
            <h4 className="">Contact Us</h4>
          </center>
          <ul className="custom-bullet">
            <li>
              <h5>Email Id : kshitizsharmav@gmail.com, piyush888@gmail.com</h5>
            </li>
            <li>
              <h5>Phone : +1 551-697-1888</h5>
            </li>
          </ul>
        </div>

        <br />
        <div className="">
          <p className="pull-left">&copy; EtfTrace @2020 All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
