import React from 'react';
import styles from './css/author.css' ;

export default function Author() {
  return (
    <div>
    <div className="contain">
   <div className="head">
   <img className="avatar" src="./face.png" />
   <h2 className="name">Aziz Mobarak</h2>
   </div>
    <div className="content">
    <p className="description" > full stack Web and mobile developer</p>
    <p className="text" >
    Senior JavaScript developer , familiare with javascript Frameworks,
    Reactjs , Vuejs , Nodejs , MongoDB , CSS , SASS/SCSS , React-Native.
    </p>
    </div>
    </div>
    </div>
  );
}
