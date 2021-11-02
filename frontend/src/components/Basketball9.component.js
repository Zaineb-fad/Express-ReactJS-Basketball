import React from "react";
import "./Basketball9.component.css";

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
                                  <h1>          RAGE Boxing legend Mike Tyson once tried to fight NBA icon Michael Jordan at boozy dinner, ex-manager reveals – ‘He looked like he’d seen a ghost’
 </h1> <p>
By Sean O'Brien
9th May 2020, 11:11 am Updated: 10th May 2020, 10:10 pm
Mike Tyson’s ex-manager has revealed details of a run-in between the boxing legend and NBA icon Michael Jordan at a dinner in 1988.

Both sporting heroes have dominated the news in recent weeks, with Tyson announcing a return to the ring for charity and Jordan at the centre of popular Netflix docuseries ‘The Last Dance’.

Tyson and Jordan were two of the biggest names in sport in the late eighties

GETTY
2
Tyson and Jordan were two of the biggest names in sport in the late eighties
Back in the eighties, the two Americans were at the top of their game, but despite being the undisputed and undefeated heavyweight champion of the world, Tyson was also battling with inner demons.

His violent marriage to Robin Givens, and their subsequent divorce, caused Tyson’s personal life to eventually spiral out of control.

Jordan briefly dated Givens in 1987 before she met Tyson, creating tension when the pair attended a birthday dinner for Chicago Bears star Richard Dent, alongside Don King and Bears coach Mike Ditka.

Rory Hollway, who co-managed Tyson in 1988, has written a book chronicling the boxer’s career, and he looks back on the famous night in vivid detail.

Mike Tyson was known as the ‘Baddest Man on the Planet’




                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./234.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY - CONTRIBUTOR
2
Mike Tyson was known as the ‘Baddest Man on the Planet’
Via BoxingScene, he said: “Mike Tyson’s sitting there with his drink of choice, a Long Island Tea, and when he drinks his real feelings come out.

“I’m telling the server to water his drinks down because I see where this is going.

“Mike stares across the table at Michael Jordan. He says, ‘Hey man, you think I’m stupid? I know you f***** with my b****.’

“Jordan looks like he just seen a ghost. ‘I know you messed with her,’ Mike says. ‘You can tell me.’

Play Video
Frank Warren on talkSPORT
“Jordan, it’s obvious he just wants to get up and run. He wants no part of this. Mike turns to Ditka. ‘Man, you think somebody scared of you, all that racist s*** you been talking?’

“He says to Dent, ‘Y’all scared of this damn white man, Richard? He ain’t nobody. You gonna let him talk that way?’

“It was a circus, for real, that night. Don King trying to change the subject. Me and John trying to hold Mike down.

“Mike telling everyone he’s going to bust Jordan’s ass. Jordan’s dressed sharp as always and he can’t get out of there fast enough.”

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./235.PNG" thumbnail />
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

