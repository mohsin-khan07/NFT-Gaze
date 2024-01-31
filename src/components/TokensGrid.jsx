import { useDataContext } from "../contexts/DataContext";
import TokenBox from "./TokenBox";
import styles from "./TokensGrid.module.css";

function TokensGrid() {
  const { results } = useDataContext();

  return (
    <div className={styles.grid}>
      {results.ownedNfts.map((token) => (
        <TokenBox
          key={token.tokenId}
          img={token?.raw.metadata?.image ?? "ethIcon.svg"}
          tokenName={token.name?.length === 0 ? "No Name" : token.name}
        />
      ))}
    </div>
  );
}

export default TokensGrid;

// {Utils.formatUnits(
//   token.tokenBalance,
//   tokenDataObjects[i].decimals
// )}

// src={tokenDataObjects[i].logo}
//           tokenName={tokenDataObjects[i].name}
//           symbol={tokenDataObjects[i].symbol}

{
  /* <div className={styles.grid}>
      <TokenBox balance="27" src="ethIcon.svg" tokenName="eth" symbol="eth" />
      <TokenBox balance="27" src="ethIcon.svg" tokenName="eth" symbol="eth" />
      <TokenBox balance="27" src="ethIcon.svg" tokenName="eth" symbol="eth" />
      <TokenBox balance="27" src="ethIcon.svg" tokenName="eth" symbol="eth" />
      {results.tokenBalances.map((token, i) => {
        <TokenBox
          balance="27"
          src="ethIcon.svg"
          tokenName="eth"
          symbol="eth"
        />;
      })}
    </div> */
}
