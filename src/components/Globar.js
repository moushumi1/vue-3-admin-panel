// import components
import adminNavbar from "@/components/composit/admin/navbar.vue";
import { App } from "vue";
// register components
export const registerComponents = (App) => {
  App.component("AdminNavbar", adminNavbar);
};
