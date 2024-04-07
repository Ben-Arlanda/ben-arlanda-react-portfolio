import linkedinIcon from "../assets/linkedin.png"
import facbookIcon from "../assets/facebook.png"
import instagramIcon from "../assets/instagram.png"
import twitterIcon from "../assets/twitter.png"

const SocialMediaIcons = () => {
  return (
    <div className="ml-7 flex justify-center md:justify-start my-10 gap-7">
      <a className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ben-arlanda-3bb45b83/"
        target="_blank"
        rel="noreferrer"
      >
       <img src={linkedinIcon} alt="" /> 
      </a>
      <a className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facbookIcon} alt="" />
      </a>
      <a className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagramIcon} alt="" />
      </a>
      <a className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/?lang=en"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitterIcon} alt="" />
      </a>
    </div>
    
  )
}

export default SocialMediaIcons