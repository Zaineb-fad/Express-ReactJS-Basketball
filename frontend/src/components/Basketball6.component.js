import React from "react";
import "./Basketball6.component.css";

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
                          <h1>               'DISRESPECTFUL' WWE legend Mark Henry reveals angry encounter with ‘disrespectful’ NBA legend Michael Jordan at 1992 Olympics
   </h1><p>
By Alex McCarthy
18th May 2020, 5:08 pm
Whether you are currently reliving Michael Jordan’s greatness or you’re part of a younger generation witnessing it for the first time, The Last Dance documentary on Netflix has been a triumph.

Many consider the 1996 iteration of the Chicago Bulls one of, if not the greatest basketball team in history and the fact Jordan won six championships in six straight full seasons – he took 18 months away for baseball – solidifies him as perhaps the greatest of all-time.

Chicago Bulls legend Michael Jordan is commonly regarded as the best ever

GETTY
4
Chicago Bulls legend Michael Jordan is commonly regarded as the best ever
Getting insight into his world and mindset was a treat, but it showed the cost of being a winner, too.Jordan wasn’t always liked by his peers and he had to push certain buttons to get them up to the required level.

He had a fight with Steve Kerr in training once after his jibes went too far and WWE Hall of Famer Mark Henry – once legitimately the world’s strongest man – recalls a dicey first encounter with Air Jordan, too.

Speaking to Chip Brown of 247Sports earlier this month, Henry recalled meeting Jordan during the Olympic games. He competed in the 1992 and ’96 Olympics in powerlifting and Jordan was also at the ’92 games collecting his second gold medal.

However, when the pair first met, Henry was not greeted warmly by Jordan when he went to visit some of the ‘Dream Team’.

Mark Henry did it all in WWE during his 20-year career


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./227.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY
4
Mark Henry did it all in WWE during his 20-year career
“During that time, I went to the hotel just because I wanted to see people that I knew,” Henry explained. “[Charles] Barkley being one of those people, and David Robinson and Karl Malone. You would think in a perfect world that when somebody walks up on a group of people, they would just greet everybody, “Hey, guys. How you all doing? What’s going on?” and go from there.

“Well, when Michael walked up, that wasn’t the case. I guess I seemed out of place. And his response to me was, ‘Who are you?’ And I was like, ‘Who the hell are you?’ And you know, I started to get a little bit angry, because I was not expecting that.

“It was like a slap in the face. It’s like someone walking up and just slapping you. I was in shock. I was like this is Michael Jordan. And I’m angry, like, ‘Why? Why? What the hell?’

“He backed off. ‘Whoa, whoa, wait a minute. My bad. I didn’t want to come across,’ but he did. And, I’m sure that that’s not the only time something like that has ever happened in this world, but it had been a long time since that happened to me, and I wasn’t having no parts of it.

Mark Henry will be inducted into WWE's Hall of Fame during WrestleMania weekend 

4
Mark Henry is a WWE Hall of Famer, but his accomplishments in strong man and powerlifting are also legendary
“My mother used to say, ‘Be careful what you say but even be more careful how you say it.’ And the way he said it to me was very disrespectful, I thought. And I checked him about it.”

Jordan may have been 6ft 6in, but Henry was 6ft 4in and maybe 100lbs heavier than MJ, so it’s a fight the former Chicago Bulls man did well to avoid.

“The thing about it, the one thing about the story that is not told, and I guess could be told here, is he apologised,” Henry continued.

“A lot of people don’t remember, but the All-Star game was coming up after that and it was in San Antonio. When that came through, he invited me to the All-Star game.

“He was having his birthday party during the All-Star game. So, his people contacted me and got me a parking pass and VIP. It was all fine and good. It all ended well. It just didn’t start off. And like I said, that’s a blip on the radar.

Michael Jordan would apologise to Mark Henry in the end

GETTY
4
Michael Jordan would apologise to Mark Henry in the end
“Michael Jordan probably don’t even remember this. And I’m sure like Barkley remembers it. We laughed about it afterwards. It wasn’t no big deal. That’s just the story of how I met Michael Jordan,” Henry explained.  
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./228.PNG" thumbnail />
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

