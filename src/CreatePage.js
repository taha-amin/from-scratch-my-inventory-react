import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createRestaurant } from './services/fetch-utils';

export default function CreateRestaurant() {
  const history = useHistory();

  const [restaurantInTheForm, setRestaurantInTheForm] = useState({
    name: '',
    location: '',
    score: 0,
    parking: true,
    review: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await createRestaurant(restaurantInTheForm);

    history.push('/restaurants');
  }

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h2>Add restaurant</h2>
        <label>
          Name
          <input
            required
            value={restaurantInTheForm.name}
            onChange={(e) =>
              setRestaurantInTheForm({ ...restaurantInTheForm, name: e.target.value })
            }
            name="name"
          />
        </label>
        <label>
          Location
          <input
            required
            value={restaurantInTheForm.location}
            onChange={(e) =>
              setRestaurantInTheForm({ ...restaurantInTheForm, location: e.target.value })
            }
            name="location"
          />
        </label>
        <label>
          Score
          <input
            required
            value={restaurantInTheForm.score}
            onChange={(e) =>
              setRestaurantInTheForm({ ...restaurantInTheForm, score: e.target.value })
            }
            name="score"
          />
        </label>
        <label>
          Parking
          <input
            type="radio"
            required
            value={restaurantInTheForm.parking}
            onChange={(e) =>
              setRestaurantInTheForm({ ...restaurantInTheForm, review: e.target.value })
            }
            name="parking"
          />
        </label>

        <label>
          Review
          <textarea
            required
            value={restaurantInTheForm.review}
            onChange={(e) =>
              setRestaurantInTheForm({ ...restaurantInTheForm, review: e.target.value })
            }
            name="review"
          />
        </label>
      </form>
    </div>
  );
}
