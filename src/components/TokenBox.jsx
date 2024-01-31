/* eslint-disable react/prop-types */
import styles from "./TokenBox.module.css";

function TokenBox({ img, tokenName }) {
  return (
    <div className={styles.tokenBox}>
      <Image img={img} />
      <Content tokenName={tokenName} />
    </div>
  );
}

function Image({ img }) {
  return (
    <img
      src={img ? img : "ethIcon.svg"}
      alt="Image not available"
      onError={(e) => (e.target.src = "ethIcon.svg")}
    ></img>
  );
}

function Content({ tokenName }) {
  return (
    <div className={styles.content}>
      <span className={styles.title}>Name:</span>
      <span className={styles.value}>{tokenName}</span>
    </div>
  );
}

export default TokenBox;
