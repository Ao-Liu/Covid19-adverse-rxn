import './App.css';
import DemoWordCloud from './components/WordCloud/DemoWordCloud'
import DemoArea from './components/TimeSeries/DemoArea'
import BasicHistogram from './components/Histogram/BasicHistogram'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
          <header className="App-header">
          <Routes>
            <Route exact path="/" element={<DemoWordCloud />}/>
            <Route path="/timeseries" element={<DemoArea />}/>
            <Route path="/histogram" element={<BasicHistogram />}/>
          </Routes>
          </header>
        </BrowserRouter>
    </div>
  );
}

export default App;
