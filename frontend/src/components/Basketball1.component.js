import React from "react";
import "./Basketball1.component.css";

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
                        <h1>                   Between 2010 and 2019, Cristiano Ronaldo and Lionel Messi were the best players in the world and were handsomely rewarded for their efforts.
  </h1><p>

However, there was one man who raked in more money than the Juventus and Barcelona footballers.

Boxing legend Floyd Mayweather topped the Forbes ranking for the decade, which totalled all earnings from the world’s biggest sports stars over the previous ten years and for a man who loves to earn cash, it was no surprise to see him on top.

Floyd Mayweather aptly nicknamed himself ‘Money’

11
Floyd Mayweather aptly nicknamed himself ‘Money’
‘Money’, as he is often known as, made the most thanks to his mega fights with Manny Pacquiao in 2015 (also included in the top ten) and Conor McGregor, who recently claimed he wants to be a billionaire by the time he is 35, in 2017 respectively, but Ronaldo and Messi are not too far.

Below is the ten highest earning sportsmen for the previous decade and you wouldn’t be surprised to see one of McGregor, Ronaldo or Messi top the list by the time 2029 comes.

Ronaldo vs Messi
Ronaldo is an ‘alien’ who made Holloway sick and stunned Man United legends like Best
Ronaldo admires Messi, the PlayStation footballer hailed by the game’s biggest names
Wayne Rooney weighs in on the Ronaldo vs Messi debate
10. Lewis Hamilton – $400m
Hamilton is most marketable athlete in F1 and his earnings show that

GETTY IMAGES - GETTY
11
Hamilton is most marketable athlete in F1 and his earnings show that
9. Kevin Durant – $425m
Durant’s earnings came on a lot in the previous ten years as he has moved from Oklahoma City Thunder to Golden State Warriors and now the Brooklyn Nets

GETTY IMAGES - GETTY
11
Durant’s earnings came on a lot in the previous ten years as he has moved from Oklahoma City Thunder to Golden State Warriors and now the Brooklyn Nets
8. Manny Pacquiao – $435m
Mayweather vs Pacquiao generated half a billion dollars when they finally met in the ring and if he decides to fight Conor McGregor in 2021 then he may just add a few more zeroes to his account

GETTY IMAGES - GETTY
11
Mayweather vs Pacquiao generated half a billion dollars when they finally met in the ring and if he decides to fight Conor McGregor in 2021 then he may just add a few more zeroes to his account
7. Phil Mickelson – $480m
In 2018, Mickelson defeated his rival Woods in an exhibition for m, which is not not bad for a few hours work (hours of practice aside)

GETTY
11
In 2018, Mickelson defeated his rival Woods in an exhibition for $9m, which is not not bad for a few hours work (hours of practice aside)
6. Tiger Woods – $615m
The biggest name in golf retained his big sponsorship deals


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./217.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY
11
The biggest name in golf retained his big sponsorship deals
5. Roger Federer – $640m
Federer has a 0m deal with Uniqlo that has kept his bank balance looking healthy

GETTY IMAGES - GETTY
11
Federer has a $300m deal with Uniqlo that has kept his bank balance looking healthy
4. LeBron James – $680m
Lakers star James’ endorsements are astronomical and could be even bigger considering his recent NBA success

NBA
11
Lakers star James’ endorsements are astronomical and could be even bigger considering his recent NBA success
3. Lionel Messi – $750m
Messi has won more Ballon d’Or awards than any other player but with his contract running down at Barcelona, who will give him his next big payday – apart from adidas and Pepsi

GETTY IMAGES - GETTY
11
Messi has won more Ballon d’Or awards than any other player but with his contract running down at Barcelona, who will give him his next big payday – apart from adidas and Pepsi
2. Cristiano Ronaldo – $800m
Ronaldo has huge endorsement deals and has continued to earn big since leaving Real Madrid for Juventus in a £100m transfer in 2018

AFP OR LICENSORS
11
Ronaldo has huge endorsement deals and has continued to earn big since leaving Real Madrid for Juventus in a £100m transfer in 2018
1. Floyd Mayweather – $915m
Mayweather made millions from mega fights and just missed out on £1bn, according to Forbes

GETTY IMAGES - GETTY
11
Mayweather made millions from mega fights and just missed out on £1bn, according to Forbes 

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./218.PNG" thumbnail />
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

