import React from 'react';

export default function Subnavbar() {
  return (
    <div className="w-100 shadow">
   <ul className="nav justify-content-center">
   <li className="nav-item">
     <a className="nav-link" href="/categorie/?id=5">Reactjs</a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="/categorie/?id=6">Vuejs</a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="/categorie/?id=14">React-Native</a>
   </li>
   <li className="nav-item">
   <a className="nav-link" href="/categorie/?id=7">Nodejs(Express)</a>
   </li>
   <li className="nav-item">
   <a className="nav-link" href="/categorie/?id=4">Javascript</a>
   </li>
   <li className="nav-item">
   <a className="nav-link" href="/categorie/?id=12">Css</a>
   </li>
 </ul>
    </div>
  );
}
