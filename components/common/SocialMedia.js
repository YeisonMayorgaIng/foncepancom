import React from 'react';
import Link from 'next/link';

const imagesInfo = [
  {
    image: '/images/insta/insta1.jpg',
    translateRatio: -50
  },
  {
    image: '/images/insta/insta2.jpg',
    translateRatio: 30
  },
  {
    image: '/images/insta/insta3.jpg',
    translateRatio: 0
  },
  {
    image: '/images/insta/insta5.jpg',
    translateRatio: -20
  },
  {
    image: '/images/insta/insta6.jpg',
    translateRatio: -80
  }
];

export default class SocialMedia extends React.Component {
  constructor(props) {
    super(props);

    this.followContainer = React.createRef();
    this.images = [];

    this.animate = this.animate.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.animate();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    window.requestAnimationFrame(this.animate);
  };

  animate() {
    if (!this.followContainer.current) {
      return;
    }
    const dimensions = this.followContainer.current.getBoundingClientRect();

    if (dimensions.top - window.innerHeight < 0 && dimensions.bottom > 0) {
      const scrolledRatio =
        (window.innerHeight - dimensions.top) / window.innerHeight;

      this.images.forEach((image, index) => {
        const translateRatio = imagesInfo[index] ? imagesInfo[index].translateRatio : 0;
        image &&
          (image.style.transform = `translateY(${scrolledRatio * translateRatio}px)`);
      });
    }
  };

  render() {
    return (
      <footer style={{color:`${this.props.color}`}}>
        <div
          ref={this.followContainer}
          className="custom-container px-3 mb-5 footer-follow"
        >
          <div className="row footer-follow--header">
            <div className="px-3 footer-follow--title">
              <p
                className="font-size-display1 mb-3"
                style={{ maxWidth: '26rem'}}
              >
                Síguenos en Instagram para conocer más de nuestros productos. 
              </p>
              <div className="d-flex">
                <Link href="https://www.instagram.com/foncepan/?hl=en" >
                  <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black" target="_blank" rel="noopener noreferrer">
                    <p className="mr-3 font-weight-bold" style={{color:`${this.props.color}`}}>Síguenos</p>
                    <img style={{color:`${this.props.color}`}} src="/icon/arrow-long-right.svg" alt="Arrow icon"/>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="d-flex footer-follow--images">
            {imagesInfo.map((item, i) => (
              <div key={i} className="justify-content-sm-end flex-column follow-images mb-3">
                <div
                  ref={image => this.images.push(image)}
                  style={{
                    paddingBottom: '100%',
                    background: `url("${item.image}") center center/cover`,
                    borderRadius:'20px',
                    boxShadow:'10px 10px 20px 5px rgba(0, 0, 0, 0.2),-10px -10px 20px 5px rgba(255, 255, 255, 0.2)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }
}
