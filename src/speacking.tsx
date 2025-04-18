import GridTamplate from "./home/GridTamplate";


const Speacking = ({textmode}:{textmode:boolean}) => {
    return (

  <>
    <div className=" w-2/3 py-20 max-[715px]:w-full">
            <h1 className= {`text-5xl font-bold mb-10 ${textmode ? `text-black`:`text-white`}`}>
            I have been a speaker at 
            various international conferences and 
            featured in numerous tech podcasts.
            </h1>
            <p className=" text-gray-600 ">
            Engaging with the community 
            through public speaking is something 
            I particularly enjoy, as it allows for
            richer interaction compared to written formats.
            Participating in podcasts is also a passion of mine, 
            as it provides a dynamic platform to discuss and delve
            deeper into the nuances of front-end development.
            </p>     
        </div>

 
        <div className=" flex items-baseline  max-[630px]:flex-col ">
        <p className="mr-20  font-medium">May 20,2024</p>
 
            <GridTamplate
              textmode={textmode}
            />
        </div>
  
  </>
       
      
    );
}

export default Speacking;
