/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import feature from 'assets/images/feature.png';
import emoji from 'assets/images/icons/emoji-2.png';

const data = [
  {
    title: 'Create your Thumbnails',
    contents: (
      <div>
        Leverage the power of the most cutting-edge Deep Learning Model - Stable Diffusion for generation of your Youtube Thumbnails . Thumbnails that are customized for you.
      </div>
    ),
  },
  {
    title: 'Eaisly get your Youtube Scripts',
    contents: (
      <div>
        Unlock the full potential of model like GPT-3 to get your Youtube video Scripts .And never run out of Content
      </div>
    ),
  },
  {
    title: `Amazing insights from Youtube Analytics`,
    contents: (
      <div>
        Unlock the secrets of your YouTube audience with our powerful analytics feature! Get a deeper understanding of your audience's demographics, engagement patterns, and viewing habits. Use our feature to track your video's performance over time, identify your most popular videos, and make data-driven decisions to optimize your content strategy. 
      </div>
    ),
  },
];

const ExcitingFeatures = () => {
  return (
    <Box as="section" variant="section.excitingFeatures">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.illustration}>
            <Image src={feature} alt="feature" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="Meet our exciting features that make you wow"
              description="Build an incredible Content Creation Machine that helps you automate your most of the work all-in-one platform."
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExcitingFeatures;

const styles = {
  contentWrapper: {
    // gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid', 'flex', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    flexDirection: ['column-reverse'],
  },
  illustration: {
    display: ['none', 'none', 'block'],
  },
  heading: {
    maxWidth: [295, 295, 495, 495, 410, 500],
    textAlign: ['center', null, null, null, 'left'],
    mb: [30],
    ml: ['auto', null, null, null, 0],
    h2: {
      fontSize: ['28px', '28px', '28px', '36px', '32px', '36px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', '24px', '24px', '30px', '30px', '30px', '100%'],
      top: ['4px', '8px'],
    },
  },
  accordionGroup: {
    maxWidth: ['none', null, null, 600, 'none'],
    '.accordion-item': {
      backgroundColor: '#F6F8FB',
      borderRadius: 10,
      p: [
        '20px 30px',
        '20px 30px',
        '30px 45px',
        '20px 25px 20px',
        '30px 45px',
        '20px 35px',
      ],
      '&.is-open': {
        backgroundColor: '#fff',
        boxShadow: '0px 9px 30px rgba(69, 88, 157, 0.08)',
      },
    },
  },
};
