import {useEffect, useState} from "react";
import Helmet from "../../components/Helmet/Helmet"
import { Container, Row, Col } from "reactstrap"
import heroImg from "../../assets/images/hero-img.png"
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import "./home.css"
import Services from "../../services/Services.jsx";
import ProductsList from "../../components/UI/Product/ProductsList.jsx";
import products from "../../assets/data/products.js"
import counterImg from "../../assets/images/counter-timer-img.png"
import Clock from "../../components/UI/Clock/Clock.jsx";
const Home = () => {
  const year = new Date().getFullYear();

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category === "chair");
    const filteredBestSalesProducts = products.filter((item) => item.category === "sofa");
    const filteredMobileProducts = products.filter((item) => item.category === "mobile");
    const filteredWirelessProducts = products.filter((item) => item.category === "wireless");
    const filteredPopularProducts = products.filter((item) => item.category === "watch");
    setBestSalesProducts(filteredBestSalesProducts);
    setTrendingProducts(filteredTrendingProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  return (
    <>
      <Helmet title={"Home"}>
        <section className="hero_section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero_content">
                  <p>Trending product in {year}</p>
                  <h2>Make your interior Mỏe Minimalistic & Modern</h2>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here,
                    making it look like readable English.</p>
                  <motion.button whileTap={{scale: 1.2}} className="buy_btn"><Link to="shop">SHOP NOW</Link></motion.button>
                </div>
              </Col>
              <Col>
                <div className="hero_img">
                  <img src={heroImg}/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Services/>
        <section className="trending_products">
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h2 className="section_title">Trending Products</h2>
              </Col>
              <ProductsList data={trendingProducts}/>
            </Row>
          </Container>
        </section>

        <section className="best_sales">
            <Container>
              <Row>
                <Col lg="12" className="text-center">
                    <h2>Best Sales</h2>
                </Col>
                <ProductsList data={bestSalesProducts}/>
              </Row>
            </Container>
        </section>

        <section className="timer_count">
      <Container>
        <Row>
          <Col lg="6" md="12" className="count_down-col">
            <div className="clock_top-content">
              <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
              <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
            </div>
            <Clock/>
            <motion.button whileTap={{scale: 1.2}} className="buy_btn store_btn">
              <Link to="/shop">Visit Store</Link>
            </motion.button>
          </Col>
          <Col lg="6" md="12" className="text-end counter_img">
            <img src={counterImg} alt="anh"/>
          </Col>
        </Row>
      </Container>
        </section>

        <section className="new_arrivals">
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h2>New Arrivals</h2>
              </Col>
              <ProductsList data={mobileProducts}/>
              <ProductsList data={wirelessProducts}/>
            </Row>
          </Container>
        </section>

        <section className="popular_category">
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h2>Popular in Category</h2>
              </Col>
              <ProductsList data={popularProducts}/>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Home