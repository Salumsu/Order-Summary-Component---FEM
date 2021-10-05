import songIcon from "./../images/icon-music.svg";

const Order = () => {
  return (
    <div className="order">
      <img src={songIcon} alt="song icon" />
      <span>
        <h4 className="order-title">Annual Plan</h4>
        <p className="order-price">$59.99/year</p>
      </span>
      <a href="#" className="order-change">
        Change
      </a>
    </div>
  );
};

export default Order;
