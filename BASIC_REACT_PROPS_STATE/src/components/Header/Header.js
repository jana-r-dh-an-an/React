import logo from '../../assets/react-core-concepts.png'



const values=["Fundamental","Core","Crucial","Different"];
function createRandom(max){
return Math.floor(Math.random()*(max+1));
}
const Header=()=>{
  const dynamicValue=values[createRandom(3)]
  return(
  <header>
  <img src={logo} alt="Stylized atom" />
  <h1>React Essentials</h1>
  <p>
    {dynamicValue} React concepts you will need for almost any app you are
    going to build!
  </p>
</header>
  )
}

export default Header;