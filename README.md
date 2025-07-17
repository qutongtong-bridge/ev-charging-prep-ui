# 充电准备界面 - EV Charging Preparation Screen

这是一个基于 React + TypeScript + Vite 的电动汽车充电准备界面。

## 项目已启动 🚀

### 访问地址
- **本地访问**: http://localhost:3000/
- **网络访问**: http://172.17.0.7:3000/

### 界面特点
- 📱 手机界面设计（375x812px）
- 🎨 完整的状态栏显示
- 📍 步骤指示器（车室选择 → 出力选择 → 内容确认 → 入库）
- ⚡ 充电站信息展示
- 💰 价格和警告信息

### 项目结构
```
/workspaces/VSCodeTemplateOwanTest/
├── src/
│   ├── ChargingPreparationScreen.tsx  # 主要组件
│   ├── App.tsx                        # 应用入口组件
│   ├── index.tsx                      # React 入口
│   └── index.css                      # 全局样式
├── index.html                         # HTML 模板
├── package.json                       # 项目配置
└── vite.config.ts                     # Vite 配置
```

### 开发命令
```bash
# 启动开发服务器
npm run dev

# 构建项目
npm run build
```

### 技术栈
- React 18.2.0
- TypeScript 5.2.0
- Vite 5.0.0

## 截图预览
界面模拟了真实的手机应用，包含：
- 状态栏（时间、电量、信号等）
- 充电准备步骤
- 充电站详细信息
- 价格说明
- 使用条款警告

请在浏览器中打开上述地址查看完整效果！