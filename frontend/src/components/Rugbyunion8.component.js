import React from "react";
import "./Rugbyunion8.component.css";

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
                      <h1>CONCERN England vs Barbarians under major threat after visiting players breach COVID-19 protocols
</h1><p>
                        
By talkSPORT
22nd October 2020, 7:50 pm Updated: 22nd October 2020, 11:42 pm
England’s game against the Barbarians at Twickenham on Sunday has been plunged into major doubt after the Rugby Football Union (RFU) revealed several Baa-baas players breached coronavirus protocols.

The RFU claims several players left the team hotel without permission or informing organisers of their whereabouts on Wednesday evening.


Upon their return they were expelled from the Barbarians squad.

The RFU said if there was a further round of COVID-19 testing on the players who left the bubble, there would be no guarantees that they are not infectious in the period up to and including the match.

A decision will be made about whether the match can go ahead by 3pm on Friday, but those who have breached protocols have been forbidden from participating in Sunday’s fixture.

The RFU statement read: “To protect the safety of other participants, these players cannot be permitted to remain with the Barbarians squad and play in Sunday’s fixture.

“If sufficient new players with an appropriate testing history and who have been meeting the code of conduct standards can be brought into the Barbarians camp then the game will go ahead.

“The RFU scheduled the Quilter Cup Barbarians fixture for performance purposes in order to provide a warm-up game ahead of the postponed Italy v England Guinness Six Nations decider.

England are scheduled to take on the Barbarians at Twickenham on Sunday

.
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./267.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES
1
England are scheduled to take on the Barbarians at Twickenham on Sunday
“However it will not compromise the safety of players to do so.”

The statement continued: “Barbarian F.C. have expressed their extreme disappointment in the conduct of the players involved and have taken all necessary steps to ensure the safety of the players and staff within the bubble.

“The club are working closely with the RFU as they determine whether the Quilter Cup can go ahead.

“The RFU will provide an update on the match status by 3pm on Friday 23 October.

“No details on the individuals who will be in or out of the revised Barbarians squad will be announced until the fixture is re-confirmed.”

The Barbarians are now left with a furious scramble to bring in playing squad additions.

England head coach Eddie Jones is scheduled to name his starting line-up for the game on Friday
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./268.PNG" thumbnail />
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

