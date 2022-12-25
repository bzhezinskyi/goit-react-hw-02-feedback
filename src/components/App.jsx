import { Component } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleClick = message => {
    this.setState(prevState => {
      return { [message]: prevState[message] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.hendleClick}
          />
        </Section>
        <Section title="Statistics">
          {good + neutral + bad === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
