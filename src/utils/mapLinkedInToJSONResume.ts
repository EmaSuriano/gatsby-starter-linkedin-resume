import LinkedInSchema, {
  ContactItem,
  ContactType,
} from '../types/LinkedInSchema';
import JsonResumeSchema, {
  JsonResumeBasics,
  JsonResumeWork,
  JsonResumeEducation,
} from '../types/JsonResumeSchema';

const getContactSection = (contactList: ContactItem[], type: ContactType) =>
  contactList
    .find((contact) => contact.type === type)
    ?.values[0].replace(/\s+/g, ' ') || '';

const mapToBasics = (linkedIn: LinkedInSchema): JsonResumeBasics => {
  const { profile, contact } = linkedIn;
  const [city, region] = getContactSection(contact, 'Address').split(', ');

  return {
    name: profile.name,
    label: profile.headline,
    image: profile.imageurl,
    email: getContactSection(contact, 'Email'),
    phone: getContactSection(contact, 'Phone').replace(' (Mobile)', ''),
    website: `https://${getContactSection(contact, 'Websites').replace(
      ' (Personal Website)',
      '',
    )}`,
    summary: profile.summary,
    location: {
      address: '',
      postalCode: '',
      city,
      countryCode: region,
      region,
    },
  };
};

const mapToWork = (linkedIn: LinkedInSchema): JsonResumeWork[] => {
  return [
    {
      name: 'string;',
      location: 'string;',
      description: 'string;',
      position: 'string;',
      url: 'string;',
      startDate: 'string;',
      endDate: 'string;',
      summary: 'string;',
      highlights: ['string[];'],
    },
  ];
};

const mapToEducation = (linkedIn: LinkedInSchema): JsonResumeEducation[] => {
  return [
    {
      institution: 'string',
      area: 'string',
      studyType: 'string',
      startDate: 'string',
      endDate: 'string',
      gpa: 'string',
      courses: ['string'],
    },
  ];
};

const mapLinkedInToJSONResume = (linkedIn: LinkedInSchema) => {
  const resume: JsonResumeSchema = {
    basics: mapToBasics(linkedIn),
    work: mapToWork(linkedIn),
    education: mapToEducation(linkedIn),
  };

  return resume;
};

export default mapLinkedInToJSONResume;
