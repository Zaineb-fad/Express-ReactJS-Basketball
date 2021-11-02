import React from "react";
import "./Boxing1.component.css";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
import {  Image } from 'react-bootstrap';


// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card style={{ width: '35rem' }}>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        First
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        Prev
                      </NavLink>
                    </NavItem>
                   
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
<h1>Anthony Joshua is back to defend his unified WBA, IBF and WBO heavyweight world titles against Kubrat Pulev on Saturday night at Wembley Arena.
                     </h1> <p>
                        

AJ must face his IBF mandatory challenger, who has a record of 28-1, including 14 knockouts.

Klitschko decked Pulev early on

GETTY - CONTRIBUTOR
4
Klitschko decked Pulev early on
Pulev’s sole defeat came against Wladimir Klitschko on November 15, 2014.

This is the Bulgarian’s only world title fight to date and saw him laid out flat on his back after five rounds.

However, Pulev did emerge from the bout with a fair amount of credit.

Many of Klitschko’s title defences underwhelmed in terms of drama and excitement, whereas Pulev forced a firefight from the opening bell.

Pulev mocked Klitschko, but it didn’t end well for him

4
Pulev mocked Klitschko, but it didn’t end well for him
The bout began with Pulev on the offensive, which quickly left him open to the champion’s left hook.

Klitschko floored his challenger after just one minute of the first round, but was met with a defiant response.

Pulev rose to his feet on seemingly unsteady legs and then taunted the Ukrainian by standing on one leg and sticking his tongue out at him.

Klitschko replied by knocking him down again straight away – Pulev again made it back to his feet and survived the round.

The left hook battered Pulev

EV

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./236.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY - CONTRIBUTOR
4
The left hook battered Pulev
The second was quieter for both men, but the action exploded once again in the third.

This time it was the right hand from Klitschko that hurt Pulev, followed by a left hook which put him down once more.

The challenger survived round three and even made it through round four, but the writing was clearly on the wall.

It was ‘job done’ for Klitschko

GETTY - CONTRIBUTOR
4
It was ‘job done’ for Klitschko
In the fifth, Klitschko landed one final crunching left hook which flattened Pulev.

He was unable to beat the count.

Klitschko went on to be dethroned by Tyson Fury a year later before then being knocked out by Anthony Joshua in 2017.

Pulev has since rebuilt with wins over the likes of Dereck Chisora and Hughie Fury, and now gets his opportunity once again.



TOPICSANTHONY JOSHUAWLADIMIR KLITSCHKOKUBRAT PUL
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./237.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    
                   
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;

