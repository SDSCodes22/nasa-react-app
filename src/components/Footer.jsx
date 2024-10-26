export default function Footer(props) {
  const {handleToggleModal, data} = props
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>DAY 2 - LEARNING REACT</h2>
        <h1>{data?.title}</h1>
      </div>
      <button>
        <i className="fa-solid fa-circle-info" onClick={
          () => {handleToggleModal();}
        }></i>
      </button>
    </footer>
  )
}