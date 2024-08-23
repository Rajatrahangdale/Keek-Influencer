import React, { useContext, useState } from "react";
import { Mycontext } from "../../utils/Context";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import Profile from "../../Assets/Profile.jpg";
const InfluencerProfile = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;

  const [profileData, setProfileData] = useState([
    {
      name: "About me",
      description: "Tell everyone about yourself",
      data: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu  Nunc vulputate libero et velit interdum, ac aliq matent taciti sociosqu Worem ipsum dolor sit.",
    },
    {
      name: "Niche",
      description: "Add or manage your speciality",
      data: [
        { name: "Travel" },
        { name: "Fashion" },
        { name: "Lifestyle" },
        { name: "Blogs" },
        { name: "Beauty" },
      ],
    },
    {
      name: "Social profiles",
      description: "Connect with your social accounts here",
      data: [
        { platform: "twitter.com/", name: "Gautam_sachdeva" },
        { platform: "Facebook.com/", name: "Gautam_sachdeva" },
        { platform: "Instagram.com/", name: "Gautam_sachdeva" },
      ],
    },
    {
      name: "Professional summary",
      description:
        "Write something about your profession like your past work and experience",
      data: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu  Nunc vulputate libero et velit interdum, ac aliq matent taciti sociosqu Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
    },
  ]);

  return (
    <div
      className={`flex flex-col relative ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      } overflow-y-auto bg-white pb-[15px]`}
    >
      <div className="mr-[74px] mt-[45px] ml-[21px]">
        <div className="flex items-center justify-between mb-[42px]">
          <div className="flex items-center gap-[11px]">
            <img
              src={Profile}
              alt="Profile"
              className="w-[120px] h-[120px] rounded-full overflow-hidden object-fill"
            />
            <div>
              <div className="flex flex-col gap-[18px]">
                <h2 className="text-[22px] font-semibold">Gautam Sachdeva</h2>
                <div className="flex items-center">
                  <IoMdStar size={"1.4em"} className="text-[#06F]" />
                  <IoMdStar size={"1.4em"} className="text-[#06F]" />
                  <IoMdStar size={"1.4em"} className="text-[#06F]" />
                  <IoMdStar size={"1.4em"} className="text-[#06F]" />
                  <IoMdStarOutline size={"1.4em"} className="text-[#06F]" />
                  <span className="text-xs font-semibold mt-1">4.0</span>&nbsp;
                  <span className="text-xs mt-1">(30 Reviews)</span>
                </div>
                <h3 className="flex items-center gap-2 text-sm font-semibold">
                  <CiLocationOn size={"1.4em"} />
                  New Delhi, India
                </h3>
              </div>
            </div>
          </div>
          <button className="px-4 w-[170px] h-[35px] flex items-center justify-center gap-3 border rounded border-[#06F] text-[#06F] text-sm">
            Edit Profile
          </button>
        </div>
        <hr className="w-full" />
        {profileData.map((item, index) => (
          <div key={index}>
            <div className="flex py-8 gap-x-[62px]">
              <div className="w-[256px]">
                <h3 className="text-lg font-semibold text-[#06F]">
                  {item.name}
                </h3>
                <span className="text-[#797A7B] text-sm">
                  {item.description}
                </span>
              </div>
              <div
                className={`flex ${
                  item.name === "Niche"
                    ? "flex-row gap-1.5 items-center"
                    : "flex-col gap-3"
                } text-start gap text-[#1F2223]`}
              >
                {Array.isArray(item.data) ? (
                  item.data.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className={`flex font-semibold ${
                        subItem.platform &&
                        "h-10 px-4 py-3 gap-3 items-center self-stretch rounded-md border border-[#B1B2B2]"
                      }`}
                    >
                      {subItem.platform && (
                        <div className="border-r pr-3 text-[#B1B2B2]">
                          {subItem.platform}
                        </div>
                      )}
                      <div
                        className={`${
                          !subItem.platform &&
                          "text-center px-[10px] py-1 border rounded-[14px] flex items-center justify-center gap-1.5 border-[#000]"
                        }`}
                      >
                        {subItem.name}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-[#1F2223] max-w-[671px]">{item.data}</p>
                )}
              </div>
            </div>
            <hr className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfluencerProfile;
