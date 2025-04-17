


type work = {
    image: string;
    title: string;
    description: string;
    date: string;
    textmode?: boolean
}

const Work =({image,title , description,date, textmode}:work) => {
    return (
        <div className=' flex  justify-evenly  m-4 '>
            <div className='size-10 border p-1 rounded-full'>   
          <img src={image} alt="" className=' size-full object-center object-cover rounded-full' />    
            </div>

     <div className=' w-10/12 '>
        <h1 className={`font-semibold ${textmode ? 'text-black': 'text-white' }`}> {title} </h1>
        <p className=' flex justify-between  text-gray-500'> <span> {description}  </span> <span> {date} </span> </p>
     </div>
        </div>
    );
}

export default Work;
