export default function ({ store, redirect, from }) {
  console.log(from);
  if (!store.getters.isAuth) {
    redirect("/login");
  }
}
