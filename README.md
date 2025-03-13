# Job Vault

![Job Vault Logo](https://via.placeholder.com/150x150.png?text=Job+Vault)

A comprehensive job application tracking system built with Django and Next.js that helps job seekers organize their job search process.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

Job Vault is a full-stack web application designed to help job seekers track and manage their job applications efficiently. The system provides a centralized platform to store application details, track application status, set reminders for follow-ups, and manage multiple resume versions.

## Features

- **User Authentication**: Secure login and signup functionality
- **Dashboard**: Overview of application status and upcoming reminders
- **Job Application Management**:
  - Add, edit, and delete job applications
  - Track application status (Applied, Interview, Offer, Rejected, Follow-up)
  - Store company details, job descriptions, and contact information
- **Notes System**: Add notes to applications to track interactions and feedback
- **Resume Management**: Upload and manage multiple resume versions
- **Reminder System**: Set and manage reminders for follow-ups and interviews
- **Responsive Design**: Mobile-friendly interface for on-the-go access

## Tech Stack

### Frontend
- **Next.js**: React framework for server-side rendering and static site generation
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Reusable UI components
- **Axios**: HTTP client for API requests
- **React Query**: Data fetching and state management

### Backend
- **Django**: Python web framework
- **Django REST Framework**: Toolkit for building Web APIs
- **PostgreSQL**: Relational database
- **JWT Authentication**: Secure user authentication
- **Celery** (optional): Task queue for handling background jobs like email notifications

## Screenshots

![Landing Page](https://via.placeholder.com/800x450.png?text=Landing+Page)
![Dashboard](https://via.placeholder.com/800x450.png?text=Dashboard)
![Application Details](https://via.placeholder.com/800x450.png?text=Application+Details)

## Installation

### Prerequisites
- Node.js (v14 or later)
- Python (v3.8 or later)
- PostgreSQL

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/jenaide/Vaultex.git
   cd Vaultex/frontend