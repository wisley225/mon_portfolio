
import  Grid from './home/Grid';


const Projects = ({textmode}:{textmode:boolean}) => {
    return (
        <div className='py-20'>
    <h1 className={`text-5xl font-bold mb-10 w-2/3 max-[800px]:w-full ${textmode ? `text-black`:`text-white`}`}  >
    A showcase for my open-source projects. 
    </h1>
<p className=" text-gray-600 mb-20 w-2/3 max-[800px]:w-full ">
I've worked on open-source projects here I've developed 
applications solving real-world problems. Here are some of
 the projects I've worked on.
</p>

<div className=' grid grid-cols-3 gap-4   max-[980px]:grid-cols-2 max-[690px]:grid-cols-1 '> 
<Grid 
title='Indev/ui'
   image='images/lemon.svg' 
   description='fine components and template coded by indev .'
    link='ui.indev.me'
    textmode={textmode}
/>


<Grid 
   title='Circle'
   image='images/work_img1.svg' 
   description=' Lorem ipsum dolor sit amet consectetur 
   adipisicing elit. Molestias quae et, fugit
   facere, similique aperiam ratione nostrum quaerat'
   link='cirle.indev.me'
   textmode={textmode}
/>


<Grid 
   title='Sharuco'
   image='images/work_img2.svg' 
   
   description=' Lorem ipsum dolor sit amet consectetur 
 adipisicing elit. Molestias quae et, fugit
  facere, similique aperiam ratione nostrum quaerat 
 '
    link='sharuco.indev.me'
    textmode={textmode}
/>


<Grid 
   title='World Portfolios'
   image='images/work_img3.svg' 
  
   description=' Lorem ipsum dolor sit amet consectetur 
 adipisicing elit. Molestias quae et, fugit
  facere, similique aperiam ratione nostrum quaerat 
'
link='wp.indev.me'
textmode={textmode}
/>

<Grid 
   title='CoToCoWind'
   image='images/work_img4.svg' 
 
   description=' Lorem ipsum dolor sit amet consectetur 
 adipisicing elit. Molestias quae et, fugit
  facere, similique aperiam ratione nostrum quaerat .'
link='coto.wind.indev.me'
textmode={textmode}
/>


<Grid 
   title='Ulwo'
   image='images/work_img5.svg' 
   description=' Lorem ipsum dolor sit amet consectetur 
 adipisicing elit. Molestias quae et, fugit
  facere, similique aperiam ratione nostrum quaerat .'
   link='Ulwo.indev.me'
   textmode={textmode}
/>




</div>
</div>
    );
}

export default Projects;
