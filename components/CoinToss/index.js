import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  whenTossed = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let image = ''
    let newHCount = headsCount
    let newTCount = tailsCount

    if (tossResult === 0) {
      newHCount += 1
      image = HEADS_IMG_URL
    } else {
      newTCount += 1
      image = TAILS_IMG_URL
    }

    this.setState({
      tossResultImage: image,
      headsCount: newHCount,
      tailsCount: newTCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="main-container">
        <div className="Card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="p1">Heads (or) Tails</p>
          <img className="image" src={tossResultImage} alt="toss result" />
          <button type="button" onClick={this.whenTossed}>
            Toss Coin
          </button>
          <div className="container">
            <p className="p">Total : {totalCount}</p>
            <p className="p">Heads : {headsCount}</p>
            <p className="p">Tails : {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
