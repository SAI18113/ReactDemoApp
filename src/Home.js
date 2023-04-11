import { useNavigate } from 'react-router-dom'
import Card from './Card'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'

const Home = () => {
    const navigate = useNavigate()
    const [sCount, setsCount] = useState(0)
    useEffect(() => {
        console.log('use effect calling .........')
    },[sCount])
    const onCardClick = (title) => {
        // console.log('card clicked')
        navigate('/details', {
            state: {
                title: title
            }
        })
    }
    return (
        <div>
            <div className='card-container'>
                <Card title="Python" onClick={() => onCardClick("Python")} />
                <Card title="Java" onClick={() => onCardClick("Java")} />
                <Card title="C++" onClick={() => onCardClick("C++")} />
            </div>
            <h3 style={{textAlign:'center'}}>{`Subscriber Count: ${sCount}`}</h3>
            <div style={{display:'flex', justifyContent:'center',marginTop:'100px'}}>
                <Button style={{backgroundColor:'red'}} variant='contained' onClick={()=>setsCount(sCount+1)}>Subscribe   </Button>
            </div>
        </div>

    )
}

export default Home;