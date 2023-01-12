import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonList from './component/ButtonList';
import PDFviewer from './component/PDFviewer';
import { Routes, Route, Link } from 'react-router-dom';


export default function App() {

  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/pdf" element={<PDFviewer></PDFviewer>} />
      </Routes>
      
      <h2 className="mt-4 mb-4">automanix-test page</h2>
      <ButtonList></ButtonList>
    </div>
    </>
  );
}

