import React from "react";
import "./Transfers9.component.css";
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
                     <h1> Mino Raiola has been told to ‘shut up and let Paul Pogba play football’</h1> <p>
                        by former Tottenham midfielder Jamie O’Hara.

Pogba’s name was all over the back pages this morning after the Frenchman’s agent publicly announced his time at Old Trafford is ‘over’.

Pogba has cut a forlorn figure at Old Trafford in recent months

GETTY IMAGES
2
Pogba has cut a forlorn figure at Old Trafford in recent months
With all eyes on United’s must-draw Champions League match against RB Leipzig – which is LIVE on talkSPORT on Tuesday night – Raiola seized the opportunity to put his client up for sale yet again, despite little transfer speculation and a return to form for Pobga over the weekend.

Even still, Raiola’s comments do not come as too much of a surprise, given his outspoken nature.

The agent has made numerous public statements about Pogba down the years, and more recently he was very vocal about Man United’s failed pursuit of Erling Haaland, another one of his clients.

Alongside hoping to engineer a transfer for Pogba, Raiola is also trying to ‘delete the FIFA video game from existing’ due to a copyright dispute between EA Sports and his client Zlatan Ibrahimovic.

Raiola represents a number of high-profile players across Europe

GETTY IMAGES - GETTY
2
Raiola represents a number of high-profile players across Europe
And O’Hara is quite frankly sick of it.

“He’s all about himself, making a name for himself and bigging himself up,” O’Hara told Tuesday’s talkSPORT Breakfast.

“I’ve got this player, I can end FIFA, Pogba’s finished – just shut up, mate!

“Seriously, if he was my agent, I would phone him up and say, ‘Keep you mouth shut, I’m playing for Manchester United, I’m not playing well, I’ve just scored on the weekend and now I’m thrown all over the papers again’.”

There are some suggestions that Pogba would’ve known about his agent’s comments, but O’Hara was keen to defend the Frenchman from any blame, insisting responsibility for the saga lies with Raiola.


                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./209.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       He added: “If Pogba knows about that statement in advance, then he’s got to leave, but I don’t think he’s like that.

“Whether or not he’s happy at Man United, I still think he’s a professional, he still wants to do well for the club, and when he plays, he tries.

“Your agent is someone who represents you off the field, who keeps their mouth shut and does business behind the scenes.

“You don’t have an agent who is constantly running their mouth off to the press, that is not what you’re hired to do.

“I wish he would just shut up and let Pogba play his football.”

talkSPORT brings you full LIVE commentary of RB Leipzig vs Manchester United in the Champions League, kick-off 8pm
                      </p>
                                            <div className="j1" >

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

