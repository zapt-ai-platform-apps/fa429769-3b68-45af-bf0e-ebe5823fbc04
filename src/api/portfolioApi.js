export async function getProjects() {
  console.log('Fetching projects from backend');
  const res = await fetch('/api/portfolio');
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return await res.json();
}

export async function createProject(project) {
  console.log('Submitting new project');
  const res = await fetch('/api/portfolio', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(project)
  });
  if (!res.ok) {
    throw new Error('Failed to submit project');
  }
  return await res.json();
}

export async function removeProject(id) {
  console.log('Deleting project with id:', id);
  const res = await fetch(`/api/portfolio?id=${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) {
    throw new Error('Failed to delete project');
  }
}