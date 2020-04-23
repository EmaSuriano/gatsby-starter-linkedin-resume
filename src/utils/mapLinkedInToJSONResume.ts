const mapToBasics = (linkedIn: LinkedInSchema): JsonResumeBasics => {
  return {
    name: 'string;',
    label: 'string;',
    image: 'string;',
    email: 'string;',
    phone: 'string;',
    url: 'string;',
    summary: 'string;',
    location: {
      address: 'string;',
      postalCode: 'string;',
      city: 'string;',
      countryCode: 'string;',
      region: 'string;',
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
