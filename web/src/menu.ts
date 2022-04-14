import buildConfig from './buildConfig'
import { convertStatic } from './polaris/common/util/convertStatic'
export const MenuConfig = {
  title: '北极星',
  namespace: {
    title: '命名空间',
    icon: [convertStatic('/static/img/namespace.svg'), convertStatic('/static/img/namespace.svg')],
  },
  serviceManage: {
    isGroup: true,
    title: '服务治理',
    service: {
      title: '服务列表',
      icon: [convertStatic('/static/img/service.svg'), convertStatic('/static/img/service.svg')],
    },
    alias: {
      title: '服务别名',
      icon: [convertStatic('/static/img/namespace.svg'), convertStatic('/static/img/namespace.svg')],
    },
  },
  observability: {
    isGroup: true,
    title: '可观测性',
    'route-monitor': {
      title: '路由监控',
      icon: [convertStatic('/static/img/route-monitor.svg'), convertStatic('/static/img/route-monitor.svg')],
    },
    'circuitBreaker-monitor': {
      title: '熔断监控',
      icon: [convertStatic('/static/img/circuit-monitor.svg'), convertStatic('/static/img/circuit-monitor.svg')],
    },
    'ratelimit-monitor': {
      title: '限流监控',
      icon: [convertStatic('/static/img/limit-monitor.svg'), convertStatic('/static/img/limit-monitor.svg')],
    },
  },
  ...(buildConfig.configuration
    ? {
        configuration: {
          isGroup: true,
          title: '配置中心',
          filegroup: {
            title: '配置分组',
            icon: [convertStatic('/static/img/route-monitor.svg'), convertStatic('/static/img/route-monitor.svg')],
          },
          'file-release-history': {
            title: '发布历史',
            icon: [convertStatic('/static/img/circuit-monitor.svg'), convertStatic('/static/img/circuit-monitor.svg')],
          },
        },
      }
    : {}),
  auth: {
    isGroup: true,
    title: '权限控制',
    user: {
      title: '用户',
      icon: [convertStatic('/static/img/route-monitor.svg'), convertStatic('/static/img/route-monitor.svg')],
    },
    usergroup: {
      title: '用户组',
      icon: [convertStatic('/static/img/circuit-monitor.svg'), convertStatic('/static/img/circuit-monitor.svg')],
    },
    policy: {
      title: '策略',
      icon: [convertStatic('/static/img/circuit-monitor.svg'), convertStatic('/static/img/circuit-monitor.svg')],
    },
  },
}
