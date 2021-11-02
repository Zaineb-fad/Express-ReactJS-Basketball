import React from "react";
import "./Wrestling5.component.css";

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
                        WOW WWE Hall of Famer Sting makes shock AEW debut as Tony Khan’s company and IMPACT Wrestling reveal crossover
By Jake Bacon
3rd December 2020, 4:08 pm
Wrestling legend Sting made a stunning debut in AEW on Wednesday night.

The WWE Hall of Famer came to the aid of Cody Rhodes and Darby Allin by scaring off Team Taz.

Sting stunned the wrestling world by debuting in AEW


                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./193.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                       <h1>AEW
2
Sting stunned the wrestling world by debuting in AEW
Sting could become Allin’s manager after the pair had a stare down in the ring.</h1>
<p>
                    
The 61-year-old, who was inducted into the WWE Hall of Fame in 2016, has signed a multi-year deal with AEW.

Sting, a former WCW world champion, debuted in WWE when he attacked Triple H at Survivor Series in 2014.

However, he had just two pay-per-view matches as he lost to Triple H and Seth Rollins at WrestleMania 31 and Night of Champions, respectively.

Sporadic appearances in WWE followed, but he never wrestled again due to long-term neck issues.

His AEW debut was not the only shock of the night as IMPACT Wrestling executive Don Callis helped Kenny Omega defeat Jon Moxley to win the world title.

Callis played a big role in Omega’s world championship win

AEW
2
Callis played a big role in Omega’s world championship win
Callis tried to distract Moxley, before being hit by the latter and dropping a microphone in the process.

With the referee’s back turned, Omega used that microphone to bust Moxley open as he went on to end the latter’s 277-day championship reign.

Callis then announced Omega would appear on IMPACT Wrestling next week.

It sees AEW and IMPACT Wrestling – the two biggest threats to WWE’s dominance in the wrestling word – join forces.  
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

