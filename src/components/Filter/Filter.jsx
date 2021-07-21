import PropTypes from "prop-types";
import React from "react";
import { Label, Input} from './Filter.styled';


const Filter = ({ value, onChange }) => (
  <Label>
    <Input
      placeholder="Find contacts by name"
      type="text"
      value={value}
      onChange={onChange}
    />
  </Label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};