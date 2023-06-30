import PropTypes from 'prop-types';

export const SearchFilter = ({ filter, filteredArr }) => (
  <label>
    <input
      style={{'display': 'block'}}
      type="text"
      placeholder=" Find contacts by name"
      value={filter}
      onChange={filteredArr}
    ></input>
  </label>
);


SearchFilter.propTypes = {
  filter: PropTypes.string,
  filteredArr: PropTypes.func,
}