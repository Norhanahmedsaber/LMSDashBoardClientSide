# Quiz Dashboard Frontend

Quiz Dashboard Frontend is a React application for managing quizzes and announcements for students.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the frontend.

```bash
git clone https://github.com/Norhanahmedsaber/LMSDashBoardClientSide.git
cd LMSDashBoardClientSide
npm install
```

## Configuration

Create a .env file in the root directory with the following content:

## .env

```bash
REACT_APP_BASE_URL=http://localhost:8000
```

## Usage

```bash
npm start
```

# Features

- User Authentication
- Quiz Management (CRUD operations)
- Announcements Display
- Error Handling
- Responsive UI

## Running Tests

To run the frontend tests using Jest:

```bash
npm test
```

## Project Structure

```bash
LMSDashBoardClientSide/
├── public/
├── src/
│   ├── components/    # React components (Quiz, Announcement, etc.)
│   ├── hooks/
│   ├── redux/         # Redux slices and store configuration
│   ├── utils/
│   └── __tests__/     # Unit tests for components
├── .env
└── package.json
```

## Backend Repository

For the server-side of the application, please visit the [LMSDashBoardServerSide](https://github.com/Norhanahmedsaber/LMSDashBoardServerSide) repository.
