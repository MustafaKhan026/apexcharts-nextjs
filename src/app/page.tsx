"use client"
import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Chart from "react-apexcharts"
import ColumnChart from "./components/ColumnChart"

const page = () => {
  const series = [44, 55]
  const chartoptions = {
    chart: {
      width: 300,
      type: 'pie',
    },
    labels: ['Mechanical', 'Electrical'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom',
        }
      }
    }]
  }


  
  return (
    <div>
      <div
    className='chartsContainer'
    >
      <ReactSpeedometer
        maxValue={300}
        value={100} // this value controls the position of the needle
        needleColor="pink"
        startColor="green"
        segments={10}
        endColor="red"
        needleHeightRatio={0.6}
        paddingVertical={30}
        currentValueText={"Electrical"}
      />
      {/* <div style={{ height: "100%", width: "10%" }} /> */}
      <ReactSpeedometer
        maxValue={300}
        value={100} // this value controls the position of the needle
        needleColor="pink"
        startColor="green"
        segments={10}
        endColor="red"
        needleHeightRatio={0.6}
        paddingVertical={30}
        currentValueText={"Mechanical"}
      />
      {/* <div style={{
        width:"250px",
        height:"100%",
        // backgroundColor:"red",
        marginBottom:"10px"
      }}> */}
      <Chart
        options={chartoptions}
        series={series}
        type="pie"
        width="350"
        
      />
      {/* </div> */}
    </div>
    <div  className='columnChartContainer'>
      <ColumnChart />
    </div>
    </div>
  )
}

export default page
