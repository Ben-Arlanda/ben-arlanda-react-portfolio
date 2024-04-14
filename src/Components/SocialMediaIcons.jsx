import linkedinIcon from "../assets/linkedin.png"
import facbookIcon from "../assets/facebook.png"
import instagramIcon from "../assets/instagram.png"


const SocialMediaIcons = () => {
  return (
    <div className="md:ml-7 flex md:justify-center md:my-5 gap-7">
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
    </div>
    
  )
}

export default SocialMediaIcons