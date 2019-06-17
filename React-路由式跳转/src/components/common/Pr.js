import React from 'react';
class Pr extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mig: ''
    }
  }
  componentDidMount () {
  //  console.log(this.props)
   const id = this.props.match.params.id
    fetch(`http://pm.funshion.com/v5/media/episode?id=${id}&ves=1&cl=mweb&uc=215`).then(src => src.json()).then(data => {
      this.setState({
        mig: data.name
      })
    })
  }
  render () {
    return (
      <div className = "container">
        <div className = "box">
          <header className = "header">详细头部</header>
          <div className = "content">{ this.state.mig }</div>
        </div>
        <footer className = "footer">详情底部</footer>
      </div>
    )
  }
}
export default Pr;