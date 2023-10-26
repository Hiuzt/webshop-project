import React from 'react'

const CategoryCard = () => {
    return (
        <div className="flex items-center justify-between border rounded-xl group cursor-pointer hover:shadow-black/30 hover:shadow-[0px_0px_12px_0px] transition-all duration-200">
            <img src="https://www.homelux.hu/!common_design/custom/homelux.unas.hu/element/layout_hu_popular_categories_1_default.png?time=1667836745" alt="" width={140} height={140}/>

            <span className="p-4 flex flex-col">
                <span className="font-bold text-lg group-hover:text-blue-600 transition-all duration-200">
                    Kerti szerszámok
                </span>
                <span className="text-xs mt-3">
                    Ásók, kapák, kazánok, csapok, slagok, csaptelepek
                </span>
            </span>
            <span className="flex items-center justify-center mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-3 transition-all duration-200 group-hover:fill-blue-600" height="24px" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
            </span>

        </div>
    )
}

export default CategoryCard