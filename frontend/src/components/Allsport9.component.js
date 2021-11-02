import React from "react";
import "./Allsport9.component.css";

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
                      <p>
                       QPR boss Mark Warburton insists both sets of players will be given the freedom to choose whether or not they take the knee at Millwall on Tuesday night.

All eyes will be on pre-match events at The Den as Millwall take to the field in front of 2,000 fans, amid the prospect of more boos against football’s solidarity with the Black Lives Matter movement.

It remains to be seen how many Millwall and QPR players will take a knee on Tuesday night

GETTY IMAGES
3
It remains to be seen how many Millwall and QPR players will take a knee on Tuesday night
There were audible jeers from a section of the Millwall supporters before the 1-0 defeat to Derby on Saturday as both sets of players took a knee before kick-off.

It has become the customary gesture up and down the country to symbolise football’s fight against racism, although QPR do not universally take a knee before kick-off.

Their director of football Les Ferdinand has argued that the ‘message has been lost’ and it’s reached a point of ‘good PR’ with little genuine action.

QPR initially planned to change their stance and have every player take a knee on Tuesday night to send a clear message against racism, but now both sets of players will link arms and hold a banner to send a powerful statement against discrimination.

Fans will be inside The Den again on Tuesday night



                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./215.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                    <h6> GETTY IMAGES - GETTY
3
Fans will be inside The Den again on Tuesday night
Approximately half of QPR’s players have been taking the knee since Ferdinand’s statement, however, and Warburton insists they are free to express their intolerance for racism in whatever way they choose before the match begins.

“We’re trying to get the focus on football, but of course, in light of recent events, there are unfortunately different points of discussion,” he told talkSPORT.

“It’s been a somewhat different build-up in that respect, but I hope tonight can go smoothly so we can focus on a good game of football and a good London derby.

“The clubs have agreed and our CEO Lee Hoos released a strong statement last night.</h6> <p>
                       

“You’ll see two sets of players show a united front, a shoulder-to-shoulder front against any form of discrimination.

“You’ll see two sets of players keen to get across a very powerful message, they’re free to do so and that’s the right thing, in my opinion.

Mark Warburton joined talkSPORT to discuss QPR’s trip to The Den

GETTY IMAGES - GETTY
3
Mark Warburton joined talkSPORT to discuss QPR’s trip to The Den
When asked if his players will take the knee, Warburton added: “I think so. Everyone’s got different opinions on how to express their intolerance and it’s important they do that.

“There will be a banner which will send out a very powerful message from the two clubs – QPR and Millwall – and there will be a short break before kick-off and if players want to take the knee, that’ll be their call.

“They’re professional athletes, both teams have had some good performances but not got the rewards in recent games, it’s a big fixture for both QPR and Millwall.”

With so much surrounding the pre-match events, it’s difficult to remember that a London derby with lots riding on it will get under way once the whistle goes.

And Warburton insists that while it doesn’t dilute the seriousness of what will happen before the game, his players must try to focus on performing.

Play Video
Troy Townsend describes 'despair' at Millwall fans booing players taking the knee and questions how much progress is really being made in eradicating racial inequality
He added: “The focus has to be on football, they’re professional competitors. They’re very well aware of what happened and they’re very well aware of the bigger picture.

“But they’ve got to make sure they do the right thing up to the first whistle, then the focus has to be on the football.”

“It has to be, but please don’t think I’m diluting the importance of this matter. It quite rightly received national headlines, because we cannot allow this in society, football has a key role to play in this area so it’s really important to send out these messages.” 
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./216.PNG" thumbnail />
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

