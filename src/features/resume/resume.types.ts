
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
    'Developed Python-based mineral tonnage estimation app for mining operations using pytest, SQL, and pandas, reducing processing time from 1 week to 20 minutes. \
    Eliminated calculation errors and implemented CI/CD pipeline using GitHub Actions.',
    'Engineered an advanced automated test harness for routers and modems at a major telecom company, integrating React/Node.js UI, \
    Python testing scripts, and Ansible for real-time execution. \
    This comprehensive system utilized webhooks for seamless communication, dramatically reducing testing duration from weeks to under an hour.',
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