import React from "react";
import "./Rugbyunion6.component.css";

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
                                       <h1>     TRIUMPHANT England crowned 2020 Six Nations champions on points difference as France defeat Ireland
</h1> <p>
By Oliver Dawnay
31st October 2020, 10:33 pm Updated: 31st October 2020, 11:15 pm
England have been crowned 2020 Six Nations champions on points difference after a comprehensive victory over Italy propelled them beyond the reach of closest rivals France and Ireland.

After an unprecedented seven month hiatus in the middle of the tournament, Eddie Jones’ men overcame the rust caused by the coronavirus pandemic to post a 34-5 win in Rome that placed them in a strong position to seize Wales’ crown.

England have won the Six Nations tournament in 2020

GETTY IMAGES
5
England have won the Six Nations tournament in 2020
Ireland’s destiny remained in their own hands, knowing a bonus-point triumph would be sufficient to deny England, but they fell short in a 35-27 loss at the Stade de France that concluded a dramatic Super Saturday.

It gives Jones the third Six Nations title of his five-year reign exactly a year after the 2019 World Cup final was lost to South Africa. Andy Farrell’s men finished third while a rejuvenated France were runners-up.

Having dismantled Italy, England returned to their team hotel to have dinner and watch events in Paris unfold knowing they were in the driving seat heading into the final element’.

England comprehensively defeated Italy in Rome

GETTY IMAGES
5
England comprehensively defeated Italy in Rome
There was already an air of celebration after Ben Youngs marked his 100th cap by crossing twice, a brilliant second try coming moments after the interval when Owen Farrell’s side looked for a response to a ragged and bad tempered first half.

Suffering from the cancellation of the Barbarians fixture that was to be their warm-up, they looked every bit a team that needed to blow away the cobwebs.

Italy fought hard but when Jamie George touched down on his 50th cap, any remote hopes of staging an upset faded and England registered the crucial bonus point when Tom Curry surged over from close range.

Ireland were defeated by France in Paris

GETTY IMAGES
5
Ireland were defeated by France in Paris
Henry Slade added the fifth and final try to set up an anxious wait for the outcome at the Stade de France.

All week they talked about the need to show patience in shaking off the rustiness of having not played since mid-March, but it took only four minutes to breach the home defence.

Mako Vunipola was the engineer, the Saracens prop standing at first receiver and sending Owen Farrell into a gap before Youngs appeared on his shoulder to finish the move.

Italy were in full retreat in every department and it took furious defence to keep out the white shirts, so it was a conservative decision when Farrell opted for three points when offered a penalty in front of the posts.

England pressed again but a fumble by Kyle Sinckler was pounced upon by centre Carlo Canna, who gathered and carried before a rampaging Jake Polledri arrived on an excellent line to storm over the whitewash.

France came so close but ultimately could not reduce England’s point deficit


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./263.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES
5
France came so close but ultimately could not reduce England’s point deficit
Another setback came in the 23rd minute when Jonny Hill’s debut soured upon catching Edoardo Padovani on the head with an arm, forcing the Italian wing to undergo an HIA and earning the Chiefs double-winner a yellow card.

Jones slammed down his radio device in anger at referee Pascal Gauzere’s decision and what followed would not have pleased the Australian head coach either.

Italy began to attack with tempo and made inroads, winning successive penalties which they cleverly used to build pressure.

A driving line-out took them over the whitewash but they were held up with Hill under the ball and they crumbled at the ensuing five-metre scrum, costing them a glorious chance.

Jones has been hugely successful as England head coach

GETTY IMAGES
5
Jones has been hugely successful as England head coach
Polledri entered the sin-bin for going in at the side but just as England began to hammer away from close range, they conceded a penalty to enable Italy to escape and even momentarily threaten at the other end.

An unimpressive 10-5 interval lead was extended 56 seconds into the second half when Hill charged down a box kick and Maro Itoje secured the loose ball.

Spotting a gap at the ruck, Youngs dummied and slid through the hole before beating full-back Matteo Minozzi.

With half an hour to go, daylight opened up as George finished a driving maul but Italy refused to fold as they continued to scrap.

Finally they began to buckle, Curry spotting an unguarded blindside to scamper over before Ben Earl and Slade took advantage of an absent Azzurri defence for the latter to complete the rout.

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./264.PNG" thumbnail />
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

