import {
  Login,
  Home,
  NotFound,
  Content,
  Modules
} from '../components/';

module.exports = [{
    path: '/',
    redirect: to => {
    // return 'demo/add/report';
     return 'login';
    },
    hidden: true
  }, {
    path: '/login',
    component: Login,
    hidden: true
  }, {
    path: '/404',
    component: Home,
    hidden: true,
    children: [{
      path: '',
      component: NotFound
    }]
  },

  {
    path: '/demo',
    name: '首页',
    icon: 'home',
    component: Home,
    children: [{
      hidden: true,
      path: '',
      redirect: to => {
        return 'add'
      }
    }, {
      path: 'add',
      name: '入库&出库',
      icon: 'sitemap',
      component: Content,
      children: [{
          hidden: true,
          path: '',
          redirect: to => {
            return 'report'
          }
        }, {
          path: 'report',
          name: '商品入库',
          icon: 'laptop',
          component: Modules.Demo.Add.Report
        },
         {
          path: 'interface',
          name: '商品出库',
          icon: 'space-shuttle',
          component: Modules.Demo.Add.Interface
        },

      ]
    }, {
      path: 'export',
      name: '库存管理',
      icon: 'bank',
      component: Content,
      children: [{
        hidden: true,
        path: '',
        redirect: to => {
          return 'export'
        }
      }, {
        path: 'list',
        name: '更新库存',
        icon: 'refresh',
        component: Modules.Demo.Export.List
      }]
    }, {
      path: 'statistics',
      name: '商品统计',
      icon: 'bar-chart',
      component: Content,
      children: [{
        hidden: true,
        path: '',
        redirect: to => {
          return 'statistics'
        }
      }, {
        path: 'count',
        name: '统计分析',
        icon: 'dashboard',
        component: Modules.Demo.Statistics.Count
      }]
    }]
}


];
