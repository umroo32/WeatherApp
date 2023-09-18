import React, { useEffect, useState } from 'react'


const WeatherApp = () => {
    const [city, setcity] = useState(null)
    const [search, setSearch] = useState('peshawar')

    useEffect(()=>{
        const fetchApi = async () =>{
            const Api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fa33d0978ffd2dd0c25279e64e7a75fd&units=metric`
            const response = await fetch(Api)
            const resJson = await response.json();
            console.log(resJson)
            setcity(resJson.main)
        }
        
        fetchApi();
    }, [search])
    return (
   <>
    <div className='container my-4' style={{fontFamily: 'Jost, sans-serif'}}>
    <h1 className='text-center'>Weather App</h1>
        <div className='row '>
            <div className='col-3 mx-auto mt-4  rounded-4' style={{backgroundColor:'skyblue',border:'2px solid grey',height:'400px'}}>
                <div className='text-center my-auto justify-content-center d-flex' style={{width:'100%'}}>
                    <input onChange={(event)=>{
                        setSearch(event.target.value)
                    }} type='search' value={search} placeholder='Enter City.' className='mx-auto mt-3 form-control rounded-5 w-100 text-center'/>
              <button  className='btn rounded-circle mt-3' onClick={()=>{
                    setSearch('peshawar')}}><i className="fa-solid fa-rotate-right"></i></button>
                </div>
               {!city ? (<>
                <h2 className='text-center my-5'>Data Not Found!</h2>
               </>) : (<>
                <div className='text-center' style={{height:'100%',marginTop:'120px'}}>
                <h1 className='my-4' style={{textTransform:'capitalize'}}>
                <i className="fa-solid fa-street-view" style={{fontSize:'60px'}}></i><br/> {search}
                </h1>
                <h2 className="">{city.temp}°C</h2>
                <p>Low: {city.temp_min}°C | High: {city.temp_max}°C</p>
                </div>
               </>)}
            </div>
        </div>
    </div>
   </>
  )
}

export default WeatherApp