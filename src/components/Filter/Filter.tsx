import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { useAppDispatch } from 'redux/hooks';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useAppDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  return (
    <>
      <label>
        <p>Filter contacts by name</p>
        <input type="text" value={filter} onChange={changeFilter} />
      </label>
    </>
  );
};
