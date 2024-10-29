import "./Header.css"
import ReactImg from '../../assets/react-core-concepts.png';
const reactdescription = ["Fundamental", "Crucial", "Core"]

function genRandimInt(max){
  return Math.floor(Math.random()*(max+1));
}




export default function Header(){
  const description = reactdescription[genRandimInt(2)]

  return(<header>
    <img src={ReactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>)
}