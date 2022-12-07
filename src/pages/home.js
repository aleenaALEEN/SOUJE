import React from "react";
import Navbar from "../components/navbar";
import Slider from "../components/slider";
import img1 from "../images/06-1140x760.jpg";
import Input from "../components/input";
import Selected from "../components/selected";
import About from "../components/about";
import Popular from "../components/popular";
import Photoshoot from "../components/photoshoot";
import Footer from "../components/footer";
import Social from "../components/social";
import { banad } from "../components/data";
import Para from "../components/para";
import { Paragraph } from "../components/data";
import Head from "../components/head";
import { Heading } from "../components/data";
import { sparrow1, sparrow2, sparrow3 } from "../components/data";
import { FaComment } from "../components/data";
import { FaLongArrowAltRight } from "../components/data";
import Slider2 from "../components/slider2";
import img2 from "../images/gallery.jpg";
import img3 from "../images/11-1140x570.jpg";
import img4 from "../images/20-150x100.jpg";
import img5 from "../images/01-1140x570.jpg";
import img6 from "../images/16-600x400.jpg";
import MySlider from "./mySlider";
// import Video from '../components/video'

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="container-fluid bg-gray-200 flex justify-center">
        <div className="flex grid grid-cols-3  gap-10  h-[auto] mt-[40px] w-[73%] md:w-[90%] xl:w-[73%]">
          <div className="grid gap-y-10 h-[auto]  col-span-3 md:col-span-2">
            {/* ------------main1--------------- */}
            <div className="main1">
              <div className="h-[30vh] sm:h-[65vh] w-[100%]">
                <img
                  className="h-[100%] w-[100%] cursor-pointer"
                  src={img1}
                ></img>
              </div>
              <div className="h-[65vh] bg-white flex items-center justify-center border-t-4 border-pink-400">
                <div className="h-[95%] w-[95%] md:w-[80%] md:h-[80%] grid gap-y-6">
                  <Head
                    data={{
                      head: (
                        <h1 className="text-[30px] md:text-[30px] lg:text-[50px] leading-none font-bold hover:text-pink-400 duration-1000 cursor-pointer">
                          {Heading.h12}
                        </h1>
                      ),
                    }}
                  />
                  <div className="sm:flex justify-between items-center w-[75%] italic text-[14px]">
                    <Para
                      data={{
                        para: (
                          <p className="text-gray-400 hover:text-pink-300 cursor-pointer duration-1000">
                            {Paragraph.p11}
                          </p>
                        ),
                      }}
                    />
                    <div className="w-[90%] md:w-[35%] flex items-center justify-between ">
                      <img className="cursor-pointer" src={sparrow1}></img>
                      <Para
                        data={{
                          para: (
                            <p className="text-purple-500 hover:text-pink-300 cursor-pointer duration-1000 ">
                              {Paragraph.p12}
                            </p>
                          ),
                        }}
                      />
                    </div>
                    <div className="w-[80%] md:w-[27%] flex items-center justify-between">
                      <FaComment className="text-pink-400" />
                      <Para
                        data={{
                          para: (
                            <p className="text-purple-500 cursor-pointer hover:text-pink-300 cursor-pointer duration-1000 ">
                              {Paragraph.p13}
                            </p>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <Para
                    data={{
                      para: (
                        <p className="text-[12px] md:text-[16px] tracking-wider">
                          {Paragraph.p14}
                        </p>
                      ),
                    }}
                  />
                  <div className="flex justify-between w-[22%] text-[18px] hover:text-pink-400 cursor-pointer duration-1000">
                    <Head
                      data={{
                        head: <h1 className="font-extrabold">{Heading.h13}</h1>,
                      }}
                    />
                    <FaLongArrowAltRight />
                  </div>
                  <div className="flex justify-between w-[35%] text-[13px] italic">
                    <div className="flex">
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p15}
                            </p>
                          ),
                        }}
                      />
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p16}
                            </p>
                          ),
                        }}
                      />
                    </div>
                    <div className="flex">
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p17}
                            </p>
                          ),
                        }}
                      />
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p18}
                            </p>
                          ),
                        }}
                      />
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p19}
                            </p>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            {/* -----------------main2-------------- */}
            <div className="main2 border-2 border-red-600">
              <div className="h-[30vh] sm:h-[65vh] w-[100%] ">
                {/* <MySlider/> */}
                <img className='h-[100%] w-[100%] cursor-pointer' src={img2}></img>
              </div>
              <div className="h-[65vh] bg-white flex items-center justify-center border-t-2 border-pink-400">
                <div className="h-[95%] w-[95%] md:w-[80%] md:h-[80%] grid gap-y-6">
                  <Head
                    data={{
                      head: (
                        <h1 className="text-[30px] md:text-[30px] lg:text-[50px] leading-none font-bold hover:text-pink-400 duration-1000 cursor-pointer">
                          {Heading.h14}
                        </h1>
                      ),
                    }}
                  />
                  <div className="sm:flex justify-between items-center w-[65%] italic text-[14px]">
                    <Para
                      data={{
                        para: (
                          <p className="text-gray-400 hover:text-pink-300 cursor-pointer duration-1000">
                            {Paragraph.p11}
                          </p>
                        ),
                      }}
                    />
                    <div className="w-[90%] md:w-[35%] flex items-center justify-between ">
                      <img className="cursor-pointer" src={sparrow2}></img>
                      <Para
                        data={{
                          para: (
                            <p className="text-purple-500 hover:text-pink-300 cursor-pointer duration-1000 ">
                              {Paragraph.p21}
                            </p>
                          ),
                        }}
                      />
                    </div>
                    <div className="w-[80%] md:w-[27%] flex items-center justify-between">
                      <FaComment className="text-pink-400" />
                      <Para
                        data={{
                          para: (
                            <p className="text-purple-500 cursor-pointer hover:text-pink-300 cursor-pointer duration-1000 ">
                              {Paragraph.p22}
                            </p>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <Para
                    data={{
                      para: (
                        <p className="text-[12px] md:text-[16px] tracking-wider">
                          {Paragraph.p20}
                        </p>
                      ),
                    }}
                  />
                  <div className="flex justify-between w-[22%] text-[18px] hover:text-pink-400 cursor-pointer duration-1000 ">
                    <Head
                      data={{
                        head: (
                          <h1 className="font-extrabold ">{Heading.h13}</h1>
                        ),
                      }}
                    />
                    <FaLongArrowAltRight />
                  </div>
                  <div className="flex justify-between w-[35%] text-[13px] italic]">
                    <div className="flex">
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p23}
                            </p>
                          ),
                        }}
                      />
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p27}
                            </p>
                          ),
                        }}
                      />
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p24}
                            </p>
                          ),
                        }}
                      />
                    </div>
                    <div className="flex">
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p25}
                            </p>
                          ),
                        }}
                      />
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p26}
                            </p>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            {/* -----------------main3------------------ */}
            <div className="main3">
              <div className="h-[30vh] sm:h-[65vh] w-[100%]">
                <img
                  className="h-[100%] w-[100%] cursor-pointer"
                  src={img3}
                ></img>
              </div>
              <div className="h-[65vh] bg-white flex items-center justify-center border-t-4 border-pink-400">
                <div className="h-[95%] w-[95%] md:w-[80%] md:h-[80%] grid gap-y-6">
                  <Head
                    data={{
                      head: (
                        <h1 className="text-[30px] md:text-[30px] lg:text-[50px] leading-none font-bold hover:text-pink-400 duration-1000 cursor-pointer">
                          {Heading.h15}
                        </h1>
                      ),
                    }}
                  />
                  <div className="sm:flex justify-between items-center w-[65%] italic text-[14px]">
                    <Para
                      data={{
                        para: (
                          <p className="text-gray-400 hover:text-pink-300 cursor-pointer duration-1000">
                            {Paragraph.p11}
                          </p>
                        ),
                      }}
                    />
                    <div className="w-[90%] md:w-[35%] flex items-center justify-between ">
                      <img className="cursor-pointer" src={sparrow3}></img>
                      <Para
                        data={{
                          para: (
                            <p className="text-purple-500 hover:text-pink-300 cursor-pointer duration-1000 ">
                              {Paragraph.p28}
                            </p>
                          ),
                        }}
                      />
                    </div>
                    <div className="w-[80%] md:w-[27%] flex items-center justify-between">
                      <FaComment className="text-pink-400" />
                      <Para
                        data={{
                          para: (
                            <p className="text-purple-500 cursor-pointer hover:text-pink-300 cursor-pointer duration-1000 ">
                              {Paragraph.p13}
                            </p>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <Para
                    data={{
                      para: (
                        <p className="text-[12px] md:text-[16px] tracking-wider">
                          {Paragraph.p29}
                        </p>
                      ),
                    }}
                  />
                  <div className="flex justify-between w-[22%] text-[18px] hover:text-pink-400 cursor-pointer duration-1000">
                    <Head
                      data={{
                        head: (
                          <h1 className="font-extrabold ">{Heading.h13}</h1>
                        ),
                      }}
                    />
                    <FaLongArrowAltRight />
                  </div>
                  <div className="flex justify-between w-[25%] text-[13px] italic">
                    <div className="flex">
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p16}
                            </p>
                          ),
                        }}
                      />
                    </div>
                    <div className="flex">
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p30}
                            </p>
                          ),
                        }}
                      />
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p31}
                            </p>
                          ),
                        }}
                      />
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p32}
                            </p>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            {/* ---------------main4------------- */}
            <div className="main4 border-2 border-red-600">
              <div className="h-[30vh] sm:h-[65vh] w-[100%] ">
                <img
                  className="h-[100%] w-[100%] cursor-pointer"
                  src={img4}
                ></img>
              </div>
              <div className="h-[65vh] bg-white flex items-center justify-center border-t-2 border-pink-400">
                <div className="h-[95%] w-[95%] md:w-[80%] md:h-[80%] grid gap-y-6">
                  <Head
                    data={{
                      head: (
                        <h1 className="text-[30px] md:text-[30px] lg:text-[50px] leading-none font-bold hover:text-pink-400 duration-1000 cursor-pointer">
                          {Heading.h16}
                        </h1>
                      ),
                    }}
                  />
                  <div className="sm:flex justify-between items-center w-[65%] italic text-[14px]">
                    <Para
                      data={{
                        para: (
                          <p className="text-gray-400 hover:text-pink-300 cursor-pointer duration-1000">
                            {Paragraph.p11}
                          </p>
                        ),
                      }}
                    />
                    <div className="w-[90%] md:w-[35%] flex items-center justify-between ">
                      <img className="cursor-pointer" src={sparrow3}></img>
                      <Para
                        data={{
                          para: (
                            <p className="text-purple-500 hover:text-pink-300 cursor-pointer duration-1000 ">
                              {Paragraph.p28}
                            </p>
                          ),
                        }}
                      />
                    </div>
                    <div className="w-[80%] md:w-[27%] flex items-center justify-between">
                      <FaComment className="text-pink-400" />
                      <Para
                        data={{
                          para: (
                            <p className="text-purple-500 cursor-pointer hover:text-pink-300 cursor-pointer duration-1000 ">
                              {Paragraph.p33}
                            </p>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <Para
                    data={{
                      para: (
                        <p className="text-[12px] md:text-[16px] tracking-wider">
                          {Paragraph.p29}
                        </p>
                      ),
                    }}
                  />
                  <div className="flex justify-between w-[22%] text-[18px] hover:text-pink-400 cursor-pointer duration-1000">
                    <Head
                      data={{
                        head: (
                          <h1 className="font-extrabold ">{Heading.h13}</h1>
                        ),
                      }}
                    />
                    <FaLongArrowAltRight />
                  </div>
                  <div className="flex justify-between w-[25%] text-[13px] italic">
                    <div className="flex">
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p34}
                            </p>
                          ),
                        }}
                      />
                    </div>
                    <div className="flex">
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p35}
                            </p>
                          ),
                        }}
                      />
                      <Para
                        data={{
                          para: (
                            <p className="hover:text-pink-400 duration-1000 cursor-pointer">
                              {Paragraph.p36}
                            </p>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            {/* --------------main5-------------- */}
            <div className="main4 h-[40vh] flex flex-col sm:h-[60vh]  lg:h-[150px] lg:flex lg:flex-row bg-pink-400 p-[5px] hover:bg-black duration-1000 cursor-pointer">
              <img
                className="h-[75%] lg:h-[100%] lg:w-[220px]"
                src={img5}
              ></img>
              <div className="flex sm:h-[25%] lg:h-[100%] lg:flex lg:justify-center w-[100%] lg:w-[78%]">
                <div className="w-[100%] flex items-center justify-between lg:w-[85%] lg:flex lg:items-center lg:justify-between text-white font-bold leading-10">
                  <Head
                    data={{
                      head: (
                        <h1 className="text-[25px] lg:text-[30px]">
                          {Heading.h17}
                        </h1>
                      ),
                    }}
                  />
                  <FaLongArrowAltRight className="text-[25px]" />
                </div>
              </div>
            </div>
            {/* ---------------main6------------------ */}
            <div className="main4 flex h-[40vh] flex flex-col sm:h-[60vh]  lg:h-[150px] lg:flex lg:flex-row bg-pink-400  p-[5px] hover:bg-black duration-1000 cursor-pointer">
              <img
                className="h-[75%] lg:h-[100%] lg:w-[220px] "
                src={img6}
              ></img>
              <div className="flex sm:h-[25%] lg:h-[100%] lg:flex lg:justify-center w-[100%] lg:w-[78%]">
                <div className=" w-[100%] flex items-center justify-between lg:w-[85%] lg:flex lg:items-center lg:justify-between text-white font-bold leading-10">
                  <Head
                    data={{
                      head: (
                        <h1 className="text-[25px] lg:text-[30px]">
                          {Heading.h18}
                        </h1>
                      ),
                    }}
                  />
                  <FaLongArrowAltRight className="text-[25px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 border border-blue-600 gap-y-1 ">
            <div className="border border-purple-600 h-[315vh] w-[100%] grid gap-y-5 ">
              <Input />
              <Selected />
              <About />
              <Popular />
              <Photoshoot />
              <Social />
              <img className=" w-[100%]" src={banad}></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* <Video/> */}
    </>
  );
}
