import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  const { onderwerp, tekst } = props.card;

  return (
    <article className="card">
      <picture className="thumbnail">
        <img
          className="category__01"
          src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/cloud.svg"
          alt="Cloud Storage"
        />
      </picture>
      <div className="card-content">
        <p className="category category__01">Cloud Storage</p>
        <h2>{onderwerp}</h2>
        <p>{tekst}</p>
      </div>
      <footer>
        <div className="post-meta">
          <span className="timestamp">
            <FontAwesomeIcon icon="clock" /> 6 mins ago
          </span>
          <span className="comments">
            <FontAwesomeIcon icon="comments" /> 14 comments
          </span>
        </div>
      </footer>
    </article>
  );
};

export default Card;
