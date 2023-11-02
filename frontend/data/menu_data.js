import landing_img from "../public/assets/img/index/landing.jpg";
import dashboard_img from "../public/assets/img/index/dashboard.jpg";
import event_img from "../public/assets/img/index/event.jpg";

const menuItems = [
    {
      text: 'Home',
      link: '/',
      dropdown: true,
      megaMenu: true,
      megaMenuItems: [
        {
          link: '/',
          style: {
            backgroundImage: `url(${landing_img.src})`,
          },
        },
        {
          link: '/signin',
          style: {
            backgroundImage: `url(${dashboard_img.src})`,
          },
        },
        {
          link: '/signin',
          style: {
            backgroundImage: `url(${event_img.src})`,
          },
        },
      ]
    },
    {
      text: 'About',
      link: '/about',
    },
    {
      text: 'Speakers',
      link: '/speaker-list-two',
    },
    {
      text: 'Events',
      link: '/event-list-two',
    },
    {
      text: 'Blog',
      link: '/blog',
      
    },
    {
      text: 'Pricing',
      link: '/pricing',
      
    },
    {
      text: 'Contact',
      link: '/contact',
      
    },
  ];
  
  export default menuItems