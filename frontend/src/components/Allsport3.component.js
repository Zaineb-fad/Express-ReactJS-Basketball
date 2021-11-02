import React from "react";
import "./Allsport3.component.css";

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
                           <h1>                  It could be Lionel Messi v Cristiano Ronaldo tonight as Barcelona host Juventus in the Champions League.
</h1><p>

The two teams have already qualified from Group G have both beaten Dynamo Lyiv and Ferencvarosi home and away.

It could be Lionel Messi v Cristiano Ronaldo tonight as Barcelona host Juventus

2
It could be Lionel Messi v Cristiano Ronaldo tonight as Barcelona host Juventus
Barcelona top the group ahead of Juventus having won 2-0 in Italy in October.

A point will see Barca make the last-16 as group winners while Juve will have to claim a handsome victory to leapfrog their rivals into first.

The match could see great rivals Messi and Ronaldo meet for the first time in nearly three years and fans around the world will hoping to see them go head-to-head.

Barcelona v Juventus: Date and time
The Champions League Group G tie will take place on Tuesday, December 8.

It will kick off at 8pm UK time and is being held at Camp Nou.

Messi v Ronaldo: Barcelona and Juventus stars’ head-to-head records ahead of Champions League clash this week
Play Video
Messi? Ronaldo? Henry? Former Liverpool defender and pundit Jamie Carragher names his top-five toughest ever opponents
Barcelona v Juventus: TV channel and live stream
The match will be broadcast live on BT Sport ESPN with coverage beginning at 8pm UK time.

To stream live, fans will have to head to BT Sport’s official website or visit their mobile app.

EE customers can get a free three-month trial of BT Sport by texting SPORT to 150.

At the end of the three months you will automatically roll onto the £15 per month subscription. You can cancel the trial at any time during the three months by texting STOP SPORT to 150.

Barcelona v Juventus: Team news
Barcelona boss Ronald Koeman won’t be able to call on Ousmane Dembele, who will miss the match with a hamstring injury.

Lionel Messi is fit but it remains to be seen whether he’ll start or be rested for the weekend’s league match against Levante.

Cristiano Ronaldo is expected to spearhead Juventus’ attack.

The Portugal international missed the reverse fixture in October due to a positive coronavirus test.

Juve will be without the services of centre-backs Merih Demiral and Georgio Chiellini, who will miss the match with muscle and hamstring injuries respectively.

Lionel Messi’s Barcelona beat Juventus 2-0 in October



                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./204.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES
2
Lionel Messi’s Barcelona beat Juventus 2-0 in October
Barcelona v Juventus: What has been said?
Barcelona boss Ronaldo Koeman: “Our objective is to play well and win each game. We won 2-0 away at their ground and took all three points so for that reason we have a great chance of finishing first in the group.

“We are missing important players. We will have to look to do the best we can, both technically and tactically, as well as being fresh. Against Juventus we will put out a strong side because we want to finish first in the group.

“In our attack, Leo Messi is very important. A lot of attacking play comes from him. He is the best in the world and I don’t think he has made many mistakes defending. It is the work of the whole team to be more aggressive in defence and to be more effective.

“It’s great that Messi and Cristiano are at the top level. They have had a lot of success over the last few years. They are two different players but they have amazing scoring records. They are both players to admire.”

Juventus boss Andrea Pirlo: “This match is especially important for our growth and self-esteem. Coming first is important, but what we put in on the pitch is even more important.

“Compared to the first game, we need to improve the non-possession phase and be closer to the midfield and defensive lines. In the derby we had a completely different attitude between the first and second half, winning all the duels. This is the attitude that is part of Juve’s DNA and must never be missing.

“It would be wrong to say who is better between Messi and Cristiano. They are two phenomenons that put-on spectacles for millions of fans. We just have to thank them.

“It’s a period where many great players struggle, it’s normal. The great players have had little time to rest and were immediately busy with their national teams. Everything will be more normal after Christmas.

“If Cristiano is in good form it means that he is in the right place at the right time and we are good at giving him the ball.” 
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./205.PNG" thumbnail />
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

