export interface About {
  name?: string
  title?: string
  description?: string
  image?: string
  skills?: string[]
}

export interface Experience {
  title: string
  company: string
  dates: string
  description?: string
  responsibilities?: string[]
}

export interface Project {
  name: string
  description?: string
  technologies?: string[]
  image?: string
  link?: string
  github?: string
}

export interface SocialLink {
  platform: string
  url: string
}

export interface Contact {
  email?: string
  social?: SocialLink[]
}

export interface PortfolioData {
  about?: About
  experience?: Experience[]
  projects?: Project[]
  contact?: Contact
}
