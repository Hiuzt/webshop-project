import React, { useState } from "react"
import ReactApexChart from "react-apexcharts"

const options = { 
    labels: ["Mobile", "Tablet", "Computer", "Other"],
    chart: {
        toolbar: {
            show: false
        },
    },

    dataLabels: {
        enabled: false
    },
	// legend: {
	// 	show: false,
	// },

};

const ViewersChart = () => {
	const [state] = useState({
		series: [4, 5, 6, 1]
	})

	return (
		<div className="rounded-xl border border-stroke bg-white p-8 shadow-default dark:border-strokedark dark:bg-boxdark shadow-lg">
			<div className="mb-4 justify-between gap-4 sm:flex">
				<div>
					<h4 className="text-xl font-semibold text-black dark:text-white">
						Viewers
					</h4>
                    <p className="text-sm text-gray-600">Total: 8</p>
				</div>
				<div>
				</div>
			</div>

			<div className="flex justify-center flex-row-reverse">
				<div id="viewersChart" className="-mb-6">
					<ReactApexChart
						options={options}
						series={state.series}
						type="donut"
						height={150}
					/>
				</div>
			</div>
		</div>
	)
}

export default ViewersChart
