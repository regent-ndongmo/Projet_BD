import { render } from "react-dom"

const Breadcrumb = (props) => {

  return (
    <div className="pagetitle">
      <h1>{props.title}</h1>
      <nav>
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