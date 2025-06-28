const filterBtnStates = {
  idle: "filter-btn cursor-pointer rounded-md bg-zinc-200 px-4 py-1 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-300",
  active: "filter-btn cursor-pointer rounded-md bg-green-500 px-4 py-1 text-sm font-medium text-white transition-colors",
}
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function activate() {
    filterBtns.forEach((btn) => {
      btn.dataset.active = false;
      btn.className = filterBtnStates.idle;
    });

    btn.dataset.active = true;
    btn.className = filterBtnStates.active;
  });
})