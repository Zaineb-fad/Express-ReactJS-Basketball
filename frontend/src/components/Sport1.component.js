import React from "react";
import "./Sport1.component.css";

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
                  <h4>  Kevin Sinfield has revealed it took him less than two months to train for his seven marathons in seven days.

And aside from the £2million the Leeds Rhinos legend has raised for teammate Rob Burrow and the Motor Neurone Disease Association, a sore Achilles is all Sinfield has to show for his efforts.

Sinfield completed the marathons on Monday</h4>  <p>
                        

REX FEATURES
4
Sinfield completed the marathons on Monday
It was an incredible effort from the 40-year-old

REUTERS
4
It was an incredible effort from the 40-year-old
The rugby league icon aimed to raised £77,777 in honour of his close friend Burrow, who was diagnosed with MND in December 2019.

But the campaign has surpassed even his wildest expectations, toppling £2m in funds raised on Tuesday.

“I’m so buoyed by the support and where that fund’s got to, but from a body perspective I’ve just got one sore Achilles and that’s it,” he told talkSPORT.

Sinfield was captain for most of Burrow’s 17 years at Leeds Rhinos



                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./271.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       REX FEATURES
4
Sinfield was captain for most of Burrow’s 17 years at Leeds Rhinos
“I did a lot of research and we threw it together in about seven weeks. I’ve run a number of marathons after I finished playing, especially during lockdown, I picked up the running more than ever.

“But in effect, getting used to running and walking on tired legs was what the training was all about. So a couple of half-marathons, bit of rest, then some 12km walks to build it up.”

Sinfield was inspired to run by his former partner in crime Burrow, who was the subject of a heart-breaking BBC documentary about MND recently.

“Rob’s playing career speaks for itself; anyone who follows rugby league will know what a champion he was on the field,” Sinfield added.

Burrow is Sinfield’s inspiration

REX FEATURES
4
Burrow is Sinfield’s inspiration
“He was 5ft 4ins and defied all the odds, and off the field he’s been a great friend.

“What we’ve seen very quickly is that the disease takes away some of your functions. Rob is in a wheelchair and uses his phone to speak.

“For us, his teammates, it’s horrific to see. The challenges now – for Rob, who’s 38, his wife, three kids, mum and dad, he’s got such a beautiful family – is to try and make the best of this horrible situation.

“That was always our inspiration in all this. But we’ve found the support from the whole MND community has been incredible.”

You can donate to Sinfield’s cause in aid of Burrow and MND here.
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./272.PNG" thumbnail />
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

