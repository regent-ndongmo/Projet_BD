
const Breadcrumb = (props) => {

  return (
   <div>
      <nav className={"d-flex justify-content-"+props.position}>
        <ol className="breadcrumb">
          {
            props.links.map(element => {
              return (<li className="breadcrumb-item"><a href="index.html">{element}</a></li>)
            })
          }
        </ol>
      </nav>
   </div>
  )
}

export default Breadcrumb;