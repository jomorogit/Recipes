import './Header.css'
export default function Header(){
    return(
        <header id='header'>
        <h1>RECIPE SITE</h1>
        <div id='buttons'>
        <button className='button-css'>Go To Home</button>
        <button className='button-css'>My Preference</button>
        <button className='button-css'>Search</button>
        </div>
        </header>
    )
}