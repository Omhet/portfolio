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
                fluid(maxWidth: 64) {
                  ...GatsbyImageSharpFluid
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

      const imageFluid = image.node.childImageSharp.fluid;
      return (
        <Img
          imgStyle={{ objectFit: 'contain' }}
          className={className}
          alt={alt}
          fluid={imageFluid}
        />
      );
    }}
  />
);

SkillImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default SkillImg;
