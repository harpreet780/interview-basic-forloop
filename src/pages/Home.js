import React from 'react'
import AscendingOrder from '../Components/ForLoops/Sorting/AscendingOrder';
import DescendingOrder from '../Components/ForLoops/Sorting/DescendingOrder';
import HighestNumber from '../Components/ForLoops/FindNumbers/HighestNumber';
import SecondHighestNumber from '../Components/ForLoops/FindNumbers/SecondHighestNumber';
import WithFilter from '../Components/ForLoops/RemoveDuplicacy/WithFilter';
import WithFor from '../Components/ForLoops/RemoveDuplicacy/WithFor';

const Home = () => {
  return (
    <div className='home'>
      <div className='spacing-Wrap'>
        <h4>Sorting</h4>
        <AscendingOrder />
        <DescendingOrder />
      </div>
      <div className='spacing-Wrap'>
        <h2>Find Highest Number list</h2>
        <h5>Find Highest number in an array</h5>
        <HighestNumber />
        <h5>Find Second Highest number in an array</h5>
        <SecondHighestNumber />
      </div>
      <div className='spacing-Wrap'>
        <h2>Remove Duplicacy</h2>
        <h5>Remove Duplicacy with Filter</h5>
         <WithFilter />
         <h5>Remove Duplicacy with for loop</h5>
         <WithFor/>
      </div>
    </div>
  )
}

export default Home;