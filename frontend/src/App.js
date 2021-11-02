import './App.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";




import Col from "react-bootstrap/Col";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import Transfers from "./components/Transfers.component";
import Boxing from "./components/Boxing.component";
import Basketball from "./components/Basketball.component";

import Sport from "./components/Sport.component";
import Rugbyunion from "./components/Rugbyunion.component";
import Allsport from "./components/Allsport.component";
import Wrestling from "./components/Wrestling.component";
import Inscription from "./components/Inscription.component";
import Connection from "./components/Connection.component";
import Transfers1 from "./components/Transfers1.component";
import Transfers2 from "./components/Transfers2.component";
import Transfers3 from "./components/Transfers3.component";
import Transfers4 from "./components/Transfers4.component";

import Transfers5 from "./components/Transfers5.component";
import Transfers6 from "./components/Transfers6.component";
import Transfers7 from "./components/Transfers7.component";
import Transfers8 from "./components/Transfers8.component";
import Transfers9 from "./components/Transfers9.component";

import Footer from "./components/Footer.component";
import Allsport1 from "./components/Allsport1.component";
import Allsport2 from "./components/Allsport2.component";
import Allsport3 from "./components/Allsport3.component";
import Allsport4 from "./components/Allsport4.component";
import Allsport5 from "./components/Allsport5.component";
import Allsport6 from "./components/Allsport6.component";
import Allsport7 from "./components/Allsport7.component";
import Allsport8 from "./components/Allsport8.component";
import Allsport9 from "./components/Allsport9.component";
import Basketball1 from "./components/Basketball1.component";
import Basketball2 from "./components/Basketball2.component";
import Basketball3 from "./components/Basketball3.component";
import Basketball4 from "./components/Basketball4.component";
import Basketball5 from "./components/Basketball5.component";
import Basketball6 from "./components/Basketball6.component";
import Basketball7 from "./components/Basketball7.component";
import Basketball8 from "./components/Basketball8.component";
import Basketball9 from "./components/Basketball9.component";
import Boxing1 from "./components/Boxing1.component";
import Boxing2 from "./components/Boxing2.component";
import Boxing3 from "./components/Boxing3.component";
import Boxing4 from "./components/Boxing4.component";
import Boxing5 from "./components/Boxing5.component";
import Boxing6 from "./components/Boxing6.component";
import Boxing7 from "./components/Boxing7.component";
import Boxing8 from "./components/Boxing8.component";
import Boxing9 from "./components/Boxing9.component";
import Rugbyunion1 from "./components/Rugbyunion1.component";
import Rugbyunion2 from "./components/Rugbyunion2.component";
import Rugbyunion3 from "./components/Rugbyunion3.component";
import Rugbyunion4 from "./components/Rugbyunion4.component";
import Rugbyunion5 from "./components/Rugbyunion5.component";
import Rugbyunion6 from "./components/Rugbyunion6.component";
import Rugbyunion7 from "./components/Rugbyunion7.component";
import Rugbyunion8 from "./components/Rugbyunion8.component";
import Rugbyunion9 from "./components/Rugbyunion9.component";
import Sport1 from "./components/Sport1.component";
import Sport2 from "./components/Sport2.component";
import Sport3 from "./components/Sport3.component";
import Sport4 from "./components/Sport4.component";
import Sport5 from "./components/Sport5.component";
import Sport6 from "./components/Sport6.component";
import Sport7 from "./components/Sport7.component";
import Sport8 from "./components/Sport8.component";
import Sport9 from "./components/Sport9.component";
import Wrestling1 from "./components/Wrestling1.component";
import Wrestling2 from "./components/Wrestling2.component";
import Wrestling3 from "./components/Wrestling3.component";
import Wrestling4 from "./components/Wrestling4.component";
import Wrestling5 from "./components/Wrestling5.component";
import Wrestling6 from "./components/Wrestling6.component";
import Wrestling7 from "./components/Wrestling7.component";
import Wrestling8 from "./components/Wrestling8.component";
import Wrestling9 from "./components/Wrestling9.component";


// reactstrap components

// core components

