import { useState } from 'react';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';


function Main() {
    const [cloth, setClothes] = useState(data);

    // filter method
    const chosenClothes = (searchTerm) => {
      // we want to analyse all elements and put into new array
      // only categories that are equal to button category
      // i.e. skirt = skirt
      const newClothes = data.filter(element => element.searchTerm === searchTerm );
      setClothes(newClothes);
    }
  
    return (
      <div className="App">
        <div className='cont'>
          <h2 className='back'>Free Standard Shipping!</h2>
        </div>
        <Buttons filteredClothes={ chosenClothes } />
        <Clothes anyCloth={ cloth }/>
      </div>
    );
  
}


export default Main;