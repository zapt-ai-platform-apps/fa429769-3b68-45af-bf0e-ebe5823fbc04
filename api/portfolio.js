import db from './firebaseAdmin.js';
import Sentry from './_sentry.js';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      console.log('Handling GET request for portfolio projects');
      const snapshot = await db.collection('projects').orderBy('createdAt', 'desc').get();
      const projects = [];
      snapshot.forEach(doc => {
        projects.push({ id: doc.id, ...doc.data() });
      });
      return res.status(200).json(projects);
    } else if (req.method === 'POST') {
      console.log('Handling POST request to add new project');
      const { title, description, images } = req.body;
      if (!title || !description || !images || !Array.isArray(images)) {
        return res.status(400).json({ error: 'Invalid project data' });
      }
      const newProject = {
        title,
        description,
        images,
        createdAt: new Date().toISOString()
      };
      const docRef = await db.collection('projects').add(newProject);
      return res.status(201).json({ id: docRef.id, ...newProject });
    } else if (req.method === 'DELETE') {
      console.log('Handling DELETE request for a project');
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ error: 'Missing project id' });
      }
      await db.collection('projects').doc(id).delete();
      return res.status(200).json({ message: 'Project deleted successfully' });
    } else {
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    console.error('API error:', error);
    Sentry.captureException(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}