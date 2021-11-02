import React from "react";
import "./Sport2.component.css";

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
                      <h6>Tyson Fury has revealed the incredible amount he eats on a cheat day when he is not religiously checking his calories before a fight.

‘The Gypsy King’ is a huge believer in health and fitness after regaining the world heavyweight title in February of this year.

Fury ballooned up in weight as he struggled to cope with mental health issues, but displayed tremendous bravery and persistence to lose the weight he gained and return to the ring in June 2018.

Tyson Fury wrenched the WBC heavyweight title from Wilder’s grasp in February</h6><p>
                      

GETTY IMAGES
3
Tyson Fury wrenched the WBC heavyweight title from Wilder’s grasp in February
Ever since shifting the pounds, eating the right food and remaining in the gym have become crucial for the 32-year-old from Morecambe – regardless of whether or not he has a fight.

However, even the most dedicated bodybuilder likes to enjoy a cheeky cheat day or two just to retain a little bit of sanity when they are not meticulously counting calories.

Speaking to LadBible about the release of his new book, The Furious Method: Transform your Mind, Body and Goals, the WBC heavyweight champion admitted he likes to gorge on as much as he can when not preparing for a world title fight.

“It was the heavyweight champion of takeaways!” Fury said about ordering £557 worth of pizza during the first coronavirus lockdown.

Fury’s weight ballooned as he battled mental health problems

ITV
3
Fury’s weight ballooned as he battled mental health problems
“I just kept eating until I couldn’t eat any more. Pizza after pizza after pizza; it was a binge.

“I had a treat day yesterday, actually: a full box of Thornton’s chocolates. I had a Sunday dinner, two bowls of trifle, a McDonald’s triple cheeseburger, two Diet Cokes and a bar of chocolate.”

Standing at 6ft 9ins and hitting the scales at a whopping 273lbs for the rematch with Wilder in Las Vegas, Fury was the heaviest he had ever been in his career, but it was mostly lean muscle.

Speaking to talkSPORT before the contest in Sin City, Fury revealed he was working with Conor McGregor’s nutritionist to safely pack on the pounds without losing muscle.

Fury hit the scales at 273lbs for his rematch with Wilder in February


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./273.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       AFP OR LICENSORS
3
Fury hit the scales at 273lbs for his rematch with Wilder in February
Fury told talkSPORT’s Adam Catterall back in February: “I’ve got a new nutritionist and cook, George Lockhart; he’s worked with a lot of good athletes before. He has worked with Conor [McGregor] before.

“But I’m eating six meals a day, believe it or not. And I’m more lean now than I was at 18 stone in my last fight.

“And I weighed 18st 11lbs this morning so I’m a lean, mean, fat grilling machine George Foreman – shout out George! So I’m feeling good, feeling strong and that’s it really. I’m well hydrated, I’ve ate well and clean, I’ve had nothing I shouldn’t have had.

“And I’ve been to bed early and got up early so it’s been a really good preparation, I’ve had really good sparring. Kristian has been here as usual, so plenty of strength and conditioning work.

Play Video
Simon Jordan backs Tyson Fury's wish to be removed from Sports Personality of the Year shortlist as BBC refuse to withdraw boxer's nomination
“We done about a month, five weeks at home of strength block, before we came.

“Then I had two weeks off over the Christmas period in Las Vegas, got acclimatised to the time zone and by the time the fight comes around I would have had eight weeks in camp as well – training twice a day, six days a week.”

TOPICSTYSON FURY
  
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./274.PNG" thumbnail />
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

