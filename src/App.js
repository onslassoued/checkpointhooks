import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import MovieCard from './MovieCard';
import './css.css'
import Navbarr from './Navbarr';
import Footer from './Footer';
import './css.css'

function App() {
  const  [list , SetList]=useState([
    { title :'shutter island',
    description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    posterURL:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4651306db4501622166aa68b058b20e7a3c598bcfebea4ebc56733301d54fdae._RI_TTW_.jpg',
    rating : 10 } ,
    {
      title :'green mile',
      description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      posterURL:'https://flxt.tmsimg.com/assets/p24429_p_v12_bf.jpg',
      rating : 10 
  },
  {
    title :'v for vendetta',
    description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    posterURL:'https://m.media-amazon.com/images/I/41QST6DYNDL._AC_UF1000,1000_QL80_.jpg',
    rating : 10 
},
{
  title :'interstellar',
  description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
  posterURL:'https://img.fruugo.com/product/6/84/32299846_max.jpg',
  rating : 10 
},
  ])




  const p=useRef()
  const p1=useRef()
  const p2=useRef()
  const p3=useRef()

  const add=()=>{
   var newMovie={title:p.current.value,description:p1.current.value, posterURL:p2.current.value , rating : p3.current.value}

  SetList([...list,newMovie])
  }

  const [filtredlist , setFilter] = useState(list)
  useEffect (()=> {
    setFilter(list)
  },[list])

  const search=useRef ()
  const filtrer=()=>{
    setFilter( list.filter(e=> e.title.toUpperCase().includes(search.current.value.toUpperCase())))
  }


  return (
  
  <div className='App'>
    <Navbarr></Navbarr>

  <input type={'text'} ref={p} placeholder='title movie'  className='space'></input>    
  <input type={'text'} ref={p1} placeholder='description' className='space'></input>    
  <input type={'text'} ref={p2} placeholder='img movie' className='space'></input>    
  <input type={'text'} ref={p3} placeholder='rating' className='space'></input>   
   <button onClick={add} className='space' id='spacee'>+</button> 
   <br></br>
   <input type={'search'} placeholder='enter your search ' ref={search} onChange={filtrer} className='onss'></input>
   <div className='style'>
   {filtredlist.map(e=><MovieCard movie={e}></MovieCard>)}
   </div>
      <Footer></Footer>
  </div>
  );
}

export default App;
