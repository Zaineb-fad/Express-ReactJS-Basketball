import React from "react";
import "./Rugbyunion5.component.css";

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
                                   <h1>        ‘YOU WATCH AND YOU MARVEL’ John Barclay EXCLUSIVE: England tipped to win Autumn Nations Cup but beware Antoine Dupont and ‘phenomenal’ Scotland – even without Finn Russell
 </h1><p>
EXCLUSIVE
By Joe Coleman
6th November 2020, 1:13 pm
John Barclay believes England have to be considered favourites for the inaugural Autumn Nations Cup after they were eventually crowned Six Nations winners.

Owen Farrell presented his teammates with their winners’ medals during a low-key trophy ceremony held at the squad’s Teddington base upon their triumphant return from Rome on Sunday morning.

England secured the Six Nations trophy with a bonus point victory in Rome

GETTY IMAGES - GETTY
4
England secured the Six Nations trophy with a bonus point victory in Rome
Staff, coaches and Rugby Football Union chief executive Bill Sweeney watched as the players celebrated on stage, the occasion robbed of much of its lustre because of the need to hold it within the team bubble.

The festivities began the previous evening when a 34-5 dismissal of Italy, combined with France’s narrow win against Ireland, catapulted England to their first title since 2017 and third under Jones.

The 60-year-old will have to rally his troops once again for the start of the Autumn Cup, which starts on November 14 against Georgia and will continue across four weekends until the finals on December 6.

The Autumn Nations Cup will be the first full competitive international rugby union tournament after a six-month break. The tournament will feature the Six Nations – England, Scotland, Wales, Ireland, France and Italy – alongside two guest teams, Georgia and Fiji.

Eddie Jones has won the Six Nations three times with England

GETTY IMAGES - GETTY
4
Eddie Jones has won the Six Nations three times with England
Given the close proximity to their success in the Six Nations, Barclay believes the Red and Whites are still the ‘team to beat’.

He told talkSPORT.com: “Don’t get me wrong, if I had won the Six Nations that way, I would have been pretty chuffed as I never won one!

“You can sort of sense when England got the cup, albeit next day at home, it probably wasn’t the same celebration. England have become very used to success and maybe that was why.

“Technically, England have to be favourites. Everyone has got their own motivations going in; Wales have got a lot to prove off of what they will view as a very disappointing Six Nations, Ireland will be disappointed to have not wrapped it up in the last game and France have got to show if this is a sustained improvement in terms of quality of their performance.

“Everyone has got different motivations, but I think England have been the standard-bearers for a number of years now so they, in my opinion, are the team to beat now definitely.”

AUTUMN NATIONS CUP SCHEDULE
The Autumn Nations Cup will be the first full competitive international rugby union tournament after a six-month break. The tournament will feature the Six Nations - England, Scotland, Wales, Ireland, France and Italy - alongside two guest teams, Georgia and Fiji. Round 114 NovemberCoverage starts at 12pmItaly v Scotland (12.45pm KO)England v Georgia (3pm KO)15 NovemberCoverage starts at 2.30pmFrance v Fiji (3pm KO) Round 221 NovemberCoverage starts at 12pm Italy v Fiji (12.45pm KO)England v Ireland (3pm KO)Wales v Georgia (5.15pm KO) 22 NovemberCoverage starts at 2.30pmScotland v France (3.15pm KO) Round 328 NovemberCoverage starts at 1pmScotland v Fiji (1.45pm KO)Wales v England (4pm KO)France v Italy (8.10pm KO) Finals Weekend5 DecemberCoverage starts at 11amGeorgia v TBD (12pm KO)Ireland v TBD (2.15pm KO)Wales v TBD (4.45pm KO)6 DecemberCoverage starts at 1pmEngland v TBD (2pm KO)
Barclay, who made 76 appearances for Scotland before his retirement in August, will have watched on with glee as his former side ended their impressive Six Nations campaign with a gruelling victory over Wales in Llanelli.

Following the misery of their World Cup exit to Japan a year ago, Gregor Townsend’s side will be hoping to continue their improvement at the Autumn Cup – albeit without Finn Russell or Adam Hastings.

The fly-halves will miss the games to face Italy, France and Fiji this month, yet Barclay believes their omission will not hamper Townsend’s side too greatly given their improved defence and consistency.

The 34-year-old continued: “What I really like about Scotland is that they are really learning how to frustrate teams with their defence.

Russell was replaced by Hastings in Saturday’s Six Nations win over Wales and Hastings later retired with a shoulder injury

</p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./261.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES - GETTY
4
Russell was replaced by Hastings in Saturday’s Six Nations win over Wales and Hastings later retired with a shoulder injury
“We used to frustrate ourselves with how poor our defence was! We used to attack quite well and there’s been a shift there in how they approach the game.

“There was noise around that in 2019 when we went to the World Cup which didn’t materialise; that focus on kick chasing, defence and all that stuff which isn’t as glamorous but certainly makes up the best teams.

“It would be more concerning if our defence wasn’t as good as it is, it has been phenomenal. The stand-off thing is a bit of a concern; Duncan Weir has been playing well for Worcester and also Jaco van der Walt, who I played with at Edinburgh.”

The Scots face Italy in the first ever Autumn Cup fixture, before facing a revitalised France in the second round of fixtures.

Dupont, 23, is slowly but surely proving to be one of the best No.9’s in the world

AFP OR LICENSORS
4
Dupont, 23, is slowly but surely proving to be one of the best No.9’s in the world
Although victory against the French ended in fisticuffs, a flurry of tries and a resounding victory for the hosts at Murrayfield, Barclay is wary of superstar scrum-half Antoine Dupont.

“For me, as a fan, he is a real pleasure to watch,” Barclay added. “You watch and you marvel and there aren’t many players I watch and think, ‘Wow’.

“He’s almost playing a different sport right now and he is at that level I think at the moment.”

Autumn Nations Cup Rugby Union is coming to Amazon Prime Video, exclusively broadcasting 13 out of 16 matches from 14 November including the tournament finals  
                      
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./262.PNG" thumbnail />
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

