import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { APP } from '../../../store/actions';
import './style.scss';

const Alert = () => {
  const { type, msg } = useSelector(state => state.playlist.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type && msg) {
      setTimeout(() => dispatch({ type: APP.REMOVE_ALERT }), 2000);
    }
  }, [type, msg]);

  return (
    <div className={`alert ${type}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
