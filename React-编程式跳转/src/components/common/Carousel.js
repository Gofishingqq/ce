import React from 'react';
import { Carousel} from 'antd-mobile';
class Car extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      imgHeight: 180,
    }
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      fetch('http://po.funshion.com/v6/config/channelhome?nav_id=1&ves=1&cl=mweb&uc=215').then(src => src.json()).then(data => {
        console.log(data.blocks[0].contents)
        this.setState({
          data: data.blocks[0].contents,
        });
      })
    }, 100);
  }

  render() {
    return (
        <Carousel
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val.content_id}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.banner}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}
export default Car;