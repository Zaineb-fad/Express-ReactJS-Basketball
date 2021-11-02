import React from "react";
import "./Allsport1.component.css";

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
                    <h6> It’s not done yet, but Paul Pogba is now all but out of the door at Manchester United with a transfer in January a real possibility.

After returning for a world-record £89million fee in 2016, the Frenchman is now set to quit Old Trafford in pursuit of the happiness he never truly found in the Premier League.

Pogba has cut a forlorn figure at Old Trafford in recent months</h6> <p>
                        

GETTY IMAGES
8
Pogba has cut a forlorn figure at Old Trafford in recent months
After a spell on the bench under Ole Gunnar Solskjaer, Pogba’s agent Mino Raiola told Tuttosport: “I can say it’s over for Paul Pogba at Manchester United.

“There’s no use ignoring it. It’s better to speak honestly, look to the future and not waste time trying to blame people: Paul is unhappy at Manchester United, he can no longer express himself as he wants to or in the way that’s expected of him.

“He needs to change team, he needs a change of scene. He has a contract that expires in a year and a half’s time, in the summer of 2022, but I think the best solution would be for him to leave in the next transfer window.

“Otherwise the club from Old Trafford, with whom he has a good relationship, know very well that they risk losing him on a free transfer, considering that right now he does not want to extend his deal.

Play Video
Jamie O'Hara's passionate rant on football agent Mino Raiola after he drops Pogba bombshell - he's egotistical and it's all about him - just shut up mate!
“If people don’t get that, they know very little about football. In any case, they’ll all blame me if Paul leaves next summer.”

Solskjaer has been coping well without Pogba in recent weeks, using Fred and Scott McTominay to give the Red Devils a sturdier base in midfield, although the 27-year-old did perform well when he started against West Ham, scoring a superb equaliser.

He won’t be sold cheap and United will need the money to go out and acquire a replacement but with Donny van de Beek signed in the summer, Bruno Fernandes the star of the show in attacking midfield, and Nemanja Matic now 32, it’s likely any incoming player could be more defensively minded.

Pogba scored a superb goal against West Ham on Saturday

GETTY IMAGES - GETTY
8
Pogba scored a superb goal against West Ham on Saturday
Given Solskjaer’s tactics it’s also probable, we’ll see a player with the capability to switch play to the wings quickly and with tremendous precision with their quick counters often ending in goals.

It also takes the heat off creator-in-chief Fernandes who is too relied upon by United, as shown in the first half against West Ham at the weekend.

Although the odd attacking midfielder will certainly be on the menu for United, particularly if a swap deal is the only way they can be rid of their wantaway star.

But who are the men the Old Trafford might target to replace Pogba and strengthen their top four credentials? talkSPORT.com takes a look.

Solskjaer will surely use the funds to improve his midfield after losing the Frenchman

GETTY IMAGES - GETTY
8
Solskjaer will surely use the funds to improve his midfield after losing the Frenchman
Kalvin Phillips (Leeds)
We will get this one out of the way early doors as, let’s face it, nabbing a player from their rivals is quite unlikely.

Unfortunately for Manchester United, he would be an excellent solution to the problems they have in midfield.

Not only does Phillips offer protection in front of the back line, the 25-year-old is one of the Premier League’s top tacklers and all despite him missing a couple of games with injury. While being safe in possession with short and medium range passes, he ranks 14th for passes into the final third with 55, while he’s also in the top 30 for progressive passes, so he’s certainly forward thinking with the ball.

The fact he loves his hometown club, though, would make any potential transfer hard to happen, but let’s not rule it out completely.

Phillips has earned the nickname the ‘Yorkshire Pirlo’ but his playing style is far more all-action than the Italian’s

GETTY IMAGES
8
Phillips has earned the nickname the ‘Yorkshire Pirlo’ but his playing style is far more all-action than the Italian’s
Declan Rice (West Ham)
The England international has mostly been linked with a return to Chelsea, the club where he played as a youth, and the home of best mate Mason Mount.

With N’Golo Kane getting back to his best in the centre of a midfield three, though, it’s less likely the Blues can so wantonly splash the cash on another player after their summer spending.

This allows United to creep in and nab the ever-improving midfielder, who is still only 21, and bolster their squad.

An effective shield in front of a back-three at the London Stadium, he’s now far better in possession and is currently averaging more passes into the penalty area than ever before with 0.73 per game compared to 0.47 last term, while he’s also playing more switches and crosses.

A diminished defensive output, though, can be pinned on the change in formation by David Moyes, making the Hammers more solid and the shrewd addition of Czechia ace Tomas Soucek, who has been a revelation in midfielder alongside Rice.

Declan Rice in action for West Ham against Aston Villa

GETTY IMAGES
8
Rice continues to impress for the Hammers and is now a regular at international level with England
Paulo Dybala (Juventus)
Almost two years after nearly joining a Premier League club with both United and Tottenham attempting to land him, the Argentine could finally reach Old Trafford.

With Edinson Cavani only signing a one-year deal, with an option for another, and Odion Ighalo’s loan set to expire, another attacking force coming in could be how Pogba is replaced.

Not only that, it could be in a direct swap deal with the Frenchman rejoining his old club, who are now managed by his former teammate Andrea Pirlo.

Last year, Dybala was back on form in Serie A but this term his performances have dipped again with no goals or assists in four starts and two substitute appearances for Juve.

He was, though, much improved in the Turin derby last weekend but after five-and-a-half seasons he may well fancy a change of scene just like Pogba.

Juventus star Paulo Dybala



                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./200.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       GETTY IMAGES - GETTY
8
Dybala’s form has had ups and downs over the last couple of years but on his day there is no doubting his talent
Eduardo Camavinga (Rennes)
If you’re going to invest money you get for Pogba, why not put it into one of the most talented young midfielders in Europe?

With a superb passing range already, whether it be long raking efforts, or the simple stuff, he’s exceptional with the ball at his feet for someone who is just 18 years old.

Earlier this year he became the second youngest goalscorer for France and starred against Ukraine on his full debut.

Last season he posted up superb defensive numbers for Rennes as they made it into the Champions League, building a reputation for fine tackling, but he’s also a fine technician and capable of dribbling forward.

He could be utilised as a 6 or an 8 for United going forward, although as he acclimatises the latter is more likely to begin with.

Rennes wonderkid Eduardo Camavinga

GETTY IMAGES - GETTY
8
Camavinga is already looking like being on his way to becoming an elite talent
Wilfred Ndidi (Leicester City)
An injury hit him at the end of last season but prior to that the Nigerian was one of the best defensive midfielders around and now he’s returning for the Foxes and about to take up his role at the heart of their team again.

Stacking up tackles and interceptions like a man possessed, the 23-year-old – yes, he is only 23 – has been sensational since a move from Genk in 2017.

Like Rice, he’s also improved with his forward thinking and his pass success rate has grown season-on-season, while he has Champions League experience with Leicester.

Having Ndidi in the centre of the pitch, ahead of ex-teammate Harry Maguire and alongside Aaron Wan-Bissaka will make United formidable opponents, while allowing Fernandes to continue his thrilling offensive contributions.

Leicester City midfielder Wilfred Ndidi

GETTY IMAGES - GETTY
8
Ndidi is returning to fitness and ready to help Leicester’s top four tilt
                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./201.PNG" thumbnail />
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

