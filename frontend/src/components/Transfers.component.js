import React from "react";
import "./Transfers.component.css";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Img } from 'react-bootstrap';
import { Carousel,Pagination } from 'react-bootstrap';
import Transfers1 from "./Transfers1.component";
import Transfers2 from "./Transfers2.component";
import Transfers3 from "./Transfers3.component";
import Transfers4 from "./Transfers4.component";
import Transfers5 from "./Transfers5.component";
import Transfers6 from "./Transfers6.component";
import Transfers7 from "./Transfers7.component";
import Transfers8 from "./Transfers8.component";
import Transfers9 from "./Transfers9.component";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FcUpload } from "react-icons/fc";


// core components

function Images() {
  return (
    <>
      <div className="t1">
        <Container>
          <Row>
            <Col md="6">
               

            <Link to="/Transfers1"> 
                <Card style={{ width: '35rem' }}>
                 <Card.Img variant="top" src="./1.PNG" />
                  <Card.Body>
                    <Card.Text>
                   NEWS Hart could start vs Arsenal, United's Rashford injury doubt, Klopp warns Southgate
talkSPORT.com rounds up all the latest sports news, gossip and expert opinion...

  <br/><br/>  Football><FcUpload/>

    <
    /Card.Text>
  </Card.Body>
</Card></Link>



</Col>
            <Col md="4">
           
                        <Link to="/Transfers2">


<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./2.PNG" />
  <Card.Body>
    <Card.Text>
      LOYAL 'Morelos fully committed to Rangers - Gerrard wouldn't have him otherwise', says star


   <br/><br/> Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>
            <Link to="/Transfers3">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./3.PNG" />
  <Card.Body>
    <Card.Text>
STAR Grealish 'good enough for United, Spurs and Chelsea and could do a Jota at Liverpool'
Football

  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>

</Col>
 <Col md="6">
            <Link to="/Transfers4">

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./4.PNG" />
  <Card.Body>
    <Card.Text>


RUMOURS Messi to Man City transfer 'inevitable' with January swoop planned, talkSPORT told


   <br/><br/> Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>
   
            <Link to="Transfers5">

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./5.PNG" />
  <Card.Body>
    <Card.Text>
‘POSITIVE SIGNS’ Woodward backs Solskjaer and reveals Man United's January transfer plans
Football

  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>

</Col>
            <Col md="6">
            
            <Link to="/Transfers6">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./6.PNG" />
  <Card.Body>
    <Card.Text>
GOSSIP Man City back in for Lionel Messi in January as Barca chief makes transfer admission
Football

  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>
   
            <Link to="/Transfers7">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./7.PNG" />
  <Card.Body>
    <Card.Text>

SWOOP Arsenal and Liverpool considering bid for Brighton ace, as Gunners eye Eriksen
Football

  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>

</Card></Link>
</Col>
              <Col md="6">
              
                          <Link to="/Transfers8">

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./8.PNG" />
  <Card.Body>
    <Card.Text>


REUNION? Neymar has ‘asked Messi to join PSG next summer’ after public admission
After Paris Saint-Germain’s 3-1 win over Manchester United on Wednesday, Neymar publicly stated he was desperate to play with Lionel Messi next season
Football

  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link></Col>
              <Col md="6">
              
            <Link to="Transfers9">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./9.PNG" />
  <Card.Body>
    <Card.Text>
NO REGRETS 'How can I not be?' - Arsenal transfer target 'happy' his Emirates move failed


  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>
            <Link to="">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./10.PNG" />
  <Card.Body>
    <Card.Text>

TARGET Spurs told price for defender as club 'need money' in January transfer window
Football

  <br/><br/>  Football><FcUpload/>

    </Card.Text>
  </Card.Body>
</Card></Link>
</Col>
<div id="r1">
<p>Latest in Football</p></div>
<Carousel>
  
 
  <Carousel.Item>
<div className="g1">
            

<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./11.PNG" />
  <Card.Body>
    <Card.Text>
DEALS Arsenal could sign ‘Hungarian Beckham’ or Newcastle flop for Fernandes-style impact

    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./12.jpg" />
  <Card.Body>
    <Card.Text>




ODD 'It was weird then, and even weirder now' - Man United's Lukaku decision 'puzzling'
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./13.PNG" />
  <Card.Body>
<Card.Text>
EXCLUSIVE
KEEP HIM Lampard does not have to sell 'important' player in January, claims Chelsea icon
Football
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./14.PNG" />
  <Card.Body>
    <Card.Text>

TIME'S UP Fernandinho 'expecting' to leave Man City next summer as MLS clubs keep tabs
Football
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./15.PNG" />
  <Card.Body>
    <Card.Text>


DESTROYER Allan on being made for the PL, relationship with Ancelotti, and getting stuck in



    </Card.Text>
  </Card.Body>
</Card></div>
  </Carousel.Item>

  

  <Carousel.Item>
<div className="g1">

<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./18.PNG" />
  <Card.Body>
    <Card.Text>
SIT DOWN Ferdinand reveals emotional racism talk with son, would 'welcome chat' with Terry

    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
 <Card.Img variant="top"src="./19.PNG" />
  <Card.Body>
    <Card.Text>

    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./20.PNG" />
  <Card.Body>
    <Card.Text>
RIVALS Jose's insane Arsenal record ahead of derby as Kane chases incredible landmark goal

    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./21.PNG" />
  <Card.Body>
    <Card.Text>
STAR The Liverpool lad with swagger who's a mix of Mane and Lallana and may keep Thiago out

    </Card.Text>
  </Card.Body>
</Card> 
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./16.PNG" />
  <Card.Body>
    <Card.Text>
FRIENDS 'I always believed in him' - Matondo 'proud' of Sancho for Dortmund progress

    </Card.Text>
  </Card.Body>
</Card></div>
  
            

  </Carousel.Item>

</Carousel>
            <Col md="6">
            

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./17.PNG" />
  <Card.Body>
    <Card.Text>
GOOD TIMES West Ham mood much better than last season says ace, who's pleased fans are back


  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Col>
            <Col md="6">
            

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./22.PNG" />
  <Card.Body>
    <Card.Text>
STAR Grealish 'good enough for United, Spurs and Chelsea and could do a Jota at Liverpool'


  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
              
            
            
            <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Item>{4}</Pagination.Item>
  <Pagination.Item>{5}</Pagination.Item>
  <Pagination.Item>{6}</Pagination.Item>
  <Pagination.Item>{7}</Pagination.Item>
  <Pagination.Item>{8}</Pagination.Item>
  <Pagination.Item>{9}</Pagination.Item>

  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
          </Row>
        </Container>
      </div>
    </>

  );
}

export default Images;
