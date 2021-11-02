import React from "react";
import "./Wrestling2.component.css";

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
                      <p>
                       Triple H has revealed WWE would be ‘open’ to working with other wrestling promotions… but only if it made long-term sense.

The WWE and NXT chief’s comments come in the wake of the crossover between All Elite Wrestling and IMPACT Wrestling.

IMPACT Wrestling’s Don Callis helped Kenny Omega win the AEW world title on AEW Dynamite this week

AEW
2
IMPACT Wrestling’s Don Callis helped Kenny Omega win the AEW world title on AEW Dynamite this week
On Wednesday’s AEW Dynamite taping, IMPACT Wrestling executive Don Callis helped Kenny Omega defeat Jon Moxely for the AEW World Championship.

He then announced the new champ would be appearing on his show next week.

Asked about the possibility of WWE working with other wrestling promotions, Triple H claimed they are always willing to do business.

WWE’s executive vice president of global talent strategy and development said: “Look, in what you’ve seen in the past, Progress, ICW, Evolve, all those things… yeah, we’re open for business in a lot of ways.

“People’s thoughts, misperceptions, they are perceived knowledge of what we do, how we think, is often greatly misinterpreted and not necessarily accurate.

“Are we open to the right business opportunities? Yeah, at any given time we’re open to things. It depends on what they are, are they beneficial to us for the long-term?


                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./193.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <h1>LATEST SPORT NEWS

LESSON When Kubrat Pulev taunted Wladimir Klitschko and then got KOd – AJ's next opponent</h1><p>
                       

WOW Kevin Sinfield on 'champion' Rob Burrow as rugby league legend raises over £2m for MNDA

TYS AS NICE Tyson Fury reveals insane ‘cheat day’ diet including burgers and chocolate

FUTURE FOE Anthony Joshua says offer still stands for Deontay Wilder 'when he's man enough'

STAR Anthony Joshua weight, height and reach: Professional record, career stats and more

SWAP Freddie Roach backs Tyson Fury to KO Anthony Joshua - but only if he does one thing

INFO Joshua vs Pulev live stream: PPV price, how to watch and TV channel for title showdown

BIG NIGHT Joshua v Pulev undercard: Okolie and Fury in action - start time and how to watch

NEXT Joshua vs Pulev date: UK start time, undercard, PPV and live stream, Tale of the Tape

STUNNED 'That's where boxing is at', says stunned White when quizzed on Paul vs Mayweather
Vince McMahon always has the final say in WWE

WWE
2
Vince McMahon always has the final say in WWE
“When I say long-term, I’m not talking three months or six months. Long-term – ten years, 15 years from now.

“Is that beneficial? Is that meaningful? Is it long-term? That’s how we think. It’s much longer in duration. [we’re] not necessarily worried about the minute by minutes. It’s the long duration.”

Triple H concluded by insisting WWE chairman Vince McMahon would never block a ‘meaningful’ business opportunity.

He told Metro: “’Open for business’, I think you hear Vince say that a lot.

“I’ve been around him long enough to know that if it’s the right thing and it’s meaningful to business, he’s open to anything 

                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./194.PNG" thumbnail />
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

