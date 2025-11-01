

import React, { useState ,  } from 'react';

const BubbleSort  = () => {

  const curlybracketsleft = '{';
  const curlybracketsright = '}';
  const greater = '>';
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
    
    
    
     
  

    function  dobubble  (){

        const animations = []; 
        const auxiliaryArray = arrays.slice();
       

      for (let i = 0   ; i < auxiliaryArray.length ; i++  ) {

        let bool  = true ;
          console.log(i);
          let a = 0;
      while ( a < auxiliaryArray.length-1 ){

          console.log(a);
          
             animations.push([a, a + 1 ]);
            animations.push([a, a + 1 ]);
        if(auxiliaryArray[a]< auxiliaryArray[a + 1]){
         animations.push([a, auxiliaryArray[a]]);
         animations.push([a + 1, auxiliaryArray[a + 1]]);
         }
            
     else{
      
          const variable = auxiliaryArray[a] ; 
         auxiliaryArray[a] =  auxiliaryArray[a + 1] ; 
          auxiliaryArray[a + 1]  = variable ; 
          console.log(auxiliaryArray[a]);
          console.log(auxiliaryArray[a+1]);
          animations.push([a, auxiliaryArray[a]]);
          animations.push([a + 1, auxiliaryArray[a + 1]]);
         bool = false ; 
          
         }
    
         a++;
       } 

       if(bool === true )
        break;

    }

console.log(animations);
     return animations;
      
    }
    
    
    
    
    const bubblesort =  () => {
      console.log("asdasdasdsdasd");
      const animations = dobubble(arrays);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('rectangle3');
        //const isColorChange = i % 4 !== 2;
        if ( i % 4 !== 2 && i % 4 !== 3) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? 'red': 'aquamarine';
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
      }
    }
    
    return ( 

        <div >
          
        <div className="sortingpartbubble">
        
        <input className='slider' type='range' min="1" max="100" value={data} onChange={ (e)=>{
          setdata(e.target.value) 
           resetArray() 
          adjustspeed(e.target.value) 
          adjustwidth(e.target.value) 
           }  } />
        
        <p id='slidervalue'> Elements & animationspeed : {data}</p>
        
        <button className='buttonmbubble' onClick={ () =>  bubblesort()   }>merge sort</button>
        
        <div className='rectanglecontainer'>
        
        {arrays.map((array, idx) => (
                  <div className='rectangle3'  style={{height: `${array}px`,width:`${dynamicwidth}px` }}  key={idx} > 
                   </div>
                  ))}
        
        </div>
        </div>
        
        
                    <div className="descriptionbubble">
        
        <h1>DESCRIPTION</h1>
        <p className='Dtext'>
        Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements
         if they are in the wrong order.This algorithm is not suitable for large data sets as its average and worst-
        case time complexity is quite high.
        In Bubble Sort algorithm, 
         traverse from left and compare adjacent elements and the higher one is placed at right side. 
         In this way, the largest element is moved to the rightmost end at first. 
         This process is then continued to find the second largest and place it and so on until the data is sorted.
           </p>
        <h2 className='head2bubble'>COMPLEXITY</h2>
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
        O(n)
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
        

        <p id='pseudocodebubble'>
          <p style={{color: "blue ", display: 'inline'}}>void</p> bubbleSort(int arr[], <p style={{color: "blue ", display: 'inline'}}>int</p> n)<br/>
{curlybracketsleft}<br/>
    <p style={{color: "blue ", display: 'inline'}}>int</p> i, j;<br/>
    bool swapped;<br/>
    <p style={{color: "blue ", display: 'inline'}}>for</p> (i = 0; i {smaller} n - 1; i++) {curlybracketsleft}<br/>
        swapped = false;<br/>
        <p style={{color: "blue ", display: 'inline'}}>for</p> (j = 0; j {smaller} n - i - 1; j++) {curlybracketsleft}<br/>
            <p style={{color: "blue ", display: 'inline'}}>if</p> (arr[j] {greater} arr[j + 1]) {curlybracketsleft}<br/>
                swap(arr[j], arr[j + 1]);<br/>
                swapped = true;<br/>
            {curlybracketsright}<br/>
        {curlybracketsright}<br/>
        <p style={{color: "blue ", display: 'inline'}}>if</p> (swapped == false)<br/>
            break;<br/>
    {curlybracketsright}<br/>
{curlybracketsright}<br/>
</p>
        </div>
                            </div>
                            
             );
        }


export default BubbleSort;