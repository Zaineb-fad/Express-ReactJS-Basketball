import React from "react";
import "./Transfers5.component.css";
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
                     <h1>A Manchester United fan has told talkSPORT the Red Devils should sell Paul Pogba…</h1> <p>
                       and sign Mesut Ozil as his replacement

The France midfielder’s agent, Mino Raiola, came out on Monday and said it’s ‘over’ for Pogba at United to once again cast doubts over his future.

Just a few days after scoring a fine goal against West Ham, Pogba’s exit wish was revealed by his agent

GETTY IMAGES
2
Just a few days after scoring a fine goal against West Ham, Pogba’s exit wish was revealed by his agent
Real Madrid, PSG and Juventus have all been linked with Pogba over the past few years, and could he finally be nearing the end of his time at Old Trafford?

Pogba is said to be ‘unhappy‘ in Manchester and Raiola believes the ‘best solution’ is for him to leave United as early as January, when the transfer window reopens.

The agent has been widely criticised for speaking out, rather than Pogba doing so himself – especially as Raiola’s quotes came just one day ahead of a crunch Champions League clash with RB Leipzig and with the Manchester derby to follow at the weekend.

Ole Gunnar Solskjaer now has a big decision on his hands with only weeks to go before the transfer window opens once again, with ‘Pogba in’ or ‘Pogba out’ a huge dilemma.

What Raiola said about Paul Pogba
“I can say it’s over for Paul Pogba at Manchester United.“There’s no use ignoring it. It’s better to speak honestly, look to the future and not waste time trying to blame people: Paul is unhappy at Manchester United, he can no longer express himself as he wants to or in the way that’s expected of him.“He needs to change team, he needs a change of scene. He has a contract that expires in a year and a half’s time, in the summer of 2022, but I think the best solution would be for him to leave in the next transfer window.“Otherwise the club from Old Trafford, with whom he has a good relationship, know very well that they risk losing him on a free transfer, considering that right now he does not want to extend his deal.“If people don’t get that, they know very little about football. In any case, they’ll all blame me if Paul leaves next summer.”
Well, one United fan joined talkSPORT on Monday and offered his own advise as to how Solskjaer should proceed with the situation.

And Barry the Red Devil said he’d gladly get rid of Pogba – with Arsenal outcast Ozil the perfect signing to replace him with.

“I don’t know whether [Pogba] is happy or unhappy because he never actually tells us himself,” said Barry on Drive.

“But I would say he should come out and say ‘I want to stay’ or ‘I don’t want to stay, and I want to go’.

“And I would let him go and get the £100million.

Ozil is not in Arsenal’s Premier League or Europa League squads this season – is he the perfect signing for Man United?


                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./201.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES - GETTY
2
Ozil is not in Arsenal’s Premier League or Europa League squads this season – is he the perfect signing for Man United?
“And I am just throwing one in at you, because I think [Jose] Mourinho might try to sign him [for Spurs] – Mesut Ozil, maybe on a free.

“I would throw him in at United as a creative player, and get rid of Fred and [Anthony] Martial.

“I think Ozil would be a good signing for United and I think him, [Donny] Van de Beek and [Bruno] Fernandes would gel quite well.

“I know he’s not a grafter – everybody knows that – but he’s just got that spark and quality that we need; maybe what Pogba has got but doesn’t quite show us often enough.”

talkSPORT brings you full LIVE commentary of RB Leipzig vs Manchester United in the Champions League, kick-off 8pm  

                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./202.PNG" thumbnail />
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

