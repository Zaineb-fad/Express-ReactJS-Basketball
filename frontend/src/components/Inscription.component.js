import React, { Component } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Inscription.component.css";




function App() {
	  const { register, handleSubmit, watch, errors } = useForm();

const onSubmit = (data) => {
    console.log(data);
    axios.post(`postData`, data).then(({ data }) => {
      console.log(data, 2);
    });
  };
return (
    <div  className="App">


    <Container>
        <Row>
          <Col md={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label for ="Firstname">FirstName</label>
        <input name="Firstname" type="text" ref={register} placeholder="Firstname" />
        <label for="Lastname">lastname</label>
        <input name="Lastname" type="text" ref={register} placeholder="Lastname" />
        <label for="email">Email</label>
        <input name="email" type="text" ref={register} placeholder="Email" />
        <label for="password">Password</label>
         <input name="password" type="password" ref={register} placeholder="Password" />
         <label for="telephone">Numero de telephone</label>

         <input name="tel" type="tel" ref={register} placeholder="Tel" />
          <label for="Mme">Mme</label>
        <input name="sexe" type="radio" ref={register}  />
         <label for="Mme">Mle</label>
        <input name="sexe" type="radio" ref={register}  />
        <label for="Mme">Mre</label>
        <input name="sexe" type="radio" ref={register}  />
        <select name="job">
          <option value="etudiant" selected>etudiant</option>
          <option value="travailleur">travailleur</option>

        </select>
        <input type="submit" />
      </form>
       </Col>
        </Row>
      </Container>
      
      </div>
      );
  }
  export default App;
