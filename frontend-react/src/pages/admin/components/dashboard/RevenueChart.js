import React, { useState } from "react"
import ReactApexChart from "react-apexcharts"

const options = {
    legend: {
        show: false,
        position: "top",
        horizontalAlign: "left"
    },
    colors: ["#2563eb", "#71c3f0"],
    chart: {
        height: 200,
        type: "area",
        dropShadow: {
            enabled: true,
            color: "#623CEA14",
            top: 10,
            blur: 4,
            left: 0,
            opacity: 0.1
        },

        toolbar: {
            show: false
        }
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
                chart: {
                    height: 200
                }
            }
        },
        {
            breakpoint: 1366,
            options: {
                chart: {
                    height: 200
                }
            }
        }
    ],
    stroke: {
        width: [2, 2],
        curve: "smooth",
    },
 
    grid: {
        strokeDashArray: 5,
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: true,
            },
        }
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0,
        colors: "#fff",
        strokeColors: ["#3056D3", "#80CAEE"],
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
            size: undefined,
            sizeOffset: 5
        }
    },
    xaxis: {
        type: "category",
        categories: [
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
        ],
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        title: {
            style: {
                fontSize: "0px"
            }
        },
        min: 10000,
        max: 24000,
        tickAmount: 4,
        labels: {
            formatter: val => `$${val / 1000}k`
        }     
    }
}

const RevenueChart = () => {
    const [state, setState] = useState({
        series: [
            {
                name: "Sales",
                data: [18000, 18000, 20000, 20000, 18000, 18000, 22000, 22000, 20000, 20000, 18000, 18000, 20000, 20000, 18000, 18000, 20000, 20000, 22000]
            },
        ]
    })

    return (
        <div className="col-span-12 xl:col-span-8 rounded-xl border border-stroke bg-white mt-6 px-5 pt-8 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-8 shadow-lg">
            <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
                <div className="flex w-full flex-wrap gap-3 sm:gap-5">
                    <div className="flex min-w-[12rem]">
                        <span className="mt-1 mr-2 flex h-4 w-full max-w-[16px] items-center justify-center rounded-full border border-blue-600">
                            <span className="block h-2 w-full max-w-[0.5rem] rounded-full bg-blue-600"></span>
                        </span>
                        <div className="w-full">
                            <p className="font-semibold text-blue-600">Total Revenue</p>
                            <p className="text-sm font-medium text-gray-500">12.04.2022 - 12.05.2022</p>
                        </div>
                    </div>
                    <div className="flex min-w-[12rem]">
                        <span className="mt-1 mr-2 flex h-4 w-full max-w-[16px] items-center justify-center rounded-full border border-cyan-700">
                            <span className="block h-2 w-full max-w-[0.5rem] rounded-full bg-cyan-700"></span>
                        </span>
                        <div className="w-full">
                            <p className="font-semibold text-cyan-700">Total Sales</p>
                            <p className="text-sm font-medium text-gray-500">12.04.2022 - 12.05.2022</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full max-w-[12rem] justify-end">
                    <div className="inline-flex items-center rounded-md bg-gray-100 p-1.5 dark:bg-meta-4">
                        <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
                            Day
                        </button>
                        <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                            Week
                        </button>
                        <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                            Month
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div id="chartOne" className="-ml-5">
                    <ReactApexChart
                        options={options}
                        series={state.series}
                        type="area"
                        height={430}
                    />
                </div>
            </div>
        </div>
    )
}

export default RevenueChart
