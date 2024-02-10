// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContext, showLeftNavBar, showRightNavBar} = value
      return (
        <div className="body-container">
          {showLeftNavBar ? (
            <div className="left-navbar">
              <h1 className="body-header-text">Left Navbar</h1>
              <ul className="list-items">
                <li className="item">Item1</li>
                <li className="item">Item2</li>
                <li className="item">Item3</li>
                <li className="item">Item4</li>
              </ul>
            </div>
          ) : null}
          {showContext ? (
            <div className="content">
              <h1 className="body-header-text">Content</h1>
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavBar ? (
            <div className="right-navbar">
              <h1 className="body-header-text">Right Navbar</h1>
              <div className="ad-box-container">
                <p className="ad-box">Ad 1</p>
                <p className="ad-box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
