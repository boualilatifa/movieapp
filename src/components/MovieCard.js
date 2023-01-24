import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component"

function MovieCard({movie}) {
  return (
    <div>
    <Card style={{ width: '18rem' , margin : '20px'}}>
      <Card.Img variant="top" src={movie.posterurl} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <div>
   <ReactStars  count={5} size={24} activeColor="#ffd700" edit={false} value={movie.rating}
  />
  </div>
 
        <Button variant="primary">trailer</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard