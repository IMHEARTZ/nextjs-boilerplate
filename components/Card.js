function Card() {
  return (
    <div className="card_wrapper">
      <div className="card_picture">
        <img
          src="https://placehold.co/415x279"
          className="w-full h-auto rounded-tl-mr-15"
        />
        <div class="description">
          <h3>A small modern bedroom that can show off your right side</h3>
          <div className="Card_line"></div>
          <div className="Room-desctiption">
            <div className="Style"> cozy</div>
            <div className="Roomsize"> 25 m²</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
