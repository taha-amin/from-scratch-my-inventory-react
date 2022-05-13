import { Link } from 'react';

export default function Restaurant({
  restaurant: { id, name, location, yelp_score, parking, review },
}) {
  return (
    <Link to={`/restaurants/${id}`}>
      <div className="restaurant">
        <h3>Restaurant Name: {name}</h3>
        <p>
          Located in {location}, this restaurant has a score of {yelp_score} on yelp.
        </p>
        <p>Parking? {parking}</p>
        <p>See what other people are saying about this place: {review}</p>
      </div>
    </Link>
  );
}
