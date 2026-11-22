import './Card.css'


function CardComp({title, image}) {
  return (
    <>
      <div className="Card">
        <h4>{title }</h4>
              <div className="hover-Card">
                  <img src={image} alt='Some_image_here'></img>
              </div>
      </div>
    </>
  );
}

export default CardComp