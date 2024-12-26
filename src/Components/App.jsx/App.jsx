import React from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import Data from '../Data'

 

function App() {
  return (
    <>
    {/* <Button stdName="ali" stdAge={25}  isStudent={true}/>
    <Button  stdName="faraz" stdAge={21}  isStudent={false}/>
    <Button stdName="suhaib" stdAge={25}  isStudent ={true} />
    <Button/> */}
    {/* <Card /> */}
    {
    Data?
    Data.map((e,i)=>{
       
       return(
        <Card key = {e.id} id = {e.id} image = {e.image} title = {e.title} description={e.description} category = {e.category} price = {e.price} rating ={e.rating}/>
       )
    })
  : <h1>Data not fetch</h1>
  }

    </>
  )
}

export default App