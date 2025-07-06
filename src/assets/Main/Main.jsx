import './Main.css'
import bg from './BG.png';
export default function Main(){
    return(
    <div id='block-main'>
         <div id='block-text'>
            <h1 id='main-text'>Your favorite recipes — all in one place</h1>
            <p id='main-underText'>Quick, tasty, and easy to follow. Ideas for breakfast, dinner, and daily inspiration.</p>
         </div>
         <div id='block-image'>
            <img id='main-image' src={bg} alt="ups" /> 
        </div>
    </div>

       
       
    )
}