import React,{useEffect, useState} from 'react';
import querystring from 'query-string';
import Author from './author/author';

export default function Post({location}) {

  const [id,setid]=useState(querystring.parse(location.search).id);
  const [pic,setpic]=useState(querystring.parse(location.search).pic);
  const [title,settitle]=useState('');
  
  useEffect(() => {
    fetch('https://javascriptdeveloper.xyz/wp-json/wp/v2/posts/'+id)
    .then(res=>res.json())
    .then(data=>{
      settitle(data.title.rendered);
     document.getElementById('content').innerHTML=data.content.rendered;
    })
},[id])
  return (
    <div className="container d-flex flex-column py-3 justify-content-center align-items-center">
    <h2 className="bg-dark p-2 text-white">{title}</h2><br/>
    <img 
    src={pic} 
    className="img-fluid w-50 h-auto" />
    <br/>
   <p id="content">
   </p> 
   <br/>
   <Author/>
    </div>
  );
}
