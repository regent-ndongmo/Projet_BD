import Badge from "./Badge"
export const Heading = (props) => {
    console.log(props.size)
    let s
    switch (props.size) {
        case "h1":
            s = <h1 >{props.title} <Badge title={props.badge.title} color={props.badge.color} /></h1>

        case "h2":
            s = <h2 >{props.title} <Badge title={props.badge.title} color={props.badge.color} /></h2>;

        case "h3":
            s = <h3 >{props.title} <Badge title={props.badge.title} color={props.badge.color} /></h3>

        case "h4":
            s = <h4 >{props.title} <Badge title={props.badge.title} color={props.badge.color} /></h4>

        case "h5":
            s = <h5 >{props.title} <Badge title={props.badge.title} color={props.badge.color} /></h5>

        // default:
        //     s = <h6 >{props.title} <Badge title={props.badge.title} color={props.badge.color} /></h6>
    }



    return s
}