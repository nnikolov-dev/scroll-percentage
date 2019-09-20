import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import M from 'materialize-css';

function AutoComplete(props) {
  const uId = `autocomplete-${uniqid()}`;
  const {
    s, m, l, xl, placeholder, onChange, value, data,
  } = props;
  const small = s || 12;
  const medium = m || small;
  const large = l || medium;
  const extra = xl || large;
  useEffect(() => {
    const elem = document.querySelector(`#${uId}`);
    M.Autocomplete.init(elem, {
      data,
      onAutocomplete: onChange,
    });
  }, []);

  return (
    <div className={`input-field col s${small} m${medium} l${large} xl${extra}`}>
      <input type="text" id={uId} className="autocomplete" value={value || null} placeholder={placeholder} onChange={(e) => (onChange(e.target.value))} />
    </div>
  );
}

AutoComplete.propTypes = {
    s: PropTypes.number,
    m: PropTypes.number,
    l: PropTypes.number,
    xl: PropTypes.number,
    placeholder: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
    onChange: PropTypes.func,
    value: PropTypes.string,
};
  
AutoComplete.defaultProps = {
    s: 12,
    m: 12,
    l: 12,
    xl: 12,
    placeholder: null,
    data: [],
    onChange: null,
    value: null,
};
  
export default AutoComplete;
  