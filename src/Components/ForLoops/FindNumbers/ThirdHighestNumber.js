import React from 'react'

const ThirdHighestNumber = () => {

    const arr = [3, 6, 2, 56, 32, 5, 89, 32];
    let largestNum = 0;
    let SecondNum = 0;
    let thirdNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            SecondNum = largestNum
            largestNum = arr[i]
        }
        if (arr[i] < largestNum && arr[i] > SecondNum) {
            SecondNum = arr[i]
        }
        if (arr[i] > SecondNum) {
            thirdNum = SecondNum
            SecondNum = arr[i]
        }
        if (arr[i] < SecondNum && arr[i] > thirdNum) {
            thirdNum = arr[i]
        }
    }

    return (
        <div className='my-2'>
            <h6 className='ques'><b>Q. Second Highest Number Statement:</b> [3, 6, 2, 56, 32, 5, 89, 32]</h6>
            <p className='success'><b>Ans: </b>
                {JSON.stringify(thirdNum)}
            </p>
        </div>
    )
}

export default ThirdHighestNumber