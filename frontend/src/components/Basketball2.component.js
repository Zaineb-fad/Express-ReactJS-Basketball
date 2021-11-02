import React from "react";
import "./Basketball2.component.css";

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
                            <h1>               EMOTIONAL LeBron James posts touching message to the late Kobe Bryant after leading LA Lakers to NBA title
  </h1><p>
By Alex McCarthy
15th October 2020, 2:58 pm
LeBron James has put the LA Lakers back on the map.

‘The King’ secured his fourth NBA title with the Lakers being his third championship team after winning two in Miami and one remarkable success in his hometown of Cleveland.

Kobe Bryant and LeBron James were close friends

2
Kobe Bryant and LeBron James were close friends
One of James’ biggest inspirations was Kobe Bryant and the legendary Laker played a role in helping get him to the Staples Center.

Tragically, Bryant, along with his daughter Gianna, died in a helicopter crash in January.

In the NBA bubble enforced by the coronavirus, James was able to lead the Lakers to their first championship in a decade and he dedicated it to his late friend with a powerful message on Instagram.


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./219.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       “Hope I made you proud my brother!!” he wrote alongside a series of photos. “Love and miss you Champ!!”


James’ co-star Anthony Davis also dedicated the win to Bryant after the win over the Miami Heat on Sunday.

“Ever since the tragedy, all we wanted to do is do it for him, and we didn’t let him down,” he said on the court.

“It would have been great to do it last game in his jerseys, but it made us come down even more aggressive, even more powerful on both ends of the floor, to make sure we close it down tonight.

“I know he’s looking down on us proud of us. I know Vanessa [Bryant is] proud of us, the organisation’s proud of us. It means a lot to us.”

Bryant is one of the greatest players to ever play the game, especially offensively. He’s remembered for his work ethic and powerful desire to win and his death seemed to galvanise the Lakers and catapult them to glory this year.

LeBron finished with his fourth Finals MVP award and he and Davis became the first duo to average over 25 points a game in the NBA Finals since another iconic duo that wore the Purple and Gold – Shaquille O’Neal and Kobe Bryant.

Kobe Bryant and LeBron James shared the court many times

2
Kobe Bryant and LeBron James shared the court many time 

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./220.PNG" thumbnail />
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

