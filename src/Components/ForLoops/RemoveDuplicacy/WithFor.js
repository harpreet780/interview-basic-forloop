import React from 'react'

const WithFor = () => {
    const arr = ['John', 'Paul', 'George', 'John', 'Ringo', 'George'];
    let removeDuplicate = [];
    for(let i=0; i<arr.length;i++) {
        if(removeDuplicate.indexOf(arr[i]) === -1) {
            removeDuplicate.push(arr[i])
        }
    }
  return (
    <div className='my-2'>
            <h6 className='ques'><b>Q. Remove Duplicacy Statement With For Loop:</b> [1,5,9,8,6,3,5,9]</h6>
            <p className='success'><b>Ans: </b>
                {JSON.stringify(removeDuplicate)}
            </p>
        </div>
  )
}
export default WithFor;