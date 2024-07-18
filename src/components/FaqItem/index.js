// Write your code here.
import {Component} from 'react'
import './index.css'

const plusImgUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
const minusImgUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  toggleValue = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {eachItem} = this.props
    const {isActive} = this.state

    const {questionText, answerText} = eachItem
    const imgUrl = isActive ? minusImgUrl : plusImgUrl
    const altText = isActive ? 'minus' : 'plus'

    return (
      <li className="list-item-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" onClick={this.toggleValue} className="button">
            <img src={imgUrl} alt={altText} className="image" />
          </button>
        </div>
        {isActive && (
          <div>
            <hr className="horizontal-rule" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
