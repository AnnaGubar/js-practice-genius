class CircleBox {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = "none";
  }

  show() {
    this.$el.style.display = "block";
  }
}

class CircleItem extends CircleBox {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = options.size + "px";
    this.$el.style.height = options.size + "px";
    this.$el.style.borderRadius = "50%";
    this.$el.style.background = options.color;
  }
}

const CircleRed = new CircleItem({
  selector: "#circleRed",
  color: "red",
  size: 50,
});

const CircleGreen = new CircleItem({
  selector: "#circleGreen",
  color: "green",
  size: 80,
});

const CircleBlack = new CircleItem({
  selector: "#circleBlack",
  color: "black",
  size: 30,
});

function Car(name, color) {
  this.name = name;
  this.color = color;
}
