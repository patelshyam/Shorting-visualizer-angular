let animations = [];
export function getAnimationsForQuickSort(array)
{
  let newArray = array.slice();
   quickSort(0,newArray.length,newArray);
   let tempArray = animations.slice();
   animations = [];
   return tempArray;
}

function quickSort(low,high,array)
{
  if(low < high)
  {
    let j = partation(low,high,array);
    quickSort(low,j,array);
    quickSort(j+1,high,array);
  }
  return array;
}

function partation(low,high,unsortedArray)
{
  let pivote = unsortedArray[low];
  animations.push(["pivoton",low]);
  let i = low;
  let j = high;

  while(i < j)
  {
    do
    {
      i++;
    }while(unsortedArray[i] <= pivote);

    do{
      j--;
    }while(unsortedArray[j] > pivote);

    if(i < j)
    {
      swap(i,j,unsortedArray);
      animations.push(["highLighton",i,j]);
      animations.push(["highLightoff",i,j]);
      animations.push(["swap",i,j]);
    }

  }
  swap(low,j,unsortedArray);
  animations.push(["highLighton",low,j]);
  animations.push(["highLightoff",low,j]);
  animations.push(["swap",low,unsortedArray[low],j,unsortedArray[j]]);
  animations.push(["pivotOff",low]);
  return j;
}

function swap(i,j,unsortedArray)
{
  let temp = unsortedArray[i];
  unsortedArray[i] = unsortedArray[j];
  unsortedArray[j] = temp;
}
