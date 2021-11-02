import React from "react";
import "./Rugbyunion3.component.css";

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
                                           <h6>  Former France rugby star Christophe Dominici has died at the age of 48, it was announced today.
</h6><p>

His former club, Stade Francais, posted a statement on their website confirming the news.

Christophe Dominici was capped 65 times by France

AFP - GETTY
3
Christophe Dominici was capped 65 times by France
Dominici was capped 65 times by France over an international career that spanned from 1998 and 2007.

A statement on stade.fr read: “It is with immense sadness and heartbreak that Stade Francais Paris learn of the (death) of Christophe Dominici.

“During the 11 years spent in our colours, Christophe, thanks to his incredible talent and his class, greatly contributed to writing the legend of the club.

“An international 65 times, his exploits in the blue jersey have dazzled thousands of young rugby players and allowed the French team to write some of the most beautiful pages in its history.

Dominici’s international career spanned from 1997 to 2008


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./257.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       AFP - GETTY
3
Dominici’s international career spanned from 1997 to 2008
“Rugby genius and peerless companion, he leaves a great void in our big family. Our hearts go out to his family, his partner Loretta, his daughters Chiara and Mia.”

Dominici played for his hometown team of Toulon from 1993 and his performances on the wing there earned a move to Stade Francais four years later.

He helped the Parisian side win five French championships while he was one of the big stars of the 1999 Rugby World Cup, particularly in France’s semi-final victory over New Zealand.

Dominici’s unexpected death was announced on Tuesday

GETTY IMAGES - GETTY
3
Dominici’s unexpected death was announced on Tuesday
France Rugby tweeted: “The great French rugby family is in mourning after the tragic death of our winger Christophe Dominici. We are thinking especially of his family and loved ones.”

Former Ireland captain Brian O’Driscoll also expressed his condolences, writing on Twitter: “Very sad to hear of the sudden passing of Christophe Dominici. A French player full of flair with huge success throughout his career. May he RIP.” 

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./258.PNG" thumbnail />
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

