import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hi there! I'm Bastien, and I work as a web developper. Currently
					learning Next.js with this app!
				</p>
				<p>
					Here is{" "}
					<Link href="/posts/first-post">
						<a>the first page</a>
					</Link>
				</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{" "}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
		</Layout>
	);
}
