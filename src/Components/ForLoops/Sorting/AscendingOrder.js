import React from 'react'

const AscendingOrder = () => {
    const array = ["abc", "word", "name", "class"];
    let sortArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                sortArray = array[j]
                array[j] = array[i]
                array[i] = sortArray
            }
        }
    }


    return (
        <div className='my-2'>
            <h6 className='ques'><b>Q. Ascending Order Statement: </b> [abc, word, name, class]</h6>
            <p className='success'><b>Ans: </b>
                {JSON.stringify(array)}
            </p>
        </div>
    )
}

export default AscendingOrder;