import React, { useState, useEffect } from 'react'

const News = () => {
const url = 'https://imdb-top-100-movies.p.rapidapi.com/';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};
useEffect(()=> {
    fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
  
},[])
 return (
    <div>Movies</div>
  )
}

export default News