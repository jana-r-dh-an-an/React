

const RoundBox=()=>{
    const RectangleBox={
    width: '100px',
    height: '100px',
    backgroundColor:'#ff3432',
    margin: '10px',
    display: 'inline-block',
    fontweight:'900',
    }
    return <div style={boxStyle}>
        {id}
         <button type="button" class="btn btn-outline-primary">Click me</button>
        </div>;
}
export default RoundBox;