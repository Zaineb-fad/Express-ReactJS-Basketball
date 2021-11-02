import React from "react";
import "./Transfers6.component.css";
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
                      <h1>Ally McCoist has urged Manchester United to sell Paul Pogba after his agent’s ‘selfish’ comments on Monday.
</h1><p>
                        

Out of nowhere, Mino Raiola dropped the latest bombshell on the Frenchman’s time at Old Trafford by announcing: “I can say it’s over for Pogba at Manchester United.”

Paul Pogba’s Man United career has been littered with controversial comments from his agent

GETTY IMAGES - GETTY
3
Paul Pogba’s Man United career has been littered with controversial comments from his agent
The timing of the statement took many by surprise, given Pogba recently returned to the Red Devils’ starting XI and scored a stunning goal in the victory over West Ham.

It also came on the eve of Man United’s biggest game of the season so far, as they travel to RB Leipzig needing a draw to get out of their Champions League group.

However, this is not the first time Raiola has stirred up trouble for Man United with regards to Pogba.

The super agent orchestrated the Frenchman’s move from United to Juventus in 2012, leading Sir Alex Ferguson to call Raiola a ‘s***bag’ for the way he behaved in those negotiations.

Raiola represents a number of high-profile players across Europe


He added: “If you dissect what it does say, I don’t necessarily disagree that Pogba should go in January.”
                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./203.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                      GETTY IMAGES - GETTY
3
Raiola represents a number of high-profile players across Europe
Since Pogba’s return in 2016, for which Raiola got £23m of the club record £90m, the representative has spoken out on numerous occasions about the 27-year-old’s desire to leave.

And McCoist has had enough, accusing Raiola of selfishness.

“The timing is shocking, and at the very best it’s selfish,” the Rangers legend told talkSPORT.

“I actually had to laugh at the bit about Paul being unhappy. I know one or two Man United fans who are quite unhappy with Paul!

“Who does he think he is coming out with that at this point in time?”

Pogba has never really hit the heights expected of him for Man United

AFP OR LICENSORS
3
Pogba has never really hit the heights expected of him for Man United
He added: “The timing is just so selfish, Man United and Solskjaer have got a massive game tonight, absolutely massive, a game they cannot afford to lose, and he’s coming out with this nonsense.”

Nonetheless, McCoist does agree that it would be in everybody’s interest for Pogba to leave United in January.

The France midfielder has one-and-a-half years left on his contract – and the Red Devils risk losing him on a free unless they can tie him down to new deal, which seems increasingly unlikely.

Besides, Pogba has struggled to get into Ole Gunnar Solskjaer’s starting XI this season ahead of the likes of Fred and Scott McTominay.

Play Video
Man United fan offers to drive Paul Pogba to Juventus and bring Matthijs de Ligt back
“If his contract expires in a year and a half, this probably is the best moment in time to sell him, because his value will be decreasing,” McCoist said.

“I don’t think the move has been a very talented player, he’s won a World Cup, but he’s not really hit it at Man United.

“Ole clearly prefers Fred and McTominay in the holding positions in the middle of the park. He’s not going to play before Fernandes.”

                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./204.PNG" thumbnail />
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

