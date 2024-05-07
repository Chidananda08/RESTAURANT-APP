import './index.css'

const DishCategoryTab = props => {
  const {menuData, isActiveTab, onChangeTabId} = props
  const {menuCategory, menuCategoryId} = menuData
  const activeClass = isActiveTab ? 'active-tab-text' : null
  const onTabClick = () => {
    onChangeTabId(menuCategoryId)
  }
  return (
    <li className="menu-item">
      <button
        type="button"
        onClick={onTabClick}
        className={`tab-btn ${activeClass}`}
      >
        <p className="tab-name">{menuCategory}</p>
      </button>
    </li>
  )
}

export default DishCategoryTab
