import React from "react";
import "./Boxing5.component.css";

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
            <h1> Anthony Joshua is back on Saturday night, as he takes on Kubrat Pulev in a blockbuster heavyweight clash to end 2020.
         </h1><p>
                        

The British heavyweight superstar was due to face his IBF mandatory challenger in June at the Tottenham Hotspur Stadium in front of 60,000 adoring fans.

Anthony Joshua is the WBA, IBF and WBO heavyweight champion of the world

GETTY IMAGES - GETTY
3
Anthony Joshua is the WBA, IBF and WBO heavyweight champion of the world
However, the COVID-19 lockdown saw that put on hold and Joshua will now take on Pulev at Wembley Arena, with just 1,000 people allowed in to watch.

But after a difficult year, boxing fans will at least get to see AJ in action once more ahead of what should be a thrilling 2021 in the sport.

Joshua v Pulev: UK fight date
The 12-round heavyweight title fight is scheduled for Saturday, December 12
It will take place at Wembley Arena in London, with 1,000 fans able to attend
The undercard will get under way at 7pm, with the main event slated to start between 10pm and 11pm
The fight will be shown live on Sky Sports Box Office from 7pm
talkSPORT will bring you regular updates of the fight on the radio
Joshua v Pulev: What has been said?
Joshua is targeting a 2021 showdown with fellow world champion Tyson Fury, but insists he is not looking past dangerous Bulgarian Pulev and is wary of the threat he poses.

He said: “Pulev is named after a great Bulgarian warrior and he has that warrior spirit, he carries the hopes of his nation.

“He is tough, he has a great jab and he will dig deep. He has found a way to beat every opponent, except Klitschko, but I know I have prepared well and I should be victorious.

“I know lockdown has been tough but for me it has been a blessing.

“I have concentrated on training, on improving my boxing, all year. I haven’t had to do much commercial or promotional stuff, I have had more time with my family and more time to train seriously. And the longer I wait for Fury, the better prepared I’ll be.”

Anthony Joshua is favourite to win but Kubrat Pulev will be no pushover

MIKEY WILLIAMS/TOP RANK
3
Anthony Joshua is favourite to win but Kubrat Pulev will be no pushover
Pulev said: “For a small country of Bulgaria to stand up for the heavyweight titles is a great accomplishment.

“This fight is for my late father and all Bulgarians around the world! I’m coming to London to seize the heavyweight championship of the world.”

Promoter Eddie Hearn, meanwhile, said: “I can’t tell you how happy I am to see fans returning to our live boxing events.

“Whilst the team have done an incredible job over the last 10 months we live and breathe through the energy and atmosphere that a live crowd generates.

“It’s so fitting that they can return for an AJ fight, when through the last few years he has broken all kinds of attendance records in the U.K. and beyond. This is such a positive move for boxing and all sport. Welcome back!”

Joshua v Pulev: TV channel and live stream
The fight will be shown live on Sky Sports Box Office at a cost of £24.95
Coverage will start at 7pm ahead of a stacked undercard
You don’t have to be a Sky customer to watch the fight – you can live stream for the same price on your computer, mobile and tablet devices
Box Office will also be available on BT TV. There are two ways to make the purchase – by tuning to channel 496 or by searching for the event in the BT Player
Anthony Joshua will fight for the first time in a year in December

MATCHROOM BOXING

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./244.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       3
Anthony Joshua will fight for the first time in a year in December
Joshua v Pulev: Undercard
Up and coming cruiserweight Lawrence Okolie will fight on the undercard as he looks to take his unbeaten professional record to 15 wins.

However, it won’t be for the vacant WBO cruiserweight title after initial opponent Krzysztof Glowacki tested postive for COVID-19 and was forced to pull out.

Okolie will now take on Nikodem Jezewski, who is ranked outside the top 15 by the WBO.

Hughie Fury, cousin of world champion Tyson, will be in action against Mariusz Wach, who lost to Dillian Whyte last year.

Anthony Joshua v Kubrat Pulev – for WBA (Super), IBF, WBO, and IBO heavyweight titles
Lawrence Okolie v Nikodem Jezewski – cruiserweight contest
Hughie Fury v Mariusz Wach – heavyweight contest
Martin Bakole v Sergey Kuzmin – for vacant WBC international heavyweight title
Kieron Conway v Macaulay McGowan – super-welterweight contest
Qais Ashfaq v Ashley Lane – super-bantamweight contest
Florian Marku v Alex Fearon – welteweight contest
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

Play Video
Anthony Joshua posts video showing off immense power in training ahead of Kubrat Pulev clash at Wembley Arena
TOPICSANTHONY JOSHUA
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./245.PNG" thumbnail />
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

