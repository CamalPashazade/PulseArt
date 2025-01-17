
import Navigation from '../Nav/Navigation';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css'



const Layout = ({ children }) => {

    console.log('Rendering Layout...');
    console.log('Children:', children);
    return (
      <div className={styles.layout}>
     
      
      <Navigation />
          <main className={styles.main}>
            {children}
          </main>
          <Footer/>

        </div>
    
    );
  };
  
  export default Layout;