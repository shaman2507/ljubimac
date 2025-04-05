import Hero from "@/components/Hero";

const i18nNamespaces = ['translation'];

export default async function Home({ params: { lng } }) {
  return (
    <>
      <Hero lng={lng} />
    </>
  );
};