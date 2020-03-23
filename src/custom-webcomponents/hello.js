import { withUpdate, withRenderer } from "skatejs";

const Component = withUpdate(withRenderer(HTMLElement));

export class HelloComp extends Component {
	render() {
		return `
      <div>
        Hello World!
      </div>
    `;
	}
}

export class ElementPreact extends Component {
  static props = {
    name: String
  };
  name = 'World';
  render() {
    return `<span>Hello, ${this.name}! From <slot></slot></span>`;
  }
}
