const Acordion = (props) => {
    let i = 0
    return (
        <div className="accordion" id="accordionExample">
            {

                props.element.map(e => {
                    let h = "Heading" + i
                    let c = "collapse" + i
                    i += 1
                    return (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={h}>
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#" + c} aria-expanded="true" aria-controls={c}>
                                    {e.title}
                                </button>
                            </h2>
                            <div id={c} className="accordion-collapse collapsed" aria-labelledby={h} data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {e.content}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Acordion;