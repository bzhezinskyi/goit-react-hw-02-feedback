import { Component } from 'react';
// import PropTypes from 'prop-types';

import { StatisticsList, StatisticsItem, Title } from './Statistics.styled';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    return (
      <>
        <Title>Statistics</Title>
        <StatisticsList>
          <StatisticsItem>{'Good: ' + good}</StatisticsItem>
          <StatisticsItem>{'Neutral: ' + neutral}</StatisticsItem>
          <StatisticsItem>{'Bad: ' + bad}</StatisticsItem>
        </StatisticsList>
      </>
    );
  }
}
