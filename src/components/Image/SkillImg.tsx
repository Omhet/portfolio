import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const SkillImg = ({ filename, alt, className }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 64) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));
      
      if (!image) return null;

      const imageFixed = image.node.childImageSharp.fixed;
      return <Img imgStyle={{ objectFit: 'contain' }} style={{ height: '55px'}} className={className} alt={alt} fixed={imageFixed} />;
    }}
  />
);

SkillImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string
};

export default SkillImg;
