import React from 'react'
import MovieAdd from './MovieAdd'
import MovieCard from './MovieCard'

function Movielist({movies , setmovies , text , rate }) {
    console.log(movies)
  return (
    <div >
         <div className='buttonadd' >
<MovieAdd  movies={movies} setmovies={setmovies}/>
</div>
    <div className='box'>
{movies.filter((el)=> el.name.toLowerCase().includes(text.toLowerCase()) && el.rating>=rate ).reverse()
.map((el)=>(<MovieCard movie={el}/>))
}
    </div>
    </div>
  )
}

export default Movielist