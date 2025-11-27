// Sorting Visualizer - JavaScript
const startingArray = document.getElementById('starting-array');
const   generateBtn = document.getElementById('generate-btn');
const arrayContainer = document.getElementById('array-container');
const  sortBtn = document.getElementById('sort-btn');





// return an element between 1 to 100
function generateElement(){
    return Math.floor(Math.random() * 100) + 1;
}
// generate an array with 5 random integers
function generateArray(){
    const arr = [];
    for(let i=0; i<5; i++){
        arr.push(generateElement());
    }
    return arr;
   
}
// create and return an empty div container
function generateContainer(){
    const container = document.createElement('div');
    return container;
}
// take an html element and an array of integers and populate the element with the 5 integers from the array on 5 span
function fillArrContainer(htmlElement, arr){
    htmlElement.innerHTML = '';
    let text = '';
    arr.forEach(num=>{
        text+=`<span>${num}</span>`;

    })
    htmlElement.innerHTML = text;
}
// takes two integers and return true if the first is less than or equal to the second
function isOrdered (int1, int2){
    return int1 <= int2;
}

// swap the element at index with the next one if isOrdered return false
function swapElements(arr, index){
    if(!isOrdered(arr[index], arr[index+1])){
        const temp = arr[index];
        arr[index] =  arr[index+1];
        arr[index+1] = temp;
    }
    return arr;

}

//set the style to dashed red border for the elements at index and index +1
function highlightCurrentEls(htmlElement, index){
    const spans = htmlElement.querySelectorAll('span');
    spans[index].style.border = '1px dashed red';
    spans[index+1].style.border = '1px dashed red';


}

// click generatedBtn use fillArrContainer to fill startingArray with 5 spam and clean arrayContainer
generateBtn.addEventListener('click', function(){
    // Supprimer tous les enfants de arrayContainer SAUF #starting-array
    const children = Array.from(arrayContainer.children);
    children.forEach(child => {
        if (child.id !== 'starting-array') {
            child.remove();
        }
    });
    
    const arr = generateArray();
    fillArrContainer(startingArray, arr);
    
});

function isArraySorted(arr){
    for(let i=0; i< arr.length -1; i++){
        if(!isOrdered(arr[i], arr[i+1])){
            return false;
        }
    }
    return true;
}



sortBtn.addEventListener('click', function(){
    let arr = [];
    const spans = startingArray.querySelectorAll('span');
    spans.forEach(span=>{
        arr.push(parseInt(span.innerText));
    });
   

 highlightCurrentEls(startingArray, 0);
 
    while(!isArraySorted(arr)){
       
        for(let i=0; i< arr.length -1; i++){
           highlightCurrentEls(arrayContainer.querySelector('div:last-child'), i);
            arr = swapElements(arr, i);
            const newEl=generateContainer();
            fillArrContainer(newEl, arr);
            // highlightCurrentEls(newEl, i);
           arrayContainer.appendChild(newEl);
        }


    }  
    arrayContainer.lastChild.style.border = '2px solid green';
console.log('Sorting complete', arrayContainer, arr);

});