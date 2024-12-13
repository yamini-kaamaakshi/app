import React from "react";
import { Carousel, Row, Col } from "antd";
import stripe from "./assets/Stripe.png";
import dobleLoop from "./assets/DoubleLoop.webp";
import typeForm from "./assets/TypeForm.png";
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <div>
      {/* Content Above Carousel (now including the Carousel inside) */}
      <div className="project-showcase">
        <div className="text-container">
          <h1>Used by thousands of people</h1>
          <p>
            From solo open-source developers, to companies like Stripe and
            Typeform. We’ve seen the library used for data processing tools,
            chatbot builders, machine learning, musical synthesizers, and more.
          </p>
        </div>

        {/* Carousel for images inside the project showcase */}
        <Carousel autoplay autoplaySpeed={3000} className="carousel-container">
          <div>
            <img src={stripe} alt="Stripe" className="carousel-img" />
          </div>
          <div>
            <img src={dobleLoop} alt="Double Loop" className="carousel-img" />
          </div>
          <div>
            <img src={typeForm} alt="TypeForm" className="carousel-img" />
          </div>
        </Carousel>

        {/* Content below images with labels and descriptions */}
        <Row justify="center" className="content-row">
          <Col span={8} className="content-wrapper">
            <div className="line"></div>
            <div className="title">Stripe Docs</div>
            <div className="description">
              Diagrams for process documentation with interactive nodes
            </div>
          </Col>

          <Col span={8} className="content-wrapper">
            <div className="line"></div>
            <div className="title">DoubleLoop</div>
            <div className="description">
              Node-based dashboard builder to monitor business metrics
            </div>
          </Col>

          <Col span={8} className="content-wrapper">
            <div className="line"></div>
            <div className="title">TypeForm</div>
            <div className="description">
              Interactive tool to build and visualize complex survey logic
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
