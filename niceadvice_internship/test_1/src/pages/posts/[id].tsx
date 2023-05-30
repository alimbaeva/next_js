import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import { Prop } from '..';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: {params: {title: string; id: string; date: string}}) {
    const postData = getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }

  export default function Post({ postData }: {postData: {title: string; id: string; date: string}}) {
    return (
      <Layout home>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    );
  }