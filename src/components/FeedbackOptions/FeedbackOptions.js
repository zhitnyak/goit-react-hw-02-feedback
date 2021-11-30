import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(el => (
    <button
      className={css.btn}
      onClick={() => onLeaveFeedback(el)}
      type="button"
      key={el}
    >
      {el}
    </button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
