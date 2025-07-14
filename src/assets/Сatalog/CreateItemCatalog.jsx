import './CreateItemCatalog.css'
export default function CreateItem(props) {
    const { title, cooking_time, img} = props;

    return (
        
       <div id='recipe-container-catalog'>
            <button id='reciper-button-catalog'>
                <img id='recipe-image-catalog' src={img} alt="img" />
            </button>

            <div id='recipe-footer-catalog'>
                 <p className='text-catalog' id='title-text-catalog'>{title}</p>
                 <p className='text-catalog' id='time-text-catalog'>{cooking_time}</p>
                 <p className='text-catalog' id='like-text-catalog'>Likes:</p>
            </div>
       </div>

    );
}
