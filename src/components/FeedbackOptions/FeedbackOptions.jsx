import PropTypes from 'prop-types';

import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(btn => (
        <Btn key={btn} onClick={() => onLeaveFeedback(btn)}>
          {btn}
        </Btn>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
