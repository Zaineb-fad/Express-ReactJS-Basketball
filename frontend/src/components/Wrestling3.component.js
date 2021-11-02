import React from "react";
import "./Wrestling3.component.css";

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
                      <h1>Triple H insists ‘no one can touch’ the NXT women’s division.</h1><p>
                        

Shotzi Blackheart and Raquel Gonzalez stole the show in a main event ladder match this week.

Blackheart and Gonzalez had a superb match on Wednesday’s NXT taping

NXT
2
Blackheart and Gonzalez had a superb match on Wednesday’s NXT taping
It was a taster of what’s to come when Blackheart, Ember Moon, Rhea Ripley and lo Shirai take on Candice LeRae, Dakota Kai, Gonzalez and Toni Storm in a highly-anticipated War Games match this Sunday.

Women headlining NXT shows has become the norm with Shirai successfully defending her title against Ripley in a brutal main event match last month.

And NXT chief Triple H dubbed his female talent a ‘bunch of badasses’.

He told talkSPORT: “When something is that good you want to put it out there.

“To me, every single time you put the women in NXT in a position where they can go out there and deliver the way they do, you do it because they’re great.

“I said it the other night when they all walked back through the doors, ‘man, no one can touch our women, they’re a bunch of badasses’.

NXT’s women’s division has been red-hot over the past 18 months



                      </p>
                                            <div className="j1" >

                      <Col xs={6} md={4}>
      <Image src="./193.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       NXT
2
NXT’s women’s division has been red-hot over the past 18 months
“Even when you look at the eight women who are in War Games, there’s an underneath to that that’s strong as well and a next level coming up that is strong as well.

“They’re learning that from the women we have in those positions now. You look over at NXT UK and you see Piper [Niven], Kay Lee Ray and all the women that are over there, it’s very strong.

“I don’t look at it any differently, I don’t even think of it in that manner of, ‘well, what are you going to do with the women or what are you going to do with their storylines or how much of that should you put in the show?’

“To me it’s just like telling the stories and what is there.

“The talent are the talent. So if they end up in the main event spots, it’s because they were the main event players. That’s what the mix is all about.

LATEST WRESTLING NEWS

STRANGE WWE brilliantly troll Floyd Mayweather after announcement he will face Logan Paul

READY WWE ‘open’ to working with other promotions amid AEW and IMPACT Wrestling crossover

WOW WWE Hall of Famer Sting makes shock debut as AEW and IMPACT reveal crossover

OUCH Jeff Hardy takes terrifying-looking bump vs Elias on Raw
“You’re just piecing it all together by what’s there, not by anything else. No one gets bonus points for anything, no one gets points taken away for anything, it just is what it is.

“That to me is the ultimate sign of respect. They’re that good. It almost bothers me a little bit when people say, ‘oh, it’s the greatest women’s division’ – they’re just awesome.

“They’re some of the best performers in the world across the board, either men or women, it doesn’t matter how you look at.”

You can watch NXT TakeOver: War Games on Sunday, December 6 on the WWE Network
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

