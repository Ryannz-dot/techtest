# Security Features - AI Niche Finder

## API Key Protection

The AI Niche Finder implements comprehensive security measures to protect your Google Gemini API key from theft or exposure.

### Built-in Security Features

#### 1. **Local Storage Only**
- API keys are stored exclusively in browser sessionStorage
- Keys never leave your browser (except for direct calls to Google's API)
- No backend server stores or has access to your API key
- Keys are automatically cleared when you close the browser tab

#### 2. **API Key Masking**
- API keys are masked in the UI (`AIza****1234`)
- Only first 4 and last 4 characters are visible
- Toggle visibility with eye icon for temporary viewing
- Masked keys shown in stored key preview

#### 3. **Auto-Clear Feature**
- Optional auto-clear removes API key after each analysis
- Recommended for shared computers
- Automatically clears key 1 second after successful analysis
- Prevents unauthorized use of your key

#### 4. **Visual Security Indicators**
- Shield icon shows when API key is configured
- Security warning banner on first use
- Clear visual feedback for all security actions
- Quick-access clear button (trash icon)

#### 5. **Error Message Sanitization**
- API keys are never logged to console
- Error messages automatically sanitize any API key exposure
- All logs show masked keys only (`AIza****1234`)
- Prevents accidental key leakage in error reports

#### 6. **Format Validation**
- Validates API key format before making requests
- Prevents malformed keys from being used
- Basic length and character validation
- Reduces error rates and exposure risks

### User Controls

#### Show/Hide API Key
```
Click the eye icon to temporarily reveal your full API key
Click again to hide it
```

#### Clear API Key
```
Click the trash icon to immediately remove your stored API key
No confirmation required for quick security response
```

#### Auto-Clear Toggle
```
Enable: ✓ Auto-clear API key after each analysis (recommended)
Automatically removes key after successful analysis
Ideal for shared computers or public use
```

### Security Best Practices

#### Recommended Actions

1. **Enable Auto-Clear**
   - Turn on auto-clear if using shared computers
   - Prevents unauthorized access to your API key
   - Minimal inconvenience for enhanced security

2. **Set Usage Limits**
   - Configure usage quotas in Google Cloud Console
   - Limit daily API calls to prevent abuse
   - Set up billing alerts for unusual activity

3. **Rotate Keys Regularly**
   - Generate new API keys monthly
   - Delete old keys after rotation
   - Track which keys are in use

4. **Monitor Usage**
   - Check Google Cloud Console for API usage
   - Review usage patterns for anomalies
   - Set up alerts for suspicious activity

5. **Never Share Keys**
   - Don't share your API key in screenshots
   - Don't commit keys to version control
   - Don't share keys via email or chat

#### What This App Does NOT Do

- ❌ Store API keys on any server
- ❌ Transmit keys to third parties
- ❌ Log keys in plain text
- ❌ Share keys across browser sessions
- ❌ Persist keys after browser close

#### What This App DOES Do

- ✅ Store keys in sessionStorage only
- ✅ Use keys exclusively for Google API calls
- ✅ Mask keys in all UI elements
- ✅ Sanitize keys in error messages
- ✅ Validate key format before use
- ✅ Provide auto-clear option

### Technical Implementation

#### Storage Mechanism
```javascript
// Keys stored in sessionStorage (cleared on tab close)
sessionStorage.setItem('niche-finder-api-key', apiKey);

// Never stored in:
// - localStorage (persists across sessions)
// - Cookies (can be sent to servers)
// - Backend databases
// - Log files
```

#### Masking Algorithm
```javascript
// Shows: AIza****1234 (first 4 + last 4 only)
function maskApiKey(key: string): string {
  if (!key || key.length < 8) return '****';
  return `${key.substring(0, 4)}${'*'.repeat(key.length - 8)}${key.substring(key.length - 4)}`;
}
```

#### Sanitization
```javascript
// All error messages sanitized
if (request.apiKey && errorMessage.includes(request.apiKey)) {
  errorMessage = errorMessage.replace(
    new RegExp(request.apiKey, 'g'),
    maskApiKey(request.apiKey)
  );
}
```

### Getting Your API Key Safely

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key immediately (shown only once)
5. Paste into AI Niche Finder
6. Enable auto-clear for added security

### Reporting Security Issues

If you discover a security vulnerability in the AI Niche Finder:

1. Do NOT post it publicly
2. Do NOT exploit the vulnerability
3. Report it responsibly to the maintainers
4. Allow time for a fix before disclosure

### Additional Resources

- [Google AI API Key Security](https://ai.google.dev/gemini-api/docs/api-key)
- [OWASP API Security](https://owasp.org/www-project-api-security/)
- [Browser Storage Security](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#security)

---

**Last Updated:** November 2025
**Version:** 1.0.0

*Your security is our priority. All features are designed to keep your API key safe and private.*
