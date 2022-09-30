
import Typewriter from 'typewriter-effect'
import blogimage from'../assets/img/header-img.svg';

export default function Banner() {
  const CvLink =
    'https://www.google.com'
  return (
    <div className='WelcomeView' id="WelcomeView">
      <div className='WelcomeContent'>
        <img src={blogimage} alt="Blog Illustration" width="550" />
        <div className='SocialTop'>
          <div className='SocialBtn'>
            <a
              href={'https://github.com/Vipashu'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className='github'></div>
            </a>
            <a
              href={'https://linkedin.com/in/vipashu-lakhera'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className='linkedin'></div>
            </a>
            <a
              href={'https://instagram.com/vipashulakhera'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className='instagram'></div>
            </a>
            <a href={'https://twitter.com/vipashu21'}>
              <div className='twitter'></div>
            </a>
          </div>
        </div>

        <div className='WelcomeMsg'>
          <h2>Hi,</h2>
          <h1>I'm Vipashu,</h1>
          <Typewriter
            options={{
              strings: ['Web Developer.', 'Student.', 'App Developer.'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        {/* Show Buttons */}
        <a href={CvLink} target="_blank" rel="noopener noreferrer">
          <button className='CvButton'>My Resume</button>
        </a>
      </div>
    </div>
  )
}