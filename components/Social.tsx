import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    name: "Github",
    path: "https://github.com/muhamedoufi",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/muhamedoufi",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    path: "https://youtube.com/muhamedoufi",
  },

  {
    name: "Twitter",
    icon: <FaTwitter />,
    path: "https://x.com/muhamedoufi",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    path: "https://facebook.com/muhamedoufi",
  },
];
const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
