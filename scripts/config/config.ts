import path from 'path'

export const PROJECT_PATH = path.resolve(__dirname, '../../')
export const PROJECT_NAME = path.parse(PROJECT_PATH).name

export const isDev = process.env.NODE_ENV === 'development'

export const SERVER_HOST = 'localhost'
export const SERVER_PORT = '7001'

// 是否开启 modules 缓存
export const IS_OPEN_HARD_SOURCE = true

// 是否开启 bundle 包分析
export const shouldOpenAnalyzer = true
