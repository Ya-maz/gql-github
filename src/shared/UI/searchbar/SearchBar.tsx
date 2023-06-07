import "./SearchBar.css";

export const SearchBar = (props: any) => {
  return (
    <div className="stack-lg">
      <input
      className="search"
        type="text"
        value={props.query}
        onChange={(e) => props.change(e.target.value)}
        placeholder="Search repositories"
      />
    </div>
  );
};
