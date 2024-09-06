// @ts-check
/**
 * @type {import('dockview').DockviewConfig}
 */

export default {
  environment: "node",
  container: {
    image: "node:22-alpine",
  },
  serve: {
    ports: [5173],
    command: "npm run preview",
  },
};
