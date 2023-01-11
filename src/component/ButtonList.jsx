import Button from 'react-bootstrap/Button';
import PDFviewer from './PDFviewer';
import { useState } from 'react';

export default function List() {
  const [pdf, setPdf] = useState();

  function openPDF(){
    console.log('open pdf...');
    setPdf('day1.pdf');
  }
  function openPDF2(){
    console.log('open pdf2...');
    setPdf('day2.pdf');
  }

  return(
    <>
    <Button variant="success" style={{marginRight:'0.5rem'}} onClick={openPDF}>Day1</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}} onClick={openPDF2}>Day2</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day3</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day4</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day5</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day6</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day7</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day8</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day9</Button>

    { pdf ? <PDFviewer file={pdf}></PDFviewer> : null }
    
    </>
  )  
}