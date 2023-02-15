import Fallen from '../../assets/Fallen.png'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={Fallen} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Building products that users love to use is my passion. I have 5+ years of experience in Product Management and UX Design. I have worked with startups and large companies in the US, Europe, and Latin America. I am a native Spanish speaker and I am fluent in English and German, with a little bit of Russian there. I am currently based in the Hamburg, Germany.
                </p>
                <p>
                Hi, my name is Ivan from Hermosillo, Mexico. I'm a full stack product developer with a Bachelor's degree in Operations Management from the University of Arizona and a Masters in Global Logistics from the KLU. Nothing to do with Software Engineering right?
                </p>
                <p>
                Well, after my Masters I recognized that software was eating the world and decided to jump off the deep-end from the Product Management plank. It is wild the amount of decisions that a Product Manager must take every day. Successful product building is a three-legged stool. 
                </p>
                <p>
                Engineering, Product Management and Design are each leg on which a great product lies on. Each leg will not tell the other how to do any specific task, but they each lean on each other to get shot done. 
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About