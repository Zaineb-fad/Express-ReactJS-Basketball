import React from "react";
import "./Sport.component.css";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Img } from 'react-bootstrap';
import { Pagination,Carousel } from 'react-bootstrap';
import Sport1 from "./Sport1.component";
import Sport2 from "./Sport2.component";
import Sport3 from "./Sport3.component";
import Sport4 from "./Sport4.component";
import Sport5 from "./Sport5.component";
import Sport6 from "./Sport6.component";
import Sport7 from "./Sport7.component";
import Sport8 from "./Sport8.component";
import Sport9 from "./Sport9.component";

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
            
                        <Link to="/Sport1">

                <Card style={{ width: '35rem' }}>
                 <Card.Img variant="top" src="./75.PNG" />
                  <Card.Body>
                    <Card.Text>
                   JOSHING AROUND 'He’s got a lot of potential' - AJ makes offer to become Fury’s new manager
The two best heavyweights in the world look set to collide in 2021 to crown an undisputed champion


    <br/><br/>Football><FcUpload/>
    <
    /Card.Text>
  </Card.Body>
</Card></Link></Col>
            <Col md="4">

                        <Link to="/Sport2">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./76.PNG" />
  <Card.Body>
    <Card.Text>

RIP Legendary commentator known as the 'voice of golf' dies aged 89


    <br/><br/>Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>

                        <Link to="/Sport3">
<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./77.PNG" />
  <Card.Body>
    <Card.Text>

OFF South Africa vs England first ODI abandoned for second time after positive COVID tests


   <br/><br/> Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>
</Col>
 <Col md="6">

                        <Link to="/Sport4">

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./78.PNG" />
  <Card.Body>
    <Card.Text>




PAIN Medical notes reveal Dubois faced 'career ending double vision' if Joyce fight went on

   <br/><br/> Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>

                        <Link to="/Sport5">

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./79.PNG" />
  <Card.Body>
    <Card.Text>



UNIFY Canelo's latest comments are good news for Billy Joe Saunders, but bad news for GGG


  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link></Col>
            <Col md="6">

                        <Link to="/Sport6">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./80.PNG" />
  <Card.Body>
    <Card.Text>





FLOORED Watch boxer perform ‘Can’t Touch This’ dance ring walk, knocked out in first round


  <br/><br/>  Football><FcUpload/>

    </Card.Text>
  </Card.Body>
</Card></Link>

                        <Link to="/Sport7">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./81.PNG" />
  <Card.Body>
    <Card.Text>


SO? Eddie Hearn fires back with sarcastic response after Frank Warren says meeting is off


  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>

</Card></Link>
</Col>
              <Col md="6">
              
                        <Link to="/Sport8">

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./82.PNG" />
  <Card.Body>
    <Card.Text>





KINGS Fury shows off his and Tyson's body transformations as pair lose 22 stone combined
Both boxers have struggled with mental health problems in the past

  <br/><br/>  Football><FcUpload/>

    </Card.Text>
  </Card.Body>
</Card></Link></Col>
              <Col md="6">

                        <Link to="/Sport9">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./83.PNG" />
  <Card.Body>
    <Card.Text>
HERO TO ZERO How Conor McGregor and Dana White’s once great relationship deteriorated


  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./84.PNG" />
  <Card.Body>
    <Card.Text>



NEXT Joshua vs Pulev date: UK start time, undercard, PPV and live stream, Tale of the Tape


  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<div id="r1">
<p>Latest in Football</p></div>
<Carousel>
  
 
  <Carousel.Item>
<div className="g1">
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./85.PNG" />
  <Card.Body>
    <Card.Text>
FIGHT NIGHT Anthony Yarde fight live stream: UK start time, how to watch, undercard tonight
Sport<FcUpload/>



    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./86.jpg" />
  <Card.Body>
    <Card.Text>

LIVE ON TALKSPORT 2
GAME ON South Africa vs England live: Follow every ball as ODI series confirmed to go ahead
Sport<FcUpload/>


    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./87.PNG" />
  <Card.Body>
<Card.Text>
SIMPLE Lewis was told Tyson would be his easiest fight before demolishing Iron Mike in 2002
Sport<FcUpload/>
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./88.PNG" />
  <Card.Body>
    <Card.Text>

TIME'S UP Fernandinho 'expecting' to leave Man City next summer as MLS clubs keep tabs
Football<FcUpload/>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./89.PNG" />
  <Card.Body>
    <Card.Text>


VIDEO
DISPUTE Watch when Tony Bellew clashed with Deontay Wilder, heated argument at AJ weigh-in
Sport<FcUpload/>


    </Card.Text>
  </Card.Body>
</Card>
</div>
  </Carousel.Item>

  

  <Carousel.Item>
<div className="g1">
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./90.PNG" />
  <Card.Body>
    <Card.Text>
FRIENDS 'I always believed in him' - Matondo 'proud' of Sancho for Dortmund progress

    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./91.PNG" />
  <Card.Body>
    <Card.Text>
GOOD TIMES West Ham mood much better than last season says ace, who's pleased fans are back

    </Card.Text>
  </Card.Body>
</Card>


<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./92.PNG" />
  <Card.Body>
    <Card.Text>
SIT DOWN Ferdinand reveals emotional racism talk with son, would 'welcome chat' with Terry

    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
 <Card.Img variant="top"src="./93.PNG" />
  <Card.Body>
    <Card.Text>

    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./94.PNG" />
  <Card.Body>
    <Card.Text>
RIVALS Jose's insane Arsenal record ahead of derby as Kane chases incredible landmark goal

    </Card.Text>
  </Card.Body>
</Card>
</div>
  
            

  </Carousel.Item>

</Carousel>
            <Col md="6">
            
<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./95.PNG" />
  <Card.Body>
    <Card.Text>
STAR The Liverpool lad with swagger who's a mix of Mane and Lallana and may keep Thiago out


  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
            <Col md="2">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./96.PNG" />
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
