import AppContent from "./AppContent";

const routes = [
    {
      path: "/",
      component: AppContent
    },
    {
      path: "/mucho",
      component: AppContent,
      routes: [
        {
          path: "/mucho/mucho",
          component: AppContent
        }
      ]
    }
  ];

  export default routes;