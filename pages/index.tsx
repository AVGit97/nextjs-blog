import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Link from 'next/link';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = await getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }:
    {
        allPostsData: {
            date: string;
            title: string;
            id: string;
        }[]
    }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={utilStyles.headingMd}>
                <p>Hello, I'm Angelos. I'm a software engineer. You can contact me on <a target='_blank' href='https://www.linkedin.com/in/angelos-vanakaris-438584219/'>LinkedIn</a>.</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a target='_blank' href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map((postData) => (
                        <li className={utilStyles.listItem} key={postData.id}>
                            <Link href={`/posts/${postData.id}`}>{postData.title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={postData.date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
