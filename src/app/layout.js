import "./globals.css";
import 'animate.css';

// Google Fonts
import { openSans } from '@/utils/fonts.jsx';

export const metadata = {
	title: "Tahaluf.ai",
	description: "...",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={ `${openSans.variable}` }>
			<body>{children}</body>
		</html>
	);
}
