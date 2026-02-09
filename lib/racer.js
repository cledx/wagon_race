export default class Racer {
  constructor(name, imagepath, key) {
    this.name = name;
    this.html = `<img src="${imagepath}">"`;
    this.key = key;
  }

  // eslint-disable-next-line consistent-return
  move() {
    if (!this.td.classList.contains("finish")) {
      this.td.nextElementSibling.innerHTML = this.html;
      this.td.classList.remove("active");
      this.td.innerHTML = "";
      this.td = this.td.nextElementSibling;
      this.td.classList.add("active");
      if (this.td.nextElementSibling === null) {
        return false;
      }
      return true;
    }
  }
}
