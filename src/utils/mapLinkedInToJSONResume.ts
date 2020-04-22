import { LinkedInSchema } from '../types/LinkedIn';
import { JSONResumeSchema } from '../types/JsonResume';

const mapLinkedInToJSONResume = (
  linkedIn: LinkedInSchema,
): JSONResumeSchema => {
  const resume = {
    a: true,
  };

  return resume;
};

export default mapLinkedInToJSONResume;
