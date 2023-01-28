import PropTypes from 'prop-types';

export const TransactionHistoryList = ({
  item: { type, amount, currency },
}) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};
TransactionHistoryList.prototype = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
