import Ajv = require("ajv");
import LinkedInSchema from "./LinkedInSchema";
export declare const ajv: Ajv.Ajv;
export { LinkedInSchema };
export declare const LinkedInSchemaSchema: {
    $schema: string;
    defaultProperties: never[];
    definitions: {
        ContactType: {
            enum: string[];
            type: string;
        };
        LanguageProficiency: {
            enum: string[];
            type: string;
        };
    };
    properties: {
        contact: {
            items: {
                defaultProperties: never[];
                properties: {
                    type: {
                        $ref: string;
                    };
                    values: {
                        items: {
                            type: string;
                        };
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
            type: string;
        };
        courses: {
            items: {
                defaultProperties: never[];
                properties: {
                    name: {
                        type: string;
                    };
                    year: {
                        type: string;
                    };
                };
                required: string[];
                type: string;
            };
            type: string;
        };
        educations: {
            items: {
                defaultProperties: never[];
                properties: {
                    date1: {
                        type: string;
                    };
                    date2: {
                        type: string;
                    };
                    degree: {
                        type: string;
                    };
                    fieldofstudy: {
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
        languages: {
            items: {
                defaultProperties: never[];
                properties: {
                    name: {
                        type: string;
                    };
                    proficiency: {
                        $ref: string;
                    };
                };
                required: string[];
                type: string;
            };
            type: string;
        };
        positions: {
            items: {
                allOf: ({
                    defaultProperties: never[];
                    properties: {
                        companyName: {
                            type: string;
                        };
                        date1: {
                            type: string;
                        };
                        date2: {
                            type: string;
                        };
                        description: {
                            type: string;
                        };
                        location: {
                            type: string;
                        };
                        title: {
                            type: string;
                        };
                        roles?: undefined;
                    };
                    required: string[];
                    type: string;
                } | {
                    defaultProperties: never[];
                    properties: {
                        roles: {
                            items: {
                                defaultProperties: never[];
                                properties: {
                                    companyName: {
                                        type: string;
                                    };
                                    date1: {
                                        type: string;
                                    };
                                    date2: {
                                        type: string;
                                    };
                                    description: {
                                        type: string;
                                    };
                                    location: {
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
                        companyName?: undefined;
                        date1?: undefined;
                        date2?: undefined;
                        description?: undefined;
                        location?: undefined;
                        title?: undefined;
                    };
                    type: string;
                    required?: undefined;
                })[];
            };
            type: string;
        };
        profile: {
            defaultProperties: never[];
            properties: {
                headline: {
                    type: string;
                };
                imageurl: {
                    type: string;
                };
                name: {
                    type: string;
                };
                summary: {
                    type: string;
                };
            };
            required: string[];
            type: string;
        };
        projects: {
            items: {
                defaultProperties: never[];
                properties: {
                    date: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    link: {
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
        skills: {
            items: {
                defaultProperties: never[];
                properties: {
                    count: {
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
    };
    required: string[];
    type: string;
};
export declare type ValidateFunction<T> = ((data: unknown) => data is T) & Pick<Ajv.ValidateFunction, "errors">;
export declare const isLinkedInSchema: ValidateFunction<LinkedInSchema>;
export default function validate(value: unknown): LinkedInSchema;
