import React from "react";
import "./Basketball8.component.css";

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
                         <h1>                 BE LIKE MIKE Michael Jordan career: How many NBA championships and MVP awards did Chicago Bulls hero win?
   </h1> <p>
By Marc Williams
6th May 2020, 5:10 pm Updated: 10th May 2020, 10:10 pm
Basketball fan or not, you’ve heard of Michael Jordan.

Basketball fan or not, you’re probably watching the MJ documentary ‘The Last Dance’ during lockdown.

Chicago Bulls legend Michael Jordan

GETTY
2
Chicago Bulls legend Michael Jordan
He’s the greatest player of all-time, an icon of sport and a trailblazer for what it means to be a modern day superstar.

During his career, Jordan won the NBA championship six times and was the league’s Most Valuable Player in five seasons.

His incredible career, and the highs and lows that went with it, have been put together in a brilliant ten-part Netflix doc which is keeping sport fans hooked during the coronavirus pandemic.

Michael Jordan flew to Las Vegas to wake Dennis Rodman up after mad 48-hour ‘holiday’

It tells the story of how MJ forged his technique and went on to become the best, taking in the difficulties he faced, his team-mates, bosses and family and the controversies his fame brought.

Jordan has become arguably the most well-known sportsman the world as ever known but incredibly, his sensational career got off to the worst possible start as he was cut from his high school team in his sophomore year.

Motivated by his ‘failure’, the New York-native broke into the team a year later and was recruited by a cluster of the biggest basketball colleges in the country, eventually opting for the University of North Carolina.



M



                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./231.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                      ichael Jordan: Tale of the Tape
Full name: Michael Jeffrey Jordan
Born: 17/2/1963
High school: Laney (Wilmington, North Carolina)
College: University of North Carolina
Drafted: Chicago Bulls (1984)
Transactions: Signed for Washington Wizards (25/9/2001)
Height: 6ft 6ins
Weight: 216 lbs, 98kg
He helped UNC win the NCAA Championship in 1982, hitting the game-winning shot and was then drafted by the Chicago Bulls in 1984.

MJ was drafted only third as legend Hakeem Olajuwon went first and forgotten man Sam Bowie bizarrely selected at second.

Now even more driven to prove everyone he was the best, Jordan quickly settled into life in the NBA and left jaws on the floor with his outrageous play.

A stunning athlete, incredible dunker, regular game-winner and mouthy trash-talker, he went on to win it all.

Michael Jordan is one of sport’s greatest ever

2
Michael Jordan is one of sport’s greatest ever
In addition to the honours won, he was named Finals MVP six times and was an All-Star on 14 occasions, collecting a trio of All-Star MVP gongs.

Not only was he a great attacking force (he was the NBA’s top scorer ten times), he was also brilliant at the other end of the court, collecting several defensive awards, including Defensive Player of the Year in 1988.

He also led the league in steals in three seasons, is a two-time Slam Dunk Contest champion and has two Olympic Gold medals.


TOPICSBASKETBALLCHICAGO BULLSMICHAEL JORDANNBA 
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./232.PNG" thumbnail />
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

