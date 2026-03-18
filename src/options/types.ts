// API 响应数据结构
export interface ApiSkillItem {
  file_id?: string
  filename?: string
  score?: any
  skill?: {
    id?: string
    name?: string
    author?: string
    description?: string
    githubUrl?: string
    skillUrl?: string
    stars?: 0
    updatedAt?: string
  }
}

export interface ApiResponse {
  object?: string
  search_query?: string
  data?: ApiSkillItem[]
  has_more?: boolean
  next_page?: any
  [key: string]: unknown
}

// 渲染卡片的数据结构
export interface RenderedSkill {
  filename: string
  avatar: string
  date: string
  desc: string
  descs?: string
  showOriDesc: boolean
  truncateDesc: boolean
  source: {
    repo?: string
    github?: string
    mp?: string
  }
  score?: number
  stars?: number
}

// API 状态
export interface ApiState {
  keyword: string
  page: number
  isSearching: boolean
  isLoadingMore: boolean
  apiKey: string
}

// 语言配置
export type LanguageCode =
  | 'zh-CN'
  | 'zh-TW'
  | 'en'
  | 'ko'
  | 'ja'
  | 'fr'
  | 'ru'
  | 'de'
  | 'id'
  | 'tl'
  | 'sq'
  | 'tr'
  | 'my'
  | 'th'
  | 'vi'
  | 'pl'
  | 'pt'

export interface LanguageDict {
  title: string
  search: string
}

export interface LanguageConfig {
  code: LanguageCode
  flag: string
  name: string
}

// 所有可用语言列表
export const AVAILABLE_LANGUAGES: LanguageConfig[] = [
  { code: 'zh-CN', flag: '🇨🇳', name: '简体中文' },
  { code: 'zh-TW', flag: '🇨🇳', name: '繁體中文' },
  { code: 'en', flag: '🇺🇸', name: 'English' },
  { code: 'ko', flag: '🇰🇷', name: '한국어' },
  { code: 'ja', flag: '🇯🇵', name: '日本語' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'ru', flag: '🇷🇺', name: 'Русский' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'id', flag: '🇮🇩', name: 'Bahasa Indonesia' },
  { code: 'tl', flag: '🇵🇭', name: 'Tagalog' },
  { code: 'sq', flag: '🇦🇱', name: 'Shqip' },
  { code: 'tr', flag: '🇹🇷', name: 'Türkçe' },
  { code: 'my', flag: '🇲🇲', name: 'မြန်မာဘာသာ' },
  { code: 'th', flag: '🇹🇭', name: 'ไทย' },
  { code: 'vi', flag: '🇻🇳', name: 'Tiếng Việt' },
  { code: 'pl', flag: '🇵🇱', name: 'Polski' },
  { code: 'pt', flag: '🇵🇹', name: 'Português' },
]

// 主题类型
export type ThemeMode = 'light' | 'dark'

// 排序方式
export type SortBy = 'relevance' | 'stars' | 'updated'

// 设置项
export interface Settings {
  targetLimit: number
  apiKey: string
  googleApiKey: string
  sortBy: SortBy
}
