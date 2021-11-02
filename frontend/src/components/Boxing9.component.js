import React from "react";
import "./Boxing9.component.css";

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
                            <h1>                Floyd Mayweather has been warned by boxing journalist Gareth A Davies that his legacy could be ‘deeply and badly affected’ by his upcoming fight with Logan Paul.
 </h1><p>

The retired 50-0 boxing legend will meet the 0-1 YouTuber, who lost his pro debut to fellow internet sensation KSI last year, in an exhibition bout on February 20.

Mayweather retired with a perfect 50-0 record and millions in the bank

GETTY IMAGES - GETTY
2
Mayweather retired with a perfect 50-0 record and millions in the bank
Play Video
Rare footage of a young Anthony Joshua's first ever amateur fight and first-round knockout
Mayweather has been retired since 2015, only coming back to beat Conor McGregor in 2017.

He also travelled to Tokyo for an exhibition bout with kickboxer Tenshin Nasukawa at the end of 2018.

In the aftermath of that easy win, Floyd said he’d be open for further exhibitions.

Rumours swirled on social media two months ago suggesting a bout with Logan was a ‘done deal’, however it was then reported that Floyd had been approached about the exhibition, but was leaning towards a ‘no’.

Now, he’s confirmed it’s actually real.

Logan Paul lost his pro boxing debut to KSI by split decision in 2019

ED MULHOLLAND/MATCHROOM

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./251.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       2
Logan Paul lost his pro boxing debut to KSI by split decision in 2019
Boxing journalist Gareth A Davies reacted on talkSPORT: “It’s very odd to have the greatest defensive boxer of the era that I’ve covered boxing – the last two or three decades – against a guy that did college wrestling, a strong individual.

“It’s clearly just a money-making exercise for Floyd Mayweather.

“And I think this may be the one event, if it goes ahead, that really does backfire on Floyd Mayweather.

“I think it really might cause his legacy to be deeply and badly affected, that’s my view on it right now.”


Mayweather posted a brief video graphic announcing the fight on Instagram.

His caption stated: “Super Exhibition Feb. 20, 2021 !!!! Early Bird Special On Sale NOW!!!! Fanmio. More Details Soon. Link in BIO.”

The link in his Instagram bio takes you to the Fanmio website – who will seemingly be staging the PPV.

Their description of the event is: “Undefeated, 12-time, five division boxing superstar Floyd Mayweather at 50-0 will take on social media sensation Logan Paul in a special exhibition boxing match that is expected to make history.

“This is your chance to watch this must-see event live exclusively on Fanmio PPV, Saturday February 20, 2021.”

The fight is priced at $24.99 for early buyers, but will increase to $39.99 after one million PPVs are sold, then increase again to $59.99 on December 29th, then one last increase to $69.99 on February 11th. 

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./251.PNG" thumbnail />
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

