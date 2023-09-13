import React from 'react'

const HighestNumber = () => {
    const arr = [3, 6, 2, 56, 32, 5, 89, 32];
    let largestNum = 0;
     for(let i=0; i<arr.length;i++) {
        if(arr[i] > largestNum) {
            largestNum= arr[i];
        }
     }
  

    return (
        <div className='my-2'>
            <h6 className='ques'><b>Q. Highest Number Statement:</b> [3, 6, 2, 56, 32, 5, 89, 32]</h6>
            <p className='success'><b>Ans: </b>
                {JSON.stringify(largestNum)}
            </p>
        </div>
    )
}

export default HighestNumber