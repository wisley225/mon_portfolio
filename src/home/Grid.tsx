
 type DataPros={
    title:string
    image:string;
    description:string;
    link:string
    textmode?:boolean
 }
 const Grid = ({image, description,title,link,textmode}:DataPros) => {
    return (
        <div className=" cursor-pointer hover:bg-gray-50 p-5 rounded-3xl ">
 <div className="  size-12 mb-4 p-2 border rounded-full ">
    <img src={image}  className=" rounded-full object-cover object-center  size-full" />
 </div>
<h1 className={`font-semibold mb-2 ${textmode ? ` text-black`: `text-white`}`}> {title} </h1>
<p className=" text-gray-600 mb-5"> {description}</p>

<span className="text-gray-600 font-medium hover:text-blue-500"> <a href="ui.indev.me"> {link} </a></span>
</div>
    );
 }
 
 export default Grid;
 


























