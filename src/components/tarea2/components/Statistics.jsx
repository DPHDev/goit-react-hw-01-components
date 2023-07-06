import PropTypes from "prop-types";

export const Statistics = ( { stats }) => {
    return (
        <section className="statistics">
            <h2 className="title">UPLOAD STATS</h2>
            <ul className="stat-list">
                {
                    stats.map(({ id, percentage, label}) => (
                        <li className="statistics_item" key={id}>
                            <span className="statistics_label">{ label }</span>
                            <span className="statistics_percentage">{ percentage}%</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number,
      label: PropTypes.string.isRequired
    })  
  )
};