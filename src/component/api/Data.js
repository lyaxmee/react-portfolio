import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import AVT1 from '../assets/me.jpeg'
import AVT2 from '../assets/lyax.jpg'
import IMG1 from '../assets/trip.png'
import IMG2 from '../assets/simple.png'
import IMG3 from '../assets/street.png'




const contactData = [
  {
    id: 1,
    type: "Email",
    url: "mailto:laxmitimilsina65@gmail.com",
    icon: <MdOutlineEmail />
  }, {
    id: 2,
    type: "instagram",
    url: "https://",
    icon: <RiMessengerLine />
  }, {
    id: 3,
    type: "Whatsapp",
    url: "https://api.whatsapp.com/send?phone=+9779748844114",
    icon: <BsWhatsapp />
  }
]

const portfolioData = [
  {
    id: 1,
    img: IMG1,
    title: "TripBoss Website",
    github: "https://lyaxmee.github.io/tripboss/",
     },
  {
    id: 2,
    img: IMG2,
    title: "Simple me ",
    github: "https://lyaxmee.github.io/simple-me/",
    
  },
  {
    id: 3,
    img: IMG3,
    title: "Food site",
    github: "https://",
    
  },
 ]


const testimonialData = [
  {
    id:1,
    name:"Nabin Chaudhary",
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nostrum quidem eum? Numquam nesciunt id veritatis amet? Vero enim maxime velit porro, tempore cum obcaecati pariatur autem! Beatae, praesentium quos.",
    avatar:AVT1
  },
  {
    id:2,
    name:"Ganga Thapa",
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nostrum quidem eum? Numquam nesciunt id veritatis amet? Vero enim maxime velit porro, tempore cum obcaecati pariatur autem! Beatae, praesentium quos.",
    avatar:AVT2
  },
  {
    id:3,
    name:"Vikram Rana",
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nostrum quidem eum? Numquam nesciunt id veritatis amet? Vero enim maxime velit porro, tempore cum obcaecati pariatur autem! Beatae, praesentium quos.",
    avatar:AVT1
  },
  {
    id:4,
    name:"Shuvam Sharma",
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nostrum quidem eum? Numquam nesciunt id veritatis amet? Vero enim maxime velit porro, tempore cum obcaecati pariatur autem! Beatae, praesentium quos.",
    avatar:AVT2
  }
]

export {contactData,portfolioData,testimonialData}