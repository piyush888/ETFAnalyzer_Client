import React from "react";
import { Card, Button,Carousel } from "react-bootstrap";
import imageUrl from "../../static/Images/articlestop.png";
import tempImage from "../../static/Images/tempImage.jpg";
import articlesList from "./articlesList";
import { NavLink } from "react-router-dom";
import { CommonNavBar } from "../../Common_Components/NavBar";


import StockChart from "../../static/Images/AppScreenShots/StockChart.png";
import HistChart from "../../static/Images/AppScreenShots/HistChart.png";
import HistArbSeries from "../../static/Images/AppScreenShots/HistArbSeries.png";


import "./Articles.css";

const ArticlesMain = () => {
  return (
    <>
      <CommonNavBar />
      <div className="ArticlePage height-100vh">
          <br/>
          
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-50 Rounded"
                      src={HistChart}
                      alt="Historical Arbitrage Series"
                    />
                    <Carousel.Caption>
                      <h3>Historical Arbitrage</h3>
                      <p>Arbitrage data for XLK etf</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100 Rounded"
                      src={StockChart}
                      alt="Stock Price Chart"
                    />

                    <Carousel.Caption>
                      <h3>Stock Price Chart</h3>
                      <p>Arbitrage signal on stock price chart</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100 Rounded"
                      src={HistArbSeries}
                      alt="Arbitrage Time Series"
                    />

                    <Carousel.Caption>
                      <h3>Arbitrage Time Series</h3>
                      <p>Balancing ETF arbitrage with time</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>

              {articlesList.map((data, index) => (
                <div key={data.title} className="col-sm-4 margin-top-1em">
                  <Card className="CardBody">
                    <Card.Img className="Rounded" variant="top" src={ShootingStar} />
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Text>
                        {data.text}
                      </Card.Text>
                        
                      <Button as={NavLink} 
                        to={{
                          pathname:`/articles/${data.id}`,
                        }} 
                        variant="primary">

                        Go to article
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesMain;
