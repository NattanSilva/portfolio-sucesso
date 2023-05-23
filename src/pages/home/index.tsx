// Styles
import { Button } from '@/styles/Buttons';
import { Container, Flex } from '@/styles/Global';
import { Text } from '@/styles/Text';

// Components
import { Contacts } from '@/components/Contacts';
import { Project } from '@/components/Project';
import { Stack } from '@/components/Stack';

// Data
import { stackData } from '@/utils/stackData';
import { userData } from '@/utils/userData';

import { FaGithub } from 'react-icons/fa';

// Page Style
import {
  Header,
  HeaderButtonsArea,
  HeaderContent,
  ProjectAreaWrapperColumns,
  ProjectsArea,
  ProjectsAreaContent,
  ProjectsAreaSocialMediaMessage,
  StackCards,
  UserImage,
} from './style';

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/portfolio-sucesso`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={'48px'}
                height={'48px'}
              />
              <Text color="grey4">Hello, my name is {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              I{' '}
              <Text as="span" type="heading1" color="brand1">
                love
              </Text>{' '}
              creating and{' '}
              <Text as="span" type="heading1" color="brand1">
                developing
              </Text>{' '}
              projects
            </Text>
            <Text type="body1" color="grey2">
              I'm a Full Stack Web Developer, currently I develop responsive web
              applications using tools like HTML, CSS, JavaScript, ReactJS,
              Styled Components, Tailwindcss, Sass, NodeJS and many others. I
              have carried out more than 40 projects for the finance and
              accounting areas, such as a cost and profit management system,
              sales through e-commerce, business with a system for registering
              companies, employees and administrators, social networks, clones
              of large websites and much more. Today I am open and available for
              opportunities as a Web Developer.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                See my portfolio source code
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ '&:hover': { color: '$grey1' } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                My projects
              </Text>
              <Text as="p" type="body1" color="grey2">
                Some of my{' '}
                <Text as="span" color="brand5">
                  side projects
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
