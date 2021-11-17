import { Title } from "../common-ui";
import styles from "./styles.module.scss";

export const Homepage = () => {
  return (
    <div>
      <Title>Accueil</Title>
      <div className={styles.main}>Contenu</div>
    </div>
  );
};
