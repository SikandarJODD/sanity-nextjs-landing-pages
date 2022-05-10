export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '627adc54b939bf009c1bb21c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-eu3x6dt6',
                  apiId: '62086f8a-471d-4b85-8fe1-90a1ec5936cb'
                },
                {
                  buildHookId: '627adc55b9d85c0090dd5305',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ms8rf642',
                  apiId: '3bdb8107-624e-4795-a132-840e48b47203'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SikandarJODD/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ms8rf642.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
