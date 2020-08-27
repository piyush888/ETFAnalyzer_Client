import React from "react";
import { CommonNavBar } from "../../Common_Components/NavBar";
import articlesList from "./articlesList";
import ReactHtmlParser from "react-html-parser"



const ArticleView = (props) => {
  const articleNo = props.match.params.articleNo;
  const data = articlesList.filter((item) => item.id == articleNo)[0];

  return (
    <>
      <CommonNavBar />

      <div className="ArticlePage height-200vh">
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="mt-4">{data.title}</h1>

              <p className="lead">
                by
                <a href="#"> {data.writer}</a>
              </p>

              <hr />

              <p>Posted on {data.releaseDate}</p>

              <hr />

              <img
                className="d-block w-100 Rounded"
                src={data.imageUrl}
                alt="Stock Price Chart"
              />

              <hr />
              <div className="font-size-m">
                {data.testHTML && <div> {ReactHtmlParser(data.testHTML)} </div>}
                {data.body && data.body.map((content, index) => {
                  if (content.paragraph) {
                    return <p>{content.paragraph}</p>;
                  }
                  if (content.question) {
                    return (
                      <>
                        <br />
                        <p className="text-muted">{content.question}</p>
                      </>
                    );
                  }
                  if (content.imageURL) {
                    return (
                      <div className="text-center">
                        <br />
                        <img
                          className="d-block Rounded width-20em margin-auto height-auto"
                          src={content.imageURL}
                          alt="Stock Price Chart"
                        />
                        <br/>
                        <div className="text-center"> {content.imageText || ""} </div>
                        <br />
                        <br />
                      </div>
                    );
                  }
                })}
              </div>

              <hr />

              <div class="card my-4">
                <h5 class="card-header">
                  Track arbitrage in your ETF for Free !!
                </h5>
                <div class="card-body">
                  <h6>
                    Contact writer for questions on article: {data.writeremail}
                  </h6>
                  <h6>
                    Contact for queries on application: etftrace@gmail.com
                  </h6>
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
                        {articlesList
                          .filter((item) => item.id !== articleNo)
                          .map((article, index) => (
                            <li
                              key={article.id}
                              className="link"
                              onClick={() =>
                                props.history.push(`${article.id}`)
                              }
                            >
                              {article.title}
                            </li>
                          ))}
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
