import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, to, variant = 'primary', onClick, type = 'button' }) => {
  const buttonClass = styles[variant] || styles.primary;
  
  if (to) {
    return (
      <Link to={to} className={`${styles.button} ${buttonClass}`}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type} 
      className={`${styles.button} ${buttonClass}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;