import type {
  ExperienceItem,
  FormationItem,
  ProjectItem,
  SkillGroup,
} from "../data/profile";
import { profile } from "../data/profile";

export type Locale = "es" | "en";
export type ProfileCopy = typeof profile;

export type UiCopy = {
  greeting: string;
  available: string;
  photoAlt: string;
  openCalcomania: string;
  playMusicmania: string;
  contactMe: string;
  openDemo: string;
  openSite: string;
  repo: string;
  inProgress: string;
  openMenu: string;
  closeMenu: string;
  switchLang: string;
  themeLight: string;
  themeDark: string;
  pageTitle: string;
  pageDescription: string;
  contactIntro: string;
  contactEmail: string;
  contactPhone: string;
  contactCv: string;
  contactLinkedin: string;
  downloadCv: string;
  cv: {
    pageTitle: string;
    back: string;
    print: string;
    profile: string;
    education: string;
    experience: string;
    projects: string;
    skills: string;
    languages: string;
    additional: string;
    spanish: string;
    english: string;
  };
  nav: {
    projects: string;
    experience: string;
    skills: string;
    formation: string;
    about: string;
    contact: string;
  };
  sections: {
    projects: string;
    experience: string;
    skills: string;
    formation: string;
    about: string;
    contact: string;
  };
};

export type Copy = {
  ui: UiCopy;
  profile: ProfileCopy;
  experience: ExperienceItem[];
  formation: FormationItem[];
  skillGroups: SkillGroup[];
  projects: ProjectItem[];
  about: string[];
};
