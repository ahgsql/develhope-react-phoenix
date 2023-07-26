import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
export default function RatingStar({ rating }) {
  return (
    <>
      {[...Array(rating)].map((index, i) => (
        <FontAwesomeIcon key={i} icon={faStar} />
      ))}
    </>
  );
}
RatingStar.propTypes = {
  rating: PropTypes.number.isRequired,
};