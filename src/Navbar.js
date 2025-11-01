




import { NavLink } from "react-router-dom";


const Navbar = () => {









    return ( 



 

<div className='navigationbar'>
<NavLink className='downtopsortingvisualizer' to={'/'}> SORTING VISUALIZER</NavLink>
<NavLink className="downtopmerge" to={"mergesort"} > MERGE SORT</NavLink>
<NavLink className='downtopbubble'to={"bubblesort "} >BUBBLE SORT</NavLink>
<NavLink className='downtopselection' to={"selectionsort"}>SELECTION SORT</NavLink>

 </div>








     );
}
 
export default Navbar ;