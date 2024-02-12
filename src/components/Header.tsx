import React from 'react';
import { HeaderProps } from '../interfaces/Header';
import { useNavigate } from 'react-router-dom';

const Header = ({ title }: HeaderProps) => {
    const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  };

  return (
    <div style={styles.header}>
      <button style={styles.backButton} onClick={goBack}>
        {'< Back'}
      </button>
      {title && <h2 style={styles.title}>{title}</h2>}
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#2980b9',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    marginRight: '10px',
    cursor: 'pointer',
  },
  title: {
    margin: 0,
  },
};

export default Header;
