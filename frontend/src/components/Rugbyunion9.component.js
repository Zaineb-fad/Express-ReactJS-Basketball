import React from "react";
import "./Rugbyunion9.component.css";

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
                    <h1> WARNING England hero Mark Cueto warns the FA or UEFA to follow rugby’s example with VAR or they will ‘spoil the game’ like 2007 World Cup final
</h1> <p>
                        
EXCLUSIVE
By Joe Coleman
29th September 2020, 3:51 pm
Mark Cueto believes football should take notice from rugby union and other sports and stop criticising technology – instead create solutions to better implement it into the game.

The former Sale Sharks winger was on the wrong end of one of the most controversial moments in English sporting history during the 2007 Rugby World Cup final against South Africa.

Cueto went over in Paris for England, but his try against South Africa was wiped off

AFP - GETTY
5
Cueto went over in Paris for England, but his try against South Africa was wiped off
VAR has continued to cause confusion amongst football fans for years

GETTY IMAGES - GETTY
5
VAR has continued to cause confusion amongst football fans for years
Despite grounding the ball in the corner in Paris, Cueto was adjudged to have been taken into touch by South Africa No.8 Danie Rossouw. The television match official took an age to deliberate and eventually wiped the try off and England failed to hold on and succumbed to a 6-15 loss.

As well as costing the Red Rose the chance to become the first nation to retain the World Cup, it cost Cueto the chance to etch his name into sporting history.

And the 40-year-old believes football officials must learn from the mistakes already made this season with VAR or risk ‘spoiling’ the game.

“I think you’ve got to learn from it, you’ve got to give it a chance,” Cueto told talkSPORT.com.

Danie Rossouw applied pressure to the Sale Sharks winger in the corner

AFP - GETTY
5
Danie Rossouw applied pressure to the Sale Sharks winger in the corner
Andrew Sheridan consoled the winger in the French capital after the defeat

GETTY IMAGES - GETTY
5
Andrew Sheridan consoled the winger in the French capital after the defeat
“And I think the biggest thing is for me – without saying the wrong thing here – in football, people are too quick to say ‘it doesn’t work’ and what to get rid of it.

“As opposed to siting down and saying ‘it isn’t working, but why isn’t it working?’ It would bring some clarity to the areas it is a bit ambiguous.

“Ultimately, there are all these other sports in the world that are using technology and it has improved the sport. So why is football, the biggest sport in the world, with the most money in the world, why can’t they adapt and get it right?

“I think it’s a bit of that old school mentality where all they do is moan about it and nobody is actually trying to find a solution to it.

Cueto believes football officials must work to find solutions, rather than simply criticising

GETTY IMAGES - GETTY
5
Cueto believes football officials must work to find solutions, rather than simply criticising
“For me, I look back at ’07 and obviously I am going to say it was a try. I’m sure there are plenty of South Africans who would disagree with this. But deep down, I know if that final was played tomorrow, the right call would be made.

“There have been improvements and we have moved on, everybody has moved on with the technology and ultimately the game has improved and it’s a better experience for everybody.

“In football, VAR has been around for about three years now and we still seem to be on day one with it. There’s no clarity, there is no problem solving – it just stays a mess and everyone makes a joke about how it is so bad.

“I suppose, ultimately, the FA or UEFA has got to get a grip on it and add some clarity. Otherwise, it’s just going to spoil the game.”

Play Video
Jason Cundy's furious rant against VAR and Stockley Park after awarding Man United a penalty against Aston Villa
BT Sport is the home of Gallagher Premiership Rugby. Watch Northampton v Sale Sharks on Tuesday 28th September from 5.15pm on BT Sport 1
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./269.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES - GETTY
5
Andrew Sheridan consoled the winger in the French capital after the defeat
“And I think the biggest thing is for me – without saying the wrong thing here – in football, people are too quick to say ‘it doesn’t work’ and what to get rid of it.

“As opposed to siting down and saying ‘it isn’t working, but why isn’t it working?’ It would bring some clarity to the areas it is a bit ambiguous.

“Ultimately, there are all these other sports in the world that are using technology and it has improved the sport. So why is football, the biggest sport in the world, with the most money in the world, why can’t they adapt and get it right?

“I think it’s a bit of that old school mentality where all they do is moan about it and nobody is actually trying to find a solution to it.

Cueto believes football officials must work to find solutions, rather than simply criticising

GETTY IMAGES - GETTY
5
Cueto believes football officials must work to find solutions, rather than simply criticising
“For me, I look back at ’07 and obviously I am going to say it was a try. I’m sure there are plenty of South Africans who would disagree with this. But deep down, I know if that final was played tomorrow, the right call would be made.

“There have been improvements and we have moved on, everybody has moved on with the technology and ultimately the game has improved and it’s a better experience for everybody.

“In football, VAR has been around for about three years now and we still seem to be on day one with it. There’s no clarity, there is no problem solving – it just stays a mess and everyone makes a joke about how it is so bad.

“I suppose, ultimately, the FA or UEFA has got to get a grip on it and add some clarity. Otherwise, it’s just going to spoil the game.”

Play Video
Jason Cundy's furious rant against VAR and Stockley Park after awarding Man United a penalty against Aston Villa
BT Sport is the home of Gallagher Premiership Rugby. Watch Northampton v Sale Sharks on Tuesday 28th September from 5.15pm on BT Sport 1
                      
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./270.PNG" thumbnail />
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

