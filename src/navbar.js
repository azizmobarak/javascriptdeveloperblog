import React, { useState } from 'react';
import Subnavbar from './subnavbar';

export default function NavBar() {


  const [searchkey,setsearch]=useState('');

const tosearch=(e)=>{
e.preventDefault();
window.location.replace('/search?key='+searchkey);
}

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="./">
  <h3>JavaScriptDeveloper.XYZ</h3>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
 
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://javascriptdeveloper.xyz/contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://javascriptdeveloper.xyz/elemenhrefr-98/">About</a>
      </li>
      </ul>
    
    <form className="form-inline my-2 my-lg-0">
      <input onChange={(e)=>setsearch(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button onClick={(e)=>tosearch(e)} className="btn bg-light my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<Subnavbar/>
    </div>
  );
}
