import React from "react";
import "./Boxing6.component.css";

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
                      <h1>         Ricky Hatton ‘felt cheated’ after his knockout defeat to Floyd Mayweather in their 2007 blockbuster bout.
              </h1> <p>

In fact, ‘The Hitman’ admits it still bothers him that he never got the opportunity to make his mark on the bout because of referee Joe Cortez.

Hatton and Mayweather locked horns on December 8, 2007 in Las Vegas

GETTY IMAGES - GETTY
4
Hatton and Mayweather locked horns on December 8, 2007 in Las Vegas
Hatton was stopped by ‘Money’ in the tenth round of their glitzy Las Vegas spectacle for the welterweight world championship.

However, the Manchester-native was left frustrated by the official not allowing him to work inside on the body as he had done so many times throughout his distinguished career, including when he beat pound-for-pound king Kostya Tszyu in 2005.

Mayweather historically struggled with body punchers during the brief glimpses of trouble fans were afforded to witness throughout his unbeaten career and Hatton believes Cortez helped the American.

Hatton told BT Sport: “I did give him a good run for his money.

Hatton had glimpses of his undoubted quality on the night


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./246.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                      GETTY IMAGES - GETTY
4
Hatton had glimpses of his undoubted quality on the night
“I feel a little bit cheated to be honest with you, because I felt that I wasn’t going to outbox him and I wasn’t going to out-speed him, but if I was allowed to get close I would definitely throw more punches than him.

“I never got the opportunity and that’s the thing that will always eat away at me – the referee never gave me the opportunity.

“The one person that was allowed to get stuck in and bully him and was allowed to fight close was Marcos Maidana and he pushed him really close.

“Castillo was allowed to get close and a lot of people thought Castillo won, so I smelt a rat that night with the referee and I don’t think I was given a fair crack of the whip.”

Referee Cortez insisted on separating the welterweights at the MGM Grand

GETTY IMAGES - GETTY
4
Referee Cortez insisted on separating the welterweights at the MGM Grand
‘The Hitman’ was a fan favourite and his crowning moment came in 2005 against Kostya Tszyu

GETTY IMAGES - GETTY
4
‘The Hitman’ was a fan favourite and his crowning moment came in 2005 against Kostya Tszyu
Tuesday will mark 13 years to the very day since Hatton and Mayweather squared off in Sin City this Tuesday, with the Englishman bringing thousands of vociferous fans Stateside.

Although he won hearts of fans all over the world, Hatton ended his career with two losses after being stopped by Manny Pacquaio and Vyacheslav Senchenko.

However, despite being able to look back on his career with a tremendous amount of pride, there is always the element of ‘what if’ for the 36-year-old.

Hatton told Sky Sports: “Against Kostya Tszyu, with a referee who let the fight flow at a distance and up close, I would have beaten anyone that night, including Floyd.

Play Video
Anthony Ogogo 'heartbroken' for Daniel Dubois after defeat to Joe Joyce but he 'may have been right' to take the knee and save his career after devastating eye injury
“I’m not saying I was a better fighter than Floyd. But the right tactics on the right night at the right time? Even the best can be beaten.

“If I fought him on that night, I think I might have beaten him.”

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./247.PNG" thumbnail />
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

