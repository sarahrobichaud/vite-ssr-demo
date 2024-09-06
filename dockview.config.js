// @ts-check
/**
 * @type {import('dockview').DockviewConfig}
 */

export default {
  environment: "node",
  container: {
    image: "node:22-alpine",
  },
  dev: {
    command: "npm run dev",
    ports: [5173],
  },
  build: {
    command: "npm run build",
  },
  serve: {
    command: "npm run preview",
    ports: [5173],
  },
};
