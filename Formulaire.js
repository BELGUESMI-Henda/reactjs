import React from 'react'
import App from './App.css'

function Formulaire(){
    return (
      <section className="container">
      <div className="form-group">
             <label className="control-label col-sm-2" for="name">First Name:</label>
             </div> <div className="col-sm-10">
        <input type="name" className="form-control" id="name" placeholder="Enter your First Name"></input>
      </div> 
      <div className="form-group">
             <label className="control-label col-sm-2" for="name">Last Name</label>
             </div> <div className="col-sm-10">
        <input type="name" className="form-control" id="name" placeholder="Enter your Last Name"></input>
      </div>
      <div className="form-group">
             <label className="control-label col-sm-2" for="email">Email:</label>
             </div> <div className="col-sm-10">
        <input type="email" className="form-control" id="email" placeholder="Enter email"></input>
      </div>
      <div className="form-group">
             <label className="control-label col-sm-2" for="email">Password</label>
             </div> <div className="col-sm-10">
        <input type="email" className="form-control" id="email" placeholder="Enter your password"></input>
      </div>
        <button type="button" className="btn btn-primary active">Enregister</button>
        <button type="button" className="btn btn-primary disabled">Disabled</button> 
      </section>
  );
}
export default Formulaire;