export type EventItem = {
  slug: string;
  location: string;
  date: string;
  time: string;
  image: string;
  title: string;
};

export const events: EventItem[] = [
  {
    image: '/images/event1.png',
    title: 'React Summit 2026',
    slug: 'react-summit-2026',
    location: 'San Francisco, CA',
    date: 'Oct 15, 2026',
    time: '09:00 AM - 05:00 PM',
  },
  {
    image: '/images/event2.png',
    title: 'Next.js Conf & Hackathon',
    slug: 'nextjs-conf-hackathon',
    location: 'Online / Global',
    date: 'Nov 02, 2026',
    time: '10:00 AM - 06:00 PM',
  },
  {
    image: '/images/event3.png',
    title: 'AI Engineers World Fair',
    slug: 'ai-engineers-world-fair',
    location: 'Austin, TX',
    date: 'Nov 18, 2026',
    time: '08:30 AM - 04:30 PM',
  },
  {
    image: '/images/event4.png',
    title: 'TypeScript Global Meetup',
    slug: 'typescript-global-meetup',
    location: 'New York, NY',
    date: 'Dec 05, 2026',
    time: '06:00 PM - 09:00 PM',
  },
  {
    image: '/images/event5.png',
    title: 'Web3 & Cloud DevFest',
    slug: 'web3-cloud-devfest',
    location: 'London, UK',
    date: 'Jan 12, 2027',
    time: '10:00 AM - 05:00 PM',
  },
  {
    image: '/images/event6.png',
    title: 'Open Source Community Day',
    slug: 'open-source-community-day',
    location: 'Berlin, Germany',
    date: 'Feb 20, 2027',
    time: '11:00 AM - 04:00 PM',
  },
];