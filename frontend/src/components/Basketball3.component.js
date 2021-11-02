import React from "react";
import "./Basketball3.component.css";

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
                     <h1>NUMBER 17 LA Lakers send fans wild with NBA Championship win against Miami Heat 4-2 – LeBron James calls for respect, Anthony Davis dedicates victory to Kobe Bryant
</h1> <p>
                        
By Alex McCarthy
12th October 2020, 11:36 am
The LA Lakers won their first NBA championship in 10 years on Sunday as they defeated the Miami Heat 106-93 to win the NBA Finals 4-2.

LeBron James was the star of the show once more as his triple-double of 28 points, 14 rebounds and 10 assists led the Lakers to clinch the series in six games. Anthony Davis had 19 points and 15 rebounds.

James led the Lakers to their first title in a decade

GETTY IMAGES - GETTY
4
James led the Lakers to their first title in a decade
James said following the victory that he and the entire Laker franchise wanted some respect after their triumphant season that saw them capture their 17th NBA title, tying them with the Boston Celtics for most championships ever.

“I told Jeanie [Buss] when I came here that I was gonna put this franchise back in the position where it belongs. Her late, great father did it for so many years and she just took it on after that.

“For me to be a part of such a historical franchise, it’s an unbelievable feeling not only for myself, but for my teammates, for the organisation, for the coaches, for the trainers, for everybody that’s here. We just want our respect.

“Rob [Pelinka] wants his respect. Coach [Frank] Vogel wants his respect. Our organisation wants their respect. Laker Nation wants their respect. And I want my damn respect, too.”

There were wild celebrations outside the Lakers’ Staples Center


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./221.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES - GETTY
4
There were wild celebrations outside the Lakers’ Staples Center

James, 36 in December, wasn’t happy that he lost the regular season MVP to Giannis Antetokounmpo, but he picked up his fourth Finals MVP award after defeating the Heat.

He’s now won four NBA titles. Two of those came in Miami ironically and the other in his hometown of Cleveland.

Jimmy Butler put up a valiant effort to make the series interesting with a pair of triple-doubles leading Miami to both of their victories, but with Heat’s injury issues and the sheer talent the Lakers possess, it wasn’t enough.

The Lakers have won the title in maybe the most difficult season ever after the coronavirus pandemic shut the league down for months.

James and Anthony Davis both averaged over 25 points in the finals, the first duo to do that since Kobe and Shaq in 2002, also of the Lakers

GETTY IMAGES - GETTY
4
James and Anthony Davis both averaged over 25 points in the finals, the first duo to do that since Kobe and Shaq in 2002, also of the Lakers
When it finally resumed, the NBA set up a bubble in Orlando and it has been a major success with no one testing positive within it.

The world also lost Lakers legend Kobe Bryant and his daughter Gianna to a tragic helicopter crash in January.

Many of the players were quick to say this title was for Kobe, with Davis saying: “Kobe, I know he’s looking down on us super proud.

“We miss him, and this is definitely for him.”

Lakers fans celebrated by Kobe Bryant’s mural in LA

GETTY IMAGES - GETTY
4
Lakers fans celebrated by Kobe Bryant’s mural in LA
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./222.PNG" thumbnail />
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

