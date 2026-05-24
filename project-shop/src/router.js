import { computed, ref } from "vue";

export const routes = {
  "/": { title: "Home" },
  "/catalog": { title: "Catalog" },
  "/product": { title: "Product" },
  "/cart": { title: "Cart" },
  "/registration": { title: "Registration" },
};

const currentPath = ref(normalizePath(window.location.pathname));
const currentSearch = ref(window.location.search);

function normalizePath(path) {
  const cleanPath = path.replace(/\/+$/, "");
  return cleanPath || "/";
}

window.addEventListener("popstate", () => {
  currentPath.value = normalizePath(window.location.pathname);
  currentSearch.value = window.location.search;
});

export function navigate(path) {
  const url = new URL(path, window.location.origin);
  const nextPath = normalizePath(url.pathname);
  const nextSearch = url.search;

  if (nextPath === currentPath.value && nextSearch === currentSearch.value) {
    return;
  }

  window.history.pushState({}, "", `${nextPath}${nextSearch}`);
  currentPath.value = nextPath;
  currentSearch.value = nextSearch;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function useRouter() {
  const isKnownRoute = computed(() => Boolean(routes[currentPath.value]));
  const currentQuery = computed(() => new URLSearchParams(currentSearch.value));

  return {
    currentPath,
    currentQuery,
    currentSearch,
    isKnownRoute,
    navigate,
    routes,
  };
}
