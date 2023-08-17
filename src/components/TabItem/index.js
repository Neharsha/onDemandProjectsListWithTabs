import './index.css'

const TabItem = props => {
  const {tabDetails, clickTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTab(tabId)
  }

  const active = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${active}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
