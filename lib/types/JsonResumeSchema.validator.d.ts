import Ajv = require("ajv");
import JsonResumeSchema from "./JsonResumeSchema";
export declare const ajv: Ajv.Ajv;
export { JsonResumeSchema };
export declare const JsonResumeSchemaSchema: {
    $schema: string;
    defaultProperties: never[];
    properties: {
        awards: {
            items: {
                defaultProperties: never[];
                properties: {
                    awarder: {
                        type: string;
                    };
                    date: {
                        type: string;
                    };
                    summary: {
                        type: string;
                    };
                    title: {
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
            type: string;
        };
        basics: {
            defaultProperties: never[];
            properties: {
                email: {
                    type: string;
                };
                image: {
                    type: string;
                };
                label: {
                    type: string;
                };
                location: {
                    defaultProperties: never[];
                    properties: {
                        address: {
                            type: string;
                        };
                        city: {
                            type: string;
                        };
                        countryCode: {
                            type: string;
                        };
                        postalCode: {
                            type: string;
                        };
                        region: {
                            type: string;
                        };
                    };
                    type: string;
                };
                name: {
                    type: string;
                };
                phone: {
                    type: string;
                };
                profiles: {
                    items: {
                        defaultProperties: never[];
                        properties: {
                            network: {
                                type: string;
                            };
                            url: {
                                type: string;
                            };
                            username: {
                                type: string;
                            };
                        };
                        required: string[];
                        type: string;
                    };
                    type: string;
                };
                summary: {
                    type: string;
                };
                url: {
                    type: string;
                };
            };
            required: string[];
            type: string;
        };
        education: {
            items: {
                defaultProperties: never[];
                properties: {
                    area: {
                        type: string;
                    };
                    courses: {
                        items: {
                            type: string;
                        };
                        type: string;
                    };
                    endDate: {
                        type: string;
                    };
                    gpa: {
                        type: string;
                    };
                    institution: {
                        type: string;
                    };
                    startDate: {
                        type: string;
                    };
                    studyType: {
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
            type: string;
        };
        interests: {
            items: {
                defaultProperties: never[];
                properties: {
                    keywords: {
                        items: {
                            type: string;
                        };
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
            type: string;
        };
        languages: {
            items: {
                defaultProperties: never[];
                properties: {
                    fluency: {
                        type: string;
                    };
                    language: {
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
            type: string;
        };
        projects: {
            items: {
                defaultProperties: never[];
                properties: {
                    description: {
                        type: string;
                    };
                    endDate: {
                        type: string;
                    };
                    entity: {
                        type: string;
                    };
                    highlights: {
                        items: {
                            type: string;
                        };
                        type: string;
                    };
                    keywords: {
                        items: {
                            type: string;
                        };
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                    roles: {
                        items: {
                            type: string;
                        };
                        type: string;
                    };
                    startDate: {
                        type: string;
                    };
                    type: {
                        type: string;
                    };
                    url: {
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
            type: string;
        };
        publications: {
            items: {
                defaultProperties: never[];
                properties: {
                    name: {
                        type: string;
                    };
                    publisher: {
                        type: string;
                    };
                    releaseDate: {
                        type: string;
                    };
                    summary: {
                        type: string;
                    };
                    url: {
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
            type: string;
        };
        references: {
            items: {
                defaultProperties: never[];
                properties: {
                    name: {
                        type: string;
                    };
                    reference: {
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
            type: string;
        };
        skills: {
            items: {
                defaultProperties: never[];
                properties: {
                    keywords: {
                        items: {
                            type: string;
                        };
                        type: string;
                    };
                    level: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
            type: string;
        };
        volunteer: {
            items: {
                defaultProperties: never[];
                properties: {
                    endDate: {
                        type: string;
                    };
                    highlights: {
                        items: {
                            type: string;
                        };
                        type: string;
                    };
                    organization: {
                        type: string;
                    };
                    position: {
                        type: string;
                    };
                    startDate: {
                        type: string;
                    };
                    summary: {
                        type: string;
                    };
                    url: {
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
            type: string;
        };
        work: {
            items: {
                defaultProperties: never[];
                properties: {
                    description: {
                        type: string;
                    };
                    endDate: {
                        type: string;
                    };
                    highlights: {
                        items: {
                            type: string;
                        };
                        type: string;
                    };
                    location: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                    position: {
                        type: string;
                    };
                    startDate: {
                        type: string;
                    };
                    summary: {
                        type: string;
                    };
                    url: {
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
            type: string;
        };
    };
    required: string[];
    type: string;
};
export declare type ValidateFunction<T> = ((data: unknown) => data is T) & Pick<Ajv.ValidateFunction, "errors">;
export declare const isJsonResumeSchema: ValidateFunction<JsonResumeSchema>;
export default function validate(value: unknown): JsonResumeSchema;
