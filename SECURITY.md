# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability, please:

1. **Do NOT** open a public issue
2. Email: security@avinshi.com
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We'll respond within 48 hours and keep you updated on the fix.

## Security Best Practices

### API Keys
- **Never** commit API keys to the repository
- Use `.env` files (excluded via `.gitignore`)
- Rotate keys regularly
- Use environment-specific keys (dev/staging/prod)

### Dependencies
- Keep dependencies updated
- Run `pip audit` regularly
- Review security advisories

### Access Control
- Use role-based access (RBAC)
- Implement least privilege principle
- Audit access logs regularly

## Disclosure Policy

- We aim to fix critical vulnerabilities within 7 days
- Medium severity within 30 days
- We'll credit researchers (with permission) in our security advisories

## Contact

For security concerns: security@avinshi.com  
For general support: hello@avinshi.com

---

Thank you for helping keep Avinshi secure!
