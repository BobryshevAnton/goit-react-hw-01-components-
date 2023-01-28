import { StatisticList } from './statisticList';
import PropTypes from 'prop-types';

import css from './statistic.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : ''}

      <ul className={css.stat__list}>
        {stats.map(elem => (
          <li className={css.item} key={elem.id}>
            <StatisticList elemStat={elem} />
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.object,
};
