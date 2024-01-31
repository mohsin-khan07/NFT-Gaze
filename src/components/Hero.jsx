import { useDataContext } from "../contexts/DataContext";
import Button from "./Button";
import styles from "./Hero.module.css";
import Input from "./Input";

function Hero() {
  const { getWalletAddress, getNFTsAndData, walletConnected } =
    useDataContext();

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.title}>NFT Indexer</div>
        <p>Connect your wallet or plug in an address to get all its NFTs!</p>
        <div className={styles.buttons}>
          <div className={styles.inputs}>
            <Button onClick={getWalletAddress}>
              {walletConnected ? "Connected" : "Connect Wallet"}
            </Button>
            <Input />
          </div>
          <Button onClick={getNFTsAndData}>Fetch NFTs</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
