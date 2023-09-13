import React from 'react'

const SecondHighestNumber = () => {
    const arr = [3, 6, 2, 56, 32, 5, 89, 32];
    let largestNum = 0;
    let SecondNum = 0;
    for(let i=0;i<arr.length;i++) {
        if(arr[i] > largestNum){
            SecondNum = largestNum
            largestNum= arr[i]
        }
        if(arr[i] < largestNum && arr[i] > SecondNum) {
            SecondNum = arr[i]
        }
    }

  return (
    <div className='my-2'>
    <h6 className='ques'><b>Q. Second Highest Number Statement:</b> [3, 6, 2, 56, 32, 5, 89, 32]</h6>
    <p className='success'><b>Ans: </b>
        {JSON.stringify(SecondNum)}
    </p>
</div>
  )
}

export default SecondHighestNumber