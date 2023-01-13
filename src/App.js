import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './page/Main';
import PDFviewer from './component/PDFviewer';
import { Routes, Route, Link } from 'react-router-dom';


export default function App() {

  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/pdf" element={<PDFviewer></PDFviewer>} />
        <Route path="/pdf_bb" element={<h2>Route22222</h2>} />
      </Routes>
    </div>
    </>
  );
}

