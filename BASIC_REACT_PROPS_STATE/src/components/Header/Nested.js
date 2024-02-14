

const Nested=({children,onSelect})=>{

    return(
    <li>
        <button onClick={onSelect}>{children}</button>
    </li>
    );

}
export default Nested;