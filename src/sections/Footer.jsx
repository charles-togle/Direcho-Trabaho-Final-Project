import logoIcon from '../assets/icons/logo_icon.png'
import instagramIcon from '../assets/icons/instagram_icon.png'
import youtubeIcon from '../assets/icons/youtube_icon.png'
import facebookIcon from '../assets/icons/facebook_icon.png'
import twitterIcon from '../assets/icons/twitter_icon.png'

export default function Footer () {
  const links = [
    { text: 'Events', link: '#' },
    { text: 'For professionals', link: '#' },
    { text: 'News', link: '#' },
    { text: 'About us', link: '#' },
    { text: 'Episodes', link: '#' },
    { text: 'Contact us', link: '#' },
    { text: 'Terms & conditions', link: '#' }
  ]
  const images = [
    { src: instagramIcon, alt: 'Instagram' },
    { src: facebookIcon, alt: 'Facebook' },
    { src: twitterIcon, alt: 'Twitter' },
    { src: youtubeIcon, alt: 'YouTube' }
  ]
  return (
    <footer className='border-t-1 border-b-1 border-base-shade pt-12 mt-33 pb-5 mb-25'>
      <div className='w-10/12 mx-auto text-white font-content font-[400]'>
        <div className='grid grid-cols-[17%_35%_40%] w-full '>
          <img src={logoIcon} alt='logo' className='w-17' />
          <div className='grid grid-cols-2 space-y-7'>
            {links.map(link => (
              <a
                href={link.link}
                key={link.text}
                className={`${link.text === 'Episodes' && 'row-span-2'}`}
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className='ml-20'>
            <p>
              Follow us on social media and join our growing community of
              performing arts enthusiasts.
            </p>
            <div className='flex flex-row gap-4 mt-5'>
              {images.map(image => (
                <img
                  src={image.src}
                  alt={image.alt}
                  key={image.alt}
                  className='w-12'
                />
              ))}
            </div>
          </div>
        </div>
        <p className='mt-7'>© Red Curtain Addict 2021</p>
      </div>
    </footer>
  )
}
