import styles from "./Card.module.css";

export const Card = ({
  descrpition,
  title,
  image,
  forkCount,
  stargazerCount,
}: any) => {
  return (
    <article className={`stack-lg ${styles.card}`}>
      {image && <img src={image} alt="avatarImg" className={styles.image} />}
      <div className="stack-sm">
        <h3 className={styles.title}>{title}</h3>
        {forkCount && stargazerCount && (
          <>
            <small className={styles.subtitle}>🍴 {forkCount}</small>{" "}
            <small className={styles.subtitle}>🌟 {stargazerCount}</small>
          </>
        )}
      </div>
      <p className={styles.descrpition}>{descrpition}</p>
    </article>
  );
};
