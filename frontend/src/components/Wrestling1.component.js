import React from "react";
import "./Wrestling1.component.css";

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
                       It has been announced that Floyd Mayweather will meet Logan Paul in a boxing match in 2021.

Yes, you read that right. 50-0, legendary boxer Mayweather will take on 0-1, YouTube star, Paul in a boxing match.

Mayweather will face Logan Paul in an exhibition on February 20

4
Mayweather will face Logan Paul in an exhibition on February 20
In Mayweather’s latter years, the 43-year-old has taken on the likes of Conor McGregor and exhibition style matchups rather than get in the ring and take on real contenders some 15 years his junior.

Still, this is not the first time in Mayweather’s storied career than he’s taken on some fights outside of the norm.

Back in 2008, Mayweather took on WWE’s seven-foot legend The Big Show at WrestleMania 24.

Floyd Mayweather was a bit of a natural when it came to wrestling

4

 
                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./193.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <h1>Floyd Mayweather was a bit of a natural when it came to wrestling
</h1><p>
The American was still well in his prime at the time and would go on to win several more world titles before winding down his boxing career in earnest in 2015.

Of course, it was all about the money. And while exactly how much Mayweather was paid is debated – with some insisting it was around the $20million region – there’s no doubt he made a pretty penny.

So of course, WWE managed to find the funny side of his latest announcement.


Once again, Mayweather can see the money in facing Paul like he did when he came up against McGregor.

Paul’s 22 million strong YouTube following is the same reason Eddie Hearn promoted his sole professional fight with another YouTuber, KSI.

But UFC president Dana White thinks the whole event is laughable.

“When people ask me what’s the state of boxing right now, that’s where it’s at,” White said.

“Didn’t that kid get beat up by the f*****g video game kid from England and now he’s going to fight Floyd Mayweather?”

For his part, Paul genuinely believes he would beat up Mayweather in virtually any setting – with a boxing ring perhaps the only exception.

Floyd Mayweather made a pretty penny working with WWE

4
Floyd Mayweather made a pretty penny working with WWE
The 25-year-old told TMZ in November: “Let me tell you this, if I caught Floyd in a real fight, street fight, whoop his a**e! No question.

“MMA? Octagon? Whoop his a**e!” The only place I think Floyd is safe obviously is the boxing ring, but to be honest, I don’t give a f**k! I don’t give a f**k!

“I would fight Floyd anytime, anywhere, any place. Doesn’t f*****g matter to me. I’m eight inches taller, I’m 40 pounds heavier, I’m half his age, I’m two times as hungry and 10 times as smart.

“I’m used to beating up people weaker and shorter than he is. I grew up with Jake [Paul]!”

Logan Paul has never won a boxing match in his life and now faces Floyd Mayweather

ED MULHOLLAND/MATCHROOM
4
Logan Paul has never won a boxing match in his life and now faces Floyd Mayweather
TOPICSFLOYD MAYWEATHER JUNIOR
                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./194.PNG" thumbnail />
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

