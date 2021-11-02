import React from "react";
import "./Boxing4.component.css";

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
          <h5> Anthony Joshua had a roller coaster of a year in 2019 but crowned it by avenging his shock defeat to Andy Ruiz Jr and is now set to return to the ring again.

The Olympic champion takes on IBF mandatory challenger Kubrat Pulev this weekend at Wembley Arena having seen his 2020 calendar disrupted by the COVID-19 lockdown.

Anthony Joshua takes on Kubrat Pulev at the Wembley Arena this weekend</h5>
           <p>
                      
MARK ROBINSON/MATCHROOM
4
Anthony Joshua takes on Kubrat Pulev at the Wembley Arena this weekend
Joshua was set to face Pulev back in the summer and then take on Tyson Fury but plans had to changed and he is now set to see out the year by putting his world titles on the line in London.

Joshua’s infamous 2017 win over legendary Ukrainian Wladimir Klitschko propelled him to superstardom but his unbeaten dominance came to a shuddering end at the hands of Mexican Ruiz in 2019.

That defeat in New York drew massive criticism but he answered all his doubters by winning their rematch in Saudi Arabia in stunning fashion last December.

AJ will be eager to keep his critics at bay by beating Pulev this weekend ahead of a potential double-header against Fury next year.

Anthony Joshua v Kubrat Pulev undercard: Lawrence Okolie and Hughie Fury in action ahead of heavyweight title clash – UK start time and how to watch
Anthony Joshua: Debut and who he has fought
Following his stunning showing at the Olympics, Joshua turned pro a year later and made his debut against Italian Emanuele Leo at The O2 Arena on October 5, 2013.

He won that fight in the first round and then had 13 more straight-forward victories before being tested for the first time by Dillian Whyte.

Their bout, again at The O2 Arena, ran for seven rounds before Joshua completed the job with a devastating KO.

Anthony Joshua celebrates victory over Alexander Povetkin

4
Anthony Joshua celebrates victory over Alexander Povetkin
AJ went to dispatch of Charles Martin inside five minutes to win the IBF title and then made short work of Dominic Breazeale and Eric Molina.

Joshua’s breakthrough victory against Klitschko can next, adding the WBA and IBO titles to his collection.

He then defended his belts against Carlos Takam, Joseph Parker and Alexander Povetkin.

But his good work was undone in dramatic fashion when he faced Ruiz in New York, being put down four times on his American debut to relinquish his titles.

Six months later, the two met again, this time in Diriyah in Saudi Arabia.

AJ put on a boxing masterclass to completely dominate Ruiz and reclaim his belts at the first attempt.

He will put his titles on the line again this weekend when he faces off against Pulev.

Anthony Joshua and Wladimir Klitschko produced one of the classic heavyweight fights in 2017

 

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./242.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES - GETTY
4
Anthony Joshua and Wladimir Klitschko produced one of the classic heavyweight fights in 2017
Anthony Joshua: Wins, losses and professional record
Of the 24 fights Joshua has faced, he has won 23 with that one defeat to Ruiz.

He has claimed 21 victories by the way of knockout, five coming inside the first round.

Anthony Joshua: Weight, height and reach
Joshua’s weight has varied during his career to date and he clocked in at a light 16 stone 13lbs for his win over Ruiz. He was 10 pounds heavier for their first fight.

Joshua is among the heaviest heavyweight champions in the history of the sport despite his athletic physic.

The 31-year-old, who fights from an orthodox stance, is 6ft 6in (198cm) and has a reach of 82in (208cm).

Andy Ruiz Jr dropped AJ four times in his shock victory back in 2019

GETTY IMAGES - GETTY
4
Andy Ruiz Jr dropped AJ four times in his shock victory back in 2019
Anthony Joshua: Next fight and future opponents
Joshua will face Pulev this weekend with 1,000 fans able to be in attendance at the Wembley Arena.

It has then been confirmed that Joshua will face Tyson Fury in two all-British blockbuster bouts in 2021 providing he comes through his clash with the Bulgarian.

It is understood that the two camps have been in talks over an undisputed title bout since early May.

Joshua’s promoter Eddie Hearn said: “It’s fair to say [Joshua and Fury] are in agreement regarding the financial terms.

“We’re in a good place. It’s fair to say that, in principle, both guys have agreed to that fight. Two fights.”

Play Video
Anthony Joshua posts video showing off immense power in training ahead of Kubrat Pulev clash at Wembley Arena
TOPICSANTHONY JOSHUA 
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./243.PNG" thumbnail />
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

