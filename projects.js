const PROJECTS = [
  {
    id: 1,
    projectName: 'HP',
    projectDescription:
      'This project is designed for the resellers of the HP printers. This project will allow the resellers to keep track of the printers, service of printers, get to know about the customer queries and site preparations',
    workDescription:
      'Worked on Service Center module using Angular. Handled UI implementation and API integration',
    workTags: ['Angular 11', 'Bootstrap', 'Angular Material', 'TypeScript', 'JavaScript', 'SCSS'],
    imageLink:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png',
    projectLink: '',
  },
  {
    id: 2,
    projectName: 'RAK College of Medical Sciences',
    projectDescription:
      'RAKMHSU is the First Comprehensive Health Science University in UAE under the patronage of His Highness Sheikh Saud Bin Saqr Al Qasimi, Ruler of Ras Al Khaimah and Supreme Council Member, United Arab Emirates',
    workDescription:
      'Worked on the Student Portal using Angular',
    workTags: ['Angular 9', 'Bootstrap', 'TypeScript', 'JavaScript', 'SCSS', 'Ionic'],
    imageLink:
      './assets/RAK_logo.png',
    projectLink: '',
  },
  {
    id: 3,
    projectName: 'Airsewa',
    projectDescription:
      'AirSewa enables travelers to submit grievances and seek information on air travel in India. It is an initiative by MoCA, Govt. of India',
    workDescription:
      'Worked on the Website, Android and iOS app using Angular and Cordova',
    workTags: ['Angular 6', 'Cordova', 'Bootstrap', 'Angular Material'],
    imageLink:
      './assets/Airsewa_logo.png',
    projectLink: '',
  },
  {
    id: 4,
    projectName: 'Paypay',
    projectDescription:
      'PayPay Corporation is a Japanese company that develops electronic payment services. It was established in 2018 as a joint venture between the SoftBank Group and Yahoo Japan through Z Holdings',
    workDescription:
      'Worked on the Myna Point mini app using Vue',
    workTags: ['Vue 2', 'HTML', 'SCSS', 'Typescript', 'Javascript'],
    imageLink:
      './assets/Paypay_logo.jpeg',
    projectLink: '',
  },
]

const projectListDiv = document.querySelector('.projects-list')

function loadProjects() {
  let prString = ''
  PROJECTS.forEach((project) => {
    let tagsString = '';
    project.workTags.forEach((tag) => {
      tagsString += `<span>${tag}</span>`
    })
    prString += `
      <div class="project-listItem">
        <div class="project-listItemLegend">
            <i class="legend-round"></i>
        </div>
        <div class="project-listItemDetails">
            <div class="project-listItemLogo">
                <img src="${project.imageLink}" alt="">
                <p class="project-listItemName mobile-name">${
                  project.projectName
                }</p>
            </div>
            <div class="project-listItemDescription">
                <p class="project-listItemName web-name">${
                  project.projectName
                }</p>
                <p class="project-listItemDesc">${
                  project.projectDescription
                }</p>
                <p class="project-listItemWork">${project.workDescription}</p>
                <div class="project-listItemTags">
                    ${tagsString}
                </div>
            </div>
        </div>
      </div>
    `
  })
  if (projectListDiv) {
    projectListDiv.innerHTML = prString
  }
}

loadProjects()
