"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3dcard";
import Link from "next/link";
import ShimmerButton from "./ShimmerButton";
import { FaGithub } from "react-icons/fa";

export function ThreeDCardDemo(
    {title,des,img,iconLists,gitlink,livlink}
    :{
        title:string,
        des:string,
        img:string,
        iconLists:string[],
        gitlink:string
        livlink:string

    }
) {
  return (
    <CardContainer className="inter-var ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-10 border ">
        
        <CardItem translateZ="100" className="w-full">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl brightness-90"
            alt="thumbnail"
          />
        </CardItem>
        

        <CardItem
          translateZ="50"
          className="text-xl font-bold mt-6 text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {des} </CardItem>

        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            className="rounded-xl text-xs font-normal dark:text-white"
          >
            <div className="flex items-center">
            {   

                iconLists.map(i =>(
                    <div key={i} className="border-white/[0.07] border-2 rounded-full bg-black mr-2 lg:w-10 lg:h-10 w-10 h-10">
                        
                    <img src={i} alt={i} className=" w-full h-full p-2 object-contain"/>

                    </div>
                ))

            }
            </div>
          </CardItem>
         
        </div>

        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as={Link}
            href={livlink}
            target="__blank"
            className="px-2 py-2 hover:underline underline-offset-4 rounded-xl lg:text-xl text-sm md:text-xs font-normal dark:text-white"
          >
            Live →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={gitlink}
            target="__blank"
            className="mb-3"
          >
            <ShimmerButton title="Github"
            icon={<FaGithub/>}
            position="left"
            className="md:mt-0 md:w-36"
            />
          </CardItem>
        </div>


      </CardBody>
    </CardContainer>
  );
}
