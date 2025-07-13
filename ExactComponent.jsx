import React from 'react';

const ContributionCell = ({ active }) => (
  <div className={`w-4 h-4 m-0.5 rounded ${active ? 'bg-green-500' : 'bg-gray-700'}`}></div>
);

const ContributionGrid = ({ pattern }) => (
  <div className="grid grid-cols-52 gap-0.5">
    {pattern.flat().map((cell, idx) => (
      <ContributionCell key={idx} active={cell} />
    ))}
  </div>
);

const ExactComponent = ({ user, pattern }) => (
  <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      <img src={user.avatar} alt="avatar" className="w-12 h-12 rounded-full mr-4" />
      <a href={user.githubUrl} className="text-lg font-bold">{user.githubUsername}</a>
    </div>
    <ContributionGrid pattern={pattern} />
    <h1 className="text-3xl font-bold mt-6">{user.name}</h1>
    <p className="text-xl text-green-400 mb-4">{user.tagline}</p>
    <a href={user.portfolioUrl} className="bg-green-600 px-4 py-2 rounded text-white font-semibold">Fork My Portfolio</a>
  </div>
);

export default ExactComponent;
