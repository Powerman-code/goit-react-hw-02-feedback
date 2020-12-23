import { Component } from 'react';

import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => {
      console.log(event.target.name);
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    console.log(this.state.good);
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const PositiveFeedbackPercentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );
    return PositiveFeedbackPercentage ? PositiveFeedbackPercentage : 0;
  };

  render() {
    console.log(Object.values(this.state));
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            leaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
