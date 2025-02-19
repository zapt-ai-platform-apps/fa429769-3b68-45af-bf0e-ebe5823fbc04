import React, { useState, useEffect } from 'react';
import { getProjects, createProject, removeProject } from '../api/portfolioApi';
import { readFilesAsDataUrls } from '../utils/fileReader';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (err) {
      console.error(err);
      setError('Error loading projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    readFilesAsDataUrls(files)
      .then(base64Images => {
        setImages(base64Images);
      })
      .catch(err => {
        console.error('Error reading files:', err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || images.length === 0) {
      setError('Please fill in all fields and select at least one image.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      await createProject({ title, description, images });
      setTitle('');
      setDescription('');
      setImages([]);
      await fetchProjects();
    } catch (err) {
      console.error(err);
      setError('Error submitting project');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await removeProject(id);
      await fetchProjects();
    } catch (err) {
      console.error(err);
      setError('Error deleting project');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded shadow-md mb-12">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded box-border"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded box-border"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Images</label>
          <input 
            type="file" 
            multiple 
            onChange={handleFileChange} 
            className="w-full p-2 border border-gray-300 rounded box-border"
            accept="image/*"
            required
          />
        </div>
        <button 
          type="submit" 
          disabled={submitting} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer disabled:opacity-50"
        >
          {submitting ? 'Submitting...' : 'Add Project'}
        </button>
      </form>
      {loading ? (
        <p className="text-center">Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded shadow-md p-4 relative">
              {project.images && project.images.length > 0 && (
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <button 
                onClick={() => handleDelete(project.id)}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded cursor-pointer absolute top-2 right-2 disabled:opacity-50"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}