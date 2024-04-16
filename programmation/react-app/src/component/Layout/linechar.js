import Chart from "react-apexcharts";

const Graph = (props) => {

    return (
        <div className="col-lg-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <Chart options={props.option} series={props.series}/>
                    <div id="lineChart"></div>
                </div>
            </div>
        </div>
    )
}
export default Graph