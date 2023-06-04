export const SearchBar = (props: any) => {
  const inputStyle = {
    padding: "15px",
    fontSize: "20px",
  };

  return (
    <div>
      <input
        type="text"
        value={props.query}
        onChange={(e) => props.change(e.target.value)}
        style={inputStyle}
        placeholder="Search repositories"
      />
    </div>
  );
};
