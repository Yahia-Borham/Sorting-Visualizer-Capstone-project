import React, { useState ,  } from 'react';

const MergeSort = () => {

  
const curlybracketsleft = '{';
const curlybracketsright = '}';
const bracketsleft  = '(';
const bracketsright  = ')';
const greater = '>';
const smaller = '<';
const semicolon = ';';
  let  [speed , setspeed]= useState(0);
let  [data , setdata]= useState(1);
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
 setspeed(10)

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



 

const  getMergeSortAnimations = (array) => {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }

}




const mergeSort =  () => {
  
  const animations = getMergeSortAnimations(arrays);
  console.log(animations);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('rectangle1');
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? 'red': 'steelblue';
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
  
<div className="sortingpartmerge">

<input className='slider' type='range' min="1" max="100" value={data} onChange={ (e)=>{
  setdata(e.target.value) 
   resetArray() 
   adjustspeed(e.target.value)
     adjustwidth(e.target.value)   }  } />

<p id='slidervalue'> Elements & animationspeed : {data}</p>

<button className='buttonmerge' onClick={ () =>  mergeSort()   }>merge sort</button>

<div className='rectanglecontainer'>

{arrays.map((array, idx) => (
          <div className='rectangle1'  style={{height: `${array}px`,width:`${dynamicwidth}px` }}  key={idx} > 
           </div>
          ))}

</div>
</div>


            <div className="descriptionmerge">

<h1>DESCRIPTION</h1>
<p className='Dtext'>
Merge sort is defined as a sorting algorithm that works by dividing an array into smaller<br/>
subarrays, sorting each subarray, and then merging the sorted subarrays back together to<br/>
form the final sorted array.<br/>
In simple terms, we can say that the processof merge sort is to divide the array into two halves,<br/>
 sort each half, and then merge the sorted halves back together.This process is repeated until<br/>
the entire array is sorted.
   </p>
<h2 className='head2merge'>COMPLEXITY</h2>
<table bgcolor='black' width="500" className='positiontable'>

  <tr bgcolor="grey" align="center" >
<th width="500">
Average Complexity	
</th>
<th width="500">
O(n log n)
</th>
  </tr >
  <tr bgcolor="grey" align="center">
<td width="500">
Best Case
</td>
<td width="500">
O(n  log n)
</td>
  </tr>
  <tr bgcolor="grey" align="center">
<td width="500">
Worst Case	
</td>
<td width="500" >
O(n  log n)
</td>
  </tr>
  <tr bgcolor="grey" align="center">
<td width="500">
Space Complexity	
</td>
<td width="500">
O(n)
</td>
  </tr>

</table>

<h3 className='head3'>C++ IMPLEMENTATIONS</h3>

<p id='pseudocodemerge'>

<p style={{color: "blue ", display: 'inline'}}>void </p>merge(<p style={{color: "blue ", display: 'inline'}}>int </p> array[], <p style={{color: "blue ", display: 'inline'}}>int </p> const left, <p style={{color: "blue ", display: 'inline'}}>int </p> const mid,<br/>
          <p style={{color: "blue ", display: 'inline'}}>int </p> const right)<br/>
{curlybracketsleft}<br/>
    <p style={{color: "blue ", display: 'inline'}}>int </p>const subArrayOne = mid - left + 1{semicolon}<br/>
    <p style={{color: "blue ", display: 'inline'}}>int </p>const subArrayTwo = right - mid{semicolon}<br/><br/>
    <p style={{color: "blue ", display: 'inline'}}>auto </p> *leftArray = new <p style={{color: "blue ", display: 'inline'}}>int </p>[subArrayOne],<br/>
         *rightArray = new <p style={{color: "blue ", display: 'inline'}}>int </p>[subArrayTwo];<br/>
    leftArray[] and rightArray[]<br/><br/>
    <p style={{color: "blue ", display: 'inline'}}>for </p> (<p style={{color: "blue ", display: 'inline'}}>auto </p> i = 0; i {smaller} subArrayOne; i++)<br/>
        leftArray[i] = array[left + i];<br/>
    <p style={{color: "blue ", display: 'inline'}}>for </p>(<p style={{color: "blue ", display: 'inline'}}>auto </p> j = 0; j {smaller} subArrayTwo; j++)<br/>
        rightArray[j] = array[mid + 1 + j];<br/><br/>
    <p style={{color: "blue ", display: 'inline'}}>auto </p> indexOfSubArrayOne = 0, indexOfSubArrayTwo = 0;<br/>
    <p style={{color: "blue ", display: 'inline'}}>int </p> indexOfMergedArray = left;<br/><br/>
    <p style={{color: "blue ", display: 'inline'}}>while </p> {bracketsleft}indexOfSubArrayOne {smaller} subArrayOne && indexOfSubArrayTwo {smaller} subArrayTwo {bracketsright} {curlybracketsleft}<br/>
        <p style={{color: "blue ", display: 'inline'}}>if </p> {bracketsleft}leftArray[indexOfSubArrayOne]<br/>
            {smaller} = rightArray[indexOfSubArrayTwo]{bracketsright} {curlybracketsleft}<br/>
            array[indexOfMergedArray]<br/>
                = leftArray[indexOfSubArrayOne];<br/>
            indexOfSubArrayOne++;<br/>
        {curlybracketsright}<br/>
        <p style={{color: "blue ", display: 'inline'}}>else </p> {curlybracketsleft}<br/>
            array[indexOfMergedArray]<br/>
                = rightArray[indexOfSubArrayTwo];<br/>
            indexOfSubArrayTwo++;<br/>
        {curlybracketsright}<br/>
        indexOfMergedArray++;<br/>
    {curlybracketsright}<br/><br/>
    <p style={{color: "blue ", display: 'inline'}}>while </p> {bracketsleft}indexOfSubArrayOne {smaller} subArrayOne{bracketsright} {curlybracketsleft}<br/>
        array[indexOfMergedArray]<br/>
            = leftArray[indexOfSubArrayOne];<br/>
        indexOfSubArrayOne++;<br/>
        indexOfMergedArray++;<br/>
    {curlybracketsright}<br/>
    <p style={{color: "blue ", display: 'inline'}}>while </p> (indexOfSubArrayTwo {smaller} subArrayTwo) {curlybracketsleft}<br/>
        array[indexOfMergedArray]<br/>
            = rightArray[indexOfSubArrayTwo];<br/>
        indexOfSubArrayTwo++;<br/>
        indexOfMergedArray++;<br/>
    {curlybracketsright}<br/>
    <p style={{color: "blue ", display: 'inline'}}>delete[] </p> leftArray;<br/>
    <p style={{color: "blue ", display: 'inline'}}>delete[] </p>[] rightArray;<br/>
{curlybracketsright}<br/>
</p>
<p id='pseudocodemerge2'>
<p style={{color: "blue ", display: 'inline'}}>void </p> mergeSort(<p style={{color: "blue ", display: 'inline'}}>int </p> array[], <p style={{color: "blue ", display: 'inline'}}>int </p> const begin, <p style={{color: "blue ", display: 'inline'}}>int </p> const end)<br/>
{curlybracketsleft}<br/>
    <p style={{color: "blue ", display: 'inline'}}>if </p> (begin {greater}= end)<br/>
        return;<br/><br/>
 
    <p style={{color: "blue ", display: 'inline'}}>int </p> mid = begin + (end - begin) / 2;<br/>
    mergeSort(array, begin, mid);<br/>
    mergeSort(array, mid + 1, end);<br/>
    merge(array, begin, mid, end);<br/>
{curlybracketsright}<br/>
<p style={{color: "blue ", display: 'inline'}}>void </p> printArray(<p style={{color: "blue ", display: 'inline'}}>int </p> A[], <p style={{color: "blue ", display: 'inline'}}>int </p> size)<br/>
{curlybracketsleft}<br/>
    <p style={{color: "blue ", display: 'inline'}}>for </p> (<p style={{color: "blue ", display: 'inline'}}>int </p> i = 0; i {smaller} size; i++)<br/>
        cout {smaller}{smaller} A[i] {smaller}{smaller} " ";<br/>
    cout {smaller}{smaller} endl;<br/>
{curlybracketsright}<br/>
</p>

</div>
                    </div>
                    
     );
}

export default MergeSort;