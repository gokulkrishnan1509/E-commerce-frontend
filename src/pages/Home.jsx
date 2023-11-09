import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCards from "../components/BlogCards";
import ProductCard from "../components/ProductCard";
import SpecialProducts from "../components/SpecialProducts";
import Container from "../components/Container";
import { services } from "../utils/Data";
// import watch from "../images/watch.jpg";
import mainbanner from "../images/main-banner.jpg";
import caterbanner1 from "../images/catbanner-01.jpg";
import caterbanner2 from "../images/catbanner-02.jpg";
import caterbanner3 from "../images/catbanner-03.jpg";
import caterbanner4 from "../images/catbanner-04.jpg";
import camera from "../images/camera.jpg";
import tv from "../images/tv.jpg";
import headphones from "../images/headphone.jpg";
import subbanner1 from "../images/subbanner-01.webp";
import subbanner2 from "../images/subbanner-02.webp";
import subbanner3 from "../images/subbanner-03.webp";
import subbanner4 from "../images/subbanner-04.webp";
import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png";
import brand3 from "../images/brand-03.png";
import brand4 from "../images/brand-04.png";
import brand5 from "../images/brand-05.png";
import brand6 from "../images/brand-06.png";
import brand7 from "../images/brand-07.png";
import brand8 from "../images/brand-08.png";
function Home() {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        {/* <section className="home-wrapper-1 py-5"> */}
        {/* <div className="container-xxl"> */}
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img
                src={mainbanner}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>ipad s13+ Pro.</h5>
                <p>From $999.00 or $42.62/mo</p>
                <Link className="button  a">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between gap-10 align-items-center">
              <div className="small-banner position-relative ">
                <img
                  src={caterbanner1}
                  className="img-fluid rounded-3"
                  alt="images"
                />

                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative  ">
                <img
                  src={caterbanner2}
                  alt="images"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative   ">
                <img
                  src={caterbanner3}
                  alt="images"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.63/mo.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative  ">
                <img
                  src={caterbanner4}
                  alt="images"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br />
                    or $41.53/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </section> */}
      </Container>

      <Container class1="home-wrapper-2 py-5 section">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((data, index) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={index}>
                    <img src={data.image} alt="services" />
                    <div>
                      <h6>{data.title}</h6>
                      <p className="mb-0">{data.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="catagories d-flex justify-content-between  flex-wrap align-items-center">
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="products" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={tv} alt="products" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="products" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src={headphones} alt="products" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="products" />
                </div>

                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="products" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="products" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="products" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={subbanner1} className="img-fluid" alt="product" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series</h6>
                  <p>From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={subbanner2} alt="products" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness.</h6>
                  <p className="text-dark">27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={subbanner3} alt="products" className="img-fluid" />

                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Smart Phones</h5>
                  <h6 className="text-dark">SmartPhone 13 Pto.</h6>
                  <p className="text-dark">
                    Now in Green. From $999.00 or $41.62/mo. for 24mo.Footnote*{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={subbanner4} alt="products" className="img-fluid" />

                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speakers</h5>
                  <h6 className="text-dark">Room-filling Sound</h6>
                  <p className="text-dark">
                    From $699 or $166.58/mo. for 12 mo.*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row ">
            <SpecialProducts></SpecialProducts>
            <SpecialProducts></SpecialProducts>

            <SpecialProducts></SpecialProducts>
            <SpecialProducts></SpecialProducts>
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">Our Popular Products</div>
            </div>
            <div className="row">
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={brand1} alt="brand" />
                  </div>
                  <div className=" w-25">
                    <img src={brand2} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand3} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand4} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand5} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand6} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand7} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand8} alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCards />
            </div>
            <div className="col-3">
              <BlogCards />
            </div>
            <div className="col-3">
              <BlogCards />
            </div>
            <div className="col-3">
              <BlogCards />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
