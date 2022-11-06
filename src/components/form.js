export const SearchForm = ({
  searchParams,
  setSearchParams,
  searchParamsValue
}) => {
  function handleChangeSearch(event) {
    event.preventDefault();
    let filter = event.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Search repo"
        value={searchParamsValue}
        onChange={handleChangeSearch}
      />
    </form>
  );
};

export default SearchForm;
