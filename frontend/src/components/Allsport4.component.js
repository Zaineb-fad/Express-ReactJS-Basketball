import React from "react";
import "./Allsport4.component.css";

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
                       <h1>                     Manchester United face a crucial Champions League trip to RB Leipzig tonight as they strive to reach the knockout phase.
 </h1><p>

After losing 3-1 at home to Paris Saint-Germain last week, United head into their final Group H level on nine points with the French champions and Leipzig.

Ole Gunnar Solskjaer’s Man United face a key clash against RB Leipzig

GETTY IMAGES
2
Ole Gunnar Solskjaer’s Man United face a key clash against RB Leipzig
United will qualify if they avoid defeat in Germany while PSG face Istanbul Basaksehir in the night’s other group tie.

Ole Gunnar Solskjaer and co beat Leipzig 5-0 at Old Trafford in October and head into this tie fresh from their 3-1 victory over West Ham on Saturday.

Many doubted whether United could make it out of their tricky group and Solskjaer will want to silence some of his critics by doing just that in Tuesday’s clash.

What Manchester United need against Leipzig, plus Champions League permutations for Real Madrid, Inter Milan and Atletico Madrid
RB Leipzig v Man United: How to listen
This Group H tie will get under way at 8pm on Tuesday, December 8.

Full coverage from the Red Bull Arena Leipzig will be live on talkSPORT, with our coverage starting at 7pm.

Commentary will come from Sam Matterface and Stuart Pearce and to tune in, click the radio player below or HERE for the live stream.


Here are the other ways to listen…

App iPhone – Download from the Apple store

Android – Download from Google Play

Radio – talkSPORT is available across the United Kingdom via DAB digital radio and on 1089 or 1053 AM.

TV – Listen to talkSPORT through your TV on the following channels: Sky: Channel 0108 Virgin Media: Channel 927 Freeview: Channel 723 Freesat: Channel 731

Play Video
Simon Jordan says it's time for 'mediocre' Solskjaer to 'get his coat' and says Manchester United should go for Pochettino, Conte or Simeone
RB Leipzig v Man United: Confirmed teams
United will be without Edinson Cavani and Anthony Martial for the crunch clash in Leipzig.

Attackers Cavani and Martial after the pair picked up knocks in Saturday’s 3-1 comeback win at West Ham.

Luke Shaw is back following his recent injury but Fred is out through suspension.

“David de Gea is back in travelling, Luke Shaw is travelling,” said Ole Gunnar Solskjaer.

“Edinson and Anthony, they’ve only minor niggles but they won’t be making the trip.

“You get to the last game of the group stage and you’re in the next round if you go and win that game or you get a draw so it’s an important game. Of course it is.”

Pogba AXED, Cavani and Martial out, but Fernandes starts in Man United’s Champions League decider v Leipzig
Manchester United beat RB Leipzig 5-0 at Old Trafford in October


“We do make it hard for ourselves. That’s been ever since I played and that’s a long, long time ago.” 

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./206.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY
2
Manchester United beat RB Leipzig 5-0 at Old Trafford in October
RB Leipzig v Man United: What has been said?
There’ll be a lot of pressure on United heading into the match, but boss Solskjaer is confident the players will rise to the occasion.

“Knockout games or games like this that mean you can go through or not are big,” the United boss said.

“The players are here, they are Man United players, because they have qualities that we’ve looked for and I’m sure that tomorrow night will prove that’s the reason why they’re here, they will show it.

“I think the character of the group is getting better and better and we’re looking forward to the game.

“It’s something that we want, games like this. It’s a tradition for Man United – we never make it easy for ourselves.

“Of course we look at the games, especially the away game against Istanbul (Basaksehir) that we could have got three points, but that’s just the way we do things.

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./207.PNG" thumbnail />
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

