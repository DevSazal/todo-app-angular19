# Todo App

The project was developed on angular 19.0.1.


<br>

Let's clone the repository on your machine.

The application includes the following files and folders:

```bash
# architecture
# deep drive

todo-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── add-todo/
│   │   │   │   ├── add-todo.component.html
│   │   │   │   └── add-todo.component.ts
│   │   │   │
│   │   │   ├── todo-list/
│   │   │   │   ├── todo-list.component.html
│   │   │   │   ├── todo-list.component.css
│   │   │   │   └── todo-list.component.ts
│   │   │   │
│   │   ├── services/
│   │   │   └── todo.service.ts
│   │   │
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   │
│   ├── environments/
│   │   └── environment.ts
│   │
│   ├── styles.css
│   ├── index.html
│   └── main.ts
│
├── angular.json
├── package.json
├── README.md
└── tsconfig.json

```



## Installation and Configuration

Let's move to the cloned directory with your terminal.

To install, build, and start the application for the first time, run the following commands:

```bash
npm install
```

<br>

Let's configure the backend APIs server in `src/environments/environment.ts` file:

```typescript

export const environment = {
    backendURL: '<BACKEND_REST_API_URL_HERE_PLEASE>' // Backend APIs Endpoint
  };

```

<br>

Already done? Cool! You are almost ready to enjoy the app. ⛳️

### Build & Run:

To start a local development server, run:

```bash
ng serve

```

Once the server is running, open your browser and navigate to `http://localhost:4200/`


## 🧑‍💻 Stay in touch

- Author - [Sazal Ahamed](https://sazal.vercel.app)
- Linkedin - [Profie](https://www.linkedin.com/in/sazal-ahamed/)
- GitHub - [DevSazal](https://github.com/DevSazal)

## License

[MIT licensed](LICENSE) © 2024
