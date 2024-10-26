export default function SideBar(props) {
  const { handleToggleModal, data } = props
  return (
    <div className="sidebar">
      <div className="bgOverlay"/>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <h4>{data?.date}</h4>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={() => {
          handleToggleModal();
        }}>
          <i className="fa-solid fa-arrow-right"/>
        </button>
      </div>
    </div>
  )
}