{data.list.splice(0,7).map((item, i)=>(

{data.filter((time) => time.dt === next).every(noon => next.includes(noon.dt))).map((item,i)=>(

            /* <li key={shortid.generate()}>Hi</li> */
                <div className='daily-item' key={shortid.generate()}>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="weather" className='icon-small'/>
                        <label className='day'>{forecastDays[i]} </label>
                        <label>{item.dt_txt}</label>
                        <label className='description'>{item.weather[0].description}</label>
                        <label className='min-max'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                 <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.dt_txt}</label>
                </div>
                </div>

            ))}
