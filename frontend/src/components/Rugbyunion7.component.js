import React from "react";
import "./Rugbyunion7.component.css";

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
                                     <h1>        BARRED Barbarians players, including Chris Robshaw, filmed in pub breaching COVID rules as clash vs England is cancelled
</h1><p>
VIDEO
By talkSPORT
24th October 2020, 5:20 pm
Video footage has emerged of SEVEN Barbarians players flouting coronavirus rules, which led to their clash against England being cancelled.

The RFU pulled the plug on the fixture after it emerged there were two separate breaches from Barbarians players leaving the bio-secure team hotel on Park Lane, London, ahead of the scheduled game at Twickenham this weekend.

Former England captain Chris Robshaw was among the Barbarians who broke the COVID rules


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./266.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       @EDWARDB24376757
1
Former England captain Chris Robshaw was among the Barbarians who broke the COVID rules
However, Rugby Onslaught have revealed a video of several high profile members of the team drinking alcohol together in a pub, including Sean Maitland and former England captain Chris Robshaw.

Jackson Wray, Joel Kpoku, Fergus McFadden and Manu Vunipola are also among the group who appear to be playing a drinking game at what is believed to be a pub in Mayfair.

Robshaw appears to be at the centre of things with the players engaging in what Rugby Onslaught describe as a ‘team bonding experience’. Below you can see the video.


The second breach then took place the following night when Robshaw and eleven others went to a restaurant after which five players including Robshaw and his former England team-mate Richard Wigglesworth issued apologies for their behaviour.

None of the players have tested positive for COVID but the RFU were concerned any incubating infections could put the Six Nations in jeopardy with England’s match against Italy a week on Saturday, while the Autumn Nations Cup kicks off next month.

The cancellation of the game serves is a huge blow to the RFU, who are already set to lose £100million of revenue due to the pandemic. It’s understood the cancellation is set to cost the RFU around £1m in lost TV and sponsor revenue.

A spokesperson said: “An ongoing investigation is looking into players who signed up to a code of conduct which included not leaving the hotel without permission.” 

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./265.PNG" thumbnail />
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

