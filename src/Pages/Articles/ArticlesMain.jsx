import React from "react";
import { Card, Button } from "react-bootstrap";
import imageUrl from "../../static/Images/articlestop.png";
import tempImage from "../../static/Images/tempImage.jpg";
import articlesList from "./articlesList";
import { NavLink } from "react-router-dom";

const ArticlesMain = () => {
  return (
    <>
      <div
        className="fluid-container"
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: "300px",
          opacity: 0.5,
        }}
      ></div>
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          {articlesList.map((data, index) => (
            <div key={data.title} className="col-sm-3 margin-top-1em">
              <Card>
                <Card.Img variant="top" src={tempImage} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button as={NavLink} to={data.buttonLink} variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticlesMain;