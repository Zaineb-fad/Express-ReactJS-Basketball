import React from "react";
import "./Wrestling4.component.css";

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
                      <p>
                        OUCH Jeff Hardy takes terrifying-looking bump vs Elias in Symphony of Destruction match on Raw

                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./193.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <h1>By Jake Bacon
1st December 2020, 4:55 pm Updated: 1st December 2020, 4:57 pm
Jeff Hardy took a dangerous-looking bump in his Symphony of Destruction match against Elias on Raw.</h1>
<p>
                       
The Charismatic Enigma put his rival through a table with a Swanton Bomb to pick up a hard-fought victory.

Hardy is used to taking terrifying bumps

WWE
2
Hardy is used to taking terrifying bumps
Hardy hit his head hard

WWE
2
Hardy hit his head hard
But Hardy banged his head on the steel steps in the process, which led to a referee checking up on him, before he pinned Elias to end their feud.

At 43 years old, Hardy continues to put his body on the line… just watch his performance in the Intercontinental Championship ladder match from Clash of Champions in September.

While the Wrestling Observer’s Dave Meltzer claims there was an ‘expectation’ backstage that the veteran wrestler would have picked up a concession from his spot, Fightful report he did not suffer any serious damage.


Hardy and Elias have been embroiled in a bitter feud since the former was accused of hitting the latter with a car in the summer.

The incident wrote Elias off WWE television so that he could recover from a legitimate injury.

The Drifter returned to WWE in October when he smashed Hardy with a guitar on Raw.

Elias defeated Hardy by disqualification at the Hell in a Cell pay-per-view in October, before the pair had their final match on this week’s Raw taping.

                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./194.PNG" thumbnail />
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

