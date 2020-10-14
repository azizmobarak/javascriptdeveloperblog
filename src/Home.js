import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './App.css';
import {useHistory} from 'react-router-dom';
import {Pagination} from '@material-ui/lab';

export default function Home() {

   const [posts,setposts]=useState([]);
   const [islodading,setlodign]=useState(false); 
   const [pages,setpages]=useState(1);
   const [currentpage,setcurrentpage]=useState(1);
   const history = useHistory();

const RedirecttoPost=(picture,id)=>{
   return history.push('/post?pic='+picture+'&id='+id)
}


   const loaddata=()=>{
      setlodign(true)
       fetch("https://javascriptdeveloper.xyz/wp-json/wp/v2/posts?per_page=10&page="+currentpage+"&_embed")
        .then(res=>res.json())
        .then(data=>setposts(data))
        .catch(e=>console.log(e));
       setlodign(false);
   }


  useEffect(()=>{
   //load pages
   loaddata();
  if(document.readyState==="complete"){
   posts.map((item,i)=>{
      document.getElementsByClassName('card-text')[i].innerHTML=item.content.rendered.substring(0,100);
   })
  }
  });

useEffect(()=>{
//load pages
 loaddata();
 //calcul pages
 fetch('https://javascriptdeveloper.xyz/wp-json/wp/v2/posts')
 .then(res=>res.json())
 .then(data=>{
    if(parseInt(data.length)/12>parseInt(parseInt(data.length)/12)){
        setpages(parseInt((parseInt(data.length)/12)+1));
    }else{
       setpages(parseInt(data.length)/12)
    }
   });
},[currentpage])


  return (
     <div className="container-lg">
    <div className="row py-4 container-fluid">
    {posts.map(item=>{
       if(posts.length>0)
       {
         return  <div key={item.id} className="col-sm-4 py-2">
         <div className="card">
         <img src={item._embedded['wp:featuredmedia']['0'].source_url} className="card-img-top" alt="" />
         <div className="card-body">
          <h5 style={styles.title} className="card-title">
          {item.title.rendered}
          </h5>
           <p className="card-text">
           </p>
          <button onClick={()=>RedirecttoPost(item._embedded['wp:featuredmedia']['0'].source_url,item.id)} className="btn btn-primary">Read More..</button>
          <p style={styles.date}>{item.date.substring(0,10)}</p>
         </div>
        </div>
         </div>
       }
    
    })}
    </div>
    <div className="row d-flex justify-content-center shadow">
    <Pagination 
    count={pages} 
    variant="outlined"
    onChange={(e,v)=>setcurrentpage(v)}
    />
    </div>
    <br/>
    </div>
  );
}
