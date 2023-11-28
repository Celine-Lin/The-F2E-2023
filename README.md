
# 2023 THE F2E Mission 2 - 總統即時開票全台地圖

## 作品說明
總統即時開票全台地圖

## 資料夾說明
├── assets/            # 靜態資源
│   ├── scss/          # SCSS 樣式檔
│   └── images/        # 圖檔
├── layout/            # EJS 模板
├── pages/             # 頁面
├── gitignore          # 忽略不該上傳的檔案（例如 node_modules）
├── main.js            # JavaScript 主要檔案
├── package-lock.json  # 神秘空間
├── package.json       # 神秘空間
└── vite.config.js     # vite 設定檔

## 使用技術
- SCSS
- Bootstrap
- RWD
- JavaScript
- Vite

## 第三方服務
- c3.js

## Node.js 版本
Node.js v18.16.1

## 系統說明
- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm run deploy` - 自動化部署

## 開發模式的監聽
vite 專案執行開發模式 `npm run dev` 後即會自動監聽

## 部署 gh-pages 流程說明
1. 在 GitHub 建立一個新的 Repository

2. 在專案終端機輸入以下指令，初始化 GitHub
```cmd
git init # 若已經初始化過就可以不用輸入
git add .
git commit -m 'first commit'
git remote add origin [GitHub Repositories Url]
git push -u origin master // 僅限第一次輸入，往後只需要輸入 git push
```

3. 初始化完畢後，執行 `npm run deploy` 指令進行自動化部署

## 資料來源
  - Vite範本來源：六角學院網頁切版班Vite範例(Bootstrap版本)
  - UI 設計： The F2E 2023 設計師 jhen