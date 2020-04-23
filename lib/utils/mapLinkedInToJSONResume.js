"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mapToBasics = function (linkedIn) {
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
var mapToWork = function (linkedIn) {
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
var mapToEducation = function (linkedIn) {
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
var mapLinkedInToJSONResume = function (linkedIn) {
    var resume = {
        basics: mapToBasics(linkedIn),
        work: mapToWork(linkedIn),
        education: mapToEducation(linkedIn),
    };
    return resume;
};
exports.default = mapLinkedInToJSONResume;
