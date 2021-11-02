import React from "react";
import "./Footer.component.css";
import { Container,Row, Col } from "reactstrap";

// reactstrap components

function DarkFooter(){
  return (
    <footer className="footer" data-background-color="black">
      <Container>
      <Row>
      <Col>
        
          <ul>
            <li>
              <a
                href=""
                target="_blank"
              >

Services
Advertise with us


          </a>
            </li>
            <li>
              <a
                href="http://presentation.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Advertising specs
              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
               Brand guidelines
              </a>
            </li></ul>
            </Col>
            <Col>
            <ul>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Competition rules

              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
               Work for us
              </a>
            </li>
            </ul></Col>
            <Col>
            <ul>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                License content
              </a>
            </li>
             <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Privacy policy

              </a>
            </li>
             <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Terms of use

              </a>
            </li>
          </ul>
        </Col>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Invision
          </a>
          . Coded by{" "}
          <a
            href=""
            target="_blank"
          >
          This service is provided on talkSPORT Ltd's Terms of Use in accordance with our Privacy Policy.  
          </a>
          .
        </div>
</Row>
      </Container>
    </footer>
  );
}

export default DarkFooter;
