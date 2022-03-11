function SimilarPlaceCard(props) {
  return (
    <div className="h-80 w-56 bg-lightgreen md:mt-0 mt-3">
      <img className="h-68 w-full" src={props.img} alt="Some Img" />
      <div className="text-center mt-3 font-medium">{props.place}</div>
    </div>
  );
}

export default SimilarPlaceCard;
