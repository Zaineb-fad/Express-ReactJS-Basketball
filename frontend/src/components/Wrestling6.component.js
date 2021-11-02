import React from "react";
import "./Wrestling6.component.css";

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
                        Mike Tyson had men beaten before he even entered the ring such was the fear he instilled in opponents.

He rightly has a place in boxing’s Hall of Fame and the heavyweight legend is also a fully paid up member of the WWE version.

‘Iron Mike’ is one of the squared circle’s most legendary figures, which is why his comeback to the ring – at 54 years old – is such big news.

Will the fear factor still be there? It certainly appears so, but then it needs to be as he is facing an equally tough Roy Jones Jr.

Tyson knocked out WWE legend Chris Jericho on an episode of RAW and the wrestler later said he must have been crazy to allow it

4
Tyson knocked out WWE legend Chris Jericho on an episode of RAW and the wrestler later said he must have been crazy to allow it
However, even in the years after his retirement from boxing in 2005, he could still worry some of the toughest guys around – just ask WWE legend Chris Jericho.

During Tyson’s heyday, WWE was locked in a war with rival promotion WCW for Monday night supremacy.

The Vince McMahon-owned company had lost for 83 successive weeks in the ratings battle before they got their next win. And the man who helped them turn the tide was Michael Gerard Tyson.

The former undisputed heavyweight champion agreed to work with WWE and performed as a special guest referee at WrestleMania 14 in 1998 in the classic between Shawn Michaels and Stone Cold Steve Austin that saw the latter win his first world title.

Play Video
'Iron' Mike Tyson shares hilarious video of family eating Roy Jones Jr head for thanksgiving dinner
Following on from that momentum swinger, Tyson appeared occasionally in WWE. He was inducted into the Hall of Fame in 2012, but in 2010, he actually competed in a match alongside Jericho on RAW.

They faced off against the Unified Tag Team champions, D-Generation-X,  the group Tyson had turned his back on when Austin won the title were meeting again, but there was a twist in store

Jericho was the total heel at this point and was obviously going to push Tyson too far on the night.



The guys had devised a spot where Tyson would ‘knock Jericho out’ on RAW, but Jericho was terrified that was actually going to happen. After all, who knew if Tyson had a ‘working’ punch or if he was just legit.

“The moment before he swung at me, I told him, ‘Just wait until I put my hands up in the air, and swing,’” Jericho told the Las Vegas Review-Journal.

“Time stood still. I am the craziest man on the planet right now, because I’m waiting for Iron Mike Tyson to take a swing at me.

Tyson looks as lean as he did in his prime as he prepares to fight Roy Jones Jr in his first fight since 2005


                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./193.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <h4>Tyson looks as lean as he did in his prime as he prepares to fight Roy Jones Jr in his first fight since 2005
“I thought ‘I’m going to let him do it. Hopefully, he’s going to do it the proper way. But what if he’s mad? What if he misses?’”

Luckily for Jericho, Tyson executed the punch perfectly, but the precision he did it with terrified Jericho even more.</h4><p>
                       4


“He barely grazed me, but I felt a wind go by my face,” Jericho said. “That’s how fast he swung. It was like a ‘Swoosh!’ Who swings that hard and leaves a vapour trail?!

“He was so fast and so powerful. I couldn’t imagine how powerful he was 20 years earlier,” Jericho recalls.

Tyson was the most feared man on the planet for a generation

THE RING MAGAZINE VIA GETTY IMAGES
4
Tyson was the most feared man on the planet for a generation
Once you agree to get punched by Tyson – real or fake – suddenly you have nothing left to fear, at least in the mind of Jericho.

“Nothing could ever scare me ever again, after standing face-to-face with Mike Tyson, knowing he’s going to swing at me, and giving him 100 per cent trust he’s not going to knock me out and kill me.”

Tyson, now 53, has shown recently that he is still a very, very scary man all things considered.

Jericho actually had Tyson on his podcast in 2017, but Iron Mike had very little to say. He obviously wasn’t in the mood to talk and Jericho was forced to acknowledge this fact with his fans.

“He didn’t want to talk. He was giving me one-word answers. Guess what? I gotta get a show. So you know what I decided? Alright, Mike. You don’t want to talk to me? You can sit there and listen while I talk to you. And that’s what happened.

Tyson took part in WrestleMania 14 and joined forces with DX

4
Tyson took part in WrestleMania 14 and joined forces with DX
“Forty minutes of me talking, seven minutes of him giving one-word answers, and we got a show out of it. Was it great? I’m not sure it was great. But was it a great test for me as an interviewer? By far.”

Tyson is now doing plenty of talking – with those fast hands again as he prepares to return for an exhibition bout.

There is plenty who do not want to see him back in the ring, but then again, there are plenty who want to see if he still has that knockout power.

Download the talkSPORT app and listen to a huge heavyweight night of action this Saturday, with live and exclusive radio commentary of Daniel Dubois vs Joe Joyce followed by live coverage of Mike Tyson’s return to the ring against Roy Jones Jr at 3am on Sunday morning
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

