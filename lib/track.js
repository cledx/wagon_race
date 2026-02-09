import Racer from "./racer.js";

export default class Lane {
  constructor(length, name, imagepath, key) {
    this.html = `
        <td class="active"></td>`;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length - 2; i++) {
      this.html += "<td></td>";
    }
    this.html += '<td class = "finish"></td>';
    this.racer = new Racer(name, imagepath, key);
  }
}
