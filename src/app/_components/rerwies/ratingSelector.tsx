export default function RatingSelector({
  rating,
  setRating,
}: {
  rating: number;
  setRating: (rating: number) => void;
}) {
  return (
    <div className="form-control mb-4">
      <label htmlFor="rating" className="label">
        <span className="label-text">Рейтинг (необязательно)</span>
      </label>
      <select
        id="rating"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="select select-bordered w-full"
      >
        <option value={0}>Не задано</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
}
