import Table from 'react-bootstrap/Table';

export default function RankingChart() {
  return(
    <Table hover style={{border:'1rem solid #fff'}} className='text-center ranking-chart'>
      <thead>
        <tr style={{backgroundColor:'#fff'}}>
          <th>순위</th>
          <th>이름</th>
          <th>회사명</th>
					<th>부서</th>
					<th>랩타임</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{color:'#efefef'}}>
          <td style={{backgroundColor:'#d44428',color:'#fff',fontWeight:'900'}}>1</td>
          <td style={{color:'#efefef'}}>홍길동</td>
          <td style={{color:'#efefef'}}>홍길동 컴퍼니</td>
          <td style={{color:'#efefef'}}>모터스포츠팀</td>
					<td style={{backgroundColor:'#d44428',fontWeight:'900'}}>1:49.544</td>
        </tr>
        <tr>
					<td style={{backgroundColor:'#b0c9e3',color:'#222',fontWeight:'900'}}>2</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td style={{backgroundColor:'#b0c9e3',color:'#222',fontWeight:'900'}}>1:49.544</td>
        </tr>
        <tr>
					<td style={{backgroundColor:'#b0c9e3',color:'#222',fontWeight:'900'}}>3</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td style={{backgroundColor:'#b0c9e3',color:'#222',fontWeight:'900'}}>1:49.544</td>
        </tr>
				<tr>
					<td style={{backgroundColor:'#222',color:'#fff',fontWeight:'900'}}>4</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td className='black'>1:49.544</td>
        </tr>
				<tr>
					<td style={{backgroundColor:'#222',color:'#fff',fontWeight:'900'}}>5</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td className='black'>1:49.544</td>
        </tr>
				<tr>
					<td style={{backgroundColor:'#222',color:'#fff',fontWeight:'900'}}>6</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td className='black'>1:49.544</td>
        </tr>
				<tr>
					<td style={{backgroundColor:'#222',color:'#fff',fontWeight:'900'}}>7</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td className='black'>1:49.544</td>
        </tr>
				<tr>
					<td style={{backgroundColor:'#222',color:'#fff',fontWeight:'900'}}>8</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td className='black'>1:49.544</td>
        </tr>
				<tr>
					<td style={{backgroundColor:'#222',color:'#fff',fontWeight:'900'}}>9</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td className='black'>1:49.544</td>
        </tr>
				<tr>
					<td style={{backgroundColor:'#222',color:'#fff',fontWeight:'900'}}>10</td>
          <td>홍길동</td>
          <td>홍길동 컴퍼니</td>
          <td>모터스포츠팀</td>
					<td className='black'>1:49.544</td>
        </tr>
      </tbody>
    </Table>
  )
}