import { useRouter } from "next/router";
import { useEditState } from "tinacms/dist/edit-state";
import React from 'react'
import styled, { x, css, up, down, th, useUp } from '@xstyled/styled-components'
import { ScreenContainer } from '../../components/ScreenContainer'
import { Button } from "../../components";
import PageLayout from '../../components/PageLayout'
import Article from "../../components/Article";
import {
    HeroSection,
    Hero,
    HeroBody,
    HeroTitle,
    HeroTeaser,
    HeroActionList,
    HeroAction,
  } from "../../components/Hero";

const GoToEditPage = () => {
    const Container = styled.div`
    z-index: 0;
    position: relative;
  
    ${up(
      'md',
      css`
        display: grid;
        grid-template-columns: 288px minmax(0, 1fr);
        grid-gap: ${th.space(5)};
  
        .sidebar-container {
          display: none;
        }
      `,
    )}
  
    ${up(
      'xl',
      css`
        grid-template-columns: 288px minmax(0, 1fr) 288px;
  
        .sidebar-container {
          display: none;
        }
      `,
    )}
  ` 



  const { edit, setEdit } = useEditState();
  const router = useRouter();
        return(
  <PageLayout>
      <Container style={{display: "flex", justifyContent:"center"}}>
      <Article px="0">
      <HeroSection>
      <ScreenContainer>
        <Hero backgroundImageUrl={"https://res.cloudinary.com/tina-demos/image/upload/v1634760332/flyingTina_dfh69x.png"}>
          <HeroBody>
            <HeroTitle>{"Welcome to the Admin Page"}</HeroTitle>
            {!edit && (<HeroTeaser>{"Please login with Tina Cloud to be able to edit your site."}</HeroTeaser>)}
            {edit && (<HeroTeaser>{"OK, now that your are logged in, you can go to the homepage and begin to make content changes."}</HeroTeaser>)}
            <HeroActionList>
              <HeroAction>
                {edit &&(
                    <>
                 <Button
                 style={{margin: "20px", padding:"10px"}}
                  variant="primary"
                  onClick={() => {
                    setEdit(!edit);
                  }}
                >
                  Login with
                  Tina Cloud
                </Button>
                <Button
                 style={{margin: "20px", padding:"10px"}}
                  variant="neutral"
                  onClick={() => {
                    router.push("/");
                  }}
                > Go to the
                  home page
                </Button>
                <Button
                style={{margin: "20px", padding:"10px"}}
                  variant="danger"
                  onClick={() => {
                    router.back();
                  }}
                >
                   Go Back
                </Button>
                </>)
                }
                {!edit &&(
                    <>
                 <Button
                 style={{margin: "20px", padding:"10px"}}
                  variant="primary"
                  onClick={() => {
                    setEdit(!edit);
                  }}
                >
                  Login with
                  Tina Cloud
                </Button>
                <Button
                 style={{margin: "20px", padding:"10px"}}
                  variant="neutral"
                  onClick={() => {
                    router.push("/");
                  }}
                > Go to the
                  home page
                </Button>
                <Button
                style={{margin: "20px", padding:"10px"}}
                  variant="danger"
                  onClick={() => {
                    router.back();
                  }}
                >
                   Go Back
                </Button>
                </>)
                }
              </HeroAction>
            </HeroActionList>
          </HeroBody>
        </Hero>
      </ScreenContainer>
    </HeroSection>
      </Article>
      </Container>
  </PageLayout>)
};

export default GoToEditPage;