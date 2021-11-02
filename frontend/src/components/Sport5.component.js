import React from "react";
import "./Sport5.component.css";

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
                                        <h1>   Freddie Roach believes Tyson Fury can knock Anthony Joshua out when they finally meet, but claims he will only do so if he fights as a southpaw.</h1>
 <p>

‘The Gypsy King’ is locked in a collision course with his British rival for 2021 to crown an undisputed heavyweight champion for the first time since 1999.

Tyson Fury had the power to stop Deontay Wilder back in February

AFP OR LICENSORS
3
Tyson Fury had the power to stop Deontay Wilder back in February
Lennox Lewis and Evander Holyfield finally met in the ring after several years of controversy and indecisiveness, with Lewis taking all the trinkets back to Britain after their rematch.

It seems as though Fury and Joshua are finally closing in a blockbuster pair of fights for next year, provided AJ can get past wily veteran Kubrat Pulev on Saturday night.

Roach, who was in Fury’s corner for his first fight against Deontay Wilder in 2018, believes the 32-year-old can stop Joshua in his tracks – but not by his usual method of outfoxing the Olympic gold medallist.

Speaking to Marc Gatford via the MyBettingSites.co.uk blog, Roach said: “Tyson Fury can be a beast in the ring and go right at you strong, or he could come out as more of a boxer and out-box you.

‘The Gyspy King’ fought Dereck Chisora as a southpaw in their rematch


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./279.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES - GETTY
3
‘The Gyspy King’ fought Dereck Chisora as a southpaw in their rematch
Joshua was dropped multiple times by Andy Ruiz Jr in his sole professional defeat

MARK ROBINSON/MATCHROOM
3
Joshua was dropped multiple times by Andy Ruiz Jr in his sole professional defeat
“For this fight, I’d like to see him go out and pressure and batter Anthony Joshua. Pressure him early and beat him up.

“He won’t do it, but I would encourage him to fight in his natural southpaw stance. He’s a beast as a southpaw.

“Joshua’s best chance to win is by using his boxing skills since they are better than Tyson’s. Anthony must dictate the pace and stay off the ropes.

“For both, distance will be important. I think Tyson wins this one by knockout.”  

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./280.PNG" thumbnail />
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

