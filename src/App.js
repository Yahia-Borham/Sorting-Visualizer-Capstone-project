




import { Routes , Route } from 'react-router-dom';
import Home from './Home';
import MergeSort from './MergeSort';
import BubbleSort from './BubbleSort';
import Navbar from './Navbar';
import SelectionSort from './SelectionSort';
function App() {






return(

<>
<Navbar></Navbar>
<Routes>
<Route path='mergesort' element = {<MergeSort/>}/>
<Route path='bubblesort' element = {<BubbleSort/>}/>
<Route path='selectionsort' element={<SelectionSort/>}/>
<Route path='/' element = {<Home/>}/>
</Routes>
</>

);



}

export default App;