function App() {
  return (
    <Router>

   
        <div className="App"> 

      <header className="App-header">

        <Navbar bg="dark" variant="dark">
          <Container>

            
             <Nav className="justify-content-end">

              <Nav>
                <Link to={"/Inscription"} className="nav-link">
                  Inscription
                </Link>
                <Link to={"/Connection"} className="nav-link">
                  Connectez vous
                </Link>
                
             </Nav>
             </Nav>

             
        

          </Container>
        </Navbar>
      </header>
    <Container>
        <Row>
          <Col md={12}>
            <div  className="wrapper">
              <Switch>
                <Route exact path='/Inscription' component={Inscription} />
                <Route exact path='/Connection' component={Connection} />
                

                
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
      </div>

  
   
        <div className="App"> 

      <header className="App-header">

        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/Transfers"} className="nav-link">
               Transfers
              </Link>
            </Navbar.Brand>
             <Nav className="justify-content-end">

              <Nav>
                <Link to={"/Boxing"} className="nav-link">
                  Boxing
                </Link>
                <Link to={"/Basketball"} className="nav-link">
                  Basketball
                </Link>
                <Link to={"/Sport"} className="nav-link">
                  Sport
                </Link>
           <Link to={"/Rugbyunion"} className="nav-link">
                  Rugbyunion
                </Link>
                <Link to={"/Allsport"} className="nav-link">
                  All sport
                </Link>
                <Link to={"/Wrestling"} className="nav-link">
                  Wrestling
                </Link>
             </Nav>
             </Nav>

             
            <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/Transfers' component={Transfers} />
                <Route exact path='/Boxing' component={Boxing} />
                <Route exact path='/Basketball' component={Basketball} />
                <Route exact path='/Sport' component={Sport} />
                 <Route  path="/Transfers1" component={Transfers1} />     
                <Route exact path='/Rugbyunion' component={Rugbyunion} />
                <Route exact path='/Allsport' component={Allsport} />
                <Route exact path='/Wrestling' component={Wrestling} />
                 <Route  path="/Transfers5" component={Transfers5} /> 
                 <Route  path="/Transfers2" component={Transfers2} /> 
                <Route  path="/Transfers3" component={Transfers3} />
                <Route  path="/Transfers4" component={Transfers4} /> 
                <Route  path="/Transfers6" component={Transfers6} /> 
                <Route  path="/Transfers7" component={Transfers7} />
                <Route  path="/Transfers8" component={Transfers8} />
                <Route  path="/Transfers9" component={Transfers9} />
                <Route  path="/Wrestling1" component={Wrestling1} />
                <Route  path="/Wrestling2" component={Wrestling2} />
                <Route  path="/Wrestling3" component={Wrestling3} /> 
                <Route  path="/Wrestling4" component={Wrestling4} /> 
                 <Route  path="/Wrestling5" component={Wrestling5} />
                 <Route  path="/Wrestling6" component={Wrestling6} />
                 <Route  path="/Wrestling7" component={Wrestling7} />   
                 <Route  path="/Wrestling8" component={Wrestling8} /> 
                 <Route  path="/Wrestling9" component={Wrestling9} /> 
                 <Route  path="/Sport1" component={Sport1} />  
                 <Route  path="/Sport2" component={Sport2} />  
                 <Route  path="/Sport3" component={Sport3} />  
                 <Route  path="/Sport4" component={Sport4} />  
                 <Route  path="/Sport5" component={Sport5} />  
                 <Route  path="/Sport6" component={Sport6} />  
                 <Route  path="/Sport7" component={Sport7} />  
                 <Route  path="/Sport8" component={Sport8} />  
                 <Route  path="/Sport9" component={Sport9} /> 
                 <Route  path="/Rugbyunion1" component={Rugbyunion1} />
                 <Route  path="/Rugbyunion2" component={Rugbyunion2} />
                 <Route  path="/Rugbyunion3" component={Rugbyunion3} />
                 <Route  path="/Rugbyunion4" component={Rugbyunion4} />
                 <Route  path="/Rugbyunion5" component={Rugbyunion5} />
                 <Route  path="/Rugbyunion6" component={Rugbyunion6} />
                 <Route  path="/Rugbyunion7" component={Rugbyunion7} />
                 <Route  path="/Rugbyunion8" component={Rugbyunion8} />
                 <Route  path="/Rugbyunion9" component={Rugbyunion9} /> 
                 <Route  path="/Boxing1" component={Boxing1} />
                 <Route  path="/Boxing2" component={Boxing2} />
                 <Route  path="/Boxing3" component={Boxing3} />
                 <Route  path="/Boxing4" component={Boxing4} />
                 <Route  path="/Boxing5" component={Boxing5} />
                 <Route  path="/Boxing6" component={Boxing6} />
                 <Route  path="/Boxing7" component={Boxing7} />
                 <Route  path="/Boxing8" component={Boxing8} />
                 <Route  path="/Boxing9" component={Boxing9} />
                 <Route  path="/Basketball1" component={Basketball1} /> 
                 <Route  path="/Basketball2" component={Basketball2} /> 
                 <Route  path="/Basketball3" component={Basketball3} /> 
                 <Route  path="/Basketball4" component={Basketball4} /> 
                 <Route  path="/Basketball5" component={Basketball5} /> 
                 <Route  path="/Basketball6" component={Basketball6} /> 
                 <Route  path="/Basketball7" component={Basketball7} /> 
                 <Route  path="/Basketball8" component={Basketball8} /> 
                 <Route  path="/Basketball9" component={Basketball9} />
                 <Route  path="/Allsport1" component={Allsport1} /> 
                 <Route  path="/Allsport2" component={Allsport2} /> 
                 <Route  path="/Allsport3" component={Allsport3} /> 
                 <Route  path="/Allsport4" component={Allsport4} /> 
                 <Route  path="/Allsport5" component={Allsport5} /> 
                 <Route  path="/Allsport6" component={Allsport6} /> 
                 <Route  path="/Allsport7" component={Allsport7} /> 
                 <Route  path="/Allsport8" component={Allsport8} /> 
                 <Route  path="/Allsport9" component={Allsport9} />  
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
      </div>
</Router>
  );
}
export default App;
