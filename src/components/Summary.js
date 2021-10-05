import Order from "./Order";

const Summary = () => {
  return (
    <div className="summary">
      <h1>Order Summary</h1>
      <p className="description">
        You can now listento millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <Order />

      <button type="button">Proceed to payment</button>

      <a href="#" className="cancel-order">
        Cancel Order
      </a>
    </div>
  );
};

export default Summary;
