import React from "react";

function Card({values, handleClick, index}) {
  const {song, artist, image, favt} = values;
  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md">
      <div className=" flex gap-4 pb-5 relative">
        <div className="w-20 h-20 bg-orange-600 rounded-md">
          <img className="h-full w-full object-cover" src={image} alt="" />
        </div>
        <div className="mt-3">
          <h1 className="font-bold">{song}</h1>
          <h2 className="font-semibold">{artist}</h2>
        </div>
      </div>
      <button onClick={()=>handleClick(index)} className={`${favt ? "bg-teal-600" : "bg-orange-600"} px-5 py-1 rounded-full ${favt ? "ml-14" : "ml-4"} text-white font-semibold`}>{favt ? "Added" : "Add to favaratore"}</button>
    </div>
  );
}

export default Card;
