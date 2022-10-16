import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  const {
    allContentfulProject: { nodes },
  } = useStaticQuery(graphql`
    {
      allContentfulProject {
        nodes {
          title
          description {
            description
          }
          projectImage {
            gatsbyImage(width: 100)
          }
        }
      }
    }
  `);

  return (
    <main>
      <h1>{nodes[0].title}</h1>
      <p>{nodes[0].description.description}</p>
      <GatsbyImage alt={''} image={nodes[0].projectImage.gatsbyImage} />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
