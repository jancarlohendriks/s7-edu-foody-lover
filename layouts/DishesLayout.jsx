import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Navigation";

const DishesLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default DishesLayout;
