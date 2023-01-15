import Table from 'react-bootstrap/Table';

export default function RankingChart() {
  return(
    <Table style={{border:'1rem solid #fff'}} className='text-center ranking-chart'>
      <thead>
        <tr className='bg-white'>
          <th className='font900' style={{width:'10%'}}>순위</th>
          <th className='font500'>이름</th>
          <th className='font500'>회사명</th>
					<th className='font500'>부서</th>
					<th className='font900'>랩타임</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{color:'#efefef'}}>
          <td style={{backgroundColor:'#d44428',fontWeight:'900',fontSize:'1.8rem'}}>1</td>
          <td style={{fontWeight:'900'}}>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td style={{backgroundColor:'#d44428',fontWeight:'900',fontSize:'1.8rem'}}>1:49.544</td>
        </tr>
        <tr>
					<td style={{backgroundColor:'#b0c9e3',color:'#222',fontWeight:'900',fontSize:'1.8rem'}}>2</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td style={{backgroundColor:'#b0c9e3',color:'#222',fontWeight:'900',fontSize:'1.8rem'}}>1:49.544</td>
        </tr>
        <tr>
					<td style={{backgroundColor:'#b0c9e3',color:'#222',fontWeight:'900',fontSize:'1.8rem'}}>3</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td style={{backgroundColor:'#b0c9e3',color:'#222',fontWeight:'900',fontSize:'1.8rem'}}>1:49.544</td>
        </tr>
				<tr>
					<td className='black' style={{fontWeight:'900',fontSize:'1.8rem'}}>4</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td className='black' style={{fontWeight:'900',fontSize:'1.8rem'}}>1:49.544</td>
        </tr>
				<tr>
					<td className='black' style={{fontWeight:'900',fontSize:'1.8rem'}}>5</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td className='black' style={{fontWeight:'900',fontSize:'1.8rem'}}>1:49.544</td>
        </tr>
				<tr>
					<td className='black' style={{fontWeight:'900',fontSize:'1.8rem'}}>6</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td className='black' style={{fontWeight:'900',fontSize:'1.8rem'}}>1:49.544</td>
        </tr>
				<tr>
					<td className='black' style={{fontWeight:'900',fontSize:'1.8rem'}}>7</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td className='black' style={{fontWeight:'900',fontSize:'1.8rem'}}>1:49.544</td>
        </tr>
				<tr>
					<td className='black' style={{fontWeight:'900',fontSize:'1.8rem'}}>8</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td className='black' style={{fontWeight:'900',fontSize:'1.8rem'}}>1:49.544</td>
        </tr>
				<tr>
					<td className='black' style={{fontWeight:'900',fontSize:'1.8rem'}}>9</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td className='black' style={{fontWeight:'900',fontSize:'1.8rem'}}>1:49.544</td>
        </tr>
				<tr>
					<td className='black' style={{fontWeight:'900',fontSize:'1.8rem'}}>10</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td className='black' style={{fontWeight:'900',fontSize:'1.8rem'}}>1:49.544</td>
        </tr>
      </tbody>
    </Table>
  )
}