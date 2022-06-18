import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright <span className={styles.brand}>Edu Mart</span> &copy;{' '}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;