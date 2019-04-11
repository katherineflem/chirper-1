import React, { Component } from 'react'


const Chirps=(props)=>{
  return(
  <div>
  {this.state.newArray.map((text, index) => {
    return <div className="card border-primary" key={index}>
      <h3 className="card-body">{text}</h3>
    </div>
  })}
</div>)






export default Chirps
