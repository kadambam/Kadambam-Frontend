const SingleCard = () => {
    const card = {
      title: "Find Your Dream Home",
      description: "Luxury apartments and villas",
      buttonText: "Explore now",
      image: "https://picsum.photos/200/300?random=1",
      bgColor: "bg-green-600",
    };
  
    return (
      <div className="flex w-110 h-52 rounded-lg overflow-hidden shadow-md ">
        <div className={`p-6 flex-1 text-white ${card.bgColor}`}>
          <h2 className="text-xl font-bold">{card.title}</h2>
          <p className="text-sm mt-2">{card.description}</p>
          <button className="mt-4 px-4 py-2 bg-white text-black font-medium rounded-lg">
            {card.buttonText}
          </button>
        </div>
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${card.image})` }}
        ></div>
      </div>
    );
  };
  
  export default SingleCard;
  