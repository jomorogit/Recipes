import './CreateItem.css'
export default function CreateItem(props) {
    const { title, cooking_time, img} = props;

    return (
        
       <div id='recipe-container'>
            <button id='reciper-button'>
                <img id='recipe-image' src={img} alt="img" />
            </button>

            <div id='recipe-footer'>
                 <p className='text' id='title-text'>{title}</p>
                 <p className='text' id='time-text'>{cooking_time}</p>
                 <p className='text' id='like-text'>Likes:</p>
            </div>
       </div>

    );
}
