export const GEOAPIKEY = process.env.REACT_APP_GEOAPIKEY
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": GEOAPIKEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
}

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"
