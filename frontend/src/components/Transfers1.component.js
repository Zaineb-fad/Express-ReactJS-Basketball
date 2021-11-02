import React from "react";
import "./Transfers1.component.css";

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
function Images() {

  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card style={{ width: '35rem' }}>
                  <Card.Title> Mino Raiola has been told to ‘shut up and let Paul Pogba play football’</Card.Title>

                <CardBody>
                  
                      <p>
                        by former Tottenham midfielder Jamie O’Hara.

Pogba’s name was all over the back pages this morning after the Frenchman’s agent publicly announced his time at Old Trafford is ‘over’. With all eyes on United’s must-draw Champions League match against RB Leipzig – which is LIVE on talkSPORT on Tuesday night – Raiola seized the opportunity to put his client up for sale yet again, despite little transfer speculation and a return to form for Pobga over the weekend.

Even still, Raiola’s comments do not come as too much of a surprise, given his outspoken nature.

And O’Hara is quite frankly sick of it.

“He’s all about himself, making a name for himself and bigging himself up,” O’Hara told Tuesday’s talkSPORT Breakfast.

“I’ve got this player, I can end FIFA, Pogba’s finished – just shut up, mate!

“Seriously, if he was my agent, I would phone him up and say, ‘Keep you mouth shut, I’m playing for Manchester United, I’m not playing well, I’ve just scored on the weekend and now I’m thrown all over the papers again’.”
                      </p>
                  <div className="j1" >   
                   <Col xs={6} md={4}>
      <Image src="./175.PNG" thumbnail />
    </Col>
            <Col xs={6} md={4}>
      <Image src="./176.PNG" thumbnail />
    </Col>
             </div>       
                      <p>
                       HEADLINES

Manchester United should sell Paul Pogba for £100m says Red Devils fan, who wants Mesut Ozil signed from Arsenal
Mino Raiola accused of ‘selfishness’ over ‘shocking timing’ of Paul Pogba bombshell
‘It’s over for Paul Pogba at Manchester United’, claims his agent Mino Raiola
Manchester United team news: Edinson Cavani and Anthony Martial injured for RB Leipzig Champions League clash
Sir Alex Ferguson distrusted Mino Raiola and was happy when Paul Pogba completed his Juventus transfer
England have been drawn against Poland, while Wales will face Belgium as the qualifying draw for the World Cup in 2022 was made
‘If Solskjaer doesn’t win anything this season, he will be gone’, talkSPORT told
Mikel Arteta could face SACK if Arsenal lose to Burnley says Troy Deeney
Gabby Agbonlahor reveals he was racially abused by 12-year-olds at Millwall and says he would CANCEL his Lions contract after fans boo as players take the knee
Troy Deeney vows to walk if racially abused as Watford captain passionately outlines why we must keep speaking about racism
                      </p>
                      
                    
                   
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;

