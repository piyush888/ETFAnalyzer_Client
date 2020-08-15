import React from "react";
import { CommonNavBar } from "../../Common_Components/NavBar";
import articlesList from "./articlesList";


const ArticleView = (props) => {
  
  const articleNo = props.match.params.articleNo;
  const data = articlesList.filter(item => item.id == articleNo)[0];
  
  return (
    <>
      <CommonNavBar />

        <div className="ArticlePage height-200vh">
          <br/>
          	 <div className="container">
			    <div className="row">
			      <div className="col-lg-8">
			        <h1 className="mt-4">{data.title}</h1>
					
			        <p className="lead">
			          by 
			          <a href="#"> {data.writer}</a>
			        </p>

			        <hr/>

			        
			        <p>Posted on {data.releaseDate}</p>

			        <hr/>

			        
			        <img
                      className="d-block w-100 Rounded"
                      src="http://placehold.it/900x300"
                      alt="Stock Price Chart"
                    />

			        <hr/>

			        
			        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>

			        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>

			        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>

			        <blockquote className="blockquote">
			          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
			          <footer className="blockquote-footer">Someone famous in
			            <cite title="Source Title">Source Title</cite>
			          </footer>
			        </blockquote>

			        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>

			        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>

			        <hr/>

			        <div class="card my-4">
			          <h5 class="card-header">Track arbitrage in your ETF for Free !!</h5>
			          <div class="card-body">
			            <h6>Contact writer for questions on article: {data.writeremail}</h6>
			            <h6>Contact for queries on application: etftrace@gmail.com</h6>
			          </div>
			        </div>

				</div>

			      
			      <div className="col-md-4">
			        <div className="card my-4">
			          <h5 className="card-header">Other Articles</h5>
			          <div className="card-body">
			            <div className="row">
			              <div className="col-lg-12">
			                <ul className="list-unstyled mb-0">
			                  <li>
			                    <a href="#">Arbitrage in ETF industry</a>
			                  </li>
			                  <li>
			                    <a href="#">Hammer pattern & over sold signal</a>
			                  </li>
			                  <li>
			                    <a href="#">Over bought & over bought signal</a>
			                  </li>
			                </ul>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>

				</div>
			  </div>
			  
      	</div>
	</>
  );
};

export default ArticleView;