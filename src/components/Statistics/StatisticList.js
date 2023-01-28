import PropTypes from 'prop-types';
import css from './statistic.module.css';

export const StatisticList = ({ elemStat: { label, percentage } }) => {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
};
StatisticList.prototype = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
