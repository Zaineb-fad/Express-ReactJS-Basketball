import React from "react";
import "./Transfers8.component.css";
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
                     <h4> A Manchester United fan has joked he’s ready to drive Paul Pogba to Juventus and bring back Matthijs de Ligt with him following Mino Raiola’s ill-timed comments regarding the Frenchman’s future.

Speculation that Pogba will leave the Red Devils has been ramped up following comments made by his agent Raiola.

Paul Pogba is unhappy at Man United according to his agent </h4><p>
                       

AFP
4
Paul Pogba is unhappy at Man United according to his agent
He claimed the France World Cup winner’s time at United was ‘over’, declaring he is ‘unhappy’ at Old Trafford and ‘unable to express himself’.

The 27-year-old came through the youth ranks at the club before joining Juventus where he made himself a star name.

United re-signed him back in 2016 for a then record fee of £89million but has often been a source of frustration during a tumultuous period in the club’s history.

Rumours have persisted that Pogba could return to Juventus and the fact that Raiola said the comments to an Italian publication will only fuel the fire.

Pogba’s agent Mino Raiola made the explosive comments to an Italian publication

GETTY
4
Pogba’s agent Mino Raiola made the explosive comments to an Italian publication
Gary the Man United fan phoned talkSPORT’s Drive on Monday and proposed a deal that could suit both parties.

He said: “I’ll drive him to Turin myself and pick up Matthijs De Ligt on the way back.

“Let’s not mess about with ‘here you are have Dybala, have this that or the other’. Let’s address the issues with our team.

“We need a centre-back, we need a holding midfielder. Let’s have De Ligt and you have Pogba thanks very much.

“I can count on one hand how many times he played well for Man United in four or five years now.

“I agree, yes on paper he’s a very good player but should be an awful lot better than what he’s showing for Man United.

“At some point, you’ve got to draw a line under it and that’s now. Let’s move on, get him out the door and get better players in, particularly at the back as anyone with eyes can see that’s where our problems are.

Matthijs de Ligt signed for Juventus from Ajax in 2019

GETTY IMAGES - GETTY
4
Matthijs de Ligt signed for Juventus from Ajax in 2019
“We don’t need to be playing two holding midfielders all the time because we’ve got weak centre-backs.

“Let’s address that, get that sorted, get that man and the virus that is attached to him – his agent – out of the club. I don’t want anything to do with them and let’s move forward.”

One thing that Gary may be forgetting is that De Ligt’s agent is in fact Raiola, so there would be little chance in getting rid of him.

The quotes from the agent have slowly started to emerge on Monday afternoon following an explosive interview with Tuttosport.

Paul Pogba rejoined Man United in 2016

GETTY IMAGES - GETTY
4
Paul Pogba rejoined Man United in 2016
In it he said: “Paul is unhappy with Man United as he is no longer able to express himself in the way that he would like and as he is expected to. Paul needs a new team, a change of air. He is under contract for the next 18 months and it will expire in the summer of 2022.

“However, I think that the best solution for both Pogba and Man Utd is that he goes in the next transfer window. If not, the Old Trafford club know that they risk losing him on a free transfer as it is not Paul’s intention to extend his contract.

“Manchester United board know the risk losing Pogba for free given the player has no intention of extending. If somebody does not understand that, then they do not understand football. In any case, let them blame me if Paul leaves.”

RB Leipzig vs Manchester United is LIVE on talkSPORT on Tuesday night, kick-off 8pm
                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./207.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       
                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./208.PNG" thumbnail />
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

