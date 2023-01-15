import Nav from '../component/Nav';
import Header from '../component/Header';
import SubHeader from '../component/SubHeader';
import Ranking from '../component/Ranking';
import Product from '../component/Product';
import Youtube from '../component/Youtube';
import Result from '../component/Result';


import ButtonList from '../component/ButtonList'



export default function Main() {
  return (
    <>
      {/* nav */}
      <Nav></Nav>

      {/* header */}
      <Header></Header>

      {/* subheader */}
      <SubHeader></SubHeader>

      {/* ranking */}
      <Ranking></Ranking>

      {/* product */}
      <Product></Product>

      {/* youtube */}
      <Youtube></Youtube>

      {/* result */}
      <Result></Result>


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
