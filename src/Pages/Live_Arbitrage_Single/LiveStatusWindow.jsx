import React from "react";
import Card from "react-bootstrap/Card";
import "../../static/css/Live_Arbitrage.css";

const LiveStatusWindow = (props) => {
  return (
    <Card bg="dark" text="light" className="height-100">
      <Card.Header>
        <div>
          <span className="h4"></span>
          H: <span className="text-muted">{props.HighPrice} </span>
          O: <span className="text-muted">{props.OpenPrice} </span>
          C: <span className="text-muted">{props.ClosePrice} </span>
          L: <span className="text-muted">{props.LowPrice} </span>
        </div>
        <div>
          Time: <span className="text-muted">{props.CurrentTime}</span>
        </div>
      </Card.Header>

      <Card.Body>
        <div>
          <span className={props.LiveColor} style={{ fontSize: "15px" }}>
            ETF Status: {props.ETFStatus}
          </span>
        </div>
        <div>
          <span className={props.LiveColor} style={{ fontSize: "15px" }}>
            Signal: {props.Signal}
          </span>
        </div>
        <div>
          <span className={props.LiveColor} style={{ fontSize: "15px" }}>
            Strength: {props.SignalStrength}
          </span>
        </div>

        <div>
          <span className="">$ Arbitrage: {props.LiveArbitrage}</span>
        </div>
        <div>
          <span className="">$ Spread: {props.LiveSpread}</span>
        </div>
        <div>
          <span className="">
            Candlestick Observed: {props.last_minute_signal}
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LiveStatusWindow;
