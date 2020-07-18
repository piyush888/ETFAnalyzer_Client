import React, { useState } from "react";
import { useRef, useEffect } from "react";
import Axios from "axios";
import { Card, Table } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

import './LandingPage.css';

const LandingPage = (props) => {
	const { ETF } = props;

	return(
			<div className="LandingPage">
				<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
				  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				    <span class="navbar-toggler-icon"></span>
				  </button>

				  <div class="collapse navbar-collapse" id="navbarText">
				    <ul class="navbar-nav mr-auto">
				      <li class="nav-item active">
				        <a class="nav-link" href="#">Etf Arbitrage Tracker <span class="sr-only">(current)</span></a>
				      </li>
				    </ul>
				    
				    <div class="my-2 my-lg-0">
				    	<ul class="navbar-nav">
					      <li class="nav-item active">
					        <a class="nav-link" href="/login">Sign In</a>
					      </li>
					      <li class="nav-item active">
					        <a class="nav-link" href="/signup">Sign Up</a>
					      </li>
					    </ul>
				    </div>
				  </div>
				</nav>
	
				<Row className="container">

			<div className="jumbotron">
		        <div className="container">
		          <h1 className="display-3">Hello, world!</h1>
		          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
		          <p><a className="btn btn-primary btn-lg" href="https://getbootstrap.com/docs/4.0/examples/jumbotron/#" role="button">Learn more »</a></p>
		        </div>
		      </div>

		      <div className="container">
		        <div className="row">
		          <div className="col-md-4">
		            <h2>Heading</h2>
		            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
		            <p><a class="btn btn-secondary" href="https://getbootstrap.com/docs/4.0/examples/jumbotron/#" role="button">View details »</a></p>
		          </div>
		          <div className="col-md-4">
		            <h2>Heading</h2>
		            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
		            <p><a class="btn btn-secondary" href="https://getbootstrap.com/docs/4.0/examples/jumbotron/#" role="button">View details »</a></p>
		          </div>
		          <div className="col-md-4">
		            <h2>Heading</h2>
		            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
		            <p><a class="btn btn-secondary" href="https://getbootstrap.com/docs/4.0/examples/jumbotron/#" role="button">View details »</a></p>
		          </div>
		        </div>
		      </div> 

	 				<Col md={6} lg={6} xs={12}>
	 					<div className ="">
							<p>Accoring to <a href="https://www.cnbc.com/2019/11/09/etf-assets-rise-to-a-record-4-trillion-and-its-still-early-days.html#:~:text=%E2%80%9CToday%2C%20the%20ETF%20industry%20globally,underperformed%20the%20S%26P%20%5B500%5D." target="_blank">CNBC</a> ETF industry has surpassed $4 Trillion in assets under management. By 2030 ETF industry will surge to $50 Trillion according to <a href="https://www.bloomberg.com/news/articles/2019-12-13/a-50-trillion-etf-market-bofa-says-it-could-happen-next-decade" target="_blank">BoFA</a>.</p>
						</div>
	 				</Col>
				</Row>

			</div>
 		)
}

export default LandingPage;