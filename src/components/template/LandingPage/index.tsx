import { Composition } from "atomic-layout";

const areas = `
  header 
  main 
  footer
`;

type LandingPageProps = {
  header: JSX.Element;
  main: JSX.Element;
  footer: JSX.Element;
};

export const LandingPage = ({ header, main, footer }: LandingPageProps) => (
  <Composition areas={areas} templatecols="1fr">
    {({ Header, Main, Footer }) => (
      <>
        <Header>{header}</Header>
        <Main>{main}</Main>
        <Footer>{footer}</Footer>
      </>
    )}
  </Composition>
);
