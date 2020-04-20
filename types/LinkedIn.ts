export type ContactType =
  | 'Your Profile'
  | 'Your Profile'
  | 'Websites'
  | 'Phone'
  | 'Address'
  | 'Email'
  | 'Birthday';

export type ContactItem = {
  type: ContactType;
  value: string[];
};

export type ProfileData = {
  name: string;
  headline: string;
  imageurl: string;
  summary: string;
};

export type Position = {
  title: string;
  location: string;
  description: string;
  date1: string;
  date2: string;
  roles?: Position[];
};

export type Education = {
  title: string;
  degree: string;
  fieldofstudy: string;
  date1: number;
  date2: number;
};

export type Skill = {
  title: string;
  count: number;
};

export type LinkedInSchema = {
  contact: ContactItem[];
  profile: ProfileData;
  positions: Position[];
  educations: Education[];
  skills: Skill[];
  recommendations: {
    givenCount: '0';
    receivedCount: '0';
    given: [];
    received: [];
  };
  accomplishments: [
    {
      count: '3';
      title: 'Courses';
      items: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        'GDG DevFest Arg',
        'NodeConf Arg',
        'React Amsterdam',
        'English',
        'German',
        'Spanish',
        'Gatsby Starter Mate',
        'react-hotkey-tooltip',
        'Blindle',
      ];
    },
  ];
  peopleAlsoViewed: [
    {
      user: 'https://www.linkedin.com/in/angelo-carazzai-a39b0774/';
      text: 'Senior Software Engineer at Omio';
    },
    {
      user: 'https://www.linkedin.com/in/sivasubramaniama/';
      text: 'Software Engineer at Omio';
    },
    {
      user: 'https://www.linkedin.com/in/maitrivarma/';
      text: 'Senior Product Manager at Omio';
    },
    {
      user: 'https://www.linkedin.com/in/giacomo-melandri-30556429/';
      text: 'Organic Mobile Growth Lead at Omio';
    },
    {
      user: 'https://www.linkedin.com/in/louisdelaye/';
      text: 'Marketing Analyst at Omio (formerly GoEuro)';
    },
    {
      user: 'https://www.linkedin.com/in/lucas-riveill-31008810/';
      text: 'Trainee Software Developer chez Omio';
    },
    {
      user: 'https://www.linkedin.com/in/daniel-olel/';
      text: 'Senior Data Scientist - Data & ML | Machine Learning | Data Engineering | Data Science Products';
    },
    {
      user: 'https://www.linkedin.com/in/christopheguillonnet/';
      text: 'Product Manager at Sesame';
    },
    {
      user: 'https://www.linkedin.com/in/omri-zaied-34596b69/';
      text: 'Engineering Manager at Omio';
    },
    {
      user: 'https://www.linkedin.com/in/martadominguezg/';
      text: 'Influencer Marketing Manager at GoEuro';
    },
  ];
  volunteerExperience: [
    {
      title: 'Developer FrontEnd/Backend(PHP)';
      experience: 'Gobierno de la Ciudad de Buenos Aires';
      description: 'Arts and Culture';
      date1: 'Jun 2015';
      date2: '1 mo';
    },
  ];
};
