/* 
'vue-admin-template': {
  desc: '',
  templateGit: 'https://github.com:Author/path',
  status: 'online'
},
 */

/**
 * 模板列表。
 */
module.exports = {
  templateStatusMap: {
    online: { name: 'online', label: '优秀开源', value: ''},
    done: { name: 'done', label: '已完成', value: ''},
    doing: { name: 'doing', label: '进行中', value: ''},
  },
  templateData: {
    'vue-admin-template': {
      name: 'vue-admin-template',
      desc: 'A minimal vue admin template with Element UI & axios & iconfont & permission control & lint',
      templateGit: 'https://github.com/PanJiaChen/vue-admin-template',
      tags: 'vue',
      status: 'online'
    },
    'vue-element-admin': {
      name: 'vue-element-admin',
      desc: 'vue-element-admin is a production-ready front-end solution for admin interfaces. It is based on vue and uses the UI Toolkit element-ui.',
      templateGit: 'https://github.com/PanJiaChen/vue-element-admin',
      tags: 'vue',
      status: 'online'
    },
    'ant-design-pro': {
      name: 'ant design pro',
      desc: 'An out-of-box UI solution for enterprise applications as a React boilerplate.',
      templateGit: 'https://github.com/ant-design/ant-design-pro',
      tags: 'react',
      status: 'online'
    },
    /* 'iview-admin': {
      name: 'ant design pro',
      desc: 'An out-of-box UI solution for enterprise applications as a React boilerplate.',
      templateGit: 'https://github.com/iview/iview-admin',
      status: 'online'
    }, */
    'vue2-admin-sample': { 
      name: 'vue2-admin-sample',
      desc: 'vue2.x 极简后台管理小样。',
      templatePath: 'template-vue2-admin-sample',
      tags: 'vue',
      status: 'done'
    },
    'vue2-spa': { 
      name: 'vue2-spa',
      desc: 'vue2.x 单页应用。打包方式：webpack',
      templatePath: 'template-vue2-spa',
      tags: 'vue',
      status: 'done'
    },
    'taro3-sample': { 
      name: 'taro3-sample',
      desc: 'taro3 跨端应用，支持小程序，h5。taro打包方式：webpack5',
      templatePath: 'template-taro3-sample',
      tags: 'react, taro',
      status: 'done'
    },
    // multiple pages
    'vue2-mtp': { 
      name: 'vue2-mtp',
      desc: 'vue2.x 多页应用。打包方式：webpack',
      templatePath: '',
      tags: 'vue',
      status: 'doing'
    },
    // single page
    'vue3-spa': { 
      name: 'vue3-spa',
      desc: 'vue3 单页应用。打包方式：vite',
      templatePath: '',
      tags: 'vue, vue3',
      status: 'doing'
    },
    'react-spa':{  
      name: 'react-spa',
      desc: 'react17 单页应用。打包方式：webpack',
      templatePath: '',
      status: 'doing'
    },
  }

}