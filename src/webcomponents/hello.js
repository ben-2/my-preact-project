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

customElements.define("x-example", HelloComp);