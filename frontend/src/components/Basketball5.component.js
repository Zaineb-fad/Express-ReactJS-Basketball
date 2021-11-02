import React from "react";
import "./Basketball5.component.css";

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
                <h1> SIN CITY Michael Jordan had to go to Las Vegas and wake Dennis Rodman up after Chicago Bulls allowed him a 48-hour ‘holiday’ with Carmen Electra
     </h1> <p>
                        
By Alex McCarthy
26th May 2020, 1:04 pm Updated: 26th May 2020, 1:10 pm
When Dennis Rodman went partying in Las Vegas during the NBA season, it took the power of Michael Jordan to bring him home.

Rodman was one of a trio of stars, along with Jordan and Scottie Pippen, in the Chicago Bulls’ dominant side of the 1990s that are arguably the best team basketball has ever seen.

Jordan, with Dennis Rodman, left, and Scottie Pippen, right were an iconic trio for the great Chicago Bulls basketball team

GETTY IMAGES - GETTY
4
Jordan, with Dennis Rodman, left, and Scottie Pippen, right were an iconic trio for the great Chicago Bulls basketball team
But Jordan was the superstar and is commonly regarded as the greatest ever play the game.

By the time of the 1997/98 season, the Bulls had five titles to their name and were looking for a second, unprecedented three-peat.

Turmoil behind the scenes, though, threatened the greatness they were on the cusp of.

Jordan, although formidable, was turning 35 and with Pippen undergoing late surgery – on purpose due to contract frustrations – which ruled him out of the first 35 games of the season, he needed Rodman to step up.

The eccentric rebounder, who dated Madonna in addition to model-turned Baywatch actress Carmen Electra and was known for his multi-coloured hairstyles, tattoos and piercings, rose to the task.

The mad life of Dennis Rodman: wrestling with Hulk Hogan, Madonna, Michael Jordan interrupting his party with Carmen Electra and friendship with Kim Jong-un
With his piercings, tattoos and different coloured hair, Rodman was the Maverick in the Chicago Bull side and was allowed to go and blow off steam in Las Vegas

AFP - GETTY
4
With his piercings, tattoos and different coloured hair, Rodman was the Maverick in the Chicago Bull side and was allowed to go and blow off steam in Las Vegas
“You hear a lot of negative things about Dennis Rodman. But you don’t actually know Dennis Rodman,” the former Bulls star said about himself, on episode three of Netflix’s The Last Dance.

“They just see what they see on the court and see what they read in the papers. They think he’s a bad person.

“Nobody can say anything bad about me as a teammate.

“You have the great Michael Jordan. You have the great Scottie Pippen. You have the great [coach] Phil Jackson. But if you take me away from this team, do they still win a championship? I don’t think so.”

The Bulls won six titles in the 90s, beginning with the first three-peat happening between 1991 and 1993 and the second between 1996 and 1998


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./225.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       NBA CLASSIC - GETTY
4
The Bulls won six titles in the 90s, beginning with the first three-peat happening between 1991 and 1993 and the second between 1996 and 1998
Jackson said Rodman held the team together, while Jordan acknowledges his teammate carried the team at times in a way he couldn’t.

“Dennis was a model citizen to the point where it was driving him f***ing insane,” Jordan explained in the third episode.

And so when Pippen returned from injury, Rodman felt he needed a holiday and coach Jackson, who always treated his mercurial star as a special case, reluctantly agreed.

He was given 48 hours off and swapped the Windy City for Sin City with Electra in tow. Unsurprisingly, he didn’t return on time.

“We had to get his ass out of bed,” Jordan recalled laughing.

Electra said being Rodman’s girlfriend was ‘definitely an occupational hazard’

4
Electra said being Rodman’s girlfriend was ‘definitely an occupational hazard’
The most famous sportsman on the planet travelled to Vegas to literally bang on his bedroom door and wake him up as Electra hid.

“I do remember being in Vegas with [Dennis],” she said.

“The party was starting right away. One thing about Dennis, he had to escape. He liked to go out. He liked to go to clubs. We’d go to his favourite restaurant. Then we’d go to a nightclub. Then we’d go to after hours. It didn’t stop. It was definitely an occupational hazard to be Dennis’s girlfriend. He was wild.”

“But to be honest, I didn’t realise what the team’s schedule was,” she continued. “I didn’t know he took a detour.”

To ensure that Rodman got back in shape after ‘blowing off steam’, Jackson organised a conditioning drill that forced everyone to match the pace of the players in front of the line.

While most walked or jogged lightly, when Rodman reached the front of the line Jordan said he held the lead against the rest of his teammates for four laps.

“He needed to get away. But in all honesty, Dennis was always there,” Jordan said. “He was always on point.”
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./226.PNG" thumbnail />
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

