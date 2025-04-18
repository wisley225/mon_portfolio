import GridTamplate from "./home/GridTamplate";


const Articles = ({textmode}:{textmode:boolean}) => {
    return (
        <div className=" w-8/12 py-20  max-[1015px]:w-full  ">
         <h1 className={`text-5xl font-bold mb-5 ${textmode? `text-black` : `text-white`}`}>
         Writing on front-end development, 
         animation, and more.
       </h1> 

       <p className=" text-gray-600 mb-16">
       I write about front-end development,
       animation, and other topics that interest me.
       Here are some of my latest articles and if you prefer video content, you
       can visit my Youtube channel ( @LNDev )
        </p> 


     <div className=" border-l border-l-neutral-700 pl-5 pb-10">

     <div className="flex items-baseline max-[651px]:flex-col  ">
    <p className="text-neutral-600 mr-20 ">May 20,2024</p>
   <GridTamplate
   textmode={textmode}
   />
  </div>

  <div className="flex items-baseline max-[651px]:flex-col   ">
    <p className="text-neutral-600 mr-20 ">May 20,2024</p>
   <GridTamplate
   textmode={textmode}
   />
  </div>

  <div className="flex items-baseline max-[651px]:flex-col   ">
    <p className="text-neutral-600 mr-20 ">May 20,2024</p>
   <GridTamplate
   textmode={textmode}
   />
  </div>

  <div className="flex items-baseline max-[651px]:flex-col   ">
    <p className="text-neutral-600 mr-20 ">May 20,2024</p>
   <GridTamplate
   textmode={textmode}
   />
  </div>

  <div className="flex items-baseline max-[651px]:flex-col   ">
    <p className="text-neutral-600 mr-20 ">May 20,2024</p>
   <GridTamplate
   textmode={textmode}
   />
  </div>

     </div>
 

 

        </div>
    );
}

export default Articles;
