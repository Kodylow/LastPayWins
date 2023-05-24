import styles from './CurrentWinner.module.css'
import { fromSats } from 'satcomma';
const CurrentWinner = ({currentWinner, isActive, jackpot, status}) => {
  return (
    <div className={styles.block}>
      <p>
        <b>
          {isActive ? "Current " : "Previous "} Winner: {currentWinner}
        </b>
      </p>
      <p>₿ {fromSats(jackpot)}</p>
    </div>
  );
};
export default CurrentWinner;