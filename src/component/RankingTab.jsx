import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RankingChart from './RankingChart';

export default function RankingTab() {
  return(
		<div className='mt-5' style={{width:'70%', margin:'0 auto'}}>
			<Tabs defaultActiveKey="home" id="fill-tab-example">
				<Tab eventKey="home" title="베스트 랩 타임 10" style={{background:'#fff'}}>
					<RankingChart></RankingChart>
				</Tab>
			</Tabs>
		</div>
	)
}