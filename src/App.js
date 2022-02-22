import './App.css';
import DemoWordCloud from './components/WordCloud/DemoWordCloud'
import DemoArea from './components/TimeSeries/DemoArea'
import BasicHistogram from './components/Histogram/BasicHistogram'
import GroupedHistogram from './components/Histogram/GroupedHistogram'
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
          <header className="App-header">
          <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route path="/wordcloud" element={<DemoWordCloud />}/>
            <Route path="/timeseries" element={<DemoArea />}/>
            <Route path="/histogram" element={<BasicHistogram />}/>
            <Route path="/groupedhistogram" element={<GroupedHistogram />}/>
          </Routes>
          </header>
        </BrowserRouter>
    </div>
  );
}

export default App;
