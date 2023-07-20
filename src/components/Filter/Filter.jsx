import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
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
