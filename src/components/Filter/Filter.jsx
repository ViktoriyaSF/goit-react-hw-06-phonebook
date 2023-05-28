// import propTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import React from 'react';
import { LabelFilter } from './Filter.styled';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

// const idFilter = nanoid();
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onFilter = evt => dispatch(setFilter(evt.target.value));

  return (
    <LabelFilter>
      <div>
        <FiSearch />
        Find contact by name
      </div>
      <Input
        type="text"
        value={filter}
        // id={idFilter}
        onChange={onFilter}
        placeholder="search"
      ></Input>
    </LabelFilter>
  );
};

// Filter.propTypes = {
//   value: propTypes.string.isRequired,
//   onChange: propTypes.func.isRequired,
// };
