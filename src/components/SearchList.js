const SearchList = (props) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--light-green bg-lightest-blue"
                type="search"
                placeholder="Search"
                onChange={props.searchChange}
            />
        </div>
    )
}

export default SearchList;