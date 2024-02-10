// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showRightNavBar,
        showLeftNavBar,
        onToggleShowContent,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      return (
        <div className="configuration-control-container">
          <div className="responsive-controls-container">
            <h1 className="">Layout</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  checked={showContent}
                  onChange={onChangeContent}
                  type="checkbox"
                  id="content"
                />
                <label htmlFor="content" className="label-text">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  checked={showRightNavBar}
                  onChange={onChangeRightNavbar}
                  type="checkbox"
                  id="rightNavbar"
                />
                <label htmlFor="rightNavbar" className="label-text">
                  Right Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  checked={showLeftNavBar}
                  onChange={onChangeLeftNavbar}
                  type="checkbox"
                  id="leftNavbar"
                />
                <label htmlFor="leftNavbar" className="label-text">
                  Left Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
