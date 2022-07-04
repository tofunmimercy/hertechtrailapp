import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../img/Rectangle 18987.png"
import img1 from "../img/HERTECH.png"
import image2 from "../img/image2.png"
import image4 from "../img/Vector.png"
import "../css/home.css"
import image5 from "../img/Group 7 (2).png"
import Grid from '@material-ui/core/Grid';
import Paper from '@mui/material/Paper';
import Box from '@material-ui/core/Box';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider, styled} from '@mui/material/styles';
import img5 from "../img/Logo.png"
import img6 from "../img/logo3.png"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { textAlign } from "@mui/system";
import dollar from"../img/dollar-sign.png";
import briefcase from"../img/briefcase.png";
import mappin from"../img/map-pin.png";
import logo4 from "../img/logo4.png";

const Item = styled(Paper)
(({theme}) => ({
  backgroundColor:
  theme.palette.mode ==='dark'?
  '#1A2027': '#fff',
  ...theme.typography.body2,
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign:'left',
  color:
  theme.palette.text.secondary,
}));
const clickHandler = () => {
  console.log("test");
};

export default function Component() {
  return (
<div>
  <img src={image}  alt=""/>

  <div class="box">
  <div><img src={img1} alt=""/></div>
</div>

<div class="parent">
 <div><img src={image2} alt=""/></div>
 <div><img src={image4} alt="" /></div>
 <div><img src={image5} alt=""/></div>
 <div><img src={image2} alt=""/></div>
 <div><img src={image4} alt="" /></div>
 <div><img src={image5} alt=""/></div>
</div>

 <div className='grid w-full h-auto grid-cols-2 gap-4 px-10 pb-10'>
  <div className='w-full h-auto row-start-1 row-end-3 py-10 bg-gray-100 rounded-3x1'>
    <h1 className='text-left px-20 text-3x1 font-bold text-black'>1,000,000+ jobs available for you</h1>
  <p className='text-left px-20 text-gray-700 text-lg'>Lorem ipsum is placeholder text commonly used in the graphic.</p>

  <div >
  <Box sx={{ flexGrow: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5,}}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Item>Job title</Item>
      </Grid>
      <Grid item xs>
        <Item>Location</Item>
      </Grid>
      <Grid item xs>
        <Item>Job type</Item>
      </Grid>
    </Grid>
  </Box>
  </div>
  


  <div className='px-12 pt-8 h-auto bg-gray-100'>
    <div className="w-full h-auto gap-3 flex bg-white rounded-2x1 px-4 py-8" onClick={clickHandler} >
      <img src={img5}/>
    <div>
    <div className='flex justify-between'>
    <div>
    <h1 className='font-semibold text-base'> Product Manager-Remote</h1>
    <p className='text-gray-500'>Meta</p>
    </div> 
    <p className="text-right text-gray-500 ml-10">Posted 5mins ago</p>
    </div>
    <div className="flex gap-3 pt-3">
      <img src={mappin }/>
      <p className="text-sm text-gray-500  pt-1 -ml-1"> USA, Remote</p>
      <img src={briefcase }/>
      <p className="text-sm text-gray-500  pt-1 -ml-1"> Full-time</p>
      <img src={dollar}/>
      <p className="text-sm text-gray-500  pt-1 -ml-2"> 120k-130k</p>
    </div>
      </div>
      </div>
</div>

<div className='px-12 pt-8 h-auto bg-gray-100'>
    <div className="w-full h-auto gap-3 flex bg-white rounded-2x1 px-4 py-8" onClick={clickHandler} >
      <img src={img6}/>
    <div>
    <div className='flex justify-between'>
    <div>
    <h1 className='font-semibold text-base'> Data Analytics</h1>
    <p className='text-gray-500'>Loom Inc.</p>
    </div> 
    <p className="text-right text-gray-500 ml-32">Posted 18hrs ago</p>
    </div>
    <div className="flex gap-3 pt-3">
      <img src={mappin }/>
      <p className="text-sm text-gray-500  pt-1 -ml-1">Australia</p>
      <img src={briefcase }/>
      <p className="text-sm text-gray-500  pt-1 -ml-1"> Full-time</p>
      <img src={dollar}/>
      <p className="text-sm text-gray-500  pt-1 -ml-2"> 120k-130k</p>
    </div>
      </div>
      </div>
</div>

<div className='px-12 pt-8 h-auto bg-gray-100'>
    <div className="w-full h-auto gap-3 flex bg-white rounded-2x1 px-4 py-8" onClick={clickHandler} >
      <img src={logo4}/>
    <div>
    <div className='flex justify-between'>
    <div>
    <h1 className='font-semibold text-base'> Data Analytics</h1>
    <p className='text-gray-500'>Meta</p>
    </div> 
    <p className="text-right text-gray-500 ml-32">Posted 18hrs ago</p>
    </div>
    <div className="flex gap-3 pt-3">
      <img src={mappin }/>
      <p className="text-sm text-gray-500  pt-1 -ml-1"> Australia</p>
      <img src={briefcase }/>
      <p className="text-sm text-gray-500  pt-1 -ml-1"> Full-time</p>
      <img src={dollar}/>
      <p className="text-sm text-gray-500  pt-1 -ml-2"> 120k-130k</p>
    </div>
      </div>
      </div>
</div>
<div className='px-12 pt-8 h-auto bg-gray-100'>
    <div className="w-full h-auto gap-3 flex bg-white rounded-2x1 px-4 py-8" onClick={clickHandler} >
      <img src={logo4}/>
    <div>
    <div className='flex justify-between'>
    <div>
    <h1 className='font-semibold text-base'> Data Analytics</h1>
    <p className='text-gray-500'>Meta</p>
    </div> 
    <p className="text-right text-gray-500 ml-32">Posted 18hrs ago</p>
    </div>
    <div className="flex gap-3 pt-3">
      <img src={mappin }/>
      <p className="text-sm text-gray-500  pt-1 -ml-1"> Australia</p>
      <img src={briefcase }/>
      <p className="text-sm text-gray-500  pt-1 -ml-1"> Full-time</p>
      <img src={dollar}/>
      <p className="text-sm text-gray-500  pt-1 -ml-2"> 120k-130k</p>
    </div>
      </div>
      </div>
</div>

<div className='px-12 pt-8 h-auto bg-gray-100'>
    <div className="w-full h-auto gap-3 flex bg-white rounded-2x1 px-4 py-8" onClick={clickHandler} >
      <img src={img6}/>
    <div>
    <div className='flex justify-between'>
    <div>
    <h1 className='font-semibold text-base'> Data Analytics</h1>
    <p className='text-gray-500'>Loom Inc.</p>
    </div> 
    <p className="text-right text-gray-500 ml-32">Posted 10mins ago</p>
    </div>
    <div className="flex gap-3 pt-3">
      <img src={mappin }/>
      <p className="text-sm text-gray-500  pt-1 -ml-1">Australia</p>
      <img src={briefcase }/>
      <p className="text-sm text-gray-500  pt-1 -ml-1"> Full-time</p>
      <img src={dollar}/>
      <p className="text-sm text-gray-500  pt-1 -ml-2"> 120k-130k</p>
    </div>
      </div>
      </div>
</div>








</div>
</div>

<div className='grid w-full h-auto grid-cols-2 gap-4 px-10 pb-10'>
  <div className='w-full h-auto row-start-1 row-end-3 py-10 bg-gray-100 rounded-3x1'>
    <h1 className='text-left px-20 text-3x1 font-bold text-black'></h1>
  <p className='text-left px-20 text-gray-700 text-lg'></p>

</div>
</div>
</div>

    
   




  )

}




















