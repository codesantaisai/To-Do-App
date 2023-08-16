import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { updateFilterStatus } from '../slices/todoSlice';
import { RootState } from '../app/store'; 
function AppHeader() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const initialFilterStatus = useSelector((state: RootState) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState<string>(initialFilterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setFilterStatus(selectedValue);
    dispatch(updateFilterStatus(selectedValue));
  };

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton
        id="status"
        onChange={updateFilter}
        value={filterStatus}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
