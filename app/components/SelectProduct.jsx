import React from 'react';

export function SelectProduct({className}) {
  return (
    <>
      <section className={`${className} relative select-product-sec py-[60px] overflow-hidden bg-[#f2f3f4]`}>
        <div className="max-w-[1650px] mx-auto relative z-[2]">
          <div className="logo-wrap max-w-[386px]">
            <img
              className="w-full"
              src="https://cdn.shopify.com/s/files/1/0759/6241/7453/files/logo.svg?v=1683609783"
              alt=""
            />
          </div>
          <div className="product-list-wrap">
            <div className="product-list-inner">
              <div className="title mt-[51px]">
                <h3 className="text-[18px] text-black">Select a Product to start customizing it now!</h3>
              </div> 
              <div className="product-items grid grid-cols-3 gap-[30px] mt-[42px]">
                <div className="product-item cursor-pointer border-transparent border-[4px] hover:border-[#312783] rounded-[10px] transition-all duration-500">
                  <div className="product-item-inner shadow-[0px_0px_30px_rgba(0,0,0,0.06)] px-[40px] pt-[40px] overflow-hidden bg-white  rounded-[10px] relative">
                    <div className="title-wrap">
                      <h3 className="font-semibold text-[32px] text-black">
                        Vulkan Gr.6
                      </h3>
                      <div className="divider bg-[#312783] h-[2px] w-[109px]"></div>
                    </div>
                    <div className='desc text-[16px] text-black font-normal mt-[15px]'>
                      <p>Enim ullamco aliquip ad consectetur magna occaecat.</p>
                    </div>
                    <div className='img-wrap pb-[100%] relative overflow-hidden mt-[20px]'>
                      <img className='absolute inset-0 w-full h-full object-contain' src="https://cdn.shopify.com/s/files/1/0759/6241/7453/files/Product_IMG.png?v=1683622019" alt="" />
                    </div>
                    <div className='price-wrap w-fit mx-auto bg-[#e2dce7] rounded-tl-[10px] rounded-tr-[10px] absolute bottom-0 left-0 right-0 transition-all duration-500'>
                      <div className='price text-[#5a1973] text-[16px] leading-none text-center px-[15px] py-[17px] transition-all duration-500'>from CHF <span className='font-bold'>99.-</span></div>
                    </div>
                  </div>
                </div>
                <div className="product-item cursor-pointer border-transparent border-[4px] hover:border-[#312783] rounded-[10px] transition-all duration-500">
                  <div className="product-item-inner shadow-[0px_0px_30px_rgba(0,0,0,0.06)] px-[40px] pt-[40px] overflow-hidden bg-white  rounded-[10px] relative">
                    <div className="title-wrap">
                      <h3 className="font-semibold text-[32px] text-black">
                        Vulkan Gr.6
                      </h3>
                      <div className="divider bg-[#312783] h-[2px] w-[109px]"></div>
                    </div>
                    <div className='desc text-[16px] text-black font-normal mt-[15px]'>
                      <p>Enim ullamco aliquip ad consectetur magna occaecat.</p>
                    </div>
                    <div className='img-wrap pb-[100%] relative overflow-hidden mt-[20px]'>
                      <img className='absolute inset-0 w-full h-full object-contain' src="https://cdn.shopify.com/s/files/1/0759/6241/7453/files/Product_IMG.png?v=1683622019" alt="" />
                    </div>
                    <div className='price-wrap w-fit mx-auto bg-[#e2dce7] rounded-tl-[10px] rounded-tr-[10px] absolute bottom-0 left-0 right-0 transition-all duration-500'>
                      <div className='price text-[#5a1973] text-[16px] leading-none text-center px-[15px] py-[17px] transition-all duration-500'>from CHF <span className='font-bold'>99.-</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-img z-[1] absolute right-[-300px] top-[-300px] w-[600px] h-[600px]'>
          <img className='w-full h-full object-contain object-right-top max-w-full m-auto inset-0' src="https://cdn.shopify.com/s/files/1/0759/6241/7453/files/Ellipse_2.png?v=1683623433" alt="" />
        </div>
        <div className='bg-img z-[1] absolute w-[600px] h-[600px] left-[-300px] bottom-[-300px]'>
          <img className='w-full h-full object-contain object-right-top max-w-full m-auto inset-0' src="https://cdn.shopify.com/s/files/1/0759/6241/7453/files/Ellipse_2.png?v=1683623433" alt="" />
        </div>
      </section>
    </>
  );
}
