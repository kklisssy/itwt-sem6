import { computed, ref } from "vue";

export const routes = {
  "/": { title: "Home" },
  "/catalog": { title: "Catalog" },
  "/product": { title: "Product" },
  "/cart": { title: "Cart" },
  "/registration": { title: "Registration" },
  "/login": { title: "Login" },
};

const currentPath = ref(normalizePath(window.location.pathname));

function normalizePath(path) {
  const cleanPath = path.replace(/\/+$/, "");
  return cleanPath || "/";
}

window.addEventListener("popstate", () => {
  currentPath.value = normalizePath(window.location.pathname);
});

export function navigate(path) {
  const nextPath = normalizePath(path);

  if (nextPath === currentPath.value) {
    return;
  }

  window.history.pushState({}, "", nextPath);
  currentPath.value = nextPath;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function useRouter() {
  const isKnownRoute = computed(() => Boolean(routes[currentPath.value]));

  return {
    currentPath,
    isKnownRoute,
    navigate,
    routes,
  };
}
