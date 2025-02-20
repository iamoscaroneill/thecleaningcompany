import about from './About.module.css'

const About = () => {
    return (
        <div id="about_main_container"className={about.container}>
            <h1 id="about_section">About Us</h1>
            <h3>{`We're committed to providing unparalleled cleaning services tailored to the unique needs of our diverse clientele.`}</h3>
            <br/>
            <h3>{`At The Cleaning Company, we believe that a clean environment is the cornerstone of a healthy and thriving community. Our
            about us statement is a testament to our unwavering commitment to redefine the cleaning industry by combining
            traditional values with modern, eco-friendly practices. As a locally rooted company, we take pride in our deep
            understanding of the distinct challenges posed by urban living in New York City, and we strive to be the trusted
            partners our clients can rely on to transform their spaces into havens of cleanliness.`}</h3>
            <br/>
            <h3>{`Driven by integrity, professionalism, and a genuine love for what we do, The Cleaning Company is more than
            just a service provider; we are your allies in creating a healthier, happier, and more vibrant living and working
            environment. Join us on this journey towards a sparkling, pristine New York City.`}</h3>

            <br/>

            <h1 id="mission_section">Our Mission</h1>
            <h3>{`We aim to redefine cleanliness and elevate the standards of hygiene in the bustling metropolis of New York City.
            Committed to excellence, we strive to create a cleaner and healthier environment for our clients by delivering top-notch
            cleaning services tailored to their unique needs. Our dedicated team of experienced and highly trained professionals is
            driven by a passion for cleanliness, attention to detail, and a commitment to exceeding customer expectations.`}</h3>
            <br/>
            <h3>{`As a locally rooted cleaning company, we understand the distinctive challenges that come with maintaining spaces in the
            heart of New York City. Our mission is to alleviate the burden of cleaning responsibilities from our clients' shoulders,
            allowing them to focus on their busy lives while we transform their spaces into pristine havens. With a commitment to
            eco-friendly practices and the use of cutting-edge cleaning technologies, The Cleaning Company is not just a
            service provider; we are partners in promoting a healthier and more sustainable urban living experience. Join us in our
            mission to make every corner of the city shine with cleanliness and radiate with a newfound freshness.`}</h3>
        </div>
    )
}

export default About