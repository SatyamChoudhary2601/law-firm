import styles from './App.module.css';
import Client from './components/Client';
import Faq from './components/Faq';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Practice from './components/Practice';
import Team from './components/Team';

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <Introduction />
      <Feature />
      <Practice />
      <Client />
      <Team />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
