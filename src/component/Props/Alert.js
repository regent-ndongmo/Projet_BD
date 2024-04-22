const Alert = (props) => { 
    return (
        <div class="card-body">
        <div class="alert alert-primary alert-dismissible fade show" role="alert">
         {props.title}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    )
}
export default Alert;
