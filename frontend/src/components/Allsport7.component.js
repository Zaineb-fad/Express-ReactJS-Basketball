import React from "react";
import "./Allsport7.component.css";

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
                    <h1> It’s all or nothing for Manchester United in the Champions League tonight.</h1>
 <p>
                        

Ole Gunnar Solskjaer’s men visit RB Leipzig with qualification to the knockout stages of the competition on the line.

Man United have had a topsy-turvy Champions League group stage

GETTY IMAGES
5
Man United have had a topsy-turvy Champions League group stage
A win, of course, will send them through, and a draw is enough due to their head-to-head record with the Germans, but defeat, even if Group H rivals Paris Saint-Germain lose to Istanbul Basaksehir, will see them crash out.

Manager Solskjaer, though, is confident his side will rise to the occasion in Germany.

“Knockout games or games like this that mean you can go through or not are big,” the United boss said.

“The players are here, they are Man United players, because they have qualities that we’ve looked for and I’m sure that tomorrow night will prove that’s the reason why they’re here, they will show it.

“I think the character of the group is getting better and better and we’re looking forward to the game.

“It’s something that we want, games like this. It’s a tradition for Man United – we never make it easy for ourselves.

“Of course we look at the games, especially the away game against Istanbul (Basaksehir) that we could have got three points, but that’s just the way we do things.

“We do make it hard for ourselves. That’s been ever since I played and that’s a long, long time ago.”

Solskjaer will be desperate to get his side into the next stage of the Champions League

AFP OR LICENSORS
5
Solskjaer will be desperate to get his side into the next stage of the Champions League
United captain Harry Maguire echoed his manager’s sentiments.

“First and foremost, I joined this club to play in the biggest games possible,” he said.

“Your big players step up in the most pressured games, so for sure I think that’s a statement which shows over the years, that the big players step up in the big games.

“It’s a bit similar to the game at Leicester last year where we had to get a result to reach the Champions League and we managed to do that, so we’ll take confidence from that.

“But we feel ready, we feel prepared and we’re looking forward to it.”

Maguire wants to see his teammates rise to the occasion


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./211.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES
5
Maguire wants to see his teammates rise to the occasion
Manchester United team news
“David (De Gea) is back in travelling, Luke (Shaw) is travelling,” said Solskjaer, who is without Fred through suspension.

“Edinson (Cavani) and Anthony (Martial) they’ve only minor niggles but they won’t be making the trip.

“You get to the last game of the group stage and you’re in the next round if you go and win that game or you get a draw so it’s an important game. Of course it is.”

Meanwhile, Paul Pogba is set to be omitted from the starting line up and may not even make the bench.

The World Cup winner scored a brilliant goal in Saturday’s 3-1 win at West Ham but his agent, Mino Raiola, dropped a bombshell on the eve of this clash by claiming it is ‘over’ for the player at Old Trafford.

While Pogba has travelled to Germany, the comments from his agent leave Solskjaer with a difficult decision to make and he may well decide leave Pogba out completely.

Time may well be up for Pogba at United

GETTY IMAGES - GETTY
5
Time may well be up for Pogba at United
Predicted Manchester United line-up
Manchester United predicted line-up against RB Leipzig

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./212.PNG" thumbnail />
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

