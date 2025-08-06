import React from 'react'

const experiences = {
  Aquimo: {
    title: 'Software Developer at Aquimo Inc.',
    duration: 'May 2024 – Present',
    description: 'Worked on interactive stadium games using Cocos Creator. Built Football throw animations and optimized gameplay performance.',
  },
  TechCurators: {
    title: 'Problem Setter & Reviewer at TechCurators',
    duration: 'Aug 2024 – Dec 2024',
    description: 'Created and reviewed over 30 C++ coding challenges. Focused on logic clarity, edge case handling, and company-level questions.',
  },
  iMocha: {
    title: 'Question Curator at iMocha',
    duration: 'Jan 2024 – July 2024',
    description: 'Designed SQL and DSA-based coding problems to evaluate candidates’ real-world problem-solving skills.',
  }
};

const Experience = () => {
  return (
   <>
   <div className='experiences'>
    <div className='tabs'>
        {
            Object.keys(experiences).map((company)=>(
     <h1>{company}</h1>
            )

            )
        }
        
    </div>
   </div>
   </>
  )
}

export default Experience