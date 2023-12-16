/**
 * Interface representing a project.
 */
export interface Project {
    /** The name of the project. */
    name: string;
    /** The path to the project image. */
    image: string;
    /** A brief description of the project. */
    description: string;
    /** An array of technologies used in the project. */
    technologies: string[];
    /** The GitHub link to the project repository. */
    githubLink: string;
    /** The URL of the project. */
    projectUrl: string;
  }
  