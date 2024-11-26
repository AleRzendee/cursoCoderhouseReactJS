import { Header, Logo, NavBar, LedLine } from "./components/navBar.js";
import "./styles.css"
export function App() {

	return (
		<>
		<Header>
			<div>
				<Logo src="./src/images/vusxlogo2.png" alt="Vusx Logo"/>
			</div>
			<NavBar>
				<ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
					<li><a href="#">Login</a></li>
                </ul>
			</NavBar>
		</Header>

		<LedLine className="firstLine gradientLine"></LedLine>	
		</>
	)
}

