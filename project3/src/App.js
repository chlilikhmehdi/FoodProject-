import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import NavScrollExample from './components/Navbar'
import Header from './components/Header'
import Btnn from './components/Btnn'
import Card1 from './components/Card'
import { items } from './Data'
const App = () => {
  const [itemsdata , setItemsdata] = useState(items) //diiiiima khbi data dyalk f useState

  const dataAfficher = (comp)=>{
    if(comp==='All'){
      setItemsdata(items)
    }else{
      const stock = items.filter((i)=>comp===i.category)
      setItemsdata(stock)
    }
  }
  const maping = ['All' , ...new Set(items.map((item)=>item.category))] //hna darna  l filtring bach mayjibch chi btn 2 marat wla ktar mara wahda sf 

  const filtringSearch = (wordForsearch) =>{
    if(wordForsearch !==''){
      let searchTitle = items.filter((item)=>item.title === wordForsearch) //hna radi ijib lina ay title andna f data w kaysawi l arg dyal function
      setItemsdata(searchTitle) //w had title li kaysawi liya arg dyal func howa li an7ote f affichage
    } 
  }
 

return(
    <div className='color-body font '>
    <NavScrollExample filtringSearch={filtringSearch} />
    <Container>
        <Header/>
        <Btnn dataAfficher={dataAfficher} maping = {maping} />
      <Card1 itemsdata = {itemsdata}/> 
    </Container>

  
  </div> 
  )

  

}

export default App