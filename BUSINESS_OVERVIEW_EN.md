# 🏢 HRX HR Management System - Business & Operational Overview

**HRX** is an integrated cloud-based Human Resources Management System (HRMS) designed to help companies of all sizes automate and streamline their employee lifecycle processes—from recruitment to offboarding. The system is designed to improve operational efficiency, reduce administrative overhead, and eliminate payroll errors.

---

## 🌟 Business Value & Purpose (Value Proposition)

Managing human capital manually presents significant challenges, including lost productivity, human error (such as payroll discrepancies), and fragmented communication. HRX addresses these issues through:

1. **Centralized Data**: Storing all employee profiles, contracts, and documents securely in a single workspace.
2. **Time & Labor Savings**: Automating repetitive operational workflows like time-off requests and monthly payroll generation.
3. **Analytics-Driven Decisions**: Providing real-time, interactive dashboards that empower executives to make data-driven strategic decisions.
4. **Seamless Integration (ERP Integration)**: Connecting directly to Odoo 19 ERP via JSON-RPC to synchronize client partner records instantly.

---

## 👥 Target Audience & User Personas

The system features a multi-tiered role hierarchy tailored to serve three primary stakeholders:

### 1. Platform Operator (Super Admin)
The platform owner or SaaS provider who manages overall operations:
- Monitors growth metrics (Total, Active, Pending, and Suspended companies) via a dedicated KPI dashboard.
- Modifies client company settings and subscription levels.
- Manages operational status by manually activating or suspending company access.

### 2. Company Administrator (Company Admin)
The HR manager or business owner who controls organization-specific data:
- Sets up the company account, selects the appropriate subscription plan, and manages payments.
- Manages employee profiles, digital contracts, and job roles.
- Governs and approves monthly payroll runs, including deductions, bonuses, and tax calculations.
- Overviews daily attendance logs and approves/rejects leave requests.

### 3. Employee
The end user who utilizes the self-service portal to:
- Access their profile details, job description, and contract details.
- Log daily attendance (clock-in/clock-out).
- Submit leave and time-off requests, and track their remaining annual balance.
- Download pay slips and review performance appraisals.

---

## 💰 Business Model & Subscription Plans

HRX operates on a Software-as-a-Service (SaaS) subscription model. It offers three distinct packages designed to scale alongside growing organizations:

| Plan | Target Audience | Key Features | Max Employees |
| :--- | :--- | :--- | :--- |
| **Basic Plan** | Startups & small teams | Core employee directory, basic attendance tracking (clock-in/out), and simple time-off requests. | Up to 20 employees |
| **Professional Plan** | Medium-sized, growing companies | Includes all Basic features + recruitment portal, performance appraisal reviews, and standard analytics reports. | Up to 100 employees |
| **Enterprise Plan** | Corporations & large enterprises | Unlimitied features, priority support, advanced payroll engine, custom integrations, and full Odoo ERP integration. | Unlimited |

---

## 🔄 Core Business Workflows & Automation

HRX automates operations to minimize manual administrative interventions:

### A. Company Onboarding & Billing
1. A new company registers, inputs corporate data, and selects a tier.
2. The company pays for the chosen plan.
3. Upon payment verification, the system automatically activates the company status to **Active** and provisions their workspace.

### B. Automated Subscription Enforcement (Cron Engine)
- The system runs a daily background check at midnight.
- Any active subscription past its `endDate` is updated to **Expired**, and the associated company profile status is changed to **Suspended**.
- Access is restricted until a renewal payment is processed.

### C. Odoo ERP Sync
- Eliminates double-entry of data. The system syncs customer and partner information directly from Odoo 19 databases, saving administrative time and avoiding database duplication.

---

## 🧩 Core Business Modules

The system is organized into modular functional units:

### 1. Recruitment & Talent Acquisition
Manages workforce planning, job listings, resume classification, candidate interview stages, and job offer letters.

### 2. Attendance & Time-Off Management
Tracks daily attendance, check-ins, check-outs, and late arrivals. Features an automated time-off calculator that keeps track of remaining leave balances.

### 3. Performance & Appraisal System
Enables managers to set employee goals, evaluate performance, track KPIs, and facilitate promotion and training recommendations.

### 4. Payroll & Compensation
Ensures accurate, on-time payments by calculating salaries, taxes, social security contributions, and deductions based on attendance and performance inputs.

### 5. Reports & Analytics
Provides interactive BI reports tracking turnover rates, absenteeism, monthly payroll cost trends, and employee satisfaction metrics.
