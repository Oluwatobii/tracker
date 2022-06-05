# Tracker

The Bug/Project Tracker application visualizes projects and bugs that are related to these projects. The application enables you to log a new bug from the frontend.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### For Development

First, run the development server:

```bash
npm run dev
```

Open [https://dev-frontend.tbello.dev](https://dev-frontend.tbello.dev) with your browser to see the result.

`API routes` can be accessed on [https://dev-backend.tbello.dev/api/]([https://dev-backend.tbello.dev/api/).

### For Production

First, run the Production server:

```bash
npm run build
```

then

```bash
npm run start
```

Open [https://tracker.tbello.dev](https://tracker.tbello.dev) with your browser to see the result.

`API routes` can be accessed on [https://tracker-api.tbello.dev/api/]([https://dev-backend.tbello.dev/api/).

## Some features to include are

1. Admin privileges
2. Authentication
3. Create, Edit, Delete New Projects
4. Create, Edit, Delete New Tasks (i.e; Bug/Feature)
5. Change Status of Tasks (Bug/Feature)
6. Users being able to view certain projects
7. Ability to assign bug/feature to certain user/users?
8. Ability for user to determine: Tasks Type (i.e; Feature/Bug), Tasks (i.e; Feature/Bug) Priority, Tasks (i.e; Feature/Bug) Description, Tasks (i.e; Feature/Bug) Status.
9. Update state/status of Task (bug/feature) → i.e: ongoing, planning, inprogress, code-review, QAT, UAT, etc... (Make this list be something a user can customize themselves)
10. Emails to send to users to confirm that certain feature/bugs has been assigned to them and also with information about said feature/bugs.
11. Ability to attach files/pictures/documents.

## Dependencies

1. Axios
2. react-query
3. React icons
4. DOMPurify
5. Chakra UI
6. Google Fonts > IBM Plex Sans
7. jwt-decode
8. js-cookie
