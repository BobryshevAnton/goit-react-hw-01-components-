import PropTypes from 'prop-types';
import { TransactionHistoryList } from './transactionHistoryList';
import css from './transactionHistory.module.css';
//

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction__history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionHistoryList item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.prototype = {
  items: PropTypes.object,
};
