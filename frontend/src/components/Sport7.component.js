import React from "react";
import "./Sport7.component.css";

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
                                            <h1> Anthony Joshua v Kubrat Pulev headlines an exciting night of action in London this weekend.
</h1><p>

The heavyweight world champion will return to the ring to put his titles on the line against IBF mandatory challenger Pulev.

Anthony Joshua and Kubrat Pulev face off this weekend

MARK ROBINSON/MATCHROOM
3
Anthony Joshua and Kubrat Pulev face off this weekend
The two will face off at Wembley Arena with 1,000 fans in attendance as world boxing finishes 2020 with a flourish.

And there will be plenty of action to enjoy before the main event as Lawrence Okolie and Hughie Fury will both be under the lights this weekend.

Joshua v Pulev: Undercard
The undercard will get under way at 7pm, with the main event slated to start between 10pm and 11pm.

Up and coming cruiserweight Lawrence Okolie will fight on the undercard as he looks to take his unbeaten professional record to 15 wins.

He had been due to face Krzysztof Glowacki for the vacant WBO cruiserweight title but he tested postive for COVID-19 last week and was forced to pull out.

Nikodem Jezewski has stepped in as his replacement but, as he is ranked outside the top 15 by the WBO, no title will be on the line.

Hughie Fury, cousin of world champion Tyson, will be in action against Mariusz Wach, who lost to Dillian Whyte last year.

Anthony Joshua v Kubrat Pulev – for WBA (Super), IBF, WBO, and IBO heavyweight titles
Lawrence Okolie v Nikodem Jezewski – cruiserweight contest
Hughie Fury v Mariusz Wach – heavyweight contest
Martin Bakole v Sergey Kuzmin – for vacant WBC international heavyweight title
Qais Ashfaq v Ashley Lane – super-bantamweight contest
Florian Marku v Alex Fearon – welteweight contest
Kieron Conway v Macaulay McGowan – super-welterweight contest
Lawrence Okolie will fight on the undercard for Anthony Joshua v Kubrat Pulev



                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./283.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY
3
Lawrence Okolie will fight on the undercard for Anthony Joshua v Kubrat Pulev
Joshua v Pulev: How to watch
The fight will be shown live on Sky Sports Box Office with their broadcast starting from 7pm.

It will be available for £24.95, with the full undercard and main event shown.

You can also live stream for the same price on your computer, mobile and tablet devices through the Sky app.

Sky Sports Box Office is also now available on BT TV.  There are two ways to make the purchase – by tuning to channel 496 or by searching for the event in the BT Player.

Hughie Fury will face Mariusz Wach this weekend

GETTY
3
Hughie Fury will face Mariusz Wach this weekend
Joshua v Pulev: Tale of the tape
Joshua – Pulev

Nationality: British – Bulgarian

Age: 31 – 39

Height: 6ft 6 – 6ft 4

Stance: Orthodox – Orthodox

Reach: 82in – 79in

Record: 23-1-0 – 28-1-0

KOs: 21 – 14

Rounds: 103 – 203

Debut: 10/05/2013 – 19/9/2009

Nickname: AJ – The Cobra 
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./284.PNG" thumbnail />
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

