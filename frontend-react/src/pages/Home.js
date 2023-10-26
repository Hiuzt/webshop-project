import React from "react";
import TopProductSlider from "../components/TopProductSlider";
import CategoryCard from "../components/home/CategoryCard";
import ProductOnSaleSlider from "../components/home/ProductOnSaleSlider";
import HomeSlider from "../components/home/HomeSlider";


const Home = () => {
    return (
        <div className="lg:max-w-[1244px] mx-auto relative z-0">
            <div className="hidden md:block">

                    <HomeSlider />
                </div>
            <section className="mt-10">
                <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-center items-center w-full mt-10 lg:divide-x-2 divide-y- divide-gray-400 ">
                    <div className="flex items-center gap-5 py-2 lg:py-0 lg:pr-20 bg-white lg:bg-inherit rounded-xl lg:rounded-none lg:shadow-none px-2 lg:px-0 lg:w-auto shadow-black/30 shadow-[0px_0px_12px_0px] w-[270px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-blue-600" viewBox="0 0 640 512"><path d="M64 32C28.7 32 0 60.7 0 96V304v80 16c0 44.2 35.8 80 80 80c26.2 0 49.4-12.6 64-32c14.6 19.4 37.8 32 64 32c44.2 0 80-35.8 80-80c0-5.5-.6-10.8-1.6-16H416h33.6c-1 5.2-1.6 10.5-1.6 16c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H608c17.7 0 32-14.3 32-32V288 272 261.7c0-9.2-3.2-18.2-9-25.3l-58.8-71.8c-10.6-13-26.5-20.5-43.3-20.5H480V96c0-35.3-28.7-64-64-64H64zM585 256H480V192h48.8c2.4 0 4.7 1.1 6.2 2.9L585 256zM528 368a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM176 400a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM80 368a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg><span>
                            <p className="font-black text-lg text-gray-700">Professional delivery</p>
                            <p className="font-medium text-sm text-gray-500">Provided by our logistic partner</p>
                        </span>
                    </div>
                    <div className="flex items-center gap-5 py-2 lg:py-0 bg-white lg:bg-inherit rounded-xl lg:rounded-none lg:shadow-none px-2 lg:px-20 lg:w-auto shadow-black/30 shadow-[0px_0px_12px_0px] w-[270px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-blue-600" viewBox="0 0 384 512"><path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" /></svg>
                        <span>
                            <p className="font-black text-lg  text-gray-700">Great deals</p>
                            <p className="font-medium text-sm text-gray-500">Buy our cheap tools</p>
                        </span>
                    </div>
                    <div className="flex items-center gap-5 lg:pl-20 py-2 lg:py-0 bg-white lg:bg-inherit rounded-xl lg:rounded-none lg:shadow-none px-2 lg:px-0 lg:w-auto shadow-black/30 shadow-[0px_0px_12px_0px] w-[270px]">
                        <svg className="w-8 h-8 fill-blue-600" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.01 512.01"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M510.025,301.746l-38.11-45.739l38.11-45.739c2.125-2.543,2.577-6.084,1.178-9.079c-1.408-2.995-4.42-4.915-7.731-4.915 H391.403l-7.484-52.403c-0.606-4.207-4.198-7.33-8.448-7.33h-65.178c-10.052-8.38-48.828-40.687-48.828-40.687 c-3.166-2.645-7.757-2.645-10.923,0l-48.828,40.687h-65.178c-4.25,0-7.842,3.123-8.448,7.322l-7.484,52.412H8.538 c-3.311,0-6.323,1.92-7.731,4.915c-1.408,3.004-0.947,6.545,1.178,9.079l38.11,45.739l-38.11,45.739 c-2.125,2.543-2.577,6.084-1.178,9.079c1.408,3.004,4.42,4.915,7.731,4.915h112.068c2.278,15.915,7.492,52.412,7.492,52.412 c0.597,4.207,4.198,7.322,8.439,7.322h65.178l48.828,40.687c1.587,1.323,3.524,1.98,5.461,1.98s3.883-0.657,5.461-1.98 l48.819-40.687c13.261,0,65.203,0.034,65.186,0c4.25,0,7.842-3.123,8.448-7.322c0,0,5.214-36.497,7.492-52.412h112.06 c3.311,0,6.323-1.92,7.731-4.915C512.611,307.821,512.15,304.28,510.025,301.746z M78.785,261.468l31.002,37.205H26.757 l31.002-37.205c2.637-3.166,2.637-7.757,0-10.923L26.757,213.34h83.029l-31.002,37.205 C76.148,253.711,76.148,258.302,78.785,261.468z M347.371,219.373L227.905,338.84c-1.664,1.673-3.849,2.5-6.033,2.5 c-2.185,0-4.369-0.836-6.033-2.5l-59.733-59.733c-3.328-3.328-3.328-8.738,0-12.066l25.6-25.6c3.328-3.328,8.738-3.328,12.066,0 l25.079,25.079c1.664,1.664,4.369,1.664,6.033,0l84.813-84.813c3.328-3.328,8.738-3.328,12.066,0l25.6,25.6 C350.699,210.644,350.699,216.045,347.371,219.373z M402.223,298.674l31.002-37.205c2.637-3.166,2.637-7.757,0-10.923 l-31.002-37.205h83.029l-31.002,37.205c-2.637,3.166-2.637,7.757,0,10.923l31.002,37.205H402.223z"></path> </g> </g> <g> <g> <path d="M326.26,210.328l-7.501-7.501c-1.664-1.664-4.369-1.664-6.033,0l-84.821,84.813c-3.328,3.328-8.738,3.328-12.066,0 l-25.079-25.079c-1.664-1.664-4.369-1.664-6.033,0l-7.501,7.501c-1.664,1.664-1.664,4.369,0,6.033l41.634,41.634 c1.664,1.664,4.369,1.664,6.033,0L326.26,216.361C327.924,214.697,327.924,211.992,326.26,210.328z"></path> </g> </g> </g></svg>
                        <span>
                            <p className="font-black text-lg text-gray-700">Quality products</p>
                            <p className="font-medium text-sm text-gray-500">Great quality, strong tools</p>
                        </span>
                    </div>
                </div>
            </section>
            <section>
                <div className="mt-10 mx-3 xl:mx-0 relative flex items-center">
                    <div className="absolute top-full w-full h-[1px] bg-gray-300"></div>
                    <div className="bg-white w-64 py-3 text-3xl font-bold  border-b-4 text-blue-600 border-b-blue-600">BEST SELLERS</div>
                </div>
                <div className="mt-10">
                    <TopProductSlider />
                </div>
            </section>
            <section>
                <div className="mt-10 mx-3 xl:mx-0 relative flex items-center">
                    <div className="absolute top-full w-full h-[1px] bg-gray-300 z-0"></div>
                    <div className="bg-white w-64 py-3 z-10 text-3xl font-bold border-b-4 text-blue-600 border-b-blue-600">TOP Categories</div>
                </div>
                <div className="mt-10 flex flex-col lg:flex-row gap-5 mx-10 justify-between lg:mx-0 lg:gap-24">
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />                   
                </div>
            </section>
            <section>
                <div className="mt-10 mx-3 xl:mx-0 relative flex items-center">
                    <div className="absolute top-full w-full  h-[1px] bg-gray-300 z-0"></div>
                    <div className="bg-white w-64 py-3 z-10 text-3xl font-bold border-b-4 text-blue-600 border-b-blue-600">Products on sale</div>
                </div>
                <div className="mt-10">
                    <ProductOnSaleSlider />
                </div>
            </section>
        </div>
    );
};

export default Home;
