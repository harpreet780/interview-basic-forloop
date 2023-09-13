import React from 'react'

const WithFilter = () => {
    const arr=[1,5,9,8,6,3,5,9];
    const filterList = arr.filter((item,index)=> arr.indexOf(item) === index);

  return (
    <div className='my-2'>
            <h6 className='ques'><b>Q. Remove Duplicacy Statement  With Filter:</b> [1,5,9,8,6,3,5,9]</h6>
            <p className='success'><b>Ans: </b>
                {JSON.stringify(filterList)}
            </p>
        </div>
  )
}

export default WithFilter;