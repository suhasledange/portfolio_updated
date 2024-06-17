import { FaGithub, FaLinkedinIn, FaLocationArrow, FaXTwitter, FaYoutube } from "react-icons/fa6";

import ShimmerButton from "./ui/ShimmerButton";

const Footer = () => {


  const socialMedia = [
    {
      id: 1,
      icon: <FaGithub className="text-lg"/>,
      link:"https://github.com/suhasledange"
    },
    {
      id: 2,
      icon:<FaXTwitter className="text-lg"/>,
      link:"https://x.com/suhas_ledange"
    },
    {
      id: 3,
      icon:<FaLinkedinIn className="text-lg"/>,
      link:"https://in.linkedin.com/in/suhas-ledange-4a0533206"
    },
    {
      id:4,
      icon:<FaYoutube className="text-lg"/>,
      link:"https://www.youtube.com/channel/UC1ynsuU6XPZ2iWw1Gf9SHlQ"
    }
  ];

  return (
    <footer className="w-full pt-20 pb-4 relative" id="contact">

      <div className="w-full h-full p-4 absolute left-0 right-0 bottom-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full object-cover opacity-90 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Get in <span className="text-purple">Touch </span>with Me
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        Let’s discuss how I can assist you in achieving your objectives.
        </p>
        <a href="mailto:suhasledange10@gmail.com">
          <ShimmerButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col-reverse gap-5 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Suhas Ledange
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a href={info.link}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {info.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;