import { Link } from 'react-router-dom';

export default function Restaurant({ restaurant }) {
  const { id, name, location, score, parking, review } = restaurant;
  return (
    <Link to={`/restaurants/${id}`}>
      <div className="restaurant">
        <h3>Restaurant Name: {name}</h3>
        <p>
          Located in {location}, this restaurant has a score of {score} on yelp.
        </p>
        <p>Parking? {parking}</p>
        <p>See what other people are saying about this place: {review}</p>
      </div>
    </Link>
  );
}
