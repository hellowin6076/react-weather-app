import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "./forecast.css"

const WEEK_DAY = ["월", "화", "수", "목", "금", "토", "일"]
const print = []

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay()
  const forecastDays = WEEK_DAY.slice(dayInAWeek, WEEK_DAY.length).concat(
    WEEK_DAY.slice(0, dayInAWeek)
  )
  const date = new Date()
  const hours = ("0" + date.getHours()).slice(-2)

  const setType = data.list.map((item) => {
    if (hours < 3) {
      if (item.dt_txt.substr(11) === "03:00:00") {
        print.push(item)
      }
    } else if (hours >= 3 && hours < 6) {
      if (item.dt_txt.substr(11) === "06:00:00") {
        print.push(item)
      }
    } else if (hours >= 6 && hours < 9) {
      if (item.dt_txt.substr(11) === "09:00:00") {
        print.push(item)
      }
    } else if (hours >= 9 && hours < 12) {
      if (item.dt_txt.substr(11) === "12:00:00") {
        print.push(item)
      }
    } else if (hours >= 12 && hours < 15) {
      if (item.dt_txt.substr(11) === "15:00:00") {
        print.push(item)
      }
    } else if (hours >= 15 && hours < 18) {
      if (item.dt_txt.substr(11) === "18:00:00") {
        print.push(item)
      }
    } else if (hours >= 18 && hours < 21) {
      if (item.dt_txt.substr(11) === "21:00:00") {
        print.push(item)
      }
    } else if (hours >= 21) {
      if (item.dt_txt.substr(11) === "00:00:00") {
        print.push(item)
      }
    }
  })
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {print.splice(0, 4).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>기압</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>습도</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>구름</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>풍속</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>해면기압</label>
                  <label>{item.main.sea_level} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>체감온도</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}

export default Forecast
