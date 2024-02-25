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
                I'm Ivan, originally from Hermosillo, Mexico, currently based in Hamburg, Germany. With over 6 years of experience in Product Management and UX Design, I've had the privilege of working with startups and corporate giants across the US, Europe, and Latin America.
                </p>
                <p>
                My journey into tech wasn't exactly traditional. Armed with a Bachelor's degree in Operations Management from the University of Arizona and a Masters in Global Logistics from the KLU, I initially pursued a path far from software engineering.
                </p>
                <p>
                However, the rapid evolution of technology soon caught my attention. Recognizing the transformative power of software, I made the leap into Product Management. It's been an exhilarating ride ever since.
                </p>
                <p>
                For me, successful product development is akin to a three-legged stool. Engineering, Product Management, and Design each play crucial roles, supporting and complementing one another. Collaboration and synergy among these disciplines are key to delivering exceptional products that users love.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About