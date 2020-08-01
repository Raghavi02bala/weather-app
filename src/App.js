import React from 'react';
const api = {
  key: "d77c9e583c64d89562f857323d60021b",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();


    return <div className='dt'> {day} {date} {month} {year}</div>
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type='text' className='search-bar' placeholder='Search....' />
        </div>
        <div className="location-box">
          <div className="location" >Mumbai,India</div>
          
          <div className="date">{dateBuilder(new Date())}</div>
          <div className="weather-box">
            <div className="temp" >15°</div>
            <div className="weather" >Sunny</div>
          </div>
          <div className="date"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
