// src/components/features/JobFinder/JobFinder.tsx

import React, { useState } from 'react'
import { JobCard } from './JobCard'
import { Input } from '../../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../../ui/dialog'
import { Badge } from '../../ui/badge'
import { Button } from '../../ui/button'

// Your expanded sampleJobs array should be here...
const sampleJobs = [
    // --- Original 12 Jobs ---
    { 
        id: 1, 
        title: 'Software Engineer Intern', 
        company: 'Tech Solutions Inc.', 
        location: 'Remote', 
        type: 'Internship', 
        tags: ['React', 'Node.js', 'TypeScript'], 
        matchPercentage: 95,
        description: 'Join our dynamic team as a Software Engineer Intern and work on cutting-edge projects.',
        responsibilities: ['Develop and maintain web applications...', 'Collaborate with senior developers...', 'Write clean, efficient code...'],
        requirements: ['Currently pursuing a degree...', 'Basic understanding of JavaScript...', 'Familiarity with Git...'],
        applyLink: 'https://careers.google.com/jobs/results/102073212048876230-software-engineer-intern-summer-2026',
        fullDescription: 'This is a very long and detailed description for the Software Engineer Intern role...',
        aboutCompany: 'Tech Solutions Inc. is a leading technology firm specializing in innovative software solutions for enterprise clients.',
        perks: ['Mentorship Program', 'Flexible Hours', 'Learning Resources'],
        activity: 'Hiring since: January 2024; Opportunities posted: 10; Candidates hired: 5.',
    },
    { 
        id: 2, 
        title: 'Digital Marketing Assistant', 
        company: 'Creative Minds Agency', 
        location: 'New York, NY', 
        type: 'Part-time', 
        tags: ['SEO', 'Social Media', 'Content Creation'], 
        matchPercentage: 88,
        description: 'We are looking for a creative and motivated Digital Marketing Assistant.',
        responsibilities: ['Assist in the creation of social media content...', 'Perform market analysis...', 'Support the marketing team...'],
        requirements: ['Strong communication skills...', 'Familiarity with social media platforms...', 'Enthusiasm for learning...'],
        applyLink: 'https://www.amazon.jobs/en/job_categories/marketing-pr',
        fullDescription: 'This is a comprehensive description for the Digital Marketing Assistant role...',
        aboutCompany: 'Creative Minds Agency is a boutique marketing firm dedicated to crafting compelling digital strategies for our diverse client base.',
        perks: ['Creative Environment', 'Work from Home Option'],
        activity: 'Hiring since: March 2023; Opportunities posted: 8; Candidates hired: 3.',
    },
    { 
        id: 3, 
        title: 'Software Development Engineer Intern', 
        company: 'Amazon', 
        location: 'Bengaluru, India', 
        type: 'Internship', 
        tags: ['Java', 'C++', 'Data Structures', 'Algorithms'], 
        matchPercentage: 92,
        description: 'Impact millions of customers by building robust, scalable software solutions.',
        responsibilities: ['Code high-quality software features.', 'Work with senior engineers on technical challenges.', 'Test your code and resolve bugs.'],
        requirements: ['Enrolled in a Bachelor’s or Master’s Degree in CS or related field.', 'Strong understanding of object-oriented design.', 'Problem-solving abilities.'],
        applyLink: 'https://www.amazon.jobs/en/teams/internships-for-students',
        fullDescription: 'As an SDE Intern at Amazon, you will be a full-fledged member of a software development team, working on projects that have a direct impact on our customers.',
        aboutCompany: 'Amazon is a multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.',
        perks: ['Competitive Stipend', 'Career Development', 'Networking Events'],
        activity: 'Hiring since: June 2025; Opportunities posted: 4; Candidates hired: 4.',
    },
    { 
        id: 4, 
        title: 'STEP Intern, First or Second Year Student', 
        company: 'Google', 
        location: 'Hyderabad, India', 
        type: 'Internship', 
        tags: ['C++', 'Java', 'Python', 'Teamwork'], 
        matchPercentage: 85,
        description: 'A developmental program for early-year university students passionate about technology.',
        responsibilities: ['Work on a software project alongside other STEP interns.', 'Attend skill-based training and professional development workshops.', 'Collaborate with Google engineers.'],
        requirements: ['Currently a first or second-year student in a Bachelor\'s program.', 'Programming experience in any language.', 'Authorization to work in India.'],
        applyLink: 'https://buildyourfuture.withgoogle.com/programs/step',
        fullDescription: 'Google\'s STEP (Student Training in Engineering Program) is a 12-week internship for first and second-year undergraduate students with a passion for computer science.'
    },
    { 
        id: 5, 
        title: 'Research Intern', 
        company: 'Microsoft', 
        location: 'Bengaluru, India', 
        type: 'Internship', 
        tags: ['Machine Learning', 'AI', 'Research', 'Python'], 
        matchPercentage: 90,
        description: 'Work on cutting-edge research in various domains of computer science.',
        responsibilities: ['Collaborate with researchers on a challenging project.', 'Develop new models and algorithms.', 'Publish findings in academic papers.'],
        requirements: ['Enrolled in a PhD or Master’s program in a relevant field.', 'Strong background in mathematics and computer science.', 'Experience with machine learning frameworks.'],
        applyLink: 'https://careers.microsoft.com/v2/global/en/students-and-graduates.html',
        fullDescription: 'Microsoft Research interns join us for a 12-week internship to work on projects that push the boundaries of technology.'
    },
    { 
        id: 6, 
        title: 'Product Design Intern', 
        company: 'Atlassian', 
        location: 'Remote', 
        type: 'Internship', 
        tags: ['Figma', 'UI/UX', 'User Research', 'Prototyping'], 
        matchPercentage: 88,
        description: 'Help design the future of teamwork for millions of users of Jira, Confluence, and Trello.',
        responsibilities: ['Design user flows, wireframes, and high-fidelity mockups.', 'Participate in user research and usability testing.', 'Collaborate with PMs and engineers.'],
        requirements: ['Currently enrolled in a degree in Design, HCI, or related field.', 'A portfolio showcasing your design process.', 'Proficiency in design tools like Figma.'],
        applyLink: 'https://www.atlassian.com/company/careers/students',
        fullDescription: 'As a Product Design Intern, you will be embedded in a product team, contributing to the end-to-end design process from concept to launch.'
    },
    { 
        id: 7, 
        title: 'Summer Technology Analyst', 
        company: 'Goldman Sachs', 
        location: 'Bengaluru, India', 
        type: 'Internship', 
        tags: ['Finance', 'Java', 'SQL', 'Analytics'], 
        matchPercentage: 80,
        description: 'Gain hands-on experience in financial technology and software development.',
        responsibilities: ['Design and build complex financial systems.', 'Analyze user requirements to innovate solutions.', 'Work in a fast-paced, collaborative environment.'],
        requirements: ['Pursuing a degree in a STEM field.', 'Excellent problem-solving and communication skills.', 'Interest in the financial markets.'],
        applyLink: 'https://www.goldmansachs.com/careers/students/programs/india/summer-analyst-program.html',
        fullDescription: 'The Summer Analyst Program is a 10-week internship for undergraduate and graduate students, offering a comprehensive look into the world of financial technology.'
    },
    { 
        id: 8, 
        title: 'Data Science Intern', 
        company: 'Salesforce', 
        location: 'Hyderabad, India', 
        type: 'Internship', 
        tags: ['Python', 'SQL', 'Machine Learning', 'Tableau'], 
        matchPercentage: 91,
        description: 'Work with large datasets to extract meaningful insights and build predictive models.',
        responsibilities: ['Clean and analyze complex datasets.', 'Develop and train machine learning models.', 'Create visualizations to communicate findings.'],
        requirements: ['Pursuing a degree in Data Science, Statistics, or a related field.', 'Experience with Python (pandas, scikit-learn).', 'Knowledge of SQL and data visualization tools.'],
        applyLink: 'https://www.salesforce.com/company/careers/university-recruiting/',
        fullDescription: 'Our internship program, Futureforce, brings in the next generation of talent to work on real projects that affect the business of our customers.'
    },
    { 
        id: 9, 
        title: 'Analyst - Consulting', 
        company: 'Deloitte', 
        location: 'Gurgaon, India', 
        type: 'Full-time', 
        tags: ['Consulting', 'Business Analysis', 'Excel', 'Communication'], 
        matchPercentage: 78,
        description: 'A graduate-level role helping clients solve complex business problems.',
        responsibilities: ['Conduct research and data analysis.', 'Prepare client presentations and reports.', 'Work with client teams to implement solutions.'],
        requirements: ['Recent graduate with a Bachelor\'s or Master\'s degree.', 'Strong analytical and problem-solving skills.', 'Excellent verbal and written communication.'],
        applyLink: 'https://www2.deloitte.com/in/en/careers/students.html',
        fullDescription: 'As an Analyst at Deloitte, you will join a team of talented professionals, helping our clients navigate their most pressing business challenges.'
    },
    {
        id: 10,
        title: 'Systems Engineer',
        company: 'Infosys',
        location: 'Pan-India',
        type: 'Full-time',
        tags: ['Programming', 'IT', 'Software Development', 'Testing'],
        matchPercentage: 81,
        description: 'An entry-level role for engineering graduates to work on IT projects for global clients.',
        responsibilities: ['Develop, test, and maintain software applications.', 'Collaborate with a team to deliver project milestones.', 'Participate in the full software development lifecycle.'],
        requirements: ['B.E./B.Tech or M.E./M.Tech graduate in any discipline.', 'Good understanding of programming concepts.', 'Willingness to learn new technologies.'],
        applyLink: 'https://www.infosys.com/careers/fresher-hiring.html',
        fullDescription: 'The Systems Engineer role is a fantastic opportunity for fresh graduates to kick-start their career in the IT industry with one of India\'s leading companies.'
    },
    {
        id: 11,
        title: 'Frontend Engineer (University Grad)',
        company: 'Razorpay',
        location: 'Bengaluru, India',
        type: 'Full-time',
        tags: ['React', 'JavaScript', 'HTML/CSS', 'API'],
        matchPercentage: 93,
        description: 'Build beautiful and performant user interfaces for India\'s leading payments platform.',
        responsibilities: ['Translate designs and wireframes into high-quality code.', 'Develop new user-facing features using React.js.', 'Optimize components for maximum performance.'],
        requirements: ['Bachelor\'s degree in Computer Science.', 'Strong proficiency in JavaScript and the React ecosystem.', 'Understanding of RESTful APIs.'],
        applyLink: 'https://razorpay.com/careers/#jobs',
        fullDescription: 'Join the Razorpay rocketship as a Frontend Engineer and help us build the future of finance in India with a world-class user experience.'
    },
    {
        id: 12,
        title: 'Product Manager Intern',
        company: 'Zomato',
        location: 'Gurgaon, India',
        type: 'Internship',
        tags: ['Product Management', 'Data Analysis', 'User Experience'],
        matchPercentage: 86,
        description: 'Shape the future of food tech by defining and delivering new product features.',
        responsibilities: ['Conduct market research and user interviews.', 'Write product requirement documents (PRDs).', 'Work with engineers and designers to ship features.'],
        requirements: ['Currently enrolled in a Bachelor\'s or MBA program.', 'Strong analytical skills and data-driven mindset.', 'Passion for solving user problems.'],
        applyLink: 'https://www.zomato.com/careers',
        fullDescription: 'As a Product Manager Intern at Zomato, you will own a product feature from ideation to launch, learning how to build products that millions of users love.'
    },

    // --- 10 NEW JOBS START HERE ---
    {
        id: 13,
        title: 'Product Intern',
        company: 'Adobe',
        location: 'Noida, India',
        type: 'Internship',
        tags: ['Product Management', 'Analytics', 'UX'],
        matchPercentage: 89,
        description: 'Help shape the future of Adobe\'s creative and document cloud products.',
        responsibilities: ['Analyze user data to identify product opportunities.', 'Define product specs and user stories.', 'Work with cross-functional teams.'],
        requirements: ['Currently enrolled in an MBA or a B.Tech program.', 'Strong analytical and quantitative skills.', 'Excellent communication skills.'],
        applyLink: 'https://careers.adobe.com/students',
        fullDescription: 'Adobe\'s Product Internship offers the opportunity to work on products used by millions of creative professionals and businesses worldwide.',
        aboutCompany: 'Adobe is a global leader in digital media and digital marketing solutions.',
        perks: ['Impactful Projects', 'Mentorship', 'Networking Events'],
        activity: 'Hiring since: August 2024; Opportunities posted: 15; Candidates hired: 6.'
    },
    {
        id: 14,
        title: 'Operations Intern',
        company: 'Uber',
        location: 'Gurgaon, India',
        type: 'Internship',
        tags: ['Data Analysis', 'Excel', 'Operations', 'SQL'],
        matchPercentage: 82,
        description: 'Optimize and scale business operations in a fast-paced, dynamic environment.',
        responsibilities: ['Analyze operational data to find insights.', 'Develop and implement process improvements.', 'Support city-level operations and marketing campaigns.'],
        requirements: ['Currently enrolled in a Bachelor\'s or Master\'s degree.', 'Strong analytical skills and proficiency in Excel.', 'Knowledge of SQL is a plus.'],
        applyLink: 'https://www.uber.com/us/en/careers/students/',
        fullDescription: 'An internship at Uber is a chance to work on real-world challenges that are shaping the future of mobility and logistics.',
        aboutCompany: 'Uber is a technology company that connects the physical and digital worlds to move people and things at the tap of a button.',
        perks: ['Uber Credits', 'Hands-on Experience', 'Global Team'],
        activity: 'Hiring since: February 2024; Opportunities posted: 20; Candidates hired: 8.'
    },
    {
        id: 15,
        title: 'Business Analyst Intern',
        company: 'Swiggy',
        location: 'Bengaluru, India',
        type: 'Internship',
        tags: ['SQL', 'Analytics', 'Business Intelligence', 'Excel'],
        matchPercentage: 87,
        description: 'Use data to drive key business decisions for one of India\'s largest food delivery platforms.',
        responsibilities: ['Build dashboards and reports to track key metrics.', 'Perform deep-dive analysis on business problems.', 'Present findings to stakeholders.'],
        requirements: ['Pursuing a degree in Engineering, Statistics, or a related field.', 'Strong proficiency in SQL.', 'Excellent problem-solving skills.'],
        applyLink: 'https://careers.swiggy.com/',
        fullDescription: 'As a Business Analyst Intern at Swiggy, you will be at the heart of our data-driven culture, influencing product, marketing, and operational strategy.',
        aboutCompany: 'Swiggy is India’s leading on-demand convenience platform, connecting consumers to restaurants and stores in over 500 cities.',
        perks: ['Free Food & Snacks', 'Dynamic Work Culture', 'Real-world Impact'],
        activity: 'Hiring since: October 2024; Opportunities posted: 12; Candidates hired: 5.'
    },
    {
        id: 16,
        title: 'Software Engineer (New Grad)',
        company: 'Cisco',
        location: 'Bengaluru, India',
        type: 'Full-time',
        tags: ['Python', 'Networking', 'C++', 'Go'],
        matchPercentage: 94,
        description: 'Join a world-class engineering team to build the future of the internet.',
        responsibilities: ['Design, develop, and test software for Cisco products.', 'Work on networking protocols and cloud technologies.', 'Automate infrastructure and testing processes.'],
        requirements: ['Bachelor\'s or Master\'s in CS/IT/ECE.', 'Strong programming skills in Python, Go, or C++.', 'Solid understanding of computer networking concepts.'],
        applyLink: 'https://www.cisco.com/c/en/us/about/careers/we-are-cisco/students-and-new-graduate-programs.html',
        fullDescription: 'Cisco\'s new graduate program is designed to provide you with the skills and experience needed to launch a successful career in networking and software engineering.',
        aboutCompany: 'Cisco is the worldwide leader in technology that powers the Internet.',
        perks: ['Comprehensive Training', 'Global Exposure', 'Health & Wellness Benefits'],
        activity: 'Hiring since: July 2025; Opportunities posted: 50; Candidates hired: 25.'
    },
    {
        id: 17,
        title: 'Graduate Engineer Trainee',
        company: 'Wipro',
        location: 'Pan-India',
        type: 'Full-time',
        tags: ['Engineering', 'Java', '.NET', 'IT Services'],
        matchPercentage: 79,
        description: 'Begin your IT services career with one of India\'s most renowned technology companies.',
        responsibilities: ['Undergo training in various technologies.', 'Work on client projects in a team environment.', 'Develop and maintain software solutions.'],
        requirements: ['B.E./B.Tech degree in a relevant discipline.', 'Good academic record.', 'Strong verbal and written communication skills.'],
        applyLink: 'https://careers.wipro.com/global-india/jobs',
        fullDescription: 'Wipro\'s Graduate Engineer Trainee program is a launchpad for aspiring engineers to build a career in the global IT industry.',
        aboutCompany: 'Wipro is a leading global information technology, consulting, and business process services company.',
        perks: ['Structured Training', 'Career Growth', 'Global Projects'],
        activity: 'Hiring since: August 2025; Opportunities posted: 100+; Candidates hired: 80.'
    },
    {
        id: 18,
        title: 'Cloud Developer Intern',
        company: 'IBM',
        location: 'Pune, India',
        type: 'Internship',
        tags: ['IBM Cloud', 'Kubernetes', 'Go', 'Node.js'],
        matchPercentage: 90,
        description: 'Work on developing and deploying applications on IBM Cloud and other hybrid cloud platforms.',
        responsibilities: ['Develop microservices and APIs.', 'Work with container technologies like Docker and Kubernetes.', 'Contribute to open-source projects.'],
        requirements: ['Pursuing a B.Tech or M.Tech in Computer Science.', 'Experience with a programming language like Go, Python, or Node.js.', 'Understanding of cloud computing concepts.'],
        applyLink: 'https://www.ibm.com/in-en/employment/students/',
        fullDescription: 'The IBM internship program offers a unique opportunity to work with cutting-edge cloud technologies and contribute to projects that solve real-world problems.',
        aboutCompany: 'IBM is a global technology company that provides hardware, software, cloud-based services, and cognitive computing.',
        perks: ['Patent Filing Opportunities', 'Mentorship from Experts', 'Flexible Work Environment'],
        activity: 'Hiring since: September 2024; Opportunities posted: 25; Candidates hired: 10.'
    },
    {
        id: 19,
        title: 'Android Developer Intern',
        company: 'PhonePe',
        location: 'Bengaluru, India',
        type: 'Internship',
        tags: ['Kotlin', 'Android SDK', 'Java', 'MVVM'],
        matchPercentage: 91,
        description: 'Help build and enhance India\'s leading digital payments app, used by millions.',
        responsibilities: ['Develop new features for the PhonePe Android app.', 'Write high-quality, performant code in Kotlin.', 'Collaborate with UI/UX designers and product managers.'],
        requirements: ['Currently enrolled in a Computer Science degree.', 'Solid understanding of Android development fundamentals.', 'Experience with Kotlin and Java is required.'],
        applyLink: 'https://www.phonepe.com/careers/',
        fullDescription: 'As an Android Intern at PhonePe, you\'ll be part of a team that is revolutionizing payments in India, one feature at a time.',
        aboutCompany: 'PhonePe is an Indian digital payments and financial services company.',
        perks: ['High-impact Work', 'Stipend', 'Mentorship'],
        activity: 'Hiring since: November 2024; Opportunities posted: 8; Candidates hired: 4.'
    },
    {
        id: 20,
        title: 'Technical Analyst',
        company: 'Oracle',
        location: 'Hyderabad, India',
        type: 'Full-time',
        tags: ['SQL', 'Oracle DB', 'Communication', 'Problem Solving'],
        matchPercentage: 83,
        description: 'A role for graduates to support Oracle\'s suite of enterprise products and services.',
        responsibilities: ['Troubleshoot and resolve technical issues for clients.', 'Analyze database and application performance.', 'Communicate with clients to understand their needs.'],
        requirements: ['Bachelor\'s degree in CS, IT, or a related field.', 'Strong understanding of databases and SQL.', 'Excellent analytical and communication skills.'],
        applyLink: 'https://www.oracle.com/in/careers/university-recruiting/',
        fullDescription: 'Join Oracle as a Technical Analyst and start your career supporting the technologies that power the world\'s largest enterprises.',
        aboutCompany: 'Oracle is a computer technology corporation best known for its software products and services like Java and its database software.',
        perks: ['In-depth Training', 'Global Career Opportunities', 'Health Benefits'],
        activity: 'Hiring since: May 2025; Opportunities posted: 40; Candidates hired: 20.'
    },
    {
        id: 21,
        title: 'Graduate Trainee - Engineering',
        company: 'HCLTech',
        location: 'Noida, India',
        type: 'Full-time',
        tags: ['IT Services', 'Software', 'Java', 'Testing'],
        matchPercentage: 77,
        description: 'A foundational role for engineering graduates in a leading global IT services company.',
        responsibilities: ['Receive training across various software development and testing domains.', 'Work as part of a project team on client deliverables.', 'Provide support for software applications.'],
        requirements: ['B.E./B.Tech with a strong academic background.', 'Good programming and logical reasoning skills.', 'Flexibility to work on different technologies.'],
        applyLink: 'https://www.hcltech.com/careers/india/fresher-hiring',
        fullDescription: 'HCLTech\'s Graduate Trainee program is an ideal entry point for freshers to build a comprehensive skill set in the IT services industry.',
        aboutCompany: 'HCLTech is a global technology company, home to 225,000+ people across 60 countries, delivering industry-leading capabilities.',
        perks: ['Global Exposure', 'Continuous Learning', 'Defined Career Path'],
        activity: 'Hiring since: April 2025; Opportunities posted: 200+; Candidates hired: 150.'
    },
    {
        id: 22,
        title: 'Engineer Trainee',
        company: 'Capgemini',
        location: 'Pan-India',
        type: 'Full-time',
        tags: ['Java', '.NET', 'Cloud', 'Analytics'],
        matchPercentage: 80,
        description: 'Start your global career in technology and consulting with a leader in digital transformation.',
        responsibilities: ['Work on projects in areas like Cloud, Data, and Software Engineering.', 'Collaborate with international teams.', 'Learn and apply new technologies to solve business problems.'],
        requirements: ['Recent graduate in an engineering or computer science discipline.', 'Strong foundation in programming.', 'Eagerness to learn and adapt.'],
        applyLink: 'https://www.capgemini.com/in-en/careers/hiring-in-india/',
        fullDescription: 'Capgemini\'s Engineer Trainee program is designed for passionate graduates who want to work on transformative projects for our global clients.',
        aboutCompany: 'Capgemini is a global leader in partnering with companies to transform and manage their business by harnessing the power of technology.',
        perks: ['Global Company', 'Diverse Projects', 'Training & Certification'],
        activity: 'Hiring since: June 2025; Opportunities posted: 150+; Candidates hired: 100+.'
    }
];

