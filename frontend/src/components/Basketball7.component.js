import React from "react";
import "./Basketball7.component.css";

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
                                    <h1>         DUST UP Michael Jordan recalls time he was kicked out of Chicago Bulls practice session for punching teammate Steve Kerr
</h1><p>
By talkSPORT
11th May 2020, 12:00 pm Updated: 11th May 2020, 12:36 pm
If you haven’t been watching the Michael Jordan documentary on Netflix, then you should. It’s brilliant.

One of the enduring themes of ‘The Last Dance’ is Jordan’s relentless will to win, and the demands he placed upon his teammates to drive the Chicago Bulls to unprecedented levels of success.

Jordan is one of the most iconic figures in sports history

GETTY
4
Jordan is one of the most iconic figures in sports history
The outstanding basketball player of his generation – of any generation – never dropped his standards and, under coach Phil Jackson’s astute management, helped lead his team to six NBA Championships in the 1990s.

On the eighth episode of the ten-part mini-series, which is available to watch from today (Netflix are streaming two episodes a week), we get an example of Jordan’s passion and drive spilling over as his infamous fight with Steve Kerr is recalled.

For the first time, Jordan discusses the incident during pre-season in 1995 which saw him leave his Bulls teammate with a black eye. Jordan had been left enraged by the Bulls’ failure to win the NBA finals the previous season and returned even more determined to put things right and restore his team to the top of the game.

“So one day at practice, Phil [Jackson] puts Steve Kerr guarding me,” Jordan recalls.

“Phil sensed my aggression, but he was trying to tone me down, and he starts calling these ticky-tack fouls.

Kerr and Jordan played alongside each other for five years and enjoyed huge success

GETTY
4
Kerr and Jordan played alongside each other for five years and enjoyed huge success
“Now I’m getting mad, because for you to be protecting this guy, that’s not going to help us when we play New York. That’s not going to help us when we play these teams that are very physical.

“The next time he did it, I just haul off on Kerr. When I foul Steve Kerr, I said, ‘Now, that’s a f*****g foul.’

“He hauls off and hits me in the chest, and I just haul off and hit him right in the f*****g eye. And Phil just throws me out of practice.”

Kerr also recalls the episode, saying he was not intimidated by the team’s star player.

“I have a lot of patience as a human being, but I tend to snap at some point because I’m extremely competitive, too,” he said.

“I’m just not really good enough to back it up, usually. But I’m going to fight.”

While Jordan was thrown out of practice, the pair kissed and made up and their relationship blossomed following the bust-up.

“He called me later that day and apologised,” said Kerr, who is now the head coach of the Golden State Warriors.

“We talked it out, and it was probably, in a weird way, the best thing that I ever did, was stand up for myself with him because he tested everybody he played with, and I stood up to him.

“From that point on, our relationship dramatically improved and our trust in each other, everything, it was like ‘All right, we got that out of the way, we’re going to war together’.

Kerr has won three titles with the Warriors, to add to the five titles he won in his playing career with the Bulls and San Antonio Spurs


GETTY
4
Jordan and Kerr did not let their fall-out affect the Bulls, and won three NBA titles together
The crazy life of Dennis Rodman from wrestling with Hulk Hogan, Madonna, Michael Jordan interrupting his party with Carmen Electra and being friends with Kim Jong-un
“I think this documentary is giving you a pretty good glimpse inside his life and how different his life was as a player and that probably affected his life ever since,” Kerr said.

“He’s very, very private … we might run into each other once a year or so at maybe a golf tournament or All-Star Weekend or maybe in Charlotte when we play and he’s always great and it’s fun to see each other and we relive a few old times and then just move on.

“But he’s always been very private and it’s easy to see why if you’re watching this documentary. His life was just total chaos. So I think he relishes his privacy now.” 

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./229.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY
4
Kerr has won three titles with the Warriors, to add to the five titles he won in his playing career with the Bulls and San Antonio Spurs
TOP SPORTS STORIES

LESSON When Kubrat Pulev taunted Wladimir Klitschko and then got KOd – AJ's next opponent

BIG NIGHT Joshua v Pulev undercard: Okolie and Fury in action - start time and how to watch

CLAIM Hatton says he was cheated in Mayweather loss and ‘smelt a rat’ in referee Joe Cortez

PASTURES NEW Rachael Ostovich cut from UFC as Yoel Romero considers Bare Knuckle FC offer

MIND GAMES David Haye explains why Anthony Joshua may have a ‘slight edge’ over Tyson Fury

GLEI CLUB Khabib snubs Conor McGregor as he names the toughest fight of his MMA career

WORDS OF WISDOM Klitschko offers advice to Anthony Joshua after vicious KO of Pulev in 2014

BAD Floyd Mayweather warned by boxing journalist that Logan Paul fight could tarnish legacy
 

Jordan explained: “I’m in the shower, and I’m saying, ‘Look, I just beat up the littlest guy on the f*****g court’. And I felt about this small.

“So when I get in the car, and I call back to the United Center, I said, ‘Please give me Steve Kerr’s number.’ I call Steve and I apologise, and I said ‘Look man, it had nothing to do with you. I feel bad.’

“He earned my respect because he wasn’t willing to back down to be a pawn in this whole process.”

The Bulls went on to win the NBA finals that season, with Kerr and Jordan both influential to their success.

The pair both left the Bulls in 1998, the end of the team’s dynasty.

While they have remained on friendly terms, Kerr sees little of his famously private former teammate, who owns the Charlotte Hornets.

Jordan and Kerr did not let their fall-out affect the Bulls, and won three NBA titles together

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./230.PNG" thumbnail />
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

