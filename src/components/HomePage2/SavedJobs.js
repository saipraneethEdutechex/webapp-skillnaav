import React from 'react';
import { useTabContext } from './HomePageContext/HomePageContext'; // Correct path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMapMarkerAlt, faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons'; // Import icons

const SavedJobs = () => {
  const { savedJobs, removeJob } = useTabContext();

  return (
    <div className="font-poppins">
      <h2 className="text-3xl font-bold mb-6">Saved Jobs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {savedJobs.map((job, index) => (
          <div key={index} className="relative border rounded-lg p-6 shadow-sm">
            <div className="absolute top-2 right-2">
              <button
                onClick={() => removeJob(job)}
                className="text-gray-500 hover:text-red-500"
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-red-500 w-6 h-6"
                />
              </button>
            </div>
            <div className="flex items-center mb-4">
              <img src="/path-to-company-logo.png" alt="Company Logo" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
                <p className="text-gray-600">{job.company} • {index + 1}d ago</p>
              </div>
            </div>
            <div className="text-gray-600 mb-4">
              <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {job.location} • {job.type}</p>
              <p><FontAwesomeIcon icon={faClock} /> {job.duration}</p>
              <p><FontAwesomeIcon icon={faDollarSign} /> {job.salary}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{job.field}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedJobs;
