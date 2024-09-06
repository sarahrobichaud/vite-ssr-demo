// @ts-check
/**
 * @type {import('dockview').DockviewConfig}
 */

export default {
  environment: "node",
  container: {
    image: "node:22-alpine",
  },
  ports: [5173],
  serve: {
    command: "npm run preview",
  },
};
