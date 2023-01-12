import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function List() {
  //window.location.origin + '/pdf'
  return(
    <>
    <Button variant="success" style={{marginRight:'0.5rem'}} onClick={()=>{window.open(window.location.origin+'/pdf')}}>Day1</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day2</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day3</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day4</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day5</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day6</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day7</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day8</Button>
    <Button variant="secondary" style={{marginRight:'0.5rem'}}>Day9</Button>
    </>
  )  
}