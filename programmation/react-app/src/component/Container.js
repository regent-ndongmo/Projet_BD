import Graph from "./Layout/linechar"
import Breadcrumb from "./breadcrumb"
import Acordion from "./acordion"
import Alert from "./alert"
import Badge from "./Badge"
import { Button } from "./button"
import { Heading } from "./heading"
const Container = () => {
  const options = {
    chart: {
      id: "basic-bar",
      type: "pie"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]

  const series1 = [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }]

  const option1 = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  }
  const op = {
    chart: {
      height: 350,
      type: 'pie',
      toolbar: {
        show: true
      }
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
  }

  const se = [{
    name: "dlll",
    data: [44, 55, 13, 43, 22]
  }]


  const ll = [{
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar'
  }]


  const t = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
  }

const ser = [14,23,21,17,15,10,12,17,21]
var opti={
chart:{
  type:'polarrArea'
},
stroke:{
   colors:['#fff']
},
fill:{
  opacity:0.8
},
responsive:[{
  breakpoint:480,
  options: {
    chart:{
      width:200
    },
    legend:{
      position:"bottom"
    }
  }   
}]
};

const arcor=[
{
  title:"titre 1",
  content:"contenu 1"
},
{
  title:"titre 2",
  content:"contenu 2"
}
]

 var title="lllllllllllllllllllllllllllllllll"
 const bad=
{ 
  title:"primary",
  color :'bg-success',
}

const badgecontainer=  {
  title:4,
  color:"bg-danger",
}
const badgeheading= {
  title:"secondary",
  color:'bg-warning',
}
return (
<main id="main" className="main">
  <Breadcrumb title="Keou" links={["home", "statistics"]} />
  <Graph option={options} series={series} title="Line chart" />
  <Graph option={op} series={se} title=" area chart" />
  {/* <Graph option={t} series= <div class="card-body"></div>{ll} title="premiere" /> */}
      <Graph option={opti} series={ser} title="pieCharts" />
      <Acordion element ={arcor} />
      <Alert title ='dfghjhjk' />
      <Badge title="primary" color="bg-danger" />
      <Button title="first button" color="bg-danger" badge={badgecontainer}/>
      <Heading size="h1" title="Example h1" badge={badgeheading}/>
      
    </main>
  )
}

export default Container 