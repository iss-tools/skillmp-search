# skillmp-search

<div align="center">

[中文](README.md) | [English](README_EN.md)

</div>

> A Chrome extension for intelligent skill search with multi-language support, built with Vite + Vue3 + TypeScript

## 🌟 Features

- **Smart Search**: Real-time search for open-source skill projects via skillsmp.com API
- **Multi-Language Support**: Switch between 17 languages (Chinese, English, Japanese, Korean, etc.)
- **Auto Translation**: Integrate Google Translate API for automatic description translation
- **Infinite Scroll**: Load more search results with smooth browsing experience
- **Theme Toggle**: Support light/dark theme modes
- **Sorting Options**: Sort by relevance, stars, or last updated time
- **Settings Management**: Configure Target Limit, API Key, and Google Translate API Key

## 📸 Demo Screenshots

### Search Results
![Search Results](/doc/image/image.png)
<div>
	<img src="./doc/image/image0.png" alt="Editor" width="300">
  <img src="./doc/image/image1.png" alt="Editor" width="300">
  <img src="./doc/image/image2.png" alt="Editor" width="300">
  <img src="./doc/image/image3.png" alt="Editor" width="300">
  <img src="./doc/image/image4.png" alt="Editor" width="300">
  <img src="./doc/image/image5.png" alt="Editor" width="300">
</div>

## 📦 Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: SCSS
- **Extension Standard**: Chrome Extension Manifest V3

## 🚀 Quick Start

### Prerequisites

- Node.js >= 14.18.0
- Chrome/Edge browser

### Install Dependencies

```bash
npm install
```

### Development Mode

```bash
npm run dev
```

After starting, visit `http://localhost:3000` to preview the pages.

### Build for Production

```bash
npm run build
```

The build artifacts will be output to the `build/` directory.

## 🔧 Installing the Extension

### Method 1: Install from GitHub Release (Recommended)

1. Visit [GitHub Releases](https://github.com/iss-tools/skillmp-search/releases)
2. Download the latest `.zip` or `.crx` file
3. Open Chrome browser and go to `chrome://extensions/`
4. Enable **"Developer mode"** in the top right corner
5. If using `.zip` file:
   - Extract the downloaded archive
   - Click **"Load unpacked"**
   - Select the extracted folder
6. If using `.crx` file:
   - Simply drag and drop the `.crx` file onto the extensions page
   - Click **"Add extension"**

### Method 2: Developer Mode Installation

1. Open Chrome browser and go to `chrome://extensions/`
2. Enable **"Developer mode"** in the top right corner
3. Click **"Load unpacked"**
4. Select the `build` folder from the project

### Production Deployment

After building, the `build` directory contains the complete extension files ready for submission to Chrome Web Store.

Reference official guide: [Chrome Web Store Publishing Guide](https://developer.chrome.com/webstore/publish)

## ⚙️ Configuration

### Settings

Configure the following parameters in the extension's Options page:

| Setting | Description | Default Value |
|---------|-------------|---------------|
| Target Limit | Number of results per search | 50 |
| API Key | skillsmp.com API key | - |
| Google Translate API Key | Translation service API key | - |
| Sort By | Sorting method | Relevance |

### Sort Options

- **Relevance** - Sort by relevance score
- **Stars** - Sort by star count
- **Last Updated** - Sort by last update time

### Supported Languages

| Code | Name | Flag |
|------|------|------|
| zh-CN | Simplified Chinese | 🇨🇳 |
| zh-TW | Traditional Chinese | 🇹🇼 |
| en | English | 🇺🇸 |
| ko | 한국어 | 🇰🇷 |
| ja | 日本語 | 🇯🇵 |
| fr | Français | 🇫🇷 |
| ru | Русский | 🇷🇺 |
| de | Deutsch | 🇩🇪 |
| id | Bahasa Indonesia | 🇮🇩 |
| tl | Tagalog | 🇵🇭 |
| sq | Shqip | 🇦🇱 |
| tr | Türkçe | 🇹🇷 |
| my | မြန်မာဘာသာ | 🇲🇲 |
| th | ไทย | 🇹🇭 |
| vi | Tiếng Việt | 🇻🇳 |
| pl | Polski | 🇵🇱 |
| pt | Português | 🇵🇹 |

## 📁 Project Structure

```
skillmp-search/
├── src/
│   ├── popup/              # Popup page
│   │   ├── index.ts        # Entry file
│   │   └── Popup.vue       # Main component
│   ├── options/            # Options page
│   │   ├── index.ts        # Entry file
│   │   ├── Options.vue     # Main component
│   │   ├── types.ts        # Type definitions
│   │   └── options.scss    # Style variables
│   ├── contentScript/      # Content script
│   │   ├── index.ts        # Entry file
│   │   └── App.vue         # Main component
│   ├── background/         # Background script
│   │   └── index.ts
│   ├── manifest.ts         # Extension configuration
│   └── assets/             # Static assets
├── build/                  # Build output directory
├── public/                 # Public resources
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🔑 Getting API Keys

### skillsmp API Key

1. Visit [skillsmp.com](https://skillsmp.com)
2. Register an account and obtain your API key

### Google Translate API Key

1. Visit [Google Cloud Console](https://cloud.google.com/)
2. Create a project and enable Translation API
3. Create credentials to get your API key

## 🛠️ Development Guide

### Debugging Modes

#### Popup Page Debugging
Visit `http://localhost:3000/popup.html`

#### Options Page Debugging
Visit `http://localhost:3000/options.html`

### Format Code

```bash
npm run fmt
```

### Preview Build

```bash
npm run preview
```

## 📝 Changelog

### v0.0.0
- ✨ Initial release
- 🎯 Implemented smart skill search functionality
- 🌐 Added support for 17 languages
- 🔄 Integrated Google Translate API
- 🌓 Added light/dark theme support
- 📊 Added multiple sorting options

## 📄 License

MIT License

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 🔗 Related Links

- [Chrome Extension Development Docs](https://developer.chrome.com/docs/extensions/)
- [Vue 3 Official Docs](https://vuejs.org/)
- [Vite Official Docs](https://vitejs.dev/)
- [skillsmp.com](https://skillsmp.com)
- [GitHub Releases](https://github.com/iss-tools/skillmp-search/releases)

---

Built with ❤️ using Vue 3 + TypeScript
