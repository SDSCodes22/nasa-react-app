import { useEffect, useState } from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  // Making second arg false makes this code run when page loads
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;
      
      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;
      if(localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log("Data has been fetched from cache today!")
        return
      }
      
      localStorage.clear()

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData);
        console.log('NEW Data fetched from API Today:\n', apiData);
      } catch(err) {
        console.log(err.message);
      }
    }
    fetchAPIData()
  }, [])
  return (
    <>
      {data ? <Main data={data}/> : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"/>
        </div>
      )}
      {showModal && (<SideBar handleToggleModal={handleToggleModal} data={data}/>)}
      {data && <Footer handleToggleModal={handleToggleModal} data={data}/>}

    </>
  )
}

export default App
