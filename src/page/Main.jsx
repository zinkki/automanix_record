import ButtonList from '../component/ButtonList'
export default function Main() {
  return (
    <>
      {/* header */}
      <div className="masthead">
        <div className="container">
          <div className="masthead-heading">
            N Time Attack
            <br />
            Challenge
          </div>
        </div>
      </div>

      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">베스트 랩 타임3</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
        </div>
        <ButtonList></ButtonList>
      </section>
    </>
  );
}
