import React, { useState } from "react"
import ReactApexChart from "react-apexcharts"

const options = {
	colors: ["#3C50E0", "#80CAEE"],
	chart: {
		type: "bar",
		height: 200,
		stacked: true,
		toolbar: {
			show: false
		},
		zoom: {
			enabled: false
		}
	},

	plotOptions: {
		bar: {
			horizontal: false,
			borderRadius: 0,
			columnWidth: "60%",
		}
	},
	dataLabels: {
		enabled: false
	},

	xaxis: {
		
		categories: ["M", "T", "W", "T", "F", "S", "S"],
        axisTicks: {
            show: false
        }
	},
	yaxis: {
		tickAmount: 3,
		labels: {
            formatter: val => `$${val / 1000}k`
        }    
	},

	

    grid: {
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },

	legend: {
		show: false,
	},
	fill: {
		opacity: 1
	}
}

const SalesChart = () => {
	const [state] = useState({
		series: [
			{
				name: "Sales",
				data: [1000, 1500, 1000, 800, 2000, 4000, 400]
			},
		]
	})

	return (
		<div className="rounded-xl border border-stroke bg-white p-8 mt-6 shadow-default dark:border-strokedark dark:bg-boxdark shadow-lg">
			<div className="mb-4 justify-between gap-4 sm:flex">
				<div>
					<h4 className="text-xl font-semibold text-black dark:text-white">
						Sales this week
					</h4>
					<p className="text-sm text-gray-600">Total: $10.7k</p>
				</div>
				<div>
				</div>
			</div>

			<div>
				<div id="chartTwo" className="-ml-5 -mb-9">
					<ReactApexChart
						options={options}
						series={state.series}
						type="bar"
						height={150}
					/>
				</div>
			</div>
		</div>
	)
}

export default SalesChart
