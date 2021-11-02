import React from "react";
import "./Wrestling.component.css";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Img } from 'react-bootstrap';
import { Pagination,Carousel } from 'react-bootstrap';
import Wrestling1 from "./Wrestling1.component";
import Wrestling2 from "./Wrestling2.component";
import Wrestling3 from "./Wrestling3.component";
import Wrestling4 from "./Wrestling4.component";
import Wrestling5 from "./Wrestling5.component";
import Wrestling6 from "./Wrestling6.component";
import Wrestling7 from "./Wrestling7.component";
import Wrestling8 from "./Wrestling8.component";
import Wrestling9 from "./Wrestling9.component";

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
            
                        <Link to="/Wrestling1">

                <Card style={{ width: '35rem' }}>
                 <Card.Img variant="top" src="./150.PNG" />
                  <Card.Body>
                    <Card.Text>
                   READY WWE ‘open’ to working with other promotions amid AEW and IMPACT Wrestling crossover
Talent from All Elite Wrestling and IMPACT Wrestling look set to appear on each other's shows in the forthcoming weeks
<br/><br/>Football<FcUpload/>
    <
    /Card.Text>
  </Card.Body>
</Card></Link></Col>
            <Col md="4">

                        <Link to="/Wrestling2">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./152.PNG" />
  <Card.Body>
    <Card.Text>



CLASS Triple H says no one can touch NXT’s women’s division - ‘They’re a bunch of badasses’
<br/><br/>Football<FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>
   
                        <Link to="/Wrestling3">
<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./153.PNG" />
  <Card.Body>
    <Card.Text>


WOW WWE Hall of Famer Sting makes shock debut as AEW and IMPACT reveal crossover<br/><br/>Football<FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>
</Col>
 <Col md="6">

                        <Link to="/Wrestling4">

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./154.PNG" />
  <Card.Body>
    <Card.Text>



OUCH Jeff Hardy takes terrifying-looking bump vs Elias on Raw
<br/><br/>Football
<FcUpload/>

    </Card.Text>
  </Card.Body>
</Card></Link>

                        <Link to="/Wrestling5">

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./155.PNG" />
  <Card.Body>
    <Card.Text>
INSIDE WWE 'What if he misses?' Jericho's last minute doubt about letting Tyson KO him
<br/><br/>Football<FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link></Col>
            <Col md="6">

                        <Link to="/Wrestling6">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./156.PNG" />
  <Card.Body>
    <Card.Text>

OUCH Jeff Hardy takes terrifying-looking bump vs Elias on Raw
<br/><br/>Football<FcUpload/>


    </Card.Text>
  </Card.Body>
</Card></Link>

                        <Link to="/Wrestling7">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./157.PNG" />
  <Card.Body>
    <Card.Text>

INSIDE WWE 'What if he misses?' Jericho's last minute doubt about letting Tyson KO him
<br/><br/>Football<FcUpload/>


    </Card.Text>
  </Card.Body>

</Card></Link>
</Col>
              <Col md="6">
              
                        <Link to="/Wrestling8">

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./158.PNG" />
  <Card.Body>
    <Card.Text>


INSIDE WWE Mike Tyson saved WWE in 1998 and even had a boxing match with Triple H lined up
<br/><br/>Football<FcUpload/>


    </Card.Text>
  </Card.Body>
</Card></Link></Col>
              <Col md="6">

                        <Link to="/Wrestling9">
<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./159.PNG" />
  <Card.Body>
    <Card.Text>
STORYLINE The real reason WWE have 'suspended' Braun Strowman on TV
<br/><br/>Football<FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>

                        <Link to="/Wrestling9">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./160.PNG" />
  <Card.Body>
    <Card.Text>


EXCLUSIVE
CHAMP Leon Ruff opens up about working with Triple H in NXT
In just one year in WWE and much, much less on a guaranteed deal, Leon Ruff is now the North American champion and he opens up about Triple H making that happen
<br/><br/>Football<FcUpload/>


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
  <Card.Img variant="top" src="./161.PNG" />
  <Card.Body>
    <Card.Text>
SPORT PRESSIES Perfect Xmas gifts for sports fans from Tyldesley's notes to Rocky's belt
Sport
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./162.jpg" />
  <Card.Body>
    <Card.Text>




ODD 'It was weird then, and even weirder now' - Man United's Lukaku decision 'puzzling'
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./163.PNG" />
  <Card.Body>
<Card.Text>
EXCLUSIVE
KEEP HIM Lampard does not have to sell 'important' player in January, claims Chelsea icon
Football
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./164.PNG" />
  <Card.Body>
    <Card.Text>

EXCLUSIVE
OMISSION Young Bucks on FTR's criticism of the build to their match, PWI top 10 tag teams
Sport
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./165.PNG" />
  <Card.Body>
    <Card.Text>



SAD How Vince McMahon really feels about Undertaker’s retirement after ‘Final Farewell’
Sport


    </Card.Text>
  </Card.Body>
</Card>
</div>
  </Carousel.Item>

  

  <Carousel.Item>
<div className="g1">
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./166.PNG" />
  <Card.Body>
    <Card.Text>
SWERVE WWE reportedly has surprise opponent lined up to challenge Drew McIntyre at TLC
Sport


    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./167.PNG" />
  <Card.Body>
    <Card.Text>
REUNITED Paul Bearer hologram appears in Undertaker’s 'Final Farewell' at Survivor Series
Sport
Latest in Sport


    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./168.PNG" />
  <Card.Body>
    <Card.Text>
EXCLUSIVE
PLANS The Young Bucks reveal all about first meeting with Tony Khan that led to forming AEW
Sport
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
 <Card.Img variant="top"src="./169.PNG" />
  <Card.Body>
    <Card.Text>
GOOD DECISION John Fury explains why Daniel Dubois did 'the right thing' against Joe Joyce


    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./170.PNG" />
  <Card.Body>
    <Card.Text>
BETTER McGregor vs YouTuber would be 'more competitive' than Mayweather fight, Hearn claims


    </Card.Text>
  </Card.Body>
</Card>
</div>
  
            

  </Carousel.Item>

</Carousel>
            <Col md="6">
            
<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./171.PNG" />
  <Card.Body>
    <Card.Text>
JOURNEY Holyfield made millions vs Tyson, but lost it all and sold his mansion to Rick Ross

<br/><br/>Football<FcUpload/>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
            <Col md="4">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./172.PNG" />
  <Card.Body>
    <Card.Text>
TRIM Fury congratulates 'fantastic shape' of Saunders, who admits to being 'like a fat pig'
<br/><br/>Football<FcUpload/>

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
