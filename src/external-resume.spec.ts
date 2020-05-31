import fetch from 'node-fetch';
import { main } from './external-resume';
import fs from 'fs';
import linkedInMock from './mocks/linked-in.json';

jest.mock('fs');

jest.mock('node-fetch', () =>
  jest.fn().mockResolvedValue({ json: () => linkedInMock }),
);

describe('external resume', () => {
  it('should not fetch ', () => {
    main({});
    expect(fetch).not.toBeCalled();
  });

  it('should fetch from external resource ', async () => {
    const RESUME_JSON = 'http://somewhere-else.com/resume.json';
    await main({ RESUME_JSON });

    expect(fetch).toBeCalledWith(RESUME_JSON);
    expect(fs.writeFileSync).toBeCalled();
  });
});
