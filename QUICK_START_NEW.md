# 🚀 PostWomen - Quick Start Guide

## ⚡ 2-Minute Setup

### 1. Start Backend Server
```bash
# Option A: Use batch file (Windows)
Double-click: start-backend.bat

# Option B: Manual start
cd C:\Users\DELL\Desktop\postman-mvp\backend
node server.js
```

### 2. Start Frontend
```bash
cd C:\Users\DELL\Desktop\postman-mvp\frontend
npm start
```

### 3. Verify Setup
- ✅ Backend: http://localhost:9000 (API server)
- ✅ Frontend: http://localhost:3000 (Web interface)
- ✅ Look for green connection indicators in the app

## 🎯 Key Features Overview

| Feature | Location | Purpose |
|---------|----------|---------|
| **API Builder** | Builder tab | Send HTTP requests, test APIs |
| **Mock Server** | Mock tab | Create fake APIs for testing |
| **WebSocket** | WebSocket tab | Test real-time connections |
| **Collection Runner** | Runner tab | Automate API test suites |
| **Team Collaboration** | Team tab | Work with team members |
| **Advanced Response** | Response tab | Compare and analyze responses |
| **Workspace Management** | Workspace tab | Organize projects |
| **Theme Manager** | Themes tab | Customize appearance |
| **📖 Documentation** | **Docs tab** | **Complete feature guide** |

## 🔧 First Steps After Setup

### 1. Test a Simple API Request
1. Go to **Builder** tab
2. Enter URL: `https://jsonplaceholder.typicode.com/posts/1`
3. Click **Send**
4. View the response

### 2. Create Your First Mock Server
1. Go to **Mock** tab
2. Click **New Mock**
3. Name: "Test API"
4. Add route: `GET /users/{{params.id}}`
5. Response: `{"id": "{{params.id}}", "name": "{{faker.name.fullName}}"}`
6. Test: `http://localhost:9000/mock/users/123`

### 3. Set Up Environment Variables
1. Click **Environments** (top right)
2. Create new environment: "Development"
3. Add variable: `baseUrl` = `https://api.example.com`
4. Use in requests: `{{baseUrl}}/endpoint`

## 📖 Need Help?

1. **📋 Complete Documentation**: Click the **"Docs"** tab in the app
2. **🔍 Quick Reference**: This guide covers basics
3. **❓ Troubleshooting**: Check console logs for errors
4. **🔧 Backend Issues**: Ensure port 9000 is available

## 🚨 Common Issues & Quick Fixes

| Problem | Solution |
|---------|----------|
| "Connection Failed" | Start backend server: `node server.js` |
| Port 9000 busy | Kill process: `taskkill /f /im node.exe` |
| Frontend won't start | Run: `npm install` then `npm start` |
| Mock server errors | Check route patterns and JSON format |
| CORS errors | Use the built-in proxy feature |

## ⚡ Power User Tips

- **Keyboard shortcuts**: Ctrl+Enter to send requests
- **Variables**: Use `{{variable}}` syntax for dynamic values
- **Templates**: Mock server supports faker.js templates
- **Collections**: Group related requests for organization
- **Scripts**: Add test validation in request scripts
- **Themes**: Switch between light/dark modes

## 🎓 Learning Path

1. ✅ **Basic Requests** (5 min) - Send GET/POST requests
2. ✅ **Collections** (10 min) - Organize your APIs
3. ✅ **Variables** (10 min) - Dynamic request values
4. ✅ **Mock Server** (15 min) - Create test APIs
5. ✅ **WebSocket** (10 min) - Real-time testing
6. ✅ **Team Features** (15 min) - Collaboration
7. ✅ **Advanced Analysis** (20 min) - Response comparison

**Total Learning Time: ~1.5 hours to master all features**

---

📖 **For detailed step-by-step instructions, visit the Documentation tab in the application!**