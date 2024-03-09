import profileImage from "../../images/profile.jpeg";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src={profileImage} className="rounded-lg w-96" alt="" />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {aboutMe.map((bio) => {
          return (
            <div key={bio.id}>
              <div className="text-ternary-light text-2xl mb-4 font-semibold">
                {bio.header}
              </div>
              <p
                className="mt-4 mb-4 text-ternary-light dark:text-ternary-light text-lg"
                key={bio.id}
              >
                {bio.bio}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMeBio;
