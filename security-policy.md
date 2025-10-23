# Security Policy
## Purpose
This policy establishes security standards for protecting the website, user data, and connected digital infrastructure against unauthorized access, data breaches, and loss of service.​

## Scope
Applies to all employees, contractors, and vendors with access to the website, backend systems, or hosting environment. It encompasses the production website, admin dashboards, APIs, and integrated third-party services.​

## Access Control
Every user must have a unique login; shared admin accounts are prohibited.​

Use multi-factor authentication (MFA) for admin and hosting control panels.

Limit access following “least privilege” principles.

Immediately revoke access for terminated employees or expired contractors.​

## Data Protection
Encrypt all sensitive data in transit (HTTPS/TLS 1.3) and at rest (AES-256).​

Store credentials using strong hashing (e.g., bcrypt).

Avoid storing full credit card or personal identification numbers.

Use secure APIs or third-party payment processors for transactions.​

## Secure Development Practices
Follow OWASP ASVS and OWASP Top 10 guidelines against vulnerabilities like SQL injection, cross-site scripting (XSS), and insecure deserialization.​

Conduct security code reviews and use dependency scanning tools.

Validate and sanitize user inputs server-side.

Disable autocomplete for sensitive form fields.​

## System and Network Security
Employ a Web Application Firewall (WAF) and Intrusion Prevention System (IPS) on internet-facing servers.​

Maintain regular operating system and framework updates.

Conduct quarterly vulnerability scans and annual penetration testing.​

Use secure DNS and monitor for spoofing or DNS hijacking.​

## Password Management
Require complex passwords (minimum 12 characters, including symbols and numbers).​

Enforce password changes every 90 days.

Disable accounts after 5 failed login attempts.

Store passwords hashed and salted with bcrypt or Argon2.​

## Incident Response and Reporting
Employees must report suspected phishing attempts, malware, or unauthorized activities within 24 hours.

Establish a clear escalation path for handling incidents, including notifying affected users if data breaches occur.​

Document all incidents and corrective actions.

## Employee Cybersecurity Training
Conduct onboarding and annual refresher training on cybersecurity awareness, phishing, and password hygiene.​

Require simulated phishing tests quarterly.

## Third-Party and Plugin Security
Only install plugins and extensions from trusted, verified sources.

Keep all plugins, libraries, and dependencies up to date.

Review third-party services for compliance with your data policies.​

## Backups and Disaster Recovery
Perform automated daily backups and store them securely (e.g., offsite or cloud-based with encryption).​

Test backups quarterly for integrity and recovery reliability.

Maintain a documented disaster recovery plan.

## Policy Review and Updates
Review and update this policy at least annually or after major changes in website infrastructure.

Document revisions and notify relevant personnel.