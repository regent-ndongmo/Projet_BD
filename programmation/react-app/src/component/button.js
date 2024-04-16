import Badge from "./Badge"

export const Button = (props) => {

    return (
        <button type="button" className={"btn mb-2 "+props.color}>
            {props.title} <Badge title={props.badge.title} color={props.badge.color} />
        </button>
    )
}