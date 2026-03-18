<template>
  <!-- Blobs Background -->
  <!-- <div class="blob blob-1"></div>
  <div class="blob blob-2"></div> -->

  <div class="window">
    <!-- Header (Sticky Top) -->
    <div class="nav-bar glass-panel">
      <div class="current-path">~/skillsmp</div>
      <div class="nav-actions">
        <!-- Config Button with Close Button -->
        <div style="position: relative; display: flex; align-items: center">
          <button
            class="icon-btn"
            :class="{ 'config-active': isConfigOpen }"
            @click="toggleConfig"
            aria-label="Open Settings"
          >
            <svg
              v-if="!isConfigOpen"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
              ></path>
            </svg>
            <svg
              v-else
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
        </div>

        <!-- Theme Toggle Button -->
        <button class="icon-btn" @click="toggleTheme" aria-label="Toggle Theme">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </button>

        <!-- Language Icon with Close Button -->
        <div style="position: relative; display: flex; align-items: center">
          <button class="icon-btn" @click="toggleLangDropdown" aria-label="Select Language">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path
                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              ></path>
            </svg>
          </button>

          <!-- Close Button for Language Dropdown (always visible on right) -->
          <button
            class="icon-btn lang-close-btn"
            :class="{ active: isLangDropdownOpen }"
            @click="closeIframe"
            aria-label="Close Language Dropdown"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <!-- Language Dropdown -->
          <div class="language-dropdown" :class="{ active: isLangDropdownOpen }">
            <div class="dd-header">
              <span id="ddl-title">{{ currentLanguageDict.title }}</span>
              <!-- <button class="close-dd-btn" @click.stop="closeLangDropdown">×</button> -->
            </div>

            <div
              v-for="lang in availableLanguages"
              :key="lang.code"
              class="dropdown-item"
              :class="{ selected: currentLang === lang.code }"
              @click="selectLanguage(lang.code)"
              :data-lang="lang.code"
            >
              <span>{{ lang.flag }}</span> {{ lang.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Config Panel (expanded panel below header) -->
    <div class="config-panel-wrapper" :class="{ active: isConfigOpen }">
      <div v-if="isConfigOpen" class="config-panel glass-panel">
        <div class="config-header">
          <span>⚙️</span>
          <h3>Settings</h3>
          <button class="close-btn" @click.stop="closeConfig" aria-label="Close Settings">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="config-body">
          <div class="config-item">
            <label>🎯 Target Limit:</label>
            <input
              type="number"
              class="custom-input"
              v-model.number="settings.targetLimit"
              min="1"
              max="200"
              @change="saveSettings"
            />
          </div>

          <div class="config-item">
            <label>🔑 API Key:</label>
            <a href="https://skillsmp.com/docs/api" target="_blank" class="help-link">
              Get API Key →
            </a>
            <input
              type="password"
              class="custom-input wide-input"
              v-model="settings.apiKey"
              placeholder="sk-..."
              autocomplete="off"
              style="font-size: 0.8em"
              @change="saveSettings"
            />
          </div>

          <div class="config-item">
            <label>🌐 Google Translate API Key:</label>
            <a href="https://cloud.google.com/" target="_blank" class="help-link">
              Get API Key →
            </a>
            <input
              type="password"
              class="custom-input wide-input"
              v-model="settings.googleApiKey"
              placeholder="..."
              autocomplete="off"
              style="font-size: 0.8em"
              @change="saveSettings"
            />
          </div>

          <div class="config-item">
            <label>🔀 Sort By:</label>
            <select class="custom-input" v-model="settings.sortBy" @change="saveSettings">
              <option value="stars">Stars</option>
              <option value="recent">Last Update</option>
            </select>
          </div>
        </div>
        <div class="config-footer">
          <small style="color: var(--accent-green); font-family: var(--mono-font)">
            {{ saveStatusText }}
          </small>
        </div>
      </div>
    </div>

    <!-- Search Area (Sticky below Nav) -->
    <div class="search-container" ref="searchContainerRef">
      <div class="search-input-wrapper glass-panel">
        <span class="prompt-symbol">$</span>
        <span class="command-text">find</span>
        <input
          type="text"
          class="cmd-input"
          v-model="searchKeyword"
          placeholder="keywords..."
          autofocus
          @keydown.enter="handleSearch"
        />
        <button class="search-icon-btn" @click="handleSearch">🔍</button>
      </div>
    </div>

    <!-- Card List Container -->
    <div class="card-list" ref="cardListRef">
      <div v-if="renderedSkills.length === 0 && !isSearching" class="empty-state">
        Press enter to search...
      </div>
      <div v-for="(skill, index) in renderedSkills" :key="index">
        <div v-if="skill.filename != '.md' || skill.source.github" class="file-card glass-panel">
          <div class="card-header">
            <div class="traffic-lights">
              <div class="light red"></div>
              <div class="light yellow"></div>
              <div class="light green"></div>
            </div>
            <span class="filename"
              ><a :href="skill.source.mp" target="_blank">{{ skill.filename }}</a></span
            >
            <span><span class="star-icon">★</span> {{ skill.stars }}</span>
          </div>
          <div class="card-body">
            <!-- <div class="avatar" :style="{ backgroundImage: `url('${skill.avatar}')` }"></div> -->
            <div class="content-text">
              <span class="source-link"
                >from:
                <a :href="skill.source.github" target="_blank">"{{ skill.source.repo }}"</a></span
              >
              <p class="description">
                {{
                  skill.truncateDesc
                    ? truncateDescription(skill.showOriDesc ? skill.desc : skill.descs)
                    : skill.showOriDesc
                      ? skill.desc
                      : skill.descs
                }}
              </p>
            </div>
          </div>
          <div class="card-footer">
            <span>{{ skill.date }}</span>
            <span>
              <span
                class="heart-more"
                v-if="(skill.showOriDesc ? skill.desc : skill.descs).length > 200"
                @click="skill.truncateDesc = !skill.truncateDesc"
                >{{ skill.truncateDesc ? 'more' : 'up' }}</span
              ><span
                class="heart-more origin"
                v-if="skill.descs"
                @click="skill.showOriDesc = !skill.showOriDesc"
                >{{ !skill.showOriDesc ? 'origin' : 'translate' }}</span
              >
              <span class="heart-more origin" v-if="!skill.descs" @click="reTranslate"
                >reTranslate</span
              >
            </span>
            <span><span class="heart-icon">♡</span> {{ formatScore(skill.score) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <transition name="toast">
      <div v-if="toast.visible" class="toast" :class="toast.type">
        <span class="toast-message">{{ toast.message }}</span>
      </div>
    </transition>

    <!-- Infinite Scroll Trigger Zone -->
    <div class="scroll-trigger-area" ref="scrollTriggerRef">
      <div v-if="isLoadingMore" class="spinner-icon"></div>
      <div class="loading-text" id="loadingText">
        {{ loadingText }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, nextTick, watch, computed } from 'vue'

import {
  ApiSkillItem,
  ApiResponse,
  RenderedSkill,
  LanguageCode,
  AVAILABLE_LANGUAGES,
  ThemeMode,
  Settings,
  SortBy,
} from './types'

// =========================================
// STATE MANAGEMENT
// =========================================
const searchKeyword = ref('')
const currentPage = ref(1)
const isSearching = ref(false)
const isLoadingMore = ref(false)
const isConfigOpen = ref(false)
const isLangDropdownOpen = ref(false)
const currentLang = ref<LanguageCode>('zh-CN')
const currentTheme = ref<ThemeMode>('light')

// Toast state
const toast = reactive({
  visible: false,
  message: '',
  type: 'error' as 'error' | 'success',
})

// Save status text
const saveStatusText = ref('Configuration Ready')

const settings = reactive<Settings>({
  targetLimit: 50,
  apiKey: localStorage.getItem('api_key') || '',
  googleApiKey: localStorage.getItem('google_api_key') || '',
  sortBy: (localStorage.getItem('sort_by') as SortBy) || 'star',
})

const renderedSkills = ref<RenderedSkill[]>([])
const loadingText = ref('Loading more skills...')

// DOM References
const searchContainerRef = ref<HTMLElement | null>(null)
const cardListRef = ref<HTMLElement | null>(null)
const scrollTriggerRef = ref<HTMLElement | null>(null)

// Intersection Observer
let scrollObserver: IntersectionObserver | null = null

// =========================================
// LANGUAGE CONFIG
// =========================================
const languageDicts: Record<string, { title: string; search: string }> = {
  'zh-CN': { title: '语言', search: '搜索' },
  'zh-TW': { title: '語言', search: '搜尋' },
  default: { title: 'Language', search: 'Search' },
}

const currentLanguageDict = computed(() => {
  return languageDicts[currentLang.value] || languageDicts['default']
})

// =========================================
// COMPUTED PROPERTIES
// =========================================
const availableLanguages = AVAILABLE_LANGUAGES
// =========================================
// API INTEGRATION
// =========================================
async function fetchData(isReset = false): Promise<void> {
  if (isReset) {
    renderedSkills.value = []
    currentPage.value = 1
    isSearching.value = true
  } else if (isLoadingMore.value) {
    return
  }

  if (!searchKeyword.value.trim()) {
    loadingText.value = 'Enter keywords to start'
    return
  }

  if (isReset) {
    loadingText.value = 'Searching...'
  } else {
    loadingText.value = 'Loading more...'
  }

  isLoadingMore.value = true

  try {
    const encodedQ = encodeURIComponent(searchKeyword.value.trim())
    const apiUrl = `https://skillsmp.com/api/v1/skills/ai-search?q=${encodedQ}&page=${currentPage.value}&sortBy=${settings.sortBy}&limit=${settings.targetLimit}`

    console.log(`Fetching: ${apiUrl}`)

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${settings.apiKey}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`)
    }

    const result = await response.json()
    const data: ApiResponse = result.data
    const extractedItems = await extractItemsFromResponse(data)

    if (extractedItems.length === 0) {
      loadingText.value = 'No more items found.'
      return
    }

    renderCards(extractedItems)
    currentPage.value++
  } catch (error) {
    console.error('Fetch error:', error)
    loadingText.value = 'Error fetching data. Check console.'
    showToast('Failed to fetch data. Please check your API key and network connection.', 'error')
  } finally {
    isLoadingMore.value = false
  }
}

async function translate(text: string[]) {
  try {
    let body = [[text, 'en', `${currentLang.value || 'zh'}`], 'te_lib']
    let apiUrl = 'https://translate-pa.googleapis.com/v1/translateHtml'
    console.log(`Fetching: ${apiUrl}`)
    if (!settings.googleApiKey) {
      showToast('Please check the google apiKey!')
      return []
    }
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'x-goog-api-key': `${settings.googleApiKey}`,
        'Content-Type': 'application/json+protobuf',
      },
      body: JSON.stringify(body),
    })
    if (!response.ok) {
      showToast(`Translate API HTTP Error! Status: ${response.status}`)
      // throw new Error(`HTTP Error! Status: ${response.status}`)
    }
    const result = await response.json()
    const data = result[0]
    return data || []
  } catch (error) {
    console.error('Translate error:', error)
    showToast('Failed to translate descriptions. Using original text.', 'error')
    return []
  }
}
async function reTranslate() {
  let descs: string[] = []
  renderedSkills.value.map((item) => {
    descs.push(item.desc || 'test')
  })
  let data = await translate(descs)
  renderedSkills.value.map((item, index) => {
    item.descs = data[index] || ''
  })
}
async function extractItemsFromResponse(data: ApiResponse) {
  let items: ApiSkillItem[] = []
  items = data.data || []
  let descs: string[] = []
  let result = items.map((item) => {
    let paths = item.skill?.githubUrl?.split('/') || []
    descs.push(item.skill?.description || 'test')
    return {
      filename: [paths.pop(), 'md'].join('.') || '',
      avatar: item.skill?.author
        ? `https://avatars.githubusercontent.com/u/${item.skill?.author}?v=4`
        : `https://ui-avatars.com/api/?name=${item.skill?.name || 'S'}&background=random`,
      date: new Date(Number(item.skill?.updatedAt || '') * 1000).toLocaleDateString(),
      desc: item.skill?.description || '',
      descs: '',
      showOriDesc: false,
      truncateDesc: true,
      score: item.score,
      source: {
        repo: [paths[3], paths[4]].join('/') || 'unknown',
        github: item.skill?.githubUrl,
        mp: item.skill?.skillUrl,
      },
      stars: item.skill?.stars || 0,
    }
  })
  const texts = await translate(descs)
  result.map((item, index) => {
    item.descs = texts[index] || ''
    return item
  })
  console.log('result---', result)
  return result
}
function closeIframe() {
  window.parent.postMessage('close-skillmp-search', '*')
}
function showToast(message: string, type: 'error' | 'success' = 'error'): void {
  toast.message = message
  toast.type = type
  toast.visible = true

  // Auto hide after 5 seconds
  setTimeout(() => {
    toast.visible = false
  }, 3000)
}

function renderCards(items: RenderedSkill[]): void {
  items.forEach((item) => {
    renderedSkills.value.push(item)
  })
}

// =========================================
// UI HELPERS
// =========================================
function formatScore(score: number): string {
  return (score / 1000).toFixed(2)
}

function truncateDescription(desc: string): string {
  if (!desc) return ''
  if (desc.length > 200) {
    return desc.substring(0, 200) + '...'
  }
  return desc
}

// =========================================
// EVENT HANDLERS
// =========================================
function handleSearch(): void {
  fetchData(true)
}

function toggleConfig(): void {
  isConfigOpen.value = !isConfigOpen.value
  if (isConfigOpen.value) {
    // Focus on API key input when opening
    setTimeout(() => {
      const apiKeyInput = document.querySelector('.config-panel .custom-input') as HTMLInputElement
      if (apiKeyInput) {
        apiKeyInput.focus()
      }
    }, 100)
  }
}

function closeConfig(): void {
  isConfigOpen.value = false
}

function saveSettings(): void {
  localStorage.setItem('api_key', settings.apiKey)
  localStorage.setItem('google_api_key', settings.googleApiKey)
  localStorage.setItem('target_limit', settings.targetLimit.toString())
  localStorage.setItem('sort_by', settings.sortBy)
  saveStatusText.value = 'Settings Saved!'
  setTimeout(() => {
    saveStatusText.value = 'Configuration Ready'
  }, 2000)
}

function toggleTheme(): void {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', currentTheme.value)
  localStorage.setItem('theme', currentTheme.value)
}

function toggleLangDropdown(): void {
  isLangDropdownOpen.value = !isLangDropdownOpen.value
}

function closeLangDropdown(): void {
  isLangDropdownOpen.value = false
}

function selectLanguage(lang: LanguageCode): void {
  currentLang.value = lang
  localStorage.setItem('language', lang)
  isLangDropdownOpen.value = false
}

// =========================================
// INFINITE SCROLL TRIGGER
// =========================================
function setupScrollObserver(): void {
  if (!scrollTriggerRef.value) return

  const handleScrollTrigger = (entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fetchData(false)
      }
    })
  }

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }

  scrollObserver = new IntersectionObserver(handleScrollTrigger, observerOptions)
  scrollObserver.observe(scrollTriggerRef.value)
}

// =========================================
// LIFECYCLE HOOKS
// =========================================
onMounted(async () => {
  // Restore theme
  const savedTheme = (localStorage.getItem('theme') as ThemeMode) || 'light'
  currentTheme.value = savedTheme
  document.documentElement.setAttribute('data-theme', savedTheme)

  // Restore language
  const savedLang = (localStorage.getItem('language') as LanguageCode) || 'zh-CN'
  currentLang.value = savedLang

  // Setup scroll observer after DOM is ready
  await nextTick()
  setupScrollObserver()

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const langBtn = e.target as HTMLElement
    if (!langBtn.closest('.icon-btn') && !langBtn.closest('.language-dropdown')) {
      isLangDropdownOpen.value = false
    }
  })
})

// Watch for keyword changes
watch(searchKeyword, (newVal) => {
  // Update state if needed
})
</script>

<style lang="scss" scoped>
// Toast styles
.toast {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 95, 86, 0.95);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  font-family: var(--mono-font);
  font-size: 0.9rem;
  animation: toastIn 0.3s ease-out;
}

.toast-success {
  background: rgba(39, 201, 63, 0.95);
}

@keyframes toastIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

// More and Origin button styles
.heart-more {
  cursor: pointer;
  color: var(--accent-green);
  font-family: var(--mono-font);
  font-size: 0.8rem;
  margin-right: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  transition: all 0.2s ease;
  user-select: none;

  &:hover {
    background: rgba(39, 201, 63, 0.15);
    text-decoration: underline;
  }

  &.origin {
    color: var(--path-color);

    &:hover {
      background: rgba(214, 51, 132, 0.15);
    }
  }
}

