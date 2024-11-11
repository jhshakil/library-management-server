<div align="center">
  <h1>Project Overview</h1>
</div>

---

# Project Name

Library Management System

## Live Url

`https://library-management-system-pi-pearl.vercel.app/`

## Features

- Create Book
- Create Member
- Borrow Book
- Return Book
- Show Overdue List

## Technology Stack

- Node.js
- Express.js
- Prisma
- Postgresql
- Typescript.

## Issue

- Maintain total Book copies and available copies
- Delete Member and Book with Borrow Record

## Installation Guideline

### Prerequisites

- Need to install Node.js

### Installation Steps

1. yarn
2. yarn prisma migrate dev
3. yarn dev
4. yarn build (for build)

### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add necessary configuration variables in the `.env` file (example in `.env.example` file).
   Example:
   ```bash
   DATABASE_URL=
   VERCEL_CACHE="0"
   ```
