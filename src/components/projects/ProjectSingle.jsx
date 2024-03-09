import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const ProjectSingle = ({
  title,
  category,
  image,
  link,
  id,
  avaliable,
  des,
}) => {

  const handleAvaliable = (avaliable) => {
    if (avaliable == true) {
      return (
        <a href={link} key={id} target="__blank">
          <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
            {/* <div>
              <img
                src={image}
                className="rounded-t-xl border-none"
                alt="Single Project"
              />
            </div> */}
            <div className="text-center px-4 py-6">
              <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                {title}
              </p>
              <span className="text-lg text-ternary-dark dark:text-ternary-light break-all">
                {category}
              </span>
              <span className="text-lg text-ternary-dark dark:text-ternary-light">
                {des}
              </span>
            </div>
          </div>
        </a>
      );
    } else
      return (
        <div
          className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
          onClick={() =>
            Swal.fire({
              icon: "error",
              title: "Repository isn't avaliable",
              text: "company privacy reasons",
              timer: 2000,
              background:
                localStorage.getItem("theme") === "dark" ? "#0D2438" : "white",
              color:
                localStorage.getItem("theme") === "dark" ? "white" : "black",
            })
          }
        >
          {/* <div>
            <img
              src={image}
              className="rounded-t-xl border-none"
              alt="Single Project"
            />
          </div> */}
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
            <br />
            <span className="text-sm text-ternary-dark dark:text-ternary-light">
              {des}
            </span>
          </div>
        </div>
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      {/* <Link to="/projects/single-project" aria-label="Single Project"> */}
      {handleAvaliable(avaliable)}
      {/* </Link> */}
    </motion.div>
  );
};

export default ProjectSingle;
