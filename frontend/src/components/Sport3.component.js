import React from "react";
import "./Sport3.component.css";

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
                     <h1> Anthony Joshua has declared that he still intends to fight Deontay Wilder in the future.</h1>
<p>


The unified heavyweight champion is set to defend his titles against Kubrat Pulev this Saturday and is next targeting an undisputed title fight with Tyson Fury.

Anthony Joshua is the unified WBA, IBF & WBO heavyweight champion

MATCHROOM BOXING
3
Anthony Joshua is the unified WBA, IBF & WBO heavyweight champion
Play Video
Anthony Joshua posts video showing off immense power in training ahead of Kubrat Pulev clash at Wembley Arena
After that, AJ sees himself taking on all comers, including the former WBC king.

Back in 2018 and 2019, Joshua was in protracted – ultimately failed – negotiations to face Wilder, which resulted in a bitter public rivalry between the two camps.

Those wounds have still not healed, but Joshua said he’s willing to overlook them and get the fight made.

When asked if he still wants Wilder down the line, AJ told ‘Off The Cuff’ on DAZN: “Yep, for sure.

“He’s another challenger in my division, in my era.

Wilder is no longer the WBC champion, but remains a top heavyweight

RYAN HAFEY/PBC

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./275.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       3
Wilder is no longer the WBC champion, but remains a top heavyweight
“We made last year a lucrative offer and it’s one he turned down, but the offer still stands when he’s ready.

“I’m not going anywhere any time soon, so when he’s ready and he’s man enough or true enough to also not lie, be real.

“It wasn’t a nice time when they were trying to tarnish my name and my reputation, but I dealt with it.

“So, this time around it’ll be good to get the real thing done and stop all the PR stunts and get a real fight underway for the fans.

“That’s what I want to do.”

AJ spoke on DAZN’s new interview series ‘Off The Cuff’

3
AJ spoke on DAZN’s new interview series ‘Off The Cuff’
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./276.PNG" thumbnail />
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

