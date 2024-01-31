import { useDataContext } from "../contexts/DataContext";
import Spinner from "./Spinner";
import styles from "./TokenDetails.module.css";
import TokensGrid from "./TokensGrid";

function TokenDetails() {
  const {
    userAddress,
    results,
    hasQueried,
    wrongAddress,
    walletError,
    isLoading,
  } = useDataContext();

  return (
    <section>
      {isLoading ? (
        <Spinner />
      ) : !walletError ? (
        !wrongAddress ? (
          hasQueried ? (
            <div className={styles.details}>
              <div className={styles.heading}>
                Here are total NFTs collected by:
              </div>
              <div className={styles.address}>{userAddress}</div>

              <div>
                Collected:{" "}
                {results.ownedNfts.length === 0
                  ? "No NFT collected"
                  : results.ownedNfts.length}
              </div>
              <TokensGrid />
            </div>
          ) : (
            <div>Please make a query!</div>
          )
        ) : (
          <div>Please enter a valid Ethereum address!</div>
        )
      ) : (
        <div>Error connecting with wallet!</div>
      )}
    </section>
  );
}

export default TokenDetails;
