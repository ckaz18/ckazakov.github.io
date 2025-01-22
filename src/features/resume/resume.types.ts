
interface ExperienceData {
  title: string;
  date: string;
  skills: string[];
};

export const experienceInformation: ExperienceData[] = [{
  title: 'Software Engineer (Frontend Focus), Physna Inc',
  date: 'June 2023 - October 2024',
  skills: [
    'Developed a Chrome Extension integrating with Unity.com for 3D asset management, \
    enabling image search, asset comparisons, and user configuration.',
    'Spearheaded React, TypeScript, NextJS web app development, \
    replacing legacy systems and driving substantial performance improvements.',
    'Collaborated on 2D-to-3D model search capabilities and implemented asset collections for various file types.'
  ],
}, {
  title: 'Sr. Software Engineer, Illuma Labs',
  date: 'February 2023 - June 2023',
  skills: ['Streamlined agile processes, including sprint organization, story writing, and testing, \
    while setting up performance testing frameworks for Lambda functions and improving WebSocket \
    reliability through enhanced logging and debugging.'],
}, {
  title: 'Sr. Software Engineer, World Wide Technology',
  date: 'October 2019 - January 2023',
  skills: [
    'Led technical requirement gathering and architectural discussions for a large-scale streaming platform,\
     improving search algorithms with AWS Elasticsearch, Kafka, and Kubernetes.',
    'Developed APIs using NodeJS, TypeScript, and NestJS for web and mobile interfaces, \
    and configured Kafka Consumers to ingest data into Elasticsearch.',
    'Transformed complex Excel application into efficient Python script, \
    drastically reducing processing time and rectifying calculation errors, showcasing problem-solving skills.',
    'Built telecom applications using NodeJS, Python, \
    and Ansible for real-time test execution and logging on routers and modems utilizing webhooks.',
    'Designed a Python API with AWS Lambda, S3, and DynamoDB to provide snow data for Colorado Winter Resorts.',
  ],
}, {
  title: 'Software Engineer, Xentity Corporation (formerly Crestone Digital)',
  date: 'July 2016 - September 2019',
  skills: [
    'Pioneered multi-tenant voice apps with NLP , integrating diverse databases. \
    Boosted automated testing coverage to 70%, enhancing code reliability.',
    'Developed mobile apps with geospatial data, AWS Push Notifications, \
    and offline capabilities collaborating directly with CPW Fishing and Wildlife. Additionally provided customer support.',
    'Created the Douglas County Alexa Skill as a proof of concept using NodeJS and open data.',
  ],
}];