import './Card.css';

const Card = ({ image, name, studentClass }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} alt={name} className="card-image" />
      </div>
      <h2 className="card-name">{name}</h2>
      <p className="card-class">{studentClass}</p>
    </div>
  );
};

export default Card;
