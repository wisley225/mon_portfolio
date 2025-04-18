


const Projects = () => {
    return (
        <div>
    <h1 className="text-5xl font-bold mb-10">
    A showcase for my open-source projects. 
    </h1>
<p className=" text-gray-600 mb-20">
I've worked on open-source projects where I've developed 
applications solving real-world problems. Here are some of
 the projects I've worked on.
</p>



<div>
 <div className=" size-12 mb-4 p-2 border rounded-full ">
    <img src={`images/lemon.svg`}  className=" rounded-full object-cover object-center  size-full" />
 </div>
<h1 className=" font-semibold mb-2"> indev/ui</h1>
<p className=" text-gray-600 mb-5"> fine components and template coded by indev .</p>

<span className="text-gray-600"> <a href="ui.indev.me"> ui.indev.me</a></span>
</div>

        </div>
    );
}

export default Projects;
