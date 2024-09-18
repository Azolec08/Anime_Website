import Carousel from "react-bootstrap/Carousel";
import "../style/home.scss";

function CarouselFadeExample() {
  return (
    <div className="home-background">
      <Carousel className="" fade>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            src="https://images3.alphacoders.com/123/thumbbig-123189.webp"
          />
          <Carousel.Caption>
            <h3>Watch Anime Trailers</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            src="https://images2.alphacoders.com/742/thumbbig-742320.webp"
          />
          <Carousel.Caption>
            <h3>Download Music</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            src="https://images8.alphacoders.com/634/thumbbig-634244.webp"
          />
          <Carousel.Caption>
            <h3>Anime Links</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
