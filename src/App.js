import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Banner from './Components/Banner'
import Row from './Components/Row'
import requests from './Components/Urls'

function App() {
  return (
		<div>
			<Navbar />
			<Banner />
			<Row title="Netflix Originals" url={requests.fetchNetflixOriginals} />
			<Row title="Action Movies" isSmall url={requests.fetchActionMovies} />
			<Row title="Top Rated" isSmall url={requests.fetchTopRated} />
			<Row title="Action Movies" isSmall url={requests.fetchActionMovies} />
			<Row title="Comedy Movies" isSmall url={requests.fetchComedyMovies} />
			<Row title="Horror Movies" isSmall url={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" isSmall url={requests.fetchRomanceMovies} />
			<Row title="Documentary Movies" isSmall url={requests.fetchDocumentaries} />
		</div>
  );
}

export default App