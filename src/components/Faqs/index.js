// Write your code here.
import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <ul className="questions-container">
          {faqsList.map(eachItem => (
            <FaqItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
