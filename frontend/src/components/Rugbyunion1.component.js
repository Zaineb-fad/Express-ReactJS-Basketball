import React from "react";
import "./Rugbyunion1.component.css";

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
                                      <h1>      Pablo Matera has been reinstated as Argentina captain, while two of his teammates’ suspensions for ‘discriminatory and xenophobic’ comments on social media have been lifted.
 </h1><p>

Matera, Guido Petti and Santiago Socino were suspended on Tuesday for a series of posts made between 2011 and 2013.

Flanker Matera apologised for the tweets and has since been reinstated as captain

GETTY IMAGES - GETTY
3
Flanker Matera apologised for the tweets and has since been reinstated as captain
One of the shameful posts, written by Matera, read: “Nice morning to go out in the car and run over blacks.”

His tweets have since been deleted and his Instagram account, where he issued an apology, set to private.

However, the Argentine Rugby Union has now ruled that the strong measures initally taken against Matera and his teammates were ‘unnecessary’.

It said the players’ apologies and good behaviour in the years since meant their suspensions could be lifted and Matera will remain captain.

“The preventive measures are unnecessary so we have resolved to lift the suspension of the three players and reinstate the captaincy to Pablo Matera,” the UAR said in a statement.

“The disciplinary process continues and the commission will arrive at a final resolution in the next few days.”

Lock Petti has had his suspension lifted


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./253.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES - GETTY
3
Lock Petti has had his suspension lifted
As has hooker Socino

3
As has hooker Socino
Matera, Petti and Socino had their social media accounts closed on Tuesday, however, screenshots of historical posts making disparaging remarks about black people and people from other South American nations circulated widely.

The UAR said the posts were ‘imprudent and immature’.

The discovery followed criticism of the team for not doing enough to pay tribute to follow Argentina football legend Diego Maradona before their defeat against New Zealand last weekend.

The trio are not in the Pumas’ squad for Saturday’s test against Australia in order to protect them after they received ‘a lot of hate’ since the posts were discovered, said Argentina head coach Mario Ledesma.

“All I can say about these three fine players and great men is that they are great human beings,” he said.

“They have been suffering a lot this week, their families have been suffering a lot this week, and it’s really sad to see. Obviously they acknowledge what they did and they are really regretful and ashamed of what they did, and we all are.”

“I can say they are not the same people they were when they were 17, 18 years old.

“They are great men, family men, Pablo has a kid now, he’s a great leader and a great example.”

Centre Jeronimo de la Fuente will lead the side against Australia on Saturday, with Matias Alemanno replacing Petti in a new second row with Marcos Kremer. Santiago Grondona takes Matera’s spot at blind-side flanker. 
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./254.PNG" thumbnail />
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

