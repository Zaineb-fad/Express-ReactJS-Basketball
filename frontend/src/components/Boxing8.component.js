import React from "react";
import "./Boxing8.component.css";

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
                                      <h1>       UFC president Dana White launched a withering attack on boxing when he learned Logan Paul will face Floyd Mayweather Jr in an ‘exhibition’ bout.
</h1><p>

The American YouTube star has secured the most lucrative payday of his career against arguably the greatest boxer ever in a money-spinning event in February 2021.

Logan Paul has never won a boxing match in his life and now faces Floyd Mayweather

ED MULHOLLAND/MATCHROOM
3
Logan Paul has never won a boxing match in his life and now faces Floyd Mayweather
Mayweather, 43, has not fought since 2018 when he dismantled Japanese kickboxer Tenshin Nakusawa in just 140 seconds. Prior to that, he stopped former UFC champion Conor McGregor in the tenth round of their 2017 fight.

The 50-0 superstar will now test himself against a fighter who has never actually won a boxing match in his life, with Paul losing to British YouTuber KSI twice from their two meetings.

Despite the obvious disparity in talent, fans will be able to purchase the event exclusively on Fanmio for the lofty price of $24.99 (£19).

Speaking to the Nelk Boys, White was left absolutely flabbergasted by the announcement and questioned what sort of state boxing was in if one of the pound-for-pound best fighters on the planet was taking on a complete novice.

The 43-year-old knocked out Japanese kickboxer Tenshin Nakusawa in 2018


However, boxing superstar Claressa Shields is now interested in fighting the youngster and vowed to ‘beat the s*** out of’ Paul if they met.
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./249.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       AFP - GETTY
3
The 43-year-old knocked out Japanese kickboxer Tenshin Nakusawa in 2018
“When people ask me what’s the state of boxing right now, that’s where it’s at,” he said.

“Didn’t that kid get beat up by the f****** video game kid from England and now he’s going to fight Floyd Mayweather?”

KSI claimed a narrow decision victory over his social media rival in 2019, with both men headlining a card on their professional debuts while Billy Joe Saunders and Devin Haney fought on the undercard.

However, ‘JJ’ had nothing but respect for the man he shared a ring with on two separate occasions and sent a message of support to the 25-year-old on his Twitter page.


KSI and Logan Paul fought each other as professional boxers in Los Angeles last year

GETTY IMAGES - GETTY
3
KSI and Logan Paul fought each other as professional boxers in Los Angeles last year
Jake Paul, Logan’s younger brother, has ambitions to make it as a pro boxer himself having recorded two knockouts from his two bouts – most recently stopping Nate Robinson on the Mike Tyson vs Roy Jones Jr undercard.

                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./250.PNG" thumbnail />
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

