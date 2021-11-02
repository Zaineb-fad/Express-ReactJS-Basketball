import React from "react";
import "./Boxing7.component.css";

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
                               <h1>             David Haye insists Anthony Joshua’s defeat to Andy Ruiz Jr will give him a ‘slight edge’ in his proposed fight with Tyson Fury – provided he can stop Kubrat Pulev.
</h1><p>

The WBA, WBO and IBF world heavyweight champion returns to the ring for the first time in 12 months when he takes on the Bulgarian veteran this Saturday at the SSE Arena.

Anthony Joshua completely outboxed Andy Ruiz Jr to regain his titles in Saudi Arabia

GETTY IMAGES - GETTY
5
Anthony Joshua completely outboxed Andy Ruiz Jr to regain his titles in Saudi Arabia
Joshua coasted to a comfortable decision victory over Ruiz in Saudi Arabia almost a year ago to the day having lost his world titles in a shock defeat to the Mexican-American.

Although many wrote the Brit off after he was stopped at Madison Square Garden on June 1, the maturity and discipline he displayed to stick to his jab and move his feet was seriously impressive.

Haye, who became undisputed cruiserweight and then world heavyweight champion after his first career defeat to Carl Thompson, believes the defeat to Ruiz will actually benefit Joshua if he steps in the ring to face ‘The Gypsy King’ in 2021.

“I think that was the best thing to ever happen to Anthony Joshua,” Haye told Sky Sports News.

Joshua was stopped emphatically by Ruiz Jr in New York in June 2019

GETTY IMAGES - GETTY
5
Joshua was stopped emphatically by Ruiz Jr in New York in June 2019
‘The Hayemaker’ lost his unbeaten to record to Carl Thompson in 2004

GETTY IMAGES - GETTY
5
‘The Hayemaker’ lost his unbeaten to record to Carl Thompson in 2004
“I think he’s going to become the fighter he was always going to be, because he’s got that taste of defeat and he doesn’t like that.

“None of us winners like that taste of defeat and if there’s anything humanly possible to get back into your winning run, no matter how hard you have to dedicate yourself, what type of sparring, what type of pain behind the scenes, you don’t want that feeling of a loss.

“It’s been a long, long time since Tyson Fury had the taste of a loss. A very, very long time. Many years. Anthony Joshua knows what it feels like recently, so I think that gives him a slight edge. It sounds crazy.

“I think that gives him an edge, because he doesn’t want to rely on his natural attributes. He wants to make sure he wins this fight.”

Tyson Fury was simply too strong and too clever for ‘The Bronze Bomber’

AFP OR LICENSORS
5
Tyson Fury was simply too strong and too clever for ‘The Bronze Bomber’
Fury holds the WBC heavyweight crown and is recognised by Ring Magazine as the best heavyweight on the planet after he avenged his controversial draw to Deontay Wilder with a bruising win in Las Vegas in February.

Given the 6ft 9ins switch-hitter has shown he has incredible power as well as pugilistic brilliance, there are plenty of experts who predict he could toy with Joshua before taking his domestic rival out.

Joshua started boxing at the age of 18, meaning his ascent to unified world heavyweight champion in just 19 fights is almost unheard of and deserves tremendous amounts of respect.

But by learning on the job effectively, Haye feels as though there is still plenty more to come from the London 2012 Gold medallist and that writing ‘AJ’ off is never a smart move.

A fight with Tyson Fury is likely to take place in 2021


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./248.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       MATCHROOM BOXING
5
A fight with Tyson Fury is likely to take place in 2021
“This is a serious test for him now, Kubrat Pulev, and then it’s the big one,” Haye added.

“Then it’s the Tyson Fury fight and I think there is only one guy in the world who the odds makers will give a legitimate chance of beating Tyson Fury.

“That’s someone as powerful, as strong, as fast, as motivated as Anthony Joshua.

“He will be the underdog in that fight, but write Anthony Joshua off at your peril.

ANTHONY JOSHUA LATEST

LESSON When Kubrat Pulev taunted Wladimir Klitschko and then got KOd – AJ's next opponent

FUTURE FOE Anthony Joshua says offer still stands for Deontay Wilder 'when he's man enough'

STAR Anthony Joshua weight, height and reach: Professional record, career stats and more

SWAP Freddie Roach backs Tyson Fury to KO Anthony Joshua - but only if he does one thing

INFO Joshua vs Pulev live stream: PPV price, how to watch and TV channel for title showdown

BIG NIGHT Joshua v Pulev undercard: Okolie and Fury in action - start time and how to watch

NEXT Joshua vs Pulev date: UK start time, undercard, PPV and live stream, Tale of the Tape
“I don’t think we’ve seen the best of Anthony Joshua yet. I think over the next three years the real Anthony Joshua will come out.

“He came to boxing late. He hasn’t been boxing since he was a little kid, like Tyson Fury.

“He’s had to fast-track himself and there have been gaps as he’s been fast-tracking himself, so he’s now filling these gaps in.” 
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./248.PNG" thumbnail />
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