export const JobFinder = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [jobType, setJobType] = useState('all')
  const [viewingJobId, setViewingJobId] = useState<number | null>(null)
  const [showFullDescription, setShowFullDescription] = useState(false)

  const filteredJobs = sampleJobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesType = jobType === 'all' || job.type === jobType
    return matchesSearch && matchesType
  })

  const selectedJob = sampleJobs.find((job) => job.id === viewingJobId)

  const handleApplyClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">AI Job & Internship Finder</h1>
        <p className="text-muted-foreground mt-2">
          Opportunities tailored to your skills and interests.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Input
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select value={jobType} onValueChange={setJobType}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Job Types</SelectItem>
            <SelectItem value="Internship">Internship</SelectItem>
            <SelectItem value="Part-time">Part-time</SelectItem>
            <SelectItem value="Full-time">Full-time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            {...job}
            onViewDetails={() => {
              setViewingJobId(job.id)
              setShowFullDescription(false)
            }}
          />
        ))}
      </div>

      <Dialog open={!!viewingJobId} onOpenChange={() => setViewingJobId(null)}>
        {/* 1. Turn the Dialog into a flex container */}
        <DialogContent className="w-11/12 md:w-[70vw] max-w-none h-screen flex flex-col p-0">
          {selectedJob && (
            <>
              {/* 2. The Header will not scroll */}
              <DialogHeader className="p-6 pb-4 text-left flex-shrink-0">
                <DialogTitle className="text-2xl">{selectedJob.title}</DialogTitle>
                <DialogDescription>
                  {selectedJob.company} - {selectedJob.location}{' '}
                  <Badge className="ml-2">{selectedJob.type}</Badge>
                </DialogDescription>
              </DialogHeader>

              {/* 3. This middle section will grow and scroll */}
              <div className="flex-grow overflow-y-auto px-6 space-y-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">
                    About the {selectedJob.type.toLowerCase()}
                  </h3>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setShowFullDescription(!showFullDescription)}
                  >
                    Summarized by AI
                    <span className="text-blue-500 ml-1">✨</span>
                  </Badge>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Role Overview:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {selectedJob.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                {selectedJob.aboutCompany && (
                  <div>
                    <h4 className="font-semibold mb-2">
                      About {selectedJob.company}:
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedJob.aboutCompany}
                    </p>
                  </div>
                )}
                
                {/* ... (other content sections like Perks, Activity) ... */}

              </div>

              {/* 4. The Footer with the button will not scroll */}
              <DialogFooter className="p-6 pt-4 mt-auto flex-shrink-0">
                <Button
                  className="w-full"
                  onClick={() => handleApplyClick(selectedJob.applyLink)}
                >
                  Apply Now
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}