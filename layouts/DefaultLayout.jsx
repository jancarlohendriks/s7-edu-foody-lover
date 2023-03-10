import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Navigation";

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default DefaultLayout;
