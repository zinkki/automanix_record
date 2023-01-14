import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function RankingTitle() {
	return( 
		<div style={{width:'70%', margin:'0 auto'}}>
		<Tabs style={{border:'none'}}>
			<Tab eventKey="title" style={{background:'#b0c9e3',borderRadius:'9px',paddingBottom:'0.1rem'}}>
				<h1 style={{fontWeight:'900',marginLeft:'1.5rem'}}>Hyundai N Time Attack Challenge<br></br> Bset Lap Time Top 10</h1>
			</Tab>
		</Tabs>
		</div>
  ) 
}