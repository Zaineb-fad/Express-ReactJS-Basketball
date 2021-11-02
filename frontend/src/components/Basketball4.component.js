import React from "react";
import "./Basketball4.component.css";

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
                     <h5> GETTY IMAGES - GETTY
5
The boycotts began when the Milwaukee Bucks did not take the floor for Game 5 of their first-round series against the Orlando Magic
Both the Los Angeles Lakers and the Los Angeles Clippers voted to boycott the remainder of the season. LeBron James reportedly left the meeting early and was followed by the remainder of the Lakers and the Clippers
</h5><p>
                      
GETTY IMAGES - GETTY
5
Both the Los Angeles Lakers and the Los Angeles Clippers voted to boycott the remainder of the season. LeBron James reportedly left the meeting early and was followed by the remainder of the Lakers and the Clippers
Yet Covington took umbrage at the decision to postpone games targeting both organisations and Lakers star LeBron James on Twitter.

“Oh wow, you postponed your games?!” Covington wrote. “Wanna prove you’re really about change? Quit your milti-million dollar jobs and soft privileged lives playing a kids game, take a massive pay cut and perform the toughest job in America. Become cops!!!!!”

Yet it did not take long for ‘The Nigerian Nightmare’ to respond to the man he knocked out in December at UFC 245, proving the rivalry is still simmering.

Usman wrote: “I really wish someone would just break your jaw already…”

Jacob Blake, 29, was shot and injured by police on Sunday as he leaned into his car and as his children watched

GETTY IMAGES - GETTY
5
Jacob Blake, 29, was shot and injured by police on Sunday as he leaned into his car and as his children watched
More reinforcements are being sent to the US city of Kenosha, Wisconsin, following unrest sparked by the police shooting of a black man

GETTY IMAGES - GETTY
5
More reinforcements are being sent to the US city of Kenosha, Wisconsin, following unrest sparked by the police shooting of a black man
The 33-year-old did actually fracture Covington’s jaw during their fight with a crisp right hand, eventually stopping ‘Chaos’ in the fifth round after having him down twice.

Usman last fought at UFC 251 when he dominated Jorge Masvidal on Fight Island, while Covington is set to return to action against former champion Tyron Woodley on September 19 at the UFC Apex in Las Vegas.

Play Video
President Trump congratulates Dana White on running UFC 24   

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./223.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                      OUTSPOKEN Colby Covington tears into LeBron James, NBA and MLB players for boycott in protest of police shooting of Jacob Blake
By Joe Coleman
27th August 2020, 4:33 pm
Kamaru Usman has lashed out at bitter rival Colby Covington for tearing into LeBron James and a host of NBA and MLB players.

The former UFC interim welterweight champion took umbrage at the decision of many top athletes in America to boycott their games to protest the police shootings of Jacob Blake.

Kamaru Usman has responded to Colby Covington’s call out

GETTY IMAGES - GETTY
5
Kamaru Usman has responded to Colby Covington’s call out
Athletes in the States decided to use their position to make a stand against racial inequality and police brutality.

The NBA postponed all three Game Fives of the first-round Play-Offs, while MLB also postponed three regular season games.

The Milwaukee Bucks refused to take to the court for their game against the Orlando Magic, while the Los Angeles Lakers and Clippers were considering boycotting the entire season.

Blake, a black man, was shot seven times in the back in Wisconsin as he tried to enter the driver’s side of his car with his three children inside. The incident, which was caught on camera, has left the victim paralysed.

The boycotts began when the Milwaukee Bucks did not take the floor for Game 5 of their first-round series against the Orlando Magic


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./224.PNG" thumbnail />
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

