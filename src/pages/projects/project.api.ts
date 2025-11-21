import client from "../../lib/client";
import type { Project } from "../../models/project.model";

export async function getProjects(): Promise<Project[]> {
  const response = await client.getContentList<Project>({
    contentType: "Project",
  });
  return response;
}

export async function getEnabledProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((project) => project.isEnabled).slice(0, 6);
}

export async function GET(): Promise<Response> {
  const projects = await getProjects();
  return new Response(JSON.stringify(projects), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
