import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRating from './StarRating';

function MovieCard({movie}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
         {movie.description}
        </Card.Text>
        { <Button variant="primary">{movie.rating}</Button> }
        {/* <StarRating></StarRating> */}
      </Card.Body>
    </Card>
  );
}

export default MovieCard;