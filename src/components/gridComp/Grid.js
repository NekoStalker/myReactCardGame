import React from "react";
import Card from '../cardComp/Card';
import './Grid.css';
function Grid({images}) {
  
  const [visibleItems, setVisibleItems] = React.useState([]);  
  const [fisnishedItems, setFinishedItems] = React.useState([]);  
  const checkItems = (firstItem, secondItem) => {
    const firstImage = images.cats.find(({id}) => id === firstItem.id);
    const secondImage = images.cats.find(({id}) => id === secondItem.id);
    if(firstImage.url === secondImage.url) {
        setFinishedItems((items)=>[...items,firstItem, secondItem]);
    }
  }; 
  const handleClick = (id) => {
    if(fisnishedItems.includes(id) || visibleItems.includes(id))
     return;
    switch(visibleItems.length) {
      case 0:
        setVisibleItems([id]);
        break;
      case 1:
        setVisibleItems((items)=>[...items, id]);
        checkItems(visibleItems[0], id);
        setTimeout(() => {
          setVisibleItems([]);
        }, 100);
        break
      default:
        setVisibleItems([]);
    }
  }
  return (
        <div className='card-container'>
          {images.cats.map(item => <Card key={item.id} id={item.id} image={item.url} isVisible={visibleItems.includes(item.id)} isFinished={fisnishedItems.includes(item.id)} onCardClick={handleClick}/>)}
       </div>
      );
}

export default Grid;