import PropTypes, { arrayOf } from 'prop-types';
import css from '../Statistics/Statistic.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistic = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          const bgColor = {
            backgroundColor: getRandomHexColor(),
          };
          return (
            <li key={id} className={css.item} style={bgColor}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}> {percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  transactions: arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
