import React from "react";
import "./Boxing.component.css";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Img } from 'react-bootstrap';
import { Pagination,Carousel } from 'react-bootstrap';
import Boxing1 from "./Boxing1.component";
import Boxing2 from "./Boxing2.component";
import Boxing3 from "./Boxing3.component";
import Boxing4 from "./Boxing4.component";
import Boxing5 from "./Boxing5.component";
import Boxing6 from "./Boxing6.component";
import Boxing7 from "./Boxing7.component";
import Boxing8 from "./Boxing8.component";
import Boxing9 from "./Boxing9.component";

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
            
                        <Link to="/Boxing1">

                <Card style={{ width: '35rem' }}>
                 <Card.Img variant="top" src="./26.PNG" />
                  <Card.Body>
                    <Card.Text>
                   JOSHING AROUND 'He’s got a lot of potential' - AJ makes offer to become Fury’s new manager
The two best heavyweights in the world look set to collide in 2021 to crown an undisputed champion
Sport

  <br/><br/>  Football><FcUpload/>
    <
    /Card.Text>
  </Card.Body>
</Card></Link></Col>
            <Col md="4">

                        <Link to="/Boxing2">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./27.PNG" />
  <Card.Body>
    <Card.Text>
PAIN Medical notes reveal Dubois faced 'career ending double vision' if Joyce fight went on


    Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>

                        <Link to="/Boxing3">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./28.PNG" />
  <Card.Body>
    <Card.Text>

UNIFY Canelo's latest comments are good news for Billy Joe Saunders, but bad news for GGG

  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>
</Col>
 <Col md="6">

                        <Link to="/Boxing4">

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./29.PNG" />
  <Card.Body>
    <Card.Text>



FLOORED Watch boxer perform ‘Can’t Touch This’ dance ring walk, knocked out in first round


  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>

                        <Link to="/Boxing5">

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./30.PNG" />
  <Card.Body>
    <Card.Text>



SO? Eddie Hearn fires back with sarcastic response after Frank Warren says meeting is off

    Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link></Col>
            <Col md="6">

                        <Link to="/Boxing6">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./31.PNG" />
  <Card.Body>
    <Card.Text>

FLOORED Watch boxer perform ‘Can’t Touch This’ dance ring walk, knocked out in first round


  <br/><br/>  Football><FcUpload/>


    </Card.Text>
  </Card.Body>
</Card></Link>

                        <Link to="/Boxing7">

<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./32.PNG" />
  <Card.Body>
    <Card.Text>


KINGS Fury shows off his and Tyson's body transformations as pair lose 22 stone combined
Sport

  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>

</Card></Link>
</Col>
              <Col md="6">
              
                        <Link to="/Boxing8">

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./34.PNG" />
  <Card.Body>
    <Card.Text>


NEXT Joshua vs Pulev date: UK start time, undercard, PPV and live stream, Tale of the Tape

  <br/><br/>  Football><FcUpload/>

    </Card.Text>
  </Card.Body>
</Card></Link></Col>
              <Col md="6">

                        <Link to="/Boxing9">

<Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src="./35.PNG" />
  <Card.Body>
    <Card.Text>


FIGHT NIGHT Anthony Yarde fight live stream: UK start time, how to watch, undercard tonight
Anthony Yarde and Lyndon Arthur both beat Dec Spelman earlier this year and will now face off at the Royal Albert Hall

    Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card></Link>


<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./36.PNG" />
  <Card.Body>
    <Card.Text>


SIMPLE Lewis was told Tyson would be his easiest fight before demolishing Iron Mike in 2002

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
  <Card.Img variant="top" src="./37.PNG" />
  <Card.Body>
    <Card.Text>

DISPUTE Watch when Tony Bellew clashed with Deontay Wilder, heated argument at AJ weigh-in
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./38.jpg" />
  <Card.Body>
    <Card.Text>




ODD 'It was weird then, and even weirder now' - Man United's Lukaku decision 'puzzling'
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./39.PNG" />
  <Card.Body>
<Card.Text>
ONE-SIDED Billy Joe Saunders moves to 30-0 with win over Martin Murray, wants Canelo next

    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./40.PNG" />
  <Card.Body>
    <Card.Text>



BOLD Johnny Nelson claims Tennyson 'would beat Gervonta Davis now' after destructive KO

    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./41.PNG" />
  <Card.Body>
    <Card.Text>




SMASH Watch as Shannon Courtenay returns with massive one-punch KO of wild Polish opponent


    </Card.Text>
  </Card.Body>
</Card></div>
  </Carousel.Item>

  

  <Carousel.Item>
<div className="g1">

<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./42.PNG" />
  <Card.Body>
    <Card.Text>

GAME OVER Watch as boxer walks to ring dressed as Bowser, but struggles to take shell off
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./43.PNG" />
  <Card.Body>
    <Card.Text>


JOURNEY Holyfield made millions vs Tyson, but lost it all and sold his mansion to Rick Ross



    </Card.Text>
  </Card.Body>
</Card>


<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./44.PNG" />
  <Card.Body>
    <Card.Text>
TRIM Fury congratulates 'fantastic shape' of Saunders, who admits to being 'like a fat pig'

    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '12rem' }}>
 <Card.Img variant="top"src="./45.PNG" />
  <Card.Body>
    <Card.Text>

    </Card.Text>
  </Card.Body>
</Card>


<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="./46.PNG" />
  <Card.Body>
    <Card.Text>
REPRIEVE Matera reinstated as Argentina captain after suspension for historic racist tweets

    </Card.Text>
  </Card.Body>
</Card>
</div>
</Carousel.Item>

</Carousel>
            <Col md="6">

<Card style={{ width: '35rem' }}>
  <Card.Img variant="top" src="./47.PNG" />
  <Card.Body>
    <Card.Text>
WORRY Joshua casts doubt over whether Fury fight happens in 2021, believes Usyk more likely


  <br/><br/>  Football><FcUpload/>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
            <Col md="4">
<Card style={{ width: '8rem' }}>
  <Card.Img variant="top" src="./48.PNG" />
  <Card.Body>
    <Card.Text>
RESPONSE Mike Tyson disagrees with Floyd Mayweather's point about what's wrong with boxing


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
