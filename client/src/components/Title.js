import React, { Component } from 'react'
import "../assets/Title.css";

export default function Title({name,title}) {
  return(
      <div className="col-md-12 text-center py-3 main-titles">
        <h4 className="mb-2">{name}</h4>
        <h1 className="text-blue text-title">{title}</h1>
      </div>
  )
}
