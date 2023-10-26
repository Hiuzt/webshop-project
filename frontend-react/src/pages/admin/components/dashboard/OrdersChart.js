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

	responsive: [
		{
			breakpoint: 1536,
			options: {
				plotOptions: {
					bar: {
						borderRadius: 0,
						columnWidth: "25%"
					}
				}
			}
		}
	],
	plotOptions: {
		bar: {
			horizontal: false,
			borderRadius: 0,
			columnWidth: "60%",
			borderRadiusApplication: "end",
			borderRadiusWhenStacked: "last"
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
		tickAmount: 4,
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

const OrdersChart = () => {
	const [state] = useState({
		series: [
			{
				name: "Orders",
				data: [44, 55, 41, 67, 22, 43, 65]
			},
		]
	})

	return (
		<div className="rounded-xl border border-stroke bg-white p-8 mt-6 shadow-default dark:border-strokedark dark:bg-boxdark shadow-lg">
			<div className="mb-4 justify-between gap-4 sm:flex">
				<div>
					<h4 className="text-xl font-semibold text-black dark:text-white">
						Orders this week
					</h4>
					<p className="text-sm text-gray-600">Total: 337</p>
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

export default OrdersChart
