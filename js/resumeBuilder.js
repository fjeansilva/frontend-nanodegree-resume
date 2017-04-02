'use strict';

 const bio = {
   name: 'Jean Silva',
   role: 'Engenheiro Front-End',
   contacts: {
     mobile: '+55 (61) 9090-8989',
     email: 'jean@gmail.com',
     github: 'https://github.com/fjeansilva',
     location: 'Brasília-DF'
   },
   welcomeMessage: 'Olá devs',
   skills: ['HTML5', 'CSS', 'JavaScript', 'React', 'NodeJS'],
   biopic: 'https://avatars2.githubusercontent.com/u/8744031?v=3&s=460',
   display: function(){

     const self = this;
     const headerContainer = $('#header');
     const topContactsContainer = $('#topContacts');


     HTMLheaderRole = HTMLheaderRole.replace('%data%', self.role);
     headerContainer.prepend(HTMLheaderRole);

     HTMLheaderName = HTMLheaderName.replace('%data%', self.name);
     headerContainer.prepend(HTMLheaderName);

     const contacts = Object.keys(this.contacts);

     contacts.forEach((contact) => {
       let htmlInfoContact = HTMLcontactGeneric.replace('%contact%', contact);
       htmlInfoContact = htmlInfoContact.replace('%data%', self.contacts[contact]);
       topContactsContainer.append(htmlInfoContact);
     });

     HTMLbioPic = HTMLbioPic.replace('%data%', self.biopic);
     headerContainer.append(HTMLbioPic);

     HTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%', self.welcomeMessage);
     headerContainer.append(HTMLwelcomeMsg);

     headerContainer.append(HTMLskillsStart);

     const skillsContainer = $('#skills');

     self.skills.forEach((skill) => {
       let htmlSkill = HTMLskills.replace('%data%', skill);

       if (skillsContainer) {
         skillsContainer.prepend(htmlSkill);
       }

     });

   }
 };

const education = {
  schools: [{
    name: 'Universidade Católica de Brasília',
    location: 'Brasília-DF',
    degree: 'Ciência da Computação',
    marjors: ['Engenharia de Software', 'Ciência da Computação'],
    dates: '2004-2009'
  }, {
    name: 'Centro de ensino superior Unieuro',
    location: 'Brasília-DF',
    degree: 'Ciência da Computação',
    marjors: ['Engenharia de Software', 'Ciência da Computação'],
    dates: '2010-2014'
  }],
  onlineCourses: [{
    title: 'Engenheiro JavaScript',
    school: 'FREE CODE CAMP',
    dates: '2015-2017',
    url: 'http://freecodecamp.com'
  }, {
    title: 'Nanodegree Desenvolvedor Web Front-End',
    school: 'Udacity',
    dates: '2016-2017',
    url: 'http://udacity.com'
  }],
  display: function(){
    const self = this;
    const educationContainer = $('#education');

    educationContainer.append(HTMLschoolStart);

    const educationEntryContainer = $('.education-entry');

    self.schools.forEach((school) => {
      let schoolName = HTMLschoolName.replace('%data%', school.name);
      schoolName += HTMLschoolDegree.replace('%data%', school.degree);
      let schoolDate = HTMLschoolDates.replace('%data%', school.dates);
      let schoolLocation = HTMLschoolLocation.replace('%data%', school.location);

      educationEntryContainer.append(schoolName);
      educationEntryContainer.append(schoolDate);
      educationEntryContainer.append(schoolLocation);

      school.marjors.forEach((marjor) => {
        let schoolMarjor = HTMLschoolMajor.replace('%data%', marjor);
        educationEntryContainer.append(schoolMarjor);
      });

      educationEntryContainer.append(HTMLonlineClasses);
    });

    self.onlineCourses.forEach((course) => {
      let onlineTitle = HTMLonlineTitle.replace('%data%', course.title);
      onlineTitle += HTMLonlineSchool.replace('%data%', course.school);
      let onlineDates = HTMLonlineDates.replace('%data%', course.dates);
      let onlineUrl = HTMLonlineURL.replace('%data%', course.url);

      educationEntryContainer.append(onlineTitle);
      educationEntryContainer.append(onlineDates);
      educationEntryContainer.append(onlineUrl);
    });
  }
};

const work = {
  jobs: [{
    employer: 'UltraTech',
    title: 'Engenheiro front-end',
    location: 'São Paulo - SP',
    dates: '2010-2015',
    description: 'Líder técnico e responsável pela implantação e escolha de novas tecnologias Front-End'
  },
  {
    employer: 'Google',
    title: 'Engenheiro front-end',
    location: 'São Paulo - SP',
    dates: '2015-2017',
    description: 'Desenvolvimento de novas soluções'
  }],
  display: function(){

    const self = this;
    const workExperienceContainer = $('#workExperience');

    workExperienceContainer.append(HTMLworkStart);

    const workEntryContainer = $('.work-entry');

    self.jobs.forEach((job) => {
      let jobHeader = HTMLworkEmployer.replace('%data%', job.employer);
      jobHeader += HTMLworkTitle.replace('%data%', job.title);

      let jobDate = HTMLworkDates.replace('%data%', job.dates);

      let jobLocation = HTMLworkLocation.replace('%data%', job.location);
      let jobDescription = HTMLworkDescription.replace('%data%', job.description);

      workEntryContainer.append(jobHeader);
      workEntryContainer.append(jobDate);
      workEntryContainer.append(jobLocation);
      workEntryContainer.append(jobDescription);
    });

  }
};

const projects = {
  projects: [{
    title: 'Super Beer',
    dates: '2010-2011',
    description: 'Responsável pela criação da versão web e mobile',
    images: [
      'https://s-media-cache-ak0.pinimg.com/736x/c0/0c/89/c00c898cca1af7fabcb2a75b6ce580fa.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/42/21/30/422130d5c8a8b2d2540e2d6a53afd04f.jpg'
    ]
  }, {
    title: 'Game Show',
    dates: '2013-2015',
    description: 'Responsável pela criação da versão web e mobile',
    images: [
      'http://www.appsparky.com/wp-content/uploads/2014/06/kingdom-prince-arcade-game-source-code-app-icon.png',
      'http://www.appsparky.com/wp-content/uploads/2014/06/viva-match-3-source-code-app-icon.png'
    ]
  }],
  display: function() {

    const self = this;
    const projectsContainer = $('#projects');

    projectsContainer.append(HTMLprojectStart);

    const projectsEntryContainer = $('.project-entry');

    self.projects.forEach((project) => {
      let projectTitle = HTMLprojectTitle.replace('%data%', project.title);
      let projectDate = HTMLprojectDates.replace('%data%', project.dates);
      let projectDescription = HTMLprojectDescription.replace('%data%', project.description);

      projectsEntryContainer.append(projectTitle);
      projectsEntryContainer.append(projectDate);
      projectsEntryContainer.append(projectDescription);

      project.images.forEach((image) => {
        let projectImage = HTMLprojectImage.replace('%data%', image);

        projectsEntryContainer.append(projectImage);
      });
    });

  }
};

const mapa = {
  display: function(){
    $('#mapDiv').append(googleMap);
  }
}

const contents = [ bio, work, projects, education, mapa ];

contents.forEach((content) => {
  if ('display' in content) {
    content.display();
  }
})
