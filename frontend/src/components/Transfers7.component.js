import React from "react";
import "./Transfers7.component.css";
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
                     <h1> Gary Neville has criticised Mino Raiola for the ‘terrible timing’ of his declaration that Paul Pogba’s time at Manchester United was ‘over’.

</h1><p>
Speculation about the Frenchman’s future at Old Trafford is once again dominating the headlines after Raiola claimed the World Cup winner needed a change of club.

Pogba’s future always dominates the headlines


                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./205.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES - GETTY
1
Pogba’s future always dominates the headlines
“There’s no use ignoring it,” he told Tuttosport. “It’s better to speak honestly, look to the future and not waste time trying to blame people: Paul is unhappy at Manchester United, he can no longer express himself as he wants to or in the way that’s expected of him.

“He needs to change team, he needs a change of scene. He has a contract that expires in a year and a half’s time, in the summer of 2022, but I think the best solution would be for him to leave in the next transfer window.”

United icon Neville has blasted the timing of Raiola’s comments as the Red Devils prepare to face RB Leipzig in the Champions League on Tuesday – a match they cannot lose to avoid elimination from the tournament.


He wrote: “Raiola – It’s happened many times before . However surely Paul knew he was making this announcement? If he wasn’t aware then we should see a quote from him very soon correcting his agent. Finally to do this ahead of Leipzig and the Man Derby is terrible timing for the Team.”

Pogba is contracted to United until 2022 after the club recently triggered the extension clause in his deal.

The 27-year-old has been linked with a return to Juventus, whilst Real Madrid boss Zinedine Zidane is also a known admirer of his compatriot.

Pogba publicly admitted his openness to a move away from United in June 2019, saying: “I think for me it can be a good time to have a new challenge somewhere else.”

The midfielder stayed at Old Trafford and endured an injury-hit season but links to Real Madrid and former club Juve continued.

                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./206.PNG" thumbnail />
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

