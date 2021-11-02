import React from "react";
import "./Sport6.component.css";

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
                        <h1> Anthony Joshua puts his world heavyweight titles on the line against Kubrat Pulev this weekend.</h1>
<p>

AJ reclaimed his belts by beating Andy Ruiz Jr in their rematch last December, producing a boxing masterclass in Saudi Arabia.

Anthony Joshua will face Kubrat Pulev this weekend

GETTY
2
Anthony Joshua will face Kubrat Pulev this weekend
The 31-year-old champ was set for a busy 2020 but the COVID-19 lockdown put his plans on hold.

He is now set to get back in the ring and will take on IBF mandatory challenger Pulev this weekend.

Pulev, who is 28-1 in his professional career, beat Rydell Booker in his last fight in November 2019.

The Bulgarian has seen off the likes of Hughie Fury and Derek Chisora in recent years and was supposed to face Joshua in 2017 but had to pull out due to injury.

Joshua v Pulev: How to watch
The Wembley Arena will host the heavyweight title bout on Saturday, December 12
The two fighters are expected to make their ring walks at 10.30pm
The fight will be shown live on Sky Sports Box Office with their broadcast starting from 7pm
It will cost £24.95, with the full undercard and main event shown.
You can also live stream for the same price on your computer, mobile and tablet devices.
Sky Sports Box Office is also available on BT TV – tune to channel 496 or by searching for the event in the BT Player
Anthony Joshua is ready to return to the ring this weekend


 
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./281.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                      INSTAGRAM @ANTHONYJOSHUA
2
Anthony Joshua is ready to return to the ring this weekend
Joshua v Pulev: Undercard
Subject to change

Anthony Joshua v Kubrat Pulev – for WBA (Super), IBF, WBO, and IBO heavyweight titles
Lawrence Okolie v Nikodem Jezewski – cruiserweight contest
Hughie Fury v Mariusz Wach – heavyweight contest
Martin Bakole v Sergey Kuzmin – for vacant WBC international heavyweight title
Qais Ashfaq v Ashley Lane – super-bantamweight contest
Florian Marku v Alex Fearon – welteweight contest
Kieron Conway v Macaulay McGowan – super-welterweight contest
Joshua v Pulev: What have the fighters said?
Veteran promoter Bob Arum has predicted that Kubrat Pulev will claim a knockout win over Anthony Joshua.

He said: “It’s one thing to box and run around the ring, making out you’re second coming of Muhammad Ali when you’re fighting a fat, obese Andy Ruiz.

“But it’s going to be a different story when you’re fighting a fit and ready Pulev, who’s in great shape and a good boxer.

“Pulev has the ability to corner Joshua and to take him out, so I believe not only is Pulev going to win the fight but he’s going to win it by knockout.

“We promoted Ruiz 30 times and most of the time he had trouble impacting opponents with his power, so the fact he devastated Joshua so badly indicates to me Joshua has a big weakness and that is his inability to take a punch.

“I’m not a fool, I’m talking about what I’ve seen. I saw Anthony Joshua got knocked on his ass and thoroughly beaten not so long ago.”

Play Video
Anthony Joshua posts video showing off immense power in training ahead of Kubrat Pulev clash at Wembley Arena
TOPICSANTHONY JOSHUA 
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./282.PNG" thumbnail />
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

