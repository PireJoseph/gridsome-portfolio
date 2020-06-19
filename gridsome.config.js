// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Joseph Pire',
  siteDescription: 'An enthusiast junior dev',
  siteUrl: 'http://localhost:8080',
  // pathPrefix: '/dist',
  plugins: [
    {
      use: 'gridsome-plugin-svg',
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          whitelist: ['svg-inline--fa', 'table', 'table-striped', 'table-bordered', 'table-hover', 'table-sm'],
          whitelistPatterns: [/fa-$/, /blockquote$/, /code$/, /pre$/, /table$/, /table-$/]
        },
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    }, 
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: './content/site/*.json'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Tech',
        path: './content/techs/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Skill',
        path: './content/skills/*.md',
        refs: {
          techs: {
            typeName: 'Tech'
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Diploma',
        path: './content/diplomas/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Certification',
        path: './content/certifications/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Interest',
        path: './content/interests/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Language',
        path: './content/languages/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: './content/projects/*.md',
        refs: {
          skills: {
            typeName: 'Skill',
          },
          techs: {
            typeName: 'Tech'
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Job',
        path: './content/jobs/*.md',
        refs: {
          skills: {
            typeName: 'Skill',
          },
          techs: {
            typeName: 'Tech'
          }
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@noxify/gridsome-remark-table-align',
        ['@noxify/gridsome-remark-classes', {
          'table': 'table table-striped',
          'tableCell[align=center]': 'text-center',
          'tableCell[align=right]': 'text-right'
        }]
      ]
    }
  },
  templates: {
    Project: [{
      path: (node) => '/projects/' + node.title.toLowerCase().split(' ').join('-'),
      component: '~/templates/ProjectDetail.vue'
    }],
    Job: [{
      path: (node) => '/jobs/' + node.title.toLowerCase().split(' ').join('-'),
      component: '~/templates/JobDetail.vue'
    }],
    Tech: [{
      path: (node) => '/techs/' + node.title.toLowerCase().split(' ').join('-'),
      component: '~/templates/TechDetail.vue'
    }],
    Skill: [{
      path: '/skills/:title'
    }]
  }
}
