import LinkedInSchema, {
  ContactItem,
  ContactType,
  LinkedInPosition,
  LinkedInEducation,
  LinkedInProject,
} from '../types/LinkedInSchema';
import JsonResumeSchema, {
  JsonResumeBasics,
  JsonResumeWork,
  JsonResumeEducation,
  JsonResumePublication,
} from '../types/JsonResumeSchema';

const formatDate = (date: string) => {
  if (date === 'Present') return '';

  const onlyYear = !!parseInt(date, 16);
  return onlyYear ? `Feb ${date}` : date;
};

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

const mapToPosition = ({ description, title, date1 }: LinkedInPosition) => {
  const [startDate, endDate] = date1.split(' – ');
  const [summary, ...highlights] = description.replace(/\n/g, '').split('- ');

  return {
    summary,
    position: title,
    startDate: formatDate(startDate),
    endDate: formatDate(endDate),
    highlights,
  };
};

const mapToWork = (position: LinkedInPosition): JsonResumeWork => {
  const baseWorkData = {
    location: position.location || '',
    company: position.companyName || position.title,
    website: position.link,
  };

  if (position.roles && position.roles.length > 1)
    return {
      ...baseWorkData,
      positions: position.roles.map(mapToPosition),
    };

  return {
    ...baseWorkData,
    ...mapToPosition(position),
  };
};

const mapToEducation = (education: LinkedInEducation): JsonResumeEducation => {
  return {
    institution: education.title,
    area: education.fieldOfStudy,
    studyType: education.degree,
    startDate: formatDate(education.date1),
    endDate: formatDate(education.date2),
  };
};

const mapToPublication = (project: LinkedInProject): JsonResumePublication => {
  return {
    name: project.name,
    summary: project.description,
    releaseDate: project.date,
    website: project.link,
  };
};

const mapLinkedInToJSONResume = (linkedIn: LinkedInSchema) => {
  const resume: JsonResumeSchema = {
    basics: mapToBasics(linkedIn),
    work: linkedIn.positions
      .filter((x) => x.companyName || (x.roles && x.roles.length > 1))
      .map(mapToWork),
    education: linkedIn.educations.map(mapToEducation),
    publications: linkedIn.projects.map(mapToPublication),
  };

  return resume;
};

export default mapLinkedInToJSONResume;
