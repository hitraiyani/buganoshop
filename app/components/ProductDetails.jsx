import React from 'react';
import {IconInfo, IconFullScreen, IconZoomOut, IconZoomIn} from '~/components';
export function ProductDetails({className}) {
  return (
    <>
      <section
        className={`${className} relative product-configurator-sec py-[60px] overflow-hidden bg-[#f2f3f4]`}
      >
        <div className="max-w-[1650px] mx-auto relative z-[2]">
          <div className="product-configurator-row flex gap-[86px]">
            <div className="col-left w-[60%]">
              <div className="col-inner">
                <div className="breadcrumbs-wrap flex flex-wrap gap-[30px] items-center">
                  <div className="logo-wrap max-w-[386px]">
                    <img
                      className="w-full"
                      src="https://cdn.shopify.com/s/files/1/0759/6241/7453/files/logo.svg?v=1683609783"
                      alt=""
                    />
                  </div>
                  <div className="breadcrumbs-list">
                    <ul className="flex flex-wrap gap-[5px] text-[18px] font-light">
                      <li>/</li>
                      <li>
                        <a href="#">Handelsfeuerwerk</a>
                      </li>
                      <li>/</li>
                      <li>
                        <a href="#">Kundenvulkane Grosse 6</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="img-with-option-wrap">
                  <div className="top-bar">
                    <div className="topbar-inner">
                      <div className="form">
                        <form action="" className="flex gap-[16px]">
                          <div className="form-control">
                            <input
                              className="placeholder:text-[#312783] text-[16px] leading-none text-[#312783] font-normal bg-white focus:border-none focus:shadow-none rounded-[10px] border-none focus:outline-none focus:ring-0 h-full"
                              type="text"
                              placeholder="Title of your Volcano Fireworks"
                            />
                          </div>
                          <div className="form-control">
                            <button
                              type="submit"
                              className="text-[#5a1973] text-[16px] font-normal leading-none p-[17px] bg-[#5a1973] bg-opacity-[0.1] hover:bg-opacity-100 hover:text-white flex transition-all duration-500 rounded-[10px] gap-[5px]"
                            >
                              CHF<span className="font-bold">99.-</span>
                              <IconInfo className={'ml-[15px]'} />
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="buttons-wrap">
                        <div className="buttons-wrap-inner flex flex-wrap justify-between gap-[5px]">
                          <div className="flex flex-wrap gap-[5px]">
                            <button className="bg-[#e7e7e9] rounded-[10px] text-black w-[54px] h-[54px] flex items-center justify-center hover:opacity-70 transition-all duration-500">
                              <IconZoomIn className={'w-[20px] h-[20px]'} />
                            </button>
                            <button className="bg-[#e7e7e9] rounded-[10px] text-black w-[54px] h-[54px] flex items-center justify-center hover:opacity-70 transition-all duration-500">
                              <IconZoomOut className={'w-[20px] h-[20px]'} />
                            </button>
                            <button className="bg-[#e7e7e9] rounded-[10px] text-black w-[54px] h-[54px] flex items-center justify-center hover:opacity-70 transition-all duration-500">
                              <IconFullScreen className={'w-[20px] h-[20px]'} />
                            </button>
                          </div>
                          <button className="bg-white rounded-[10px] text-black w-[54px] h-[54px] flex items-center justify-center text-[22px] leading-none font-bold">
                            <span>3D</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-right w-[40%]">
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="bg-img z-[1] absolute right-[-300px] top-[-300px] w-[600px] h-[600px]">
          <img
            className="w-full h-full object-contain object-right-top max-w-full m-auto inset-0"
            src="https://cdn.shopify.com/s/files/1/0759/6241/7453/files/Ellipse_2.png?v=1683623433"
            alt=""
          />
        </div>
        <div className="bg-img z-[1] absolute w-[600px] h-[600px] left-[-300px] bottom-[-300px]">
          <img
            className="w-full h-full object-contain object-right-top max-w-full m-auto inset-0"
            src="https://cdn.shopify.com/s/files/1/0759/6241/7453/files/Ellipse_2.png?v=1683623433"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