// Language close button style
.lang-close-btn {
  margin-left: 2px;

  &.active {
    color: #ff5f56;
  }
}

// Config Panel (expanded panel below header) styles
.config-panel-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 16px;
  animation: slideDown 0.3s ease-out;
}

.config-panel {
  position: absolute;
  z-index: 9999;
  padding: 20px;
  border-radius: 12px;
  overflow-y: scroll;
  width: 100%;
}

.config-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  span {
    font-size: 1.5rem;
  }

  h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color);
  }

  .close-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.2s ease;

    svg {
      stroke: var(--text-secondary);
    }

    &:hover {
      background: rgba(0, 0, 0, 0.05);

      svg {
        stroke: #ff5f56;
      }
    }
  }
}

.config-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.config-item {
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .custom-input {
    padding: 10px 12px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    background: rgba(255, 255, 255, 0.95);
    color: var(--text-color);
    width: 100%;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: var(--accent-green);
      box-shadow: 0 0 0 3px rgba(39, 201, 63, 0.15);
    }

    // Style for select element
    &::-ms-expand {
      display: none;
    }

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
    padding-right: 35px;
  }

  // Dark theme support for custom inputs
  .dark .custom-input {
    background: rgba(40, 40, 40, 0.95);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .wide-input {
    flex: 1;
    min-width: 200px;
  }
}

.help-link {
  font-size: 0.85rem;
  color: var(--accent-green);
  text-decoration: none;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
}

.config-footer {
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
