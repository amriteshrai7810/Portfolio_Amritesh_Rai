export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tools: string[];
  domain: string;
  gradient: string;
  outcomes: string[];
  insights: string[];
  approach: string[];
  conclusion: string[];
  github: string;
  demo: string | null;
  powerBiEmbed: string | null;
  images: string[];
  featured: boolean;
  showCode?: boolean; // 👈 NEW FIELD
  pdf?: string;   // ✅ ADD THIS

}

export const projects: Project[] = [
  {
    id: 'atliq-mart-analysis',
    title: 'Atliqmart Analysis',
    description: 'Created a service-level analysis for Atliq Mart to track OTIF, LIFR, and VOFR and identify causes of contract non-renewals.',
    fullDescription: 'This project analyzes AtliQ Mart’s supply chain and sales performance using OT%, IF%, and OTIF metrics to identify inefficiencies and optimize operations.',
    tools: ['Power BI', 'Excel', 'SQL'],
    domain: 'FMCG',
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    outcomes: [
      'Comparing target vs actual performance.',
      'Built five dashboards for multi-level analysis.',
      'Created custom DAX measures for advanced analysis.'
        ],
    insights: [
      'Given the persistent low Line Fill Rate, delivery delays, and supply chain inefficiencies, there is a high risk that Lotus Mart, Cool Blue, and Acclaimed Store may choose not to renew their contracts.',
      'OT, IF, and OTIF consistently miss targets on both daily and monthly levels, pointing to forecasting issues, inventory shortages, or procurement delays.',
      'Lotus Mart, Cool Blue, and Acclaimed Store struggle with low Line Fill Rate (LIFR) and frequent delays due to poor inventory management and supply shortages.'
    ],
    approach: [
      'Understood business issues and reviewed supply chain datasets.',
      'Modeled data using a structured star schema design.',
      'Created custom DAX measures for service performance analysis.',
      'Built dynamic dashboards with drill-down and trend tracking.',
      'Delivered executive report with insights and recommendations.'
    ],
    conclusion:['• Improve Logistics & Lead Time Management: Optimize order processing, warehouse operations, and transportation planning to reduce delays. Implement real-time tracking and collaborate with reliable logistics partners for faster deliveries.',
      '• Optimize Inventory Management: Improve demand forecasting and stock replenishment to reduce shortages and delays.','• Diversify Supplier Base: Onboard multiple vendors for critical items to mitigate supply risks, ensure consistent stock availability, and improve Line Fill Rate (LIFR).'
    ],
    github: 'https://github.com/amriteshrai7810/Supply-Chain-Analysis',
    demo: '/project/atliq-mart-analysis',
    powerBiEmbed: 'https://app.powerbi.com/view?r=eyJrIjoiZTc0MzljYjgtOTc4Yy00MzQ1LTljMWYtODAxNjE5MTEyZmEyIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9',
    images: [
      '#'
    ],
    featured: true,
    showCode: true,
    pdf: "https://drive.google.com/file/d/1y-SYkD15zuJd4HMjCWYnpUkh_S4_oFcf/preview"
  },

{
  id: 'goodcabs-analysis',
  title: 'GoodCabs Analysis',
  description: 'Evaluate GoodCabs performance to uncover insights for growth and service improvements.',
  fullDescription: 'Evaluated GoodCabs performance using Snowflake schema modeling and KPIs like trip volume, satisfaction, and repeat rates.',
  tools: ['SQL', 'Power BI', 'Excel'],
  domain: 'Transportation',
  gradient: 'from-amber-500 via-orange-500 to-red-500',

  outcomes: [
    'Analyzed 420,000+ data points',
    'Modeled a 10-table complex dataset',
    'Suggested data-driven improvements to meet trip targets'
  ],

  insights: [
    'Jaipur accounts for 18% of total trips and is the best-performing city, while Mysore contributes only 4% and is the lowest-performing city in terms of trip volume.',
    'Average fare per kilometer is 25% higher (₹10) in tourism-focused cities compared to business-focused cities.',
    'Passenger ratings are 1.3 points lower for repeat passengers.',
    'June is the worst-performing month, while April records the highest total trips.',
    'Tourism-focused cities have a 6% higher proportion of weekend trips.',
    'Business-focused cities show a higher number of repeat passengers.',
    'Business cities are meeting new passenger targets, while tourism cities perform strongly in ratings and trip volume.',
    'June is the only month where Repeat Passenger Rate (RPR) declined, dropping by 3.5% from the previous month.'
  ],

  approach: [
    'Defined the business problem by analyzing trip data and customer behavior metrics.',
    'Designed a Snowflake schema data model to maintain structured relationships.',
    'Performed data cleaning and exploratory data analysis (EDA) using SQL.',
    'Developed advanced DAX measures and custom calculations in Power BI.',
    'Identified performance gaps and proposed actionable business recommendations.'
  ],

  conclusion: [
    '• Quality of Service: Introduce structured driver training and performance-based incentives linked to customer ratings to improve service quality and increase repeat passenger rates.',
    '• Socioeconomic & Pricing Strategy: Offer bikes, cabs, and rickshaws in Tier 2 cities to cater to the large middle-class population with flexible pricing and greater convenience.', 
    '• Customer Loyalty & Retention: Implement personalized services, loyalty programs, and amenities such as air-conditioning, seamless booking, and in-vehicle charging to enhance customer satisfaction and drive repeat business.'
  ],

  github: 'https://github.com/amriteshrai7810/GoodCabs-Analysis',
  demo: '/project/goodcabs-analysis',
  powerBiEmbed: 'https://app.powerbi.com/view?r=eyJrIjoiNjgwY2RkZGQtOGY4Ni00MDZkLTgzMzctNWQ2ZmEyNDM4MmZkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection152489641e004e0b39e5',

  images: [
    '#'
  ],
  featured: true,
  showCode: true,
  pdf: "https://drive.google.com/file/d/1qvLjDMSPc9nS8OZySfp2Pb5L5RjrQXAj/preview"
},

  {
    id: 'gurgaon-real-estate',
    title: 'Gurgaon Real Estate Analysis',
    description: 'End-to-end data science project with scraping, EDA, and ML-based price prediction deployed via Streamlit.',
    fullDescription: 'Built a property intelligence platform using 3,800+ listings for Gurgaon with recommendations and pricing predictions.',
    tools: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy'],
    domain: 'Real Estate',
    gradient: 'from-emerald-600 via-emerald-500 to-teal-500',
    outcomes: [
      'Scraped 3,800+ property records',
      'Achieved 90% price prediction accuracy',
      'Built recommendation system',
      'Deployed live Streamlit app'
    ],
    insights: [
      'Identified pricing patterns across 3,800+ property listings',
      'Revealed area-wise price trends and flat distribution insights',
      'Predicted property prices using Random Forest modeling',
      'Recommended societies based on proximity to key locations',
      'Enabled dynamic data collection for continuous market insights'
    ],
    approach: [
      'Scraped 3,800+ listings from 99acres and MagicBricks',
      'Cleaned data using Pandas, handling missing values, outliers',
      'Visualized price trends, sizes, and area-wise variations',
      'Built price prediction model with 90% interval accuracy',
      'Recommended societies using landmarks and apartment similarities',
      'Deployed Streamlit dashboard on Amazon EC2 for real-time use'
    ],
    conclusion: ['• Enabled smarter property buying decisions with AI-powered insights.','• Enabled smarter property buying decisions with AI-powered insights; dashboard reduces search time by 30% by automatically surfacing nearby properties by location, type, and key filters for faster, informed buyer and investor decisions.'],
    github: 'https://github.com/amriteshrai7810/Gurgaon-Real-Estate-Analysis',
    demo: 'https://gurgaonhousingmarketanalysis-lrucnaqwthf3lrubhanwxa.streamlit.app/',
    powerBiEmbed: null,
    images: [
      '#'
    ],
    featured: true,
    showCode: true,
    pdf:"https://drive.google.com/file/d/1f3Lw-dG9GXYy4dJoAvCNzvzJyHuCZ6r8/preview"
  },

  {
    id: 'business-insight-360',
    title: 'Databel Telecom Churn Analysis',
    description: 'Analyzed Databel churn drivers using Advanced Excel to improve customer retention.',
    fullDescription: 'Customer churn analytics solution for Databel to identify drivers and improve retention.',
    tools: ['Power BI', 'DAX', 'SQL', 'Excel'],
    domain: 'Customer Analysis',
    gradient: 'from-orange-600 via-amber-500 to-yellow-400',
    outcomes: [
      'Analyzed 6,800+ rows and 35 columns in Power Pivot',
      'Used 15+ PivotTables and charts for data analysis',
      'Created measures to evaluate churn, revenue risk, totals',
    ],
    insights: [
      'Churn Rates: California (CA) has the highest churn at 63%, with no gender disparity.',
      'Customer Service Calls: Churn rises sharply when customers make more than two service calls.',
      'Account Length: Longer tenure slightly reduces the likelihood of churn.',
      'Data Usage: Customers using less than 3GB data show higher churn rates.',
      'Average Monthly Charges: Churned customers pay about $8 more on average.',
      'Contracts & Payments: Contract type and payment method strongly influence churn behavior.',
      'Customer Segmentation: Churners include conditional loyalists, migrators, and unsatisfied customers.'
    ],
    approach: [
      'Cleaned data in Power Query and validated column quality',
      'Explored churn using pivots, charts, demographics, usage patterns',
      'Calculated correlations between churn and key variables',
      ' Built interactive visuals showing churn trends and reasons'
    ],
    conclusion: ['• This analysis provides critical insights into customer churn patterns for Databel. By addressing high-churn customer segments and improving customer service quality, Databel can reduce churn rates and enhance customer satisfaction.',],
    github: "https://github.com/amriteshrai7810/Databel_Churn_Analysis",
    demo: '/project/business-insight-360',
    powerBiEmbed: "https://1drv.ms/x/c/f7b6f4461d511de9/IQSU2yI9eMzEQKKJoyQoeAA_AcjL4WQAllD4SD7c2sbWxUw",
    images: [],
    featured: true,
    showCode: true,
    pdf:"https://drive.google.com/file/d/1dg_rNr7YauSv7ZZpdl1cDh5eLcABPujW/preview"
  },

  {
    id: 'placeholder-project-1',
    title: 'QuickBite: Customer Retention Analysis',
    description: 'Analyzing QuickBite’s crisis impact to improve retention, delivery performance, and customer trust recovery.',
    fullDescription: 'Comprehensive analysis of customer churn using machine learning techniques to identify at-risk customers and improve retention strategies.',
    tools: ['Python', 'SQL', 'Power BI'],
    domain: 'Online Food Delivery',
    gradient: 'from-violet-600 via-purple-500 to-indigo-500',
    outcomes: [
      'Analyzed 100,000+ customer records',
      'Built predictive churn model with 85% accuracy',
      'Identified top 5 churn drivers',
      'Reduced churn by 15% through targeted campaigns'
    ],
    insights: [
      'Customer engagement drops 30 days before churn',
      'Price sensitivity highest in first 6 months',
      'Support ticket volume correlates with churn risk'
    ],
    approach: [
      'Data cleaning and feature engineering',
      'Exploratory data analysis',
      'Machine learning model development',
      'Dashboard creation for monitoring'
    ],
    conclusion: ['Proactive customer engagement based on churn signals can significantly improve retention rates.'],
    github: 'https://github.com/atulkumar7810',
    demo: null,
    powerBiEmbed: null,
    images: [],
    featured: false,
    showCode: true
  },

  {
    id: 'placeholder-project-2',
    title: 'Sales Performance Dashboard',
    description: 'Interactive dashboard tracking key sales metrics, regional performance, and revenue trends for a retail company.',
    fullDescription: 'End-to-end sales analytics solution providing real-time insights into sales performance across multiple regions and product categories.',
    tools: ['Power BI', 'Excel', 'SQL'],
    domain: 'Business Intelligence',
    gradient: 'from-rose-600 via-pink-500 to-red-500',
    outcomes: [
      'Consolidated data from 5 regional databases',
      'Created 12 interactive dashboard pages',
      'Enabled real-time sales tracking',
      'Improved reporting efficiency by 40%'
    ],
    insights: [
      'Q4 consistently outperforms other quarters',
      'Online sales growing at 25% YoY',
      'Top 20% of products drive 80% of revenue'
    ],
    approach: [
      'Data integration from multiple sources',
      'Star schema data modeling',
      'DAX measures for KPIs',
      'Interactive visualizations'
    ],
    conclusion: ['Centralized dashboards enable faster decision-making and better sales strategy alignment.'],
    github: 'https://github.com/atulkumar7810',
    demo: null,
    powerBiEmbed: null,
    images: [],
    featured: false,
    showCode: true
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const filters = [
  'All',
  'SQL',
  'Power BI',
  'Python',
  'FMCG',
  'Real Estate',
  'Transportation',
  'Business Intelligence'
];
