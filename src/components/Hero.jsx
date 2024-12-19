import React from "react";

const Hero = () => {
  const cardData = [
    {
      id: 1,
      title: "Hello Card 1",
      content: "This is a sample content for the first card",
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 2,
      title: "Hello Card 2",
      content: "This is a sample content for the Second card",
      image: "https://picsum.photos/200/300?grayscale",
    },
    {
      id: 3,
      title: "Hello Card 3",
      content: "This is a sample content for the Third card",
      image: "https://picsum.photos/200/300/?blur=2",
    },
  ];

  return (
    <div>
      <div className="h-24 w-full py-6 bg-orange-400 ">
        <h1 className="text-4xl text-center text-blue-800">
          Welcome to the Hero Section
        </h1>
      </div>


      <div className="w-full justify-around h-auto bg-zinc-600 flex gap-5 ">
      {cardData.map((data) => {
        return (
         
            <div className="card flex gap-5 my-8 h-auto w-96 bg-blue-900 text-center  rounded-lg">
              <div key={data.id} className="card w-full">
                <div className="w-full flex flex-col items-center  ">
                  <h1 className="mt-4 text-black p-4 rounded-lg text-white ">
                    {data.title}
                  </h1>
                  <img className="my-5 w-3/4 object-cover rounded-lg " src={data.image} alt="" />
                  <p className=" text-black m-4 text-white">{data.content}</p>
                  <a href="/Explore"> <button className="px-8 rounded my-4 py-1 border-2 border-black">Explore</button></a>
                </div>
              </div>
            </div>
         
        );
      })}

    </div>
    </div>
  );
};

export default Hero;

{
  /* <h1>Hello Card</h1>

<div className='card h-80 w-80 bg-yellow-500 text-center rounded-lg'>
<h1>hello card 2</h1> 
</div>
<div className='card h-80 w-80 bg-yellow-500 text-center rounded-lg'>
<h1>Hello card 3</h1>
</div>
<div className='card h-80 w-80 bg-yellow-500 text-center rounded-lg'>
<h1>Hello card 4</h1>
</div>  */
}
