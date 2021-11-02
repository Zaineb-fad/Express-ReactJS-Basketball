import React from "react";
import "./Allsport6.component.css";

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
                        <h1>                Paul Pogba and his agent Mino Raiola have been the subject of controversy at Manchester United since the midfielder’s return to the club in 2016, but Sir Alex Ferguson had to deal with them four years earlier.
 </h1> <p>

The negotiations which led to Pogba joining Juventus made Sir Alex call Raiola a ‘s***bag’ and argue that the midfielder had disrespected the club.

Sir Alex was happy to be rid of Pogba in 2012

GETTY IMAGES
4
Sir Alex was happy to be rid of Pogba in 2012
Fast forward eight years, and the same pair are causing trouble at Old Trafford yet again.

With all appearing well between Pogba and United, after the Frenchman returned to form with a goal at the weekend, Raiola then told the Italian press that his client’s time at Old Trafford is ‘over’.

The disruptive statement about Pogba’s future came just 24 hours before the Red Devils’ must-draw Champions League clash with RB Leipzig on Tuesday night – which is LIVE on talkSPORT.

And Rene Meulensteen, who was Sir Alex’s assistant when Pogba and Raiola engineered the move to Juventus in 2012, reveals his former boss knew the impact of agents would grow.

Pogba became a star at Juventus before United bought him back for £89m

GETTY IMAGES
4
Pogba became a star at Juventus before United bought him back for £89m
He told talkSPORT: “I always knew that Sir Alex wasn’t too keen to get involved with agents, but he also realised the influence of the agents was getting bigger.

“It’s been a constant thing that has run through his [Pogba’s] entire time at Man United; when Jose Mourinho was there the same issues came up.

“This is really poor timing. Even if he feels like that, the player needs to be stronger with his agent, what they can say and when they can say it.

“He scored a goal, so what a surprise he comes out with it now, but it puts such unbelievable pressure on him.

Raiola represents several top footballers


“They are team that can turn up and beat any team but also lose to any team.

“Every time you wonder which United is going to turn up.”  
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./209.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES - GETTY
4
Raiola represents several top footballers
“If Solskjaer decides to play Pogba tonight, it puts loads of pressure on him [Solskjaer] as well.”

Meulensteen added: “Every fan at every club wants players who play for the club to be committed.

“This needs to be dealt with in-house very quickly, otherwise it keeps going on and on.”

United will hope the focus can return to positive results on the pitch when they travel to Leipzig tonight, needing a draw to get out of their Champions League group.

The Red Devils have been diabolical and outstanding in equal measure this season, sometimes switching between the two in one game, like they did in the 3-1 win over West Ham on Saturday.

And Meulensteen insists United need more consistency if they want to achieve the same things he did alongside Sir Alex.

Meulensteen worked at Manchester United for a total of 12 years

GETTY - CONTRIBUTOR
4
Meulensteen worked at Manchester United for a total of 12 years
“It’s a long-term thing and we’re two years in, but that game summed up the whole of Solskjaer’s time at United so far,” he continued.

“First-half, they were miles off; second-half, they weren’t too far off. Man United are always under the magnifying glass, even though every top six club has problems.

“If you take the best two players out of every team, they will struggle, and you could see how much United are relying on Bruno Fernandes to get a performance.

Play Video
Ally McCoist criticses the timing of Mino Raiola's Pogba bombshell and accuses agent of 'selfishness'
“As soon as he isn’t there, they fall into a slow, pedestrian pace, with no runs in behind and no penetration.”

“If you want to win trophies and leagues, you need to be consistent. United has a team with bags of individual talent.

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./210.PNG" thumbnail />
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

