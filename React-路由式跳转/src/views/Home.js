import React from 'react';
import ProList from '../components/common/ProList';
class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      post: []
    }
  }
  componentDidMount () {
    fetch('http://pm.funshion.com/v5/media/retrieval?is_vip=2&ves=1&cl=mweb&uc=215&channel=2&order=pl&cate=0&area=0&year=0&pg=1&sz=42').then(src => src.json()).then(data =>{
      this.setState({
        post: data.medias
      })
    })
  }
  render () {
    return (
      <div className = "box">
        <header className = "header">头部</header>
        <div className = "content">
          < ProList post = { this.state.post }/>
        </div>
      </div>
    )
  }
}

export default Home;