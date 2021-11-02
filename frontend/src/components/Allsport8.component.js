import React from "react";
import "./Allsport8.component.css";

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
                     <h1> Arsenal outcast Mesut Ozil has fired back at Piers Morgan as their war of words continues on Twitter.
</h1><p>
                        

Ozil was left out of Arsenal’s 25-man Premier League squad for the first half of the 2020/21 season, but the Germany playmaker has remained very vocal on social media in support of his teammates.

Morgan and Ozil have engaged in a brutal back and forth on social media for some time

1
Morgan and Ozil have engaged in a brutal back and forth on social media for some time
And many Arsenal fans still appear to back Ozil, especially now Mikel Arteta’s side are struggling on the pitch and could really do with a top-class playmaker to create goalscoring chances.

There have been many calls to ‘#FreeOzil’ on social media, and the German showed his thanks for those supporting him on Twitter on Monday.

He captioned a photo of him in front of fans at the Emirates: “The feeling of having fans behind you… #grateful #bestfans #hardtimes.”

But Morgan, the outspoken Gooner who has long criticised Ozil, was not buying into the sentiment.

He replied to Ozil’s tweet: “Real Arsenal fans aren’t behind you. You’re our Paul Pogba – massively overpaid, massively under-performing & shockingly overinflated sense of your own importance. #truth.”

</p><div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./213.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       Ozil, who earns a whopping £350,000-per-week at the Emirates, hit back in typically ruthless fashion.

He replied: “Piers, buddy, are you still bitter from the other day? It seems like you’re not a big fan of World Champions.

“I wish you would see as good as you hear things.”


Will these two still be at it come the start of the New Year? You’d bet your house on the answer to that question being a resounding ‘YES’!
                      
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./214.PNG" thumbnail />
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

