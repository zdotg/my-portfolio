import React from "react";
import Image from "next/image";
import emoji from "../images/emoji-sticker.png";
import "../styles/intro.css"
import Link from "next/link";


const Intro = () => {
  return (
    <div className="card mx-auto intro-card pb-5 pt-5">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:w-8/12">
            <div className="pb-2">
              <small className="text-gray-500">Welcome to my world</small>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2">Hi, I'm Zach</h2>
              <h3 className="text-2xl lg:text-3xl">
                <span className="text-gradient">A</span> Full Stack{" "}
                <span className="text-gradient">Web Developer</span>
              </h3>
              <p className="text-gray-500 mt-2">
                Utilizing a blend of technical skills, a growth mindset, and a
                dedication to continuous learning!
              </p>
            </div>
            <div className="flex mt-4">
              <Link
                href="https://docs.google.com/document/d/1SCSk4tESLYwq_Ru8s5Hs9RYuQtkVeKgn_vGYJJchrAc/edit?usp=sharing"
                className="btn button-gradient text-white px-4 py-2 rounded-md font-medium"
                role="button"
              >
                View My Resume
              </Link>
            </div>
          </div>
          <div className="lg:w-4/12">
            <div className="relative w-full h-full">
              <Image
                src={emoji}
                alt="My memoji"
                className="img-border-intro"
                layout="responsive"
                objectFit="contain"
                objectPosition="center"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
