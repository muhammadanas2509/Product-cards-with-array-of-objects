import React from 'react'
import Card from './Compounents/Card/Card'
import Data from './Compounents/Data';

const App = () => {
 
  return (
    <>
     {Data ? (    
        Data.map((e, i) => {  
          return (
            <div className='cards-container'>
            <Card
              key={e.id} 
              imgSrc={e.image}
              title={e.title}
              Category={e.category}
              price={e.price}
              rate={e.rating.rate}
              count={e.rating.count}
            />
            </div>
          );
        })
      ) : (
        <h1>Data not fetch</h1>
      )}

    </>
  )
}

export default App