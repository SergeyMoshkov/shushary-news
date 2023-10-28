import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  CTA,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  Footer,
} from "./components/index";

/**
 * Render the main application component.
 * 
 * @returns {JSX.Element} The rendered application component.
 */
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>Navbar</div>
      </div>

      {/* Hero */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>

      {/* Main content */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Hero />
          <Billing />
          <Business />
          <CardDeal />
          <Testimonials />
          <CTA />
          <Stats />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
