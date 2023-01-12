const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', height: '700px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;