import React from "react";
import "./Allsport5.component.css";

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
                            <h1>              Former Porto and Brazil striker Hulk could secure a long-awaited move to the Premier League after officially confirming his departure from Shanghai SIPG following the club’s Asian Champions League elimination on Monday.
 </h1><p>

The 34-year-old forward is available on a free transfer in January after rejecting a lucrative new deal to remain in China earlier this year.

Hulk is currently assessing his options as he gets set for a new chapter in football

GETTY IMAGES
2
Hulk is currently assessing his options as he gets set for a new chapter in football
Confirming his exit on Instagram, Hulk wrote: “Today I leave Shanghai SIPG, a team that has offered me a warm welcome.

“I am very happy for everything the fans have given me these four years. My thanks to the board and the players for their dedication.

“Together we have achieved countless achievements, how to win the Super League and the Super Cup.

“As I have always done in my career, I leave many friends behind. My highest thanks to the Shanghai SIPG family.”

LATEST FOOTBALL NEWS

NEWS 'Send Pogba to Joey Barton', Arsenal vs Spurs for signing, United and Chelsea in CL

INFO Barcelona v Juventus live stream: How to watch Messi v Ronaldo for free

UCL Leipzig v Man United commentary: Solskjaer and co face crucial Champions League tie

FEARS Sir Alex called Raiola a 's***bag' and ex-United boss knew agents' impact would grow

CRUNCH TIME Pogba axed and star duo injured - Man United team for Champions League decider

SCATHING Ozil hits back as Piers Morgan blasts Arsenal outcast and makes Pogba comparison

GET RID! Man United told to loan Paul Pogba out to Joey Barton after latest Raiola comments

HISTORY BOYS Amazingly, there are still records for Messi and Ronaldo to break this season

STANCE QPR and Millwall players free to take the knee as clubs plan 'very powerful message'

WHY? Kick It Out's Troy Townsend questions why Millwall and QPR players won't take the knee
The powerful frontman, who has undergone an incredible body transformation in recent years, scored an impressive 76 goals in 145 games for SIPG.

He revealed during the summer that he had been inundated with offers from clubs across the world, including those in England and Spain.

Hulk claimed: “I am listening to many proposals from Brazil and many places including in Europe.



                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./208.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       “[I have offers from] Turkey, Portugal, England, Spain, Italy, Germany – and I also have an offer from China.

Hulk has undergone an incredible body transformation

@HULKPARAIBA
2
Hulk has undergone an incredible body transformation
“Every day more new proposals arrive. I thank God I have a name that’s very strong in the market.

“The clubs have been following me and I keep up to date physically, it helps a lot.”

He continued: “I will not put money ahead of football. I am talking to God to make the best decision, be very happy and continue my career.

“Where I went, I made history. I ask him God bless me and I keep writing this beautiful story in football.”   
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./209.PNG" thumbnail />
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

