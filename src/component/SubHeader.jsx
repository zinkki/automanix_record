export default function SubHeader() {
  return (
		<section className="page-section-subhead" id="challenge">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading">한번 이상 도전 해보셨나요?</h2>
          <h3 className="section-subheading">
            이번에 다시 도전하면 랩타임을 단축 시킬 수 있을거예요!
          </h3>
          <button className="btn-primary" onClick={()=>window.open('https://whattime.co.kr/hdn/hntc?date=2023-01-30&time_zone=Asia%2FSeoul')}>다시 도전 하기</button>
        </div>
      </div>
    </section>
  )
}