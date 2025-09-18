# PostWomen - Quick Start Guide

## 🚀 Getting Started

Your PostWomen application is ready! Here's how to start it:

### 1. Start the Backend Server
```bash
cd backend
npm start
```
The backend will run on `http://localhost:5000`

### 2. Start the Frontend Application
Open a new terminal and run:
```bash
cd frontend
npm start
```
The frontend will run on `http://localhost:3000`

## ✨ Features Implemented

### ✅ Core Features
- **Request Builder**: Send GET, POST, PUT, DELETE requests
- **Response Viewer**: View formatted responses with syntax highlighting
- **Collections Management**: Organize requests into collections
- **Request History**: Auto-saved request history
- **Authentication Support**: Bearer tokens, API keys, Basic auth

### ✅ Advanced Features Added
- **Environment Variables**: Manage different environments (dev, staging, prod)
  - Variable substitution with `{{variableName}}` syntax
  - Built-in variables: `{{timestamp}}`, `{{randomUUID}}`, etc.
  - Environment switching and management

- **Import/Export**: 
  - Export collections in native or Postman format
  - Import Postman collections
  - Import from cURL commands
  - Generate code snippets (JavaScript, Python, cURL, PHP, Java)

### 🔧 How to Use

#### Environment Variables
1. Click "Environments" in the header
2. Create or edit environments
3. Add variables like `baseUrl`, `apiKey`
4. Use in requests: `{{baseUrl}}/api/users`
5. Switch between environments easily

#### Import/Export
1. Click "Import/Export" in the header
2. **Export**: Download your collections
3. **Import**: Upload Postman collections or MVP exports
4. **cURL**: Paste cURL commands to create requests
5. **Code**: Generate code snippets for any request

#### Making Requests
1. Enter URL (with variables): `{{baseUrl}}/api/users`
2. Select HTTP method
3. Add headers: `Authorization: Bearer {{token}}`
4. Add request body for POST/PUT requests
5. Click "Send"

#### Collections
1. Create collections to organize requests
2. Save requests to collections
3. Load saved requests
4. View request history

## 🛠 Technical Architecture

### Backend (Node.js/Express)
- **Port**: 5000
- **Proxy Service**: Handles CORS and request forwarding
- **Authentication**: Supports various auth methods
- **Error Handling**: Comprehensive error responses

### Frontend (React)
- **Port**: 3000
- **State Management**: React hooks
- **Styling**: Tailwind CSS
- **Storage**: Browser localStorage
- **Variable Resolution**: Real-time variable substitution

### Services
- **API Service**: Handles HTTP requests to backend
- **Storage Service**: Manages local data persistence
- **Environment Service**: Variable management and resolution
- **Import/Export Service**: File operations and code generation

## 🎯 Usage Examples

### Example 1: Basic API Testing
```
URL: https://jsonplaceholder.typicode.com/posts/1
Method: GET
```

### Example 2: Using Environment Variables
```
Environment: Development
Variables:
  - baseUrl: https://api.example.com
  - apiKey: dev-key-123

Request:
  URL: {{baseUrl}}/users
  Headers: 
    - Authorization: Bearer {{apiKey}}
```

### Example 3: POST Request with JSON
```
URL: {{baseUrl}}/users
Method: POST
Headers:
  - Content-Type: application/json
Body:
{
  "name": "{{randomString}}",
  "email": "user@example.com",
  "timestamp": "{{timestamp}}"
}
```

## 🚨 Troubleshooting

### Port Conflicts
If ports 3000 or 5000 are in use:
- Backend: Change PORT in `backend/server.js`
- Frontend: Change proxy in `frontend/package.json`

### CORS Issues
The backend includes CORS middleware. If you still have issues:
- Check the backend is running
- Verify the proxy setting in frontend package.json

### Environment Variables Not Working
- Check variable names match exactly (case-sensitive)
- Ensure variables are enabled in environment manager
- Verify active environment is selected

## 🎨 Customization

### Adding New Authentication Methods
Edit `RequestBuilder.js` and add new auth types in the AuthTab component.

### Adding New Code Generators
Extend `importExportService.js` with new language generators.

### Custom Themes
Modify `tailwind.config.js` to add custom colors and themes.

## 📝 Next Steps

The MVP is complete and functional! Consider adding:
- Team collaboration features
- API documentation generation
- Mock server capabilities
- Advanced testing scripts
- Real-time request monitoring

Enjoy testing your APIs! 🎉