import React from "react";
import "./Rugbyunion4.component.css";

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
                     <h1>Jonny May reminded world rugby just how prolific and pacey he can be with a devastating try against Ireland from his own 10-metre line.
 </h1><p>
                        

The Gloucester winger gave England the lead in their Autumn Nations Cup clash at Twickenham after a brave take in the air from Owen Farrell’s cross-field kick to touch down in the corner.

Jonny May ran from his own half to score against Ireland

AFP OR LICENSORS
2
Jonny May ran from his own half to score against Ireland
After being largely stifled against Georgia in the opening fixture of the new-look tournament, May burst into life with a second try which left viewers at home completely stunned.

The stern English defence turned the ball over on the near side, before it was recycled out to the left hand side to May who revved up his engine and got his legs pumping.

Having seen off two challenges, the 30-year-old then chipped ahead and raced onto the ball to touch down to complete a stunning score.


May’s incredible second score – his 31st at international level – made him the joint second highest try-scorer in his country’s history alongside Will Greenwood and Ben Cohen.

And he was lavished with praise on social media – with one fan even comparing May to Tottenham and England striker Harry Kane!






                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./259.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       Jonny May just scored one of the best tries ever at HQ 🙌🏻🌹❤️ 🏴󠁧󠁢󠁥󠁮󠁧󠁿

— Marina Arnold (@Twickerschick) November 21, 2020

The Gloucester winger started in his own half before finishing under the posts

AFP OR LICENSORS
2
The Gloucester winger started in his own half before finishing under the posts
Eddie Jones had promised to pick his ‘strongest team possible’ for the visit of the Irish and the fantastic first half suggested the selection choices made by the Australian were correct.

Although Andy Farrell’s team recorded a great win over Wales in their first game, Jones’ men looked too sharp and too powerful from the very start.

Having won the Six Nations last month, England will be hoping to win the inaugural Autumn Nations Cup to cement their position as one of the best sides in the world.
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./260.PNG" thumbnail />
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

