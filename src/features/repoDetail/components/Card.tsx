import styles from "./Card.module.css";
type TLang = { color: string; name: string };
type TProps = {
  description: string | undefined;
  title: string | undefined;
  image: string | undefined;
  forkCount: string | undefined;
  stargazerCount: string | undefined;
  languages: TLang[];
};
export const Card = ({
  description,
  title,
  image,
  forkCount,
  stargazerCount,
  languages,
}: TProps) => {
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
      <p className={styles.descrpition}>{description}</p>
      <p className={styles.descrpition}>Languages:</p>
      {languages?.map(({ color, name }) => (
        <button style={{ background: color }} disabled>
          {name}
        </button>
      ))}
    </article>
  );
};
