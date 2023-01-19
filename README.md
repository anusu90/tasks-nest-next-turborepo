### APP

#### What is included

- `apps/task-web` is the main web app for the repo
- `apps/api/task-api` is the main api for the repo
- `./packages/ui` is the design system for the repo

##### FrontEnd

- NextJS based app
  - CSR page with auth protection
  - SSR page with auth protection
  - Custom hooks to make api calls
  - Public/protected api calls
- Tailwindcss for styling
- NextAuth for authentication on the FE
- React Query for making API calls

##### BackEnd

- NestJS based app
- Custom pipe as well as a custom guard is used
- MongoDB as database
