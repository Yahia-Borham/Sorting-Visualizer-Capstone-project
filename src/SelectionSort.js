

import React, { useState ,  } from 'react';

const SelectionSort  = () => {

 
  const curlybracketsleft = '{';
const curlybracketsright = '}';
const smaller = '<';
   let  [speed , setspeed]= useState(0);
    let  [data , setdata]= useState(0);
    let  [dynamicwidth , setdynamicwidth]= useState(0);
    let [arrays , setarrays] = useState([]);
  let  ANIMATION_SPEED_MS = speed;


//componentDidMount()
 // resetArray();
//}

function adjustspeed (data) {

    if(data % 100 !== 0 ) 
    setspeed(100 - data )
     else
     setspeed(10 )
    
    }
    
    function adjustwidth(data){

      setdynamicwidth(500/data);
    
    }
    
    
    const randomIntFromInterval = (min, max) =>   {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    const resetArray= () =>  {
      const testarray = [];
      for (let i = 0; i < data; i++) {
        testarray.push(randomIntFromInterval(5, 730));
      }
      setarrays(testarray);
    }
    
    
    
     
  

    function  doselection  (){

        const animations = []; 
        const auxiliaryArray = arrays.slice();
       

      for (let i = 0   ; i < auxiliaryArray.length-1 ; i++  ) {

        let a = i + 1 ; 
        let smallestindex =  a ;
        
      while ( a < auxiliaryArray.length ){

        //animations.push([ a , smallestindex  ]);
        //animations.push([ a , smallestindex  ]);
        if(auxiliaryArray[a] <= auxiliaryArray[smallestindex] ){
            smallestindex = a ; 
         }
          a++ ;
          
      }
    
      if(auxiliaryArray[i] > auxiliaryArray[smallestindex]  ){
          const variable = auxiliaryArray[i]  ; 
          auxiliaryArray[i]  = auxiliaryArray[smallestindex];
          auxiliaryArray[smallestindex] = variable;
          animations.push([ i , smallestindex  ]);
          animations.push([ i , smallestindex  ]);
          animations.push([ i , auxiliaryArray[i]]);
          animations.push([ smallestindex , auxiliaryArray[smallestindex]]);
      }else{
        animations.push([ i , smallestindex  ]);
        animations.push([ i , smallestindex  ]);
        animations.push([ i , auxiliaryArray[i]]);
        animations.push([ smallestindex , auxiliaryArray[smallestindex]]);
      }
        

    }

    return animations;
}


    
    
    
    
    const selectionsort =  () => {
     /* let indextochange = 0 ; 
      let indexwillchangefinla = false ; 
      let oldelements = 0 ; 
      const actuallsize = data - 1;
      let indexwillchange = false;*/
      const animations = doselection(arrays);

      for (let i = 0; i < animations.length; i++) {

      /*  if(indexwillchange !== true){
        if(((((actuallsize - indextochange) + 1) * 2) + 1 + oldelements)  === i){
          indexwillchange = true ; 
          indextochange++ ; 
        }
      }else{
      indexwillchangefinla = true;
      oldelements = oldelements + i;
      }
      */
        const arrayBars = document.getElementsByClassName('rectangle2');
        //const isColorChange = i % 4 !== 2;
        if ( i % 4 !== 2 && i % 4 !== 3) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? 'red': 'aqua';
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS) ;
         
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i *  ANIMATION_SPEED_MS) ;
       
        }
     /*   if(indexwillchangefinla === true)
        indexwillchange = false; */

      }
    }
    
    return ( 

        <div >
          
        <div className="sortingpartselection">
        
        <input className='slider' type='range' min="1" max="100" value={data} onChange={ (e)=>{
          setdata(e.target.value) 
           resetArray() 
          adjustspeed(e.target.value)
          adjustwidth(e.target.value) 
            }  } />
            
        <p id='slidervalue'> Elements & animationspeed : {data}</p>
        
        <button className='buttonselection' onClick={ () =>  selectionsort()   }>merge sort</button>
        
        <div className='rectanglecontainer'>
        
        {arrays.map((array, idx) => (
                  <div className='rectangle2'  style={{height: `${array}px`,width:`${dynamicwidth}px`}}  key={idx} > 
                   </div>
                  ))}
        
        </div>
        </div>
        
        
                    <div className="descriptionselection">
        
        <h1>DESCRIPTION</h1>
        <p className='Dtext'>
        Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the
        smallest (or largest) element from the unsorted portion of the list and moving it to the
        sorted portion of the list. 
The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list
 and swaps it with the first element of the unsorted part. This process is repeated for the remaining
  unsorted portion until the entire list is sorted.
           </p>
        <h2 className='head2selection'>COMPLEXITY</h2>
        <table bgcolor='black' width="500" className='positiontable'>
        
          <tr bgcolor="grey" align="center" >
        <th width="500">
        Average Complexity	
        </th>
        <th width="500">
        O(n2)
        </th>
          </tr >
          <tr bgcolor="grey" align="center">
        <td width="500">
        Best Case
        </td>
        <td width="500">
        O(n2)
        </td>
          </tr>
          <tr bgcolor="grey" align="center">
        <td width="500">
        Worst Case	
        </td>
        <td width="500" >
        O(n2)
        </td>
          </tr>
          <tr bgcolor="grey" align="center">
        <td width="500">
        Space Complexity	
        </td>
        <td width="500">
        O(1)
        </td>
          </tr>
        
        </table>
        
        <h3 className='head3'>C++ IMPLEMENTATIONS</h3>
        <p id='pseudocodeselection'>
           <p style={{color: "blue ", display: 'inline'}}>void</p> selectionSort(<p style={{color: "blue ", display: 'inline'}}>int</p> arr[], <p style={{color: "blue ", display: 'inline'}}>int</p> n) <br/>
{curlybracketsleft }<br/>
    <p style={{color: "blue ", display: 'inline'}}>int</p> i, j, min_idx; <br/>
    <p style={{color: "blue ", display: 'inline'}}>for</p> (i = 0; i {smaller} n - 1; i++) { curlybracketsleft}<br/>
        min_idx = i; <br/>
        <p style={{color: "blue ", display: 'inline'}}>for</p> (j = i + 1; j {smaller} n; j++) { curlybracketsleft}<br/>
            <p style={{color: "blue ", display: 'inline'}}>if</p> (arr[j] {smaller} arr[min_idx]) <br/>
                min_idx = j; <br/>
        {curlybracketsright} <br/>
        <p style={{color: "blue ", display: 'inline'}}>if</p> (min_idx != i) <br/>
            swap(arr[min_idx], arr[i]); <br/>
    {curlybracketsright}<br/>
{curlybracketsright}<br/>
</p>






       
                            </div>
                             </div>
             );
        }


export default SelectionSort;