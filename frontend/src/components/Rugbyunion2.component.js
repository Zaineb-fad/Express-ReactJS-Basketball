import React from "react";
import "./Rugbyunion2.component.css";

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
                    <h6>Argentina captain Pablo Matera has been stripped of the national rugby side’s captaincy after historic racist tweets emerged.

Matera has said he was ‘very ashamed’ for the episode, with two other players – Guido Petti and Santiago Socino – also suspended.

Matera has apologised for the tweets</h6> <p>
                        

GETTY IMAGES - GETTY
4
Matera has apologised for the tweets
The 27-year-old posted a string of offensive tweets between 2011 and 2013 that surfaced this week.

He wrote: “Nice morning to go out in the car and run over blacks.”

Another read: “‘The fat woman is staring at me hahaha poor fat woman I am not giving up my seat, that’s not pregnancy. That doesn’t count.”

Meanwhile, another message read: “South Africa baby! I’m finally leaving this country full of blacks.”

It’s not clear where Matera and his teammates’ future in the Argentina fold lie

GETTY IMAGES - GETTY
4
It’s not clear where Matera and his teammates’ future in the Argentina fold lie
The following year he said: “Abs on a skinny person are like t*** on a fat person. #doesn’tcount.”

His tweets have since been deleted and his Instagram account, where he issued the apology, has been set to private.

Matera wrote: “I am very ashamed. I’m sorry to everyone who was offended by the barbarisms I wrote.

“At that moment, I could never imagine who I would become. Today I have to take responsibility for what I said nine years ago.

LATEST SPORT NEWS

WOW Kevin Sinfield on 'champion' Rob Burrow as rugby league legend raises over £2m for MNDA

TYS AS NICE Tyson Fury reveals insane ‘cheat day’ diet including burgers and chocolate

FUTURE FOE Anthony Joshua says offer still stands for Deontay Wilder 'when he's man enough'

STAR Anthony Joshua weight, height and reach: Professional record, career stats and more

SWAP Freddie Roach backs Tyson Fury to KO Anthony Joshua - but only if he does one thing

INFO Joshua vs Pulev live stream: PPV price, how to watch and TV channel for title showdown

BIG NIGHT Joshua v Pulev undercard: Okolie and Fury in action - start time and how to watch

NEXT Joshua vs Pulev date: UK start time, undercard, PPV and live stream, Tale of the Tape
“I want to apologise as well to my team and to my family for what they are experiencing because of my actions.”

Petti, meanwhile, referred to his domestic worker as a ‘primate’ and spoke of ‘blacks’ stealing mobile phones and wallets.

Like Matera, Petti is a mainstay of the team, with 56 caps including two World Cup campaigns.

However, Socino made his debut last year and has played only four Tests, having spent the majority of his career in England. He played for Hull RFC and Hull Ionians in the National League One and Two, before joining Newcastle Falcons in 2015.

Like Matera, Petti is a seasoned Argentina international


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./255.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES - GETTY
4
Like Matera, Petti is a seasoned Argentina international
However, Socino only made his Argentina debut last year

4
However, Socino only made his Argentina debut last year
One of the tweets from the former Premiership star was anti-Semitic, stating: “If you are a Jew, you need a cut in your penis and to spend a little money.”

A statement from the Argentina Rugby Union read: “The Argentine Rugby Union strongly repudiates the discriminatory and xenophobic comments published by members of the Los Pumas team on social media.

“Meeting as an emergency, the board of directors resolves to, in the first place, revoke the captaincy of Pablo Matera and request the staff to propose a new captain to the board of directors.

“Second, suspend Pablo Matera, Guido Petti and Santiago Socino from the national team until their disciplinary situation is defined.”

The tweets resurfaced following criticism that the Pumas did not adequately pay tribute to icon Diego Maradona before their defeat to New Zealand on Saturday.

Matera was forced to defend the Pumas’ low-key response, while the All Blacks laid a shirt with Maradona’s name and the No 10.

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./256.PNG" thumbnail />
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

