// import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ leaveFeedback, options }) => {
  console.log(options);

  return options.map(el => (
    <button
      key={el}
      id="1"
      name={el}
      type="button"
      className={s.button}
      onClick={leaveFeedback}
    >
      {el.charAt(0).toUpperCase() + el.substr(1).toLowerCase()}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;

// const FeedbackOptions = ({ leaveFeedback, options }) => (
//   <div className="FeedbackOptions">
//     <button
//       id="1"
//       name="good"
//       type="button"
//       className="Button-primary"
//       onClick={leaveFeedback}
//     >
//       Good
//     </button>
//     <button
//       id="2"
//       name="neutral"
//       type="button"
//       className="Button-primary"
//       onClick={leaveFeedback}
//     >
//       Neutral
//     </button>
//     <button
//       id="3"
//       name="bad"
//       type="button"
//       className="Button-primary"
//       onClick={leaveFeedback}
//     >
//       Bad
//     </button>
//   </div>
// );
