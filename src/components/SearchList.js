const SearchList = (props) => {
    return (
        <div className="pa2">
            <input
            className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="type in here"
                onChange={props.searchChange}
            />
        </div>
    )
}

export default SearchList;