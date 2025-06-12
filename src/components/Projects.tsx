import React, { useState } from 'react';

// Dummy project data
const dummyProjects = [
  {
    id: 1,
    name: 'Clean Water Initiative',
    category: 'Health',
    status: 'Active',
    raised: 120000,
    target: 200000,
    start: '2024-01-01',
    end: '2024-12-31',
    owner: 'Alice Johnson',
    description: 'Providing clean water to rural communities.',
  },
  {
    id: 2,
    name: 'School Build',
    category: 'Education',
    status: 'Completed',
    raised: 150000,
    target: 150000,
    start: '2023-03-01',
    end: '2023-11-30',
    owner: 'Bob Smith',
    description: 'Building a new school in the city.',
  },
  {
    id: 3,
    name: 'Tree Planting',
    category: 'Environment',
    status: 'Active',
    raised: 90000,
    target: 120000,
    start: '2024-04-01',
    end: '2024-10-31',
    owner: 'Carol Lee',
    description: 'Planting trees in urban areas.',
  },
];

const categories = ['All', 'Health', 'Education', 'Environment'];
const statuses = ['All', 'Active', 'Completed', 'Pending'];

export const Projects: React.FC = () => {
  const [projects] = useState(dummyProjects);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [showAddProject, setShowAddProject] = useState(false);

  // Filtered projects
  const filteredProjects = projects.filter(project =>
    (categoryFilter === 'All' || project.category === categoryFilter) &&
    (statusFilter === 'All' || project.status === statusFilter) &&
    (project.name.toLowerCase().includes(search.toLowerCase()) || project.owner.toLowerCase().includes(search.toLowerCase()))
  );

  // Add project handler (dummy)
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    // Add project logic here
    setShowAddProject(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-darktext">Projects</h1>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          onClick={() => setShowAddProject(true)}
        >
          + Add Project
        </button>
      </div>
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or owner..."
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="px-3 py-2 border rounded-lg"
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
        >
          {categories.map(cat => <option key={cat}>{cat}</option>)}
        </select>
        <select
          className="px-3 py-2 border rounded-lg"
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
        >
          {statuses.map(status => <option key={status}>{status}</option>)}
        </select>
      </div>
      <div className="overflow-x-auto bg-white dark:bg-darkcard rounded-xl shadow p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">Category</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4">Raised</th>
              <th className="py-2 pr-4">Target</th>
              <th className="py-2 pr-4">Owner</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map(project => (
              <tr key={project.id} className="border-b last:border-0 hover:bg-blue-50 cursor-pointer">
                <td className="py-2 pr-4 font-medium" onClick={() => setSelectedProject(project)}>{project.name}</td>
                <td className="py-2 pr-4">{project.category}</td>
                <td className="py-2 pr-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${project.status === 'Active' ? 'bg-green-100 text-green-700' : project.status === 'Completed' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>{project.status}</span>
                </td>
                <td className="py-2 pr-4">${project.raised.toLocaleString()}</td>
                <td className="py-2 pr-4">${project.target.toLocaleString()}</td>
                <td className="py-2 pr-4">{project.owner}</td>
                <td className="py-2 flex gap-2">
                  <button className="text-blue-600 hover:underline" onClick={() => setSelectedProject(project)}>View</button>
                  <button className="text-gray-600 hover:underline" onClick={() => setSelectedProject(project)}>Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredProjects.length === 0 && <div className="text-center text-gray-400 py-8">No projects found.</div>}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-darkcard rounded-xl shadow-xl p-8 w-full max-w-md relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700" onClick={() => setSelectedProject(null)}>&times;</button>
            <h2 className="text-xl font-bold mb-2">Project Details</h2>
            <div className="mb-4">
              <div className="font-semibold">Name:</div>
              <div>{selectedProject.name}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Category:</div>
              <div>{selectedProject.category}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Status:</div>
              <div>{selectedProject.status}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Raised:</div>
              <div>${selectedProject.raised.toLocaleString()}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Target:</div>
              <div>${selectedProject.target.toLocaleString()}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Owner:</div>
              <div>{selectedProject.owner}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Start Date:</div>
              <div>{selectedProject.start}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">End Date:</div>
              <div>{selectedProject.end}</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Description:</div>
              <div>{selectedProject.description}</div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Edit</button>
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Archive</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Project Modal */}
      {showAddProject && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-darkcard rounded-xl shadow-xl p-8 w-full max-w-md relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700" onClick={() => setShowAddProject(false)}>&times;</button>
            <h2 className="text-xl font-bold mb-4">Add New Project</h2>
            <form onSubmit={handleAddProject} className="space-y-4">
              <input type="text" placeholder="Project Name" className="w-full border rounded px-3 py-2" required />
              <input type="text" placeholder="Category" className="w-full border rounded px-3 py-2" required />
              <input type="number" placeholder="Target Amount" className="w-full border rounded px-3 py-2" required />
              <input type="text" placeholder="Owner" className="w-full border rounded px-3 py-2" required />
              <input type="date" placeholder="Start Date" className="w-full border rounded px-3 py-2" required />
              <input type="date" placeholder="End Date" className="w-full border rounded px-3 py-2" required />
              <textarea placeholder="Description" className="w-full border rounded px-3 py-2" rows={3} required />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Add Project</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}; 