import { Button } from "react-bootstrap"
import { Card } from "react-bootstrap"
import "../assets/costomes.css"
import { data } from "../faker/Data"

const Home = () => {
  return (
    <>
    
<div className="box">
  {data.map((item,index)=>{
    return <div className="row_box " key={index}>
    <h1 className="background_colors">{item.name}</h1>
        <Card> 
        <Card.Header className="tital_box">{item.titale}</Card.Header>
        
          <img src={item.photo} alt="" /> 
        <Button variant="link">More</Button> 
        </Card>
    </div>
  })}


</div>
      </>
  )
}

export default Home